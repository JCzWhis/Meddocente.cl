import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
  currentPage?: string;
}

const Layout = ({ children, currentPage }: LayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <Header currentPage={currentPage} />
      <main className="flex-1 w-full mx-auto">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
