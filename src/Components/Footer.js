import styles from "./Footer.module.css"
function Footer(){
return (
  <>
    <hr></hr>
    <div className={styles.footer}>
      <div className={styles.footerContent}>
        <h5>Company</h5>
        <ul type="none">
          <li>
            <a href="about">About</a>
          </li>
          <li>
            <a href="jobs">Jobs</a>
          </li>
          <li>
            <a href="forthe">For the</a>
          </li>
          <li>
            <a href="about">Record</a>
          </li>
        </ul>
      </div>
      <div className={styles.footerContent}>
        <h5>Communities</h5>
        <ul type="none">
          <li>
            <a href="for Artists">For Artits</a>
          </li>
          <li>
            <a href="Developers">Developers</a>
          </li>
          <li>
            <a href="Advertising">Advertising</a>
          </li>
          <li>
            <a href="Investors">Investors</a>
          </li>
          <li>
            <a href="Vendors">Vendors</a>
          </li>
        </ul>
      </div>
      <div className={styles.footerContent}>
        <h5>Useful Links</h5>
        <ul type="none">
          <li>
            <a href="Support">Support</a>
          </li>
          <li>
            <a href="FreeMobileApp">Free Mobile App</a>
          </li>
          <li>
            <a href="country">Popular By Country</a>
          </li>
        </ul>
      </div>

      <div className={styles.footerContent}>
        <button type="button" class="btn btn-dark">
          <i class="bi bi-instagram"></i>
        </button>
        <button type="button" class="btn btn-dark">
          <i class="bi bi-twitter"></i>
        </button>
        <button type="button" class="btn btn-dark">
          <i class="bi bi-facebook"></i>
        </button>
      </div>

      <div className={styles.footerContent}>
        <h5>Spotify Plans</h5>
        <ul type="none">
          <li>
            <a href="PremimumInd">Premimum Individual</a>
          </li>
          <li>
            <a href="premimumDuo">Premimum Duo</a>
          </li>
          <li>
            <a href="premimumFamily">Premimum Family</a>
          </li>
        </ul>
      </div>
    </div>
    <hr />
    <div className={styles.footerPolicy}>
      <a href="link">Legal</a>
      <a href="link">Sefety & Privacy Center</a>
      <a href="link">Privacy Policy</a>
      <a href="link">
        <i class="bi bi-c-circle"></i>2025SpotifyAB
      </a>
      <a href="link">Cookies</a>
      <a href="link">About Ads</a>
      <a href="link">Accessibillity</a>
    </div>
  </>
);
}

export default Footer;