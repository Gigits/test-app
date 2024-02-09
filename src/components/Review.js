import { useState } from "react";
const reviewList = [
  {
    id: 1,
    name: "Gigi",
    review: "this is an amazing movie",
    votes: 2,
    image: "https://i.pravatar.cc/48?u=153412",
  },
  {
    id: 2,
    name: "Svetlana",
    review: "nice movie!",
    votes: 7,
    image: "https://i.pravatar.cc/48?u=123412",
  },
  {
    id: 3,
    name: "Marya",
    review: "this page suuucks! 🤬",
    votes: -10,
    image: "https://i.pravatar.cc/48?u=123123",
  },
  {
    id: 4,
    name: "George",
    review: "so bad, very disappointed! 🤬",
    votes: 0,
    image: "https://i.pravatar.cc/48?u=123127",
  },
];

const Review = () => {
  const [reviews, setReviews] = useState(reviewList);
  const [name, setName] = useState("");
  const [image, setImg] = useState("https://i.pravatar.cc/48");
  const [review, setReview] = useState("");
  const [sortBy, setSortBy] = useState("date");
  console.log(sortBy);
  function handleNewComment(e) {
    e.preventDefault();
    if (!name || !image) return;
    const id = crypto.randomUUID();
    const newComment = { name, image, id, votes: 0, review };
    setReviews((reviews) => [...reviews, newComment]);
    setName("");
    setReview("");
  }
  function handleVote(value, id) {
    const currId = id;
    console.log(currId);
    const currValue = value === "up" ? 1 : -1;
    console.log(currValue);
    setReviews(
      reviews.map((review) =>
        currId === review.id
          ? { ...review, votes: review.votes + currValue }
          : review
      )
    );
  }
  function handleSort(e) {
    console.log(e);
    setSortBy(e.target.value);
  }
  let sortedReviews;
  if (sortBy === "date") sortedReviews = reviews;
  if (sortBy === "vote")
    sortedReviews = reviews.slice().sort((a, b) => b.votes - a.votes);
  console.log(sortedReviews);

  return (
    <div className="container">
      <h1>Comments</h1>
      <label>Sort By:</label>
      <select onChange={handleSort} value={sortBy} className="select">
        <option value="date">by entry</option>
        <option value="vote">by votes</option>
      </select>
      <ul>
        {sortedReviews.map((review) => (
          <li key={review.id} className="review">
            <img src={review.image} alt={review.name} />
            <p>{review.review}</p>
            <h2>{review.name}</h2>
            <span
              style={
                review.votes > 0
                  ? { color: "green" }
                  : review.votes < 0
                  ? { color: "red" }
                  : { color: "black" }
              }
            >
              {review.votes}
            </span>
            <button
              value="up"
              onClick={(e) => handleVote(e.target.value, review.id)}
              className="like"
            >
              👍
            </button>
            <button
              value="down"
              onClick={(e) => handleVote(e.target.value, review.id)}
              className="dislike"
            >
              👎
            </button>
          </li>
        ))}
      </ul>
      <form className="container row gap-4 my-5" onSubmit={handleNewComment}>
        <label style={{ paddingLeft: "2.5rem" }}> add your comment 🚀</label>
        <textarea
          className="col-lg-6"
          value={review}
          onChange={(e) => setReview(e.target.value)}
          placeholder="💬 enter your text here"
        />
        <div className="col-lg-3 row gap-2">
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            placeholder="👉...Name"
          />
          <input
            onChange={(e) => setImg(e.target.value)}
            value={image}
            placeholder="📸 ..imageURl"
          />
        </div>
        <button className="col-2 btn btn-outline-primary comment-button">
          add comment
        </button>
      </form>
    </div>
  );
};
export default Review;
