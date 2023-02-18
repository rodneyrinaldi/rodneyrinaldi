import React from "react";
import Header from "../header";
import Main from "../main";

function Layout({ children }) {
  return (
    <>
      <header>
        <Header />
      </header>

      <main>
        <Main>{children}</Main>
      </main>
    </>
  );
}

export default Layout;
