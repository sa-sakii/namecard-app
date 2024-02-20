import React from "react";

import Pfp from "./images/profile-pic.jpg";

export default function MainCard() {
  return (
    <main className="mainCard">
      <img src={Pfp} alt="image not found" className="pfp" />
      <h3 className="name">Katsuragi Misato</h3>
      <h4 className="post">NERV Operations Direction aka Captain</h4>
      <button className="mail-btn">Email</button>
      <div className="description">
        <div className="about">
          <h4>About</h4>
          <p>
            The Operations diretor at NERV; acting major. Duties include acting
            as a field commander for the EVA pilots, issuing orders and relaying
            battle strategies as well as processing inputs from Ritsuko Akagi
            and the technicians monitoring the EVAs.
          </p>
        </div>
        <div className="interest">
          <h4>Interests</h4>
          <p>
            Drinks, street foods and partying. Beer is my drink of choice.
            I love to groom and play with Shinji. 
            Defeating the Angels while battling my inner demons is also fun thing to do.
          </p>
        </div>
      </div>
    </main>
  );
}
