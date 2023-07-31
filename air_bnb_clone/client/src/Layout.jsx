import Header from "./components/Header";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <div className="py-4 px-8 flex flex-col min-h-screen">
        {/* p-4:change padding */}
        <Header />
        <Outlet />
      </div>
    </div>
  );
}
