import { useState } from "react";
import people from "./ReviewData";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, review } = people[index];

  return (
    <div>
      <section>
        <h2>{name}</h2>
        <p>{review}</p>
      </section>
      <button onClick={() => setIndex((prev) => prev + 1)}>next</button>
      <button onClick={() => setIndex((prev) => prev - 1)}>prev</button>
      <button
        onClick={() => setIndex(Math.random(Math.floor() * people.lenghth))}
      >
        random
      </button>
    </div>
  );
};

export default Review;
