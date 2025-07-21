import classes from "./Footer.module.css";

function Footer() {
  return (
    <footer className={classes.footerContainer}>
      <p className={classes.footerText}>
        &copy; {new Date().getFullYear()} Shopping Cart. All rights reserved.
      </p>
      <div className={classes.footerLinks}>
        <a href="#" className={classes.footerLink}>
          Privacy Policy
        </a>
        <a href="#" className={classes.footerLink}>
          Terms of Service
        </a>
        <a href="#" className={classes.footerLink}>
          Contact Us
        </a>
      </div>
    </footer>
  );
}

export default Footer;
