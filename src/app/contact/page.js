
import Header from "@/components/common/Header";
import InnerPageBanner from "@/components/common/InnerPageBanner";
import InnerPageFooter from "@/components/common/InnerPageFooter";
import PageAnimations from "@/components/common/PageAnimations";
import ContactSections from "@/components/contact/ContactSections";

export const metadata = {
  title: "Contact Us",
  description:
    "Get in touch with DM Agency to discuss SEO, digital marketing and website solutions for your business.",
};

export default function ContactPage() {
  return (
    <main>
      <PageAnimations>
        <div className="inner-header-and-banner">
          <Header />
          <InnerPageBanner title="Contact us" breadcrumb="Contact Us" />
        </div>

        <ContactSections />
      </PageAnimations>

      <InnerPageFooter />
    </main>
  );
}
