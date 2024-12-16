import PostCard from "./components/PostCard";
import PostTag from "./components/PostTag";
import posts from "./data/posts";

function App() {
  const getSingleTags = () => {
    const tags = [];
    posts.forEach((curPost) => {
      curPost.tags.forEach((curTag) => {
        if (!tags.includes(curTag)) {
          tags.push(curTag);
        }
      });
    });
    return tags;
  };

  function reagisciOnClickGenitore() {
    console.log('Sono genitore e mi è arrivato i click del figlio');
  }

  const printCards = () => {
    return posts.map((curPost) => {
      return (
        curPost.published && (
          <div className="col" key={curPost.id}>
            <PostCard
              // id={curPost.id}
              // title={curPost.title}
              // content={curPost.content}
              // image={curPost.image}
              // tags={curPost.tags}
              post={curPost}
              reagisciOnClick={reagisciOnClickGenitore}
            />
          </div>
        )
      );
    });
  };

  return (
    <>
      <section className="container">
        <h3>Tutti tag</h3>
        {getSingleTags().map((tag,index) => (
          <PostTag tagName={tag} key={index} />
        ))}
      </section>
      <section className="container my-5">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
          {printCards()}
        </div>
      </section>
    </>
  );
}

export default App;
