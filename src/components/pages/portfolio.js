import React from 'react';
import planner from '../day-planner-1.png'
import weather from '../Weather-app.PNG'
import sauna from '../sauna-games.png'
import note from '../note-taker.png'
import editor from '../editor-pwa.png'
import ecommerce from '../e-commerce.png'

export default function Portfolio() {
  return (
    <div>
      <div class="container componentContainer">
        <p class="componentHead">Portfolio</p>
      </div>
      <div class="container componentContent">
        <div class="row">
        <div class="col-6">
          <a href="https://damp-earth-65412.herokuapp.com/">
            <img class="portfolio" src={sauna} alt="sauna-games"></img>
          </a>
        </div>
        <div class="col-6">
          <a href="https://m-vanhoose.github.io/Day-Planner/">
            <img class="portfolio" src={planner} alt="day-planner"></img>
          </a>
        </div>
        <div class="col-6">
          <a href="https://editor-pwa.herokuapp.com/">
            <img class="portfolio" src={editor} alt="editor-pwa"></img>
          </a>
        </div>
        <div class="col-6">
          <a href="https://brett-note-taker.herokuapp.com/">
            <img class="portfolio" src={note} alt="note-taker"></img>
          </a>
        </div>
        <div class="col-6">
          <a href="https://m-vanhoose.github.io/Weather-App/">
            <img class="portfolio" src={weather} alt="weather-app"></img>
          </a>
        </div>
        <div class="col-6">
          <a href="https://github.com/m-vanhoose/e-commerce-app">
            <img class="portfolio" src={ecommerce} alt="ecommerce-app"></img>
          </a>
        </div>
        </div>
      </div>
    </div>
  );
}
