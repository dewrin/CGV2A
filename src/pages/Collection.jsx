import '../styles/Collection.css';

const Collection = ({ theme, authentication }) => {
  const { usercards } = authentication;
  return (
    <section className={`Collection Collection-${theme}`}>
      <h1 className={`collection-title`}>COLLECTION</h1>
      <hr className={`collection-hr-${theme}`} />
      <div className={`collection-cards`}>
        {usercards.map((usercard) => {
          return (
            <img
              className={`collection-card`}
              src={usercard.imageurl}
              key={Math.random()}
              alt={`${usercard.group} ${usercard.idol}`}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Collection;
