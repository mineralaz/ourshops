import css from './FormDescription.module.css';

function FormDescription(props) {
  return (
    <div className={`${css.formDesc} ${props.right && css.alignRight}`}>
      <h3>{props.formName}</h3>
      <p className={`${css.formDescText} ${props.full && css.fullWidth}`}>
        {props.children}
      </p>
    </div>
  );
}
export default FormDescription;
