import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import anime from "animejs/lib/anime.es.js"; // Import Anime.js

const Loader = () => {
  useEffect(() => {
    const anim = anime.timeline({
      easing: "easeOutExpo",
      duration: 650,
      
    });

    anim.add({
      targets: ".x07",
      translateX: [-1000, 0],
      
    }).add({
      targets: ".x06",
      translateX: [-1000, 0],
    }).add({
      targets: ".x05",
      translateX: [-1000, 0],
    }).add({
      targets: ".x04",
      translateX: [-1000, 0],
    }).add({
      targets: ".x03",
      translateX: [-1000, 0],
    }).add({
      targets: ".x02",
      translateX: [-1000, 0],
    }).add({
      targets: ".x01",
      translateX: [-1000, 0],
    });
  }, []);

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ 
        height: "100vh", 
        overflow: "hidden",
        position: "fixed", 
        top: 0, 
        left: 0, 
        width: "100%", 
        backgroundColor: "#fff"
      }}
    >
      <div className="row m-auto box">
        <div className="col x01">
          <h1>L</h1>
        </div>
        <div className="col x02">
          <h1>O</h1>
        </div>
        <div className="col x03">
          <h1>A</h1>
        </div>
        <div className="col x04">
          <h1>D</h1>
        </div>
        <div className="col x05">
          <h1>I</h1>
        </div>
        <div className="col x06">
          <h1>N</h1>
        </div>
        <div className="col x07">
          <h1>G</h1>
        </div>
      </div>
    </div>
  );
};

export default Loader;
