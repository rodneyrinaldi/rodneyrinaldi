import React from "react";

import Footer from "../footer";
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

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default Layout;
