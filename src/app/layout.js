
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./globals.scss";

import CursorFollower from "@/components/CursorFollower";
import SmoothScroll from "@/components/SmoothScroll";

export const metadata = {
  title: {
    default: "DM Agency | Digital Marketing & SEO",
    template: "%s | DM Agency",
  },

  description:
    "DM Agency helps businesses grow online through SEO, digital marketing, website design and performance-driven strategies.",

  applicationName: "DM Agency",

  openGraph: {
    type: "website",
    siteName: "DM Agency",
    title: "DM Agency | Digital Marketing & SEO",
    description:
      "Helping businesses grow online through SEO, digital marketing and website solutions.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">

      <body>
        <CursorFollower />
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
