import Icon from '../UI/Icon';
import css from './Footer.module.css';
function Footer(props) {
  return (
    <footer
      className={props.dark ? `${css.footer} ${css.darkFooter}` : css.footer}
    >
      <div className={`${css.footerDivide} container`}>
        <div className={css.footerText}>
          <h3>Like what you see?</h3>
          <p>Contact me if you have a job offer</p>
        </div>
        <ul>
          <li>
            <Icon iconName="phone" yellow />
            <p>+37063672327</p>
          </li>
          <li>
            <Icon iconName="envelope-o" yellow />
            <p>jakimaviciuspovilas@gmail.com</p>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/povilas-jakimavičius-62a11325b"
              target="_blank"
            >
              <Icon iconName="linkedin" yellow />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
export default Footer;
