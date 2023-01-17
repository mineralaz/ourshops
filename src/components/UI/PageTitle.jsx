import css from './PageTitle.module.css';

function PageTitle(props) {
  return (
    <h2
      className={
        props.dark ? `${css.pageTitle} ${css.darkTitle}` : css.pageTitle
      }
    >
      {props.children}
    </h2>
  );
}
export default PageTitle;
