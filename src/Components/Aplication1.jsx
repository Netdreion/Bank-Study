import React, { useState } from "react";

const ExcuseCreater = () => {
  const [excuser, setExcuser] = useState({
    family: "",
    office: "",
    developers: "",
  });

  const fetchExcuse = async (category) => {
    const url = `https://excuser-three.vercel.app/v1/excuse/${category}`;
    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.length > 0) {
        setExcuser((prevState) => ({
          ...prevState,
          [category]: data[0].excuse,
        }));
      } else {
        // Handle the case when no excuse is found for the category
        setExcuser((prevState) => ({
          ...prevState,
          [category]: "No excuse found for this category",
        }));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <button onClick={() => fetchExcuse("family")}>family</button>
      <button onClick={() => fetchExcuse("office")}>office</button>
      <button onClick={() => fetchExcuse("developers")}>developers</button>
      <h1>Family Excuse: {excuser.family}</h1>
      <h1>Office Excuse: {excuser.office}</h1>
      <h1>Developers Excuse: {excuser.developers}</h1>
    </div>
  );
};

export default ExcuseCreater;
