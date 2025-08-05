import React from "react";

const Hero = () => {
  return (
    <main className="hero container">
      <div className="hero-content">
        <h1>CHASE DREAMS NOT COMFORT</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>

        <div className="hero-btn">
          <button>Shop Now </button>
          <button className="secondary-btn">Category</button>
        </div>

        <div className="shopping">
          <p>Also Available On</p>

          <div className="brand-icons">
            <img src="/src/images/amazon.png" alt="amazon-logo" />
            <img src="/src/images/flipkart.png" alt="flipkart-logo" />
          </div>
        </div>
      </div>
      <div className="hero-image">
        <img style={{width:"530px", height:"487.06px"}} src="\src\images\02e19efc-36c8-4598-8aaf-b9d7b2382eac1702986853269NikeAirForce107MensShoes1.jpg" alt="hero-image" />
      </div>
    </main>

    
  );
};

export default Hero;
