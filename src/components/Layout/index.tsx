import React, { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout = (props: LayoutProps) => {
  const { children } = props;
  return (
    <div>
      <Header pageName="layout" />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
