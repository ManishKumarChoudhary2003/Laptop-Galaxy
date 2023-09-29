import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import MainHeader from "../components/Common/Header/MainHeader";
import Footer from "../components/Common/Footer/Footer";
import PageContent from "../components/Common/PageContent/PageContent";

const LayoutPage = () => {
  return (
    <Fragment>
      <main>
        <MainHeader />
        <PageContent>
          <Outlet />
          <Footer />
        </PageContent>
      </main>
    </Fragment>
  );
};

export default LayoutPage;
