
import AdminHomePage from "./AdminHome/page";
import AdminNav from "./AdminNav/page";
import TopNav from "./AdminNav/TopNav/TopNav";

export default function AdminPage() {
  return (
    <>
    <TopNav/>
      <AdminNav/>
      <AdminHomePage/>
    </>
  );
}
