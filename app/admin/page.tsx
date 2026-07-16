import type { Metadata } from "next";
import { AdminDashboard } from "./AdminDashboard";

// Hidden route: not linked anywhere on the site, and never indexed.
export const metadata: Metadata = {
  title: "Admin",
  robots: { index: false, follow: false },
};

export default function AdminPage() {
  return <AdminDashboard />;
}
