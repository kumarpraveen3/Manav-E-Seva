import React from "react";
import pic from "./photo/logo.png";
const Home = () => {
  return (
    <>
      <div id="main_div_id" class="main_div">
        <div class="hading_div">
          <h1 class="hading">💻 Manav E-Seva</h1>
          <h3>-Praveen Kumar</h3>
        </div>
        <div class="img_div">
          <img class="img_logo" src={pic} />
        </div>
      </div>

      <div class="div_main_3">
        <h2>This is Manav E-Seva Web Page</h2>
        <h3> This is Created by </h3>
        <p>-Praveen Kumar</p>
      </div>
    </>
  );
};

export default Home;
