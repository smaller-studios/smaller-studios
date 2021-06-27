import React from "react";
import "./index.css";
import hero from "../../assets/images/hero.jpeg"

function index() {
  return (
    <div class="Hero__HeroContainer-b98oqm-0 kvYdOK" background_color="#f2babd">
      <div>
        <h1>We Are CREATIVITY</h1>
        {/* <a href="start/" class="Hero__CTAButton-b98oqm-1 gJuuYA">
          Let's start
        </a> */}
      </div>
      <img src={hero} alt="Smaller is Creativity, And creates custom websites for you" />
    </div>
  );
}

export default index;
