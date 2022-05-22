import styles from "../styles/Login.module.css";
import Head from "next/head";
import Image from "next/image";

const Login = () => {
  return (
    <div>
      <Head>
        <title>Netflix SignIn</title>
      </Head>

      <header>
        <div className={styles.headerWrapper}>
          <a className={styles.loginLink}>
            <div className={styles.logoWrapper}>
              <Image
                src="/static/netflix.svg"
                alt="netflix logo"
                width="128px"
                height="34px"
              />
            </div>
          </a>
        </div>
      </header>
    </div>
  );
};

export default Login;
