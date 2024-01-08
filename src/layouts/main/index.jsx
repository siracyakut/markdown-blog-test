import { Outlet, ScrollRestoration } from "react-router-dom";
import Header from "./header";

export default function MainLayout() {
  return (
    <div className="flex flex-col h-full max-w-6xl mx-auto p-4 xl:px-0">
      <ScrollRestoration />
      <Header />
      <Outlet />
    </div>
  );
}
