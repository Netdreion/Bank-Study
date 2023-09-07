import React from "react";
import { useState, useEffect } from "react";

const ExcuseCreater = () => {
  const [excuser, setExcuser] = useState("");

  const fethFamily = async () => {
    const url = "https://excuser-three.vercel.app/v1/excuse/family/";
    try {
      const response = await fetch(url);
      const data = await response.json(data);
    } catch (error) {
      console.log(error);
    }
  };
};
