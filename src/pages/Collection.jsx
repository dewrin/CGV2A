import '../styles/Collection.css';

const Collection = ({ theme }) => {
  return (
    <section className={`Collection Collection-${theme}`}>
      <h1 className={`collection-title`}>COLLECTION</h1>
      <hr className={`collection-hr-${theme}`} />
    </section>
  );
};

export default Collection;
