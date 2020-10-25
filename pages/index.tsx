import cn from "classnames";
import Head from "next/head";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={cn(styles.container)}>
      <Head>
        <title>Musip - Next Generation Music Platform</title>
      </Head>
      <div className={cn(styles['section'])}>
        <div>
          <h1>a musical revolution is brewing</h1>
          <h2>Musip</h2>
        </div>
      </div>
      <div className={cn(styles['section'])}>
        <div className={cn(styles['form-container'])}>
          <iframe src="https://cdn.forms-content.sg-form.com/43e11958-164a-11eb-b6a1-a217dbdf245a" />
        </div>
      </div>
    </div>
  );
}
