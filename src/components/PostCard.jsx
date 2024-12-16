import PostTag from "./PostTag";

function PostCard({ post, reagisciOnClick }) {
  const { id, title, image, content, tags } = post;

  // const reagisciOnClick = () => {
  //   console.log("Click");
  // }

  return (
    <div className="card">
      <img
        src={image !== "" ? `/images/${image}` : `https://placehold.co/600x400`}
        alt=""
      />
      <div className="card-body">
        <h4>{title}</h4>
        <p>{content.slice(0, 50) + "..."}</p>
        <div>
          {tags.map((curTag, index) => (
            <PostTag tagName={curTag} key={index} />
          ))}
        </div>
        <button onClick={reagisciOnClick}>Seleziona</button>
      </div>
    </div>
  );
}

export default PostCard;
