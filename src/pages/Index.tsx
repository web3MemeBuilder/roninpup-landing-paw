import React from "react";
import BuyButton from "@/components/BuyButton";
import SocialIcon from "@/components/SocialIcon";

const Index = () => {
  const handleBuyClick = () => {
    console.log("Buy button clicked");
    // Add buy functionality here
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-ronin-gray flex flex-col items-center justify-center p-2">
      <div className="max-w-4xl w-full text-center space-y-4">
        {/* Logo */}
        <div className="w-48 h-48 md:w-64 md:h-64 mx-auto animate-float">
          <img
            src="roninPupNoBg.png"
            alt="RoninPup Logo"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Title and Description */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-ronin-dark">
            Ronin Pup
          </h1>
          <p className="text-xl md:text-2xl text-ronin-dark/80">
            Ronin's favorite pet
          </p>
          <p className="text-lg md:text-xl text-ronin-dark/70 max-w-2xl mx-auto">
            The bark behind the memecoin revolution
            <br />
            HODL & fetch the gains!
          </p>
        </div>

        {/* Buy Button */}
        <div className="pt-4">
          <BuyButton onClick={handleBuyClick} />
        </div>

        {/* Social Icons */}
        <div className="flex justify-center space-x-6 pt-2">
          <SocialIcon platform="twitter" href="https://twitter.com" />
          <SocialIcon platform="github" href="https://github.com" />
          <SocialIcon platform="facebook" href="https://facebook.com" />
          <SocialIcon platform="instagram" href="https://instagram.com" />
        </div>
      </div>
    </div>
  );
};

export default Index;