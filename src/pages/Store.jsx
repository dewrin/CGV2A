import '../styles/Store.css';

const Store = ({ theme }) => {
  return (
    <section className={`Store Store-${theme}`}>
      <h1 className={`store-title`}>STORE</h1>
      <hr className={`store-hr-${theme}`} />
    </section>
  );
};

export default Store;
