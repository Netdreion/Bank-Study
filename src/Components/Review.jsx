import { useState, useEffect } from "react";
import people from "./ReviewData";
import { FaStar } from "react-icons/fa";

const storageSetUp = () => {
  const setUp = JSON.parse(localStorage.getItem("list")) || [];

  return setUp;
};

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, review, star } = people[index];
  const [addReview, setAddReview] = useState("");
  const [reviewList, setReviewList] = useState([storageSetUp]);

  const nextBtn = () => {
    if (index < 4) {
      setIndex((prev) => prev + 1);
    } else {
      setIndex(index);
    }
  };

  const prevBtn = () => {
    if (index !== 0) {
      setIndex((prev) => prev - 1);
    } else {
      setIndex(index);
    }
  };

  const randomBtn = () => {
    const random = Math.floor(Math.random() * people.length);
    setIndex(random);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      randomBtn();
    }, [3000]);

    return () => clearInterval(timer);
  }, [people, index]);

  const handleChange = (e) => {
    setAddReview(e.target.value);
  };
  const handleClick = () => {
    setReviewList([...reviewList, addReview]);
  };

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(reviewList));
  }, [reviewList]);

  return (
    <div>
      <h2>Reviews</h2>
      <section>
        <h2>{name}</h2>

        <span>
          <p>
            {star}
            <FaStar />
          </p>
          <p>{review}</p>
        </span>
      </section>
      <button onClick={() => nextBtn()}>next</button>
      <button onClick={() => prevBtn()}>prev</button>
      <button onClick={() => randomBtn()}>random</button>

      <div>
        <h4>add review</h4>

        <section>
          <input
            type="text"
            value={addReview}
            placeholder="add review"
            onChange={handleChange}
          ></input>
          <button onClick={handleClick}>add</button>
          <article>
            {reviewList.map((item, reviewIndex) => {
              return <p key={reviewIndex}>{item}</p>;
            })}
          </article>
          <button onClick={() => setReviewList([])}>clear</button>
        </section>
      </div>
    </div>
  );
};

export default Review;
