import classes from './PageContent.module.css';

function PageContent({ title, children }) {
  return (
    <div className={classes.content}>
      {children}
    </div>
  );
}

export default PageContent;
