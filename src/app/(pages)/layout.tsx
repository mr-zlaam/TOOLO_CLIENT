// import Header from "@/globalComponents/header";
import Header from "@/globalComponents/header";
import React from "react";

export default function PageLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <React.Fragment>
      <Header />
      {children}
    </React.Fragment>
  );
}
