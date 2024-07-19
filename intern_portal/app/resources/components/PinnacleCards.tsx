"use client";

import React from "react";
import { useEffect, useState } from "react";
import Image from "next/image";
const PinnacleCards = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("/pinnacle.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("WOMP WOMP");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setCards(data);
      });
  }, []);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {cards.map((card) => (
        <div className="card bg-base-100 shadow-xl" key={card.ID}>
          <figure>
            <img
              src={card.Image}
              alt={card.Name}
              className=" h-48 object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{card.Name}</h2>
            <p>{card.Title}</p>
            <p>Email: {card.Email}</p>
            <div className="card-actions justify-end"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PinnacleCards;
