
import { notFound } from "next/navigation";

import Header from "@/components/common/Header";
import InnerPageBanner from "@/components/common/InnerPageBanner";
import InnerPageFooter from "@/components/common/InnerPageFooter";
import BlogDetail from "@/components/blog/BlogDetail";

import { blogPosts } from "@/data/blog";

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return {
      title: "Article Not Found | DM Agency",
    };
  }

  const description = (
    post.introduction ||
    post.paragraphs?.[0] ||
    `Read ${post.title} on the DM Agency blog for digital marketing insights and updates.`
  ).replace(/<[^>]*>/g, "").slice(0, 160);

  return {
    title: `${post.title} | DM Agency`,
    description,
    openGraph: {
      title: `${post.title} | DM Agency`,
      description,
      type: "article",
      ...(post.image && {
        images: [post.image],
      }),
    },
  };
}

export default async function BlogSinglePage({ params }) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main>
      <div className="inner-header-and-banner">
        <Header />

        <InnerPageBanner
          title={post.title}
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Blog", href: "/blog" },
            { label: post.title },
          ]}
        />
      </div>

      <BlogDetail post={post} />

      <InnerPageFooter />
    </main>
  );
}
