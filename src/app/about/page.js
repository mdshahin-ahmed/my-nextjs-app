import styles from "./About.module.css";

export const metadata = {
  title: "About page",
};

const AboutPage = () => {
  return (
    <div>
      <h1 className={styles.heading}>This is about page/route</h1>
    </div>
  );
};

export default AboutPage;
