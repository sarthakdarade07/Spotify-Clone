import styles from "./HomeContent.module.css";
import NavBar from "./NavBar";
function HomeContent() {
  console.log("hi");
  return (
    <>
      <div className={styles.container}>
        <div className={styles.columns} id={styles.column1}>
          <div className={styles.content}>
            <div className={styles.columnHeading}>
              <h6>
                <strong>Your Library</strong>
                <button
                  type="button"
                  class="btn"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="Create a playlist"
                >
                  + Create
                </button>
              </h6>
            </div>
          </div>
        </div>
        <div className={styles.columns} id={styles.column2}>
          <div className={styles.content}></div>
        </div>
        <div className={styles.columns} id={styles.column3}>
          <div className={styles.content}></div> 
        </div>
      </div>
    </>
  );
}

export default HomeContent;
