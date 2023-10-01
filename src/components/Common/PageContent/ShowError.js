import PageContent from "./PageContent";
import classes from "./ShowError.module.css";

function ShowError({ children }) {
  return (
    <PageContent>
      <div className={`${classes.centeredContent}`}>
        {children}
      </div>
    </PageContent>
  );
}

export default ShowError;
