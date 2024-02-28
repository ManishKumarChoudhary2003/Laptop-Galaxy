import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import MainHeader from "../components/Common/Header/MainHeader";
import Footer from "../components/Common/Footer/Footer";
import PageContent from "../components/Common/PageContent/PageContent";
import Navbar from "../components/Common/Header/Navbar/Navbar";

const LayoutPage = () => {
  return (
    <Fragment>
      <main>
        {/* <MainHeader /> */}
        <Navbar />
        <PageContent>
          <Outlet />
        </PageContent>
        <Footer />
      </main>
    </Fragment>
  );
};

export default LayoutPage;
