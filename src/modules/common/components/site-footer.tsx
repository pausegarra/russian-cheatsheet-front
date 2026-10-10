import classes from "./site-footer.module.css";

export function SiteFooter() {
  return (
    <footer className={classes.footer}>
      <div className={classes.content}>
        <p>
          Vocabulary, examples and related data courtesy of{" "}
          <a href="https://en.openrussian.org/" target="_blank" rel="noopener noreferrer">
            OpenRussian
          </a>.
        </p>
        <p>Developed by pau<strong>segarra</strong></p>
      </div>
    </footer>
  );
}
