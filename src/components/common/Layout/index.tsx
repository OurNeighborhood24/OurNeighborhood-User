import { ReactNode } from "react";
import { PageContainer } from "./style";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return <PageContainer>{children}</PageContainer>;
};

export default Layout;
