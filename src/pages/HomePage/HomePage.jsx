import css from './HomePage.module.css';

const HomePage = () => {
  return (
    <>
      <section className={css.heroSection}>
        <div className={css.heroContainer}></div>
        <h1 className={css.heroContainerTitle}>Contact Book</h1>
      </section>
    </>
  );
};

export default HomePage;
