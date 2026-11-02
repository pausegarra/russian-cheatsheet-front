import { Link } from "react-router-dom";
import { Layout } from "../components/layout.tsx";
export function NotFound() {
  return (
    <Layout>
      <div className="space-y-6 py-16">
        <p className="eyebrow">404 · Page not found</p>
        <h1 className="page-title">Lost in translation?</h1>
        <p className="text-muted">
          This page does not exist. Your next word is closer than you think.
        </p>
        <Link className="button button-primary" to="/">
          Back to dictionary
        </Link>
      </div>
    </Layout>
  );
}
