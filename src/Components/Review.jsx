import { useState, useEffect } from "react";
import people from "./ReviewData";
import { FaStar } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, review, star } = people[index];
  const [addReview, setAddReview] = useState("");
  const [reviewList, setReviewList] = useState([]);

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
    setAddReview("");
  };
  const handleClick = () => {
    setReviewList([...reviewList, review]);
  };

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
            value={addReview}
            placeholder="add review"
            onChange={handleChange}
          ></input>
          <article>
            <p></p>
          </article>
        </section>
      </div>
    </div>
  );
};

export default Review;
