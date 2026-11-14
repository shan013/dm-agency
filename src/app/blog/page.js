
import Header from "@/components/common/Header";
import InnerPageBanner from "@/components/common/InnerPageBanner";
import InnerPageFooter from "@/components/common/InnerPageFooter";
import PageAnimations from "@/components/common/PageAnimations";
import BlogGrid from "@/components/blog/BlogGrid";

export const metadata = {
  title: "Digital Marketing Blog",
  description:
    "Explore the DM Agency blog for insights on SEO, digital marketing, website optimisation and strategies to grow your business online.",
};

export default function BlogPage() {
  return (
    <main>
      <PageAnimations>
        <div className="inner-header-and-banner">
          <Header />
          <InnerPageBanner title="Blog" breadcrumb="Blog" />
        </div>

        <BlogGrid />
      </PageAnimations>

      <InnerPageFooter />
    </main>
  );
}
