import css from './Icon.module.css';
function Icon(props) {
  return (
    <i
      className={
        `fa fa-${props.iconName} ${props.yellow && css.yellow} ${
          props.big && 'fa-3x'
        } ${props.grey && css.grey}`
        // props.yellow
        //   ? `fa fa-${props.iconName} ${css.yellow}`
        //   : `fa fa-${props.iconName}`
      }
      aria-hidden="true"
    ></i>
  );
}
export default Icon;
