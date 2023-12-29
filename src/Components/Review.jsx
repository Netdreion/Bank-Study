import { useState, useEffect } from "react";
import people from "./ReviewData";
import { FaStar } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, review, star } = people[index];
  const [show, setShow] = useState(false);

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

  return (
    <div>
      <button onClick={() => setShow(!show)}>
        <h2>Reviews</h2>
      </button>

      {show && (
        <div>
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
        </div>
      )}
    </div>
  );
};

export default Review;
