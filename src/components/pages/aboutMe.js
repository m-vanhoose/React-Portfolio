import React from 'react';
import image from '../Wedding.jpeg'

export default function AboutMe() {
  return (
    <div>
      <div class="container componentContainer">
        <p class="componentHead">About Me</p>
      </div>
      <div class="container componentContent">
        <div class="row">
        <div class="col-3">
          <img class="self" src={image} alt="Brett"></img>
        </div>
        <div class="col-9 aboutText">My name is Brett. I'm a bit of a mixed bag when it comes to my skill set. I've spent most of my time since I graduated high school working for the City of Grove City in the maintenence department. While there I learned alot about how buildings work and are built, as well as how to fix them. I've also spent alot of time learning how to customize and build pcs; something I would do more often if it wasn't such an expensive hobby. Now I'm hoping to make a living as a web developer.
        </div>
        </div>
      </div>
    </div>
  );
}
