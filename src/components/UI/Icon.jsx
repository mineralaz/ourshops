import css from './Icon.module.css';
function Icon(props) {
  return (
    <i
      className={
        props.yellow
          ? `fa fa-${props.iconName} ${css.yellow}`
          : `fa fa-${props.iconName}`
      }
      aria-hidden="true"
    ></i>
  );
}
export default Icon;
