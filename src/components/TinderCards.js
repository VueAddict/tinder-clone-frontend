import React, { useEffect, useState } from "react";
import TinderCard from "react-tinder-card";
import baseUrl from '../api/axios'

import "../styles/TinderCards.css";

function TinderCards() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
     const fetchCards = async () => {
       try {
         const request = await baseUrl.get('/cards')
         setPeople(request.data)
       } catch (error) {
        console.log(error)
       }
     }

     fetchCards()
  }, [])
  const swiped = (dir, name) => {

  }
  const outOfFrame = name => {

  }

  return (
    <div className="tinderCards">
      <div className="tinderCards__cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
              <div className="card" style={{backgroundImage:`url(${person.imgUrl})`}}>
                  <h3>{person.name}</h3>
              </div>

          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
