import { useState, useEffect } from "react";
import people from "./ReviewData";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, review } = people[index];

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
    }, [5000]);

    return () => clearInterval(timer);
  }, [people, index]);

  return (
    <div>
      <h2>Reviews</h2>
      <section>
        <h2>{name}</h2>
        <p>{review}</p>
      </section>
      <button onClick={() => nextBtn()}>next</button>
      <button onClick={() => prevBtn()}>prev</button>
      <button onClick={() => randomBtn()}>random</button>
    </div>
  );
};

export default Review;
