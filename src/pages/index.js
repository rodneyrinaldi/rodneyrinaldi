import Layout from "../components/layout";
import styles from "../styles/index.module.css";

function Index() {
  return (
    <>
      <Layout>
        <div className={styles.grid}>
          <a href="https://adv.rodneyrinaldi.com">
            <div>
              <img src="./law.png" alt="" />
              <p>https://adv.rodneyrinaldi.com</p>
            </div>
          </a>
          <br />
          <br />
          <a href="https://dev.rodneyrinaldi.com">
            <div>
              <img src="./tech.png" alt="" />
              <p>https://dev.rodneyrinaldi.com</p>
            </div>
          </a>
        </div>
      </Layout>
    </>
  );
}

export default Index;
