import styles from './ExplorePremium.module.css'
function ExplorePremium(){
    return (
      <>
        {/*--------------------------- premimum plan Image ----------------------------------*/}
        <div className={styles.premimumAddDiv}>
          <img src="Images\PremiumPlanImg.png" className={styles.HeaderImg} />
          <h2 className={styles.Headers}>Affordable plans for any situation</h2>
          <p>
            Choose a Premium plan and listen to ad-free music without limits on
            your phone, speaker, and other devices. Pay in various ways. Cancel
            anytime.
          </p>
        </div>

        {/*--------------------------- premimum plan Benifits ----------------------------------*/}
        <div className={styles.premimumBenifits}>
          <h2 className={styles.Headers}>All Premium plans include</h2>
          <ul type="none">
            <li>
              <i class="bi bi-check-lg"></i>High audio quality
            </li>
            <li>
              <i class="bi bi-check-lg"></i>Listen with friends in real time
            </li>
            <li>
              <i class="bi bi-check-lg"></i>Organize listening queue
            </li>
            <li>
              <i class="bi bi-check-lg"></i>Listening insights (not in Mini)
            </li>
          </ul>
        </div>

        {/*--------------------------- Prenium Plan Cards ----------------------------------*/}
        <div className={styles.planCards}>
          <div class="card text-bg-dark mb-3" style={{ maxWidth: "18rem" }}>
            <div
              class="card-header"
              style={{
                backgroundColor: "lightPink",
                width: "50%",
                fontSize: "medium",
                borderRadius: "5%",
              }}>
              <span style={{ color: "black" }}>
                {" "}
                <i class="fa-solid fa-indian-rupee-sign"></i> 59 for 3 months{" "}
              </span>
            </div>
            <div class="card-body">
              <h2>Individual</h2>
              <h5 class="card-title">
                <i className="bi bi-spotify text-white fs-1"></i>
                <span style={{ fontSize: "x-large" }}> Premium </span>
              </h5>
              <p class="card-text">
                <i class="fa-solid fa-indian-rupee-sign"></i> 59 for 3 months{" "}
                <br />
                <i class="fa-solid fa-indian-rupee-sign"></i> 119/month after
                <hr></hr>
                <ul>
                  <li>1 Premium account</li>
                  <li>Cancel Anytime</li>
                  <li>Suscribe or one-time payment</li>
                </ul>
              </p>
              <button
                type="button"
                class="btn btn-light"
                style={{ marginLeft: "10%" }}>
                Try 3 months for <i class="fa-solid fa-indian-rupee-sign"></i>{" "}
                59
              </button>
            </div>
          </div>

          {/*----------------------------------------- card 2---------------------------------------- */}
          <div class="card text-bg-dark mb-3" style={{ maxWidth: "18rem" }}>
            <div
              class="card-header"
              style={{
                backgroundColor: "lightblue",
                width: "50%",
                fontSize: "medium",
                borderRadius: "5%",
              }}>
              <span style={{ color: "black" }}>
                {" "}
                <i class="fa-solid fa-indian-rupee-sign"></i> 179 for 2 months{" "}
              </span>
            </div>
            <div class="card-body">
              <h2>Family</h2>
              <h5 class="card-title">
                <i className="bi bi-spotify text-white fs-1"></i>
                <span style={{ fontSize: "x-large" }}> Premium </span>
              </h5>
              <p class="card-text">
                <i class="fa-solid fa-indian-rupee-sign"></i> 179 for 2 months{" "}
                <br />
                <i class="fa-solid fa-indian-rupee-sign"></i> 179/month after
                <hr></hr>
                <ul>
                  <li>Up to 6 Premium account</li>
                  <li>Control content marked as explicit</li>
                  <li>Cancel anytime</li>
                  <li>Suscribe or one-time payment</li>
                </ul>
              </p>
              <button
                type="button"
                class="btn btn-light"
                style={{ marginLeft: "10%" }}>
                Try 2 months for <i class="fa-solid fa-indian-rupee-sign"></i>{" "}
                179
              </button>
            </div>
          </div>

          {/*----------------------------------------- card 3---------------------------------------- */}
          <div class="card text-bg-dark mb-3" style={{ maxWidth: "18rem" }}>
            <div
              class="card-header"
              style={{
                backgroundColor: "#FFC862",
                width: "50%",
                fontSize: "medium",
                borderRadius: "5%",
              }}>
              <span style={{ color: "black" }}>
                {" "}
                <i class="fa-solid fa-indian-rupee-sign"></i> 149 for 2 months{" "}
              </span>
            </div>
            <div class="card-body">
              <h2>Family</h2>
              <h5 class="card-title">
                <i className="bi bi-spotify text-white fs-1"></i>
                <span style={{ fontSize: "x-large", color: "#FFC862" }}>
                  {" "}
                  Duo{" "}
                </span>
              </h5>
              <p class="card-text">
                <i class="fa-solid fa-indian-rupee-sign"></i> 149 for 2 months{" "}
                <br />
                <i class="fa-solid fa-indian-rupee-sign"></i> 149/month after
                <hr></hr>
                <ul>
                  <li>2 Premium account</li>
                  <li>Cancel anytime</li>
                  <li>Suscribe or one-time payment</li>
                </ul>
              </p>
              <button
                type="button"
                class="btn btn-light"
                style={{
                  marginLeft: "10%",
                  backgroundColor: "#FFC862",
                  borderColor: " #FFC862",
                }}>
                Try 2 months for <i class="fa-solid fa-indian-rupee-sign"></i>{" "}
                149
              </button>
            </div>
          </div>
        </div>
      </>
    );
}

export default ExplorePremium;