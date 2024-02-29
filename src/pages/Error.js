import { useRouteError } from "react-router-dom";

import PageContent from "../components/Common/PageContent/PageContent";
import Navbar from "../components/Common/Header/Navbar/Navbar";

function ErrorPage() {
  const error = useRouteError();

  let title = "An error occurred!";
  let message = "Something went wrong!";

  if (error.status === 500) {
    message = error.data.message;
  }

  if (error.status === 404) {
    title = "Not found!";
    message = "Could not find resource or page.";
  }

  return (
    <>
      <Navbar />
      <PageContent title={title}>
        <p
          style={{ marginTop: "150px", fontSize: "5rem", textAlign: "center" }}
        >
          {message}
        </p>
      </PageContent>
    </>
  );
}

export default ErrorPage;
