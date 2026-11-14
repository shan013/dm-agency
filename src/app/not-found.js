
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found-page">
      <div className="site-container">
        <div className="not-found-content">
          <span className="not-found-code">404</span>

          <h1>Oops! Page Not Found</h1>

          <p>
            The page you're looking for may have been moved,
            deleted or doesn't exist.
          </p>

          <Link href="/" className="not-found-button">
            <span>Back to Home</span>
            <i className="fa-solid fa-arrow-right-long"></i>
          </Link>
        </div>
      </div>
    </main>
  );
}
