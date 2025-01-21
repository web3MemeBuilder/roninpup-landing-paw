import React from "react";
import BuyButton from "@/components/BuyButton";
import SocialIcon from "@/components/SocialIcon";

const Index = () => {
  const handleBuyClick = () => {
    console.log("Buy button clicked");
    // Add buy functionality here
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-b from-white to-ronin-gray relative flex flex-col items-center justify-center p-2"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.1' fill-rule='evenodd'%3E%3Cpath d='M22.5 24a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11zm0-2a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM45 24a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11zm0-2a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM22.5 47a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11zm0-2a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM45 47a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11zm0-2a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z'/%3E%3C/g%3E%3C/svg%3E")`,
        backgroundSize: '60px 60px'
      }}
    >
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
          <SocialIcon platform="twitter" href="https://x.com/RoninPupMeme" />
          <SocialIcon platform="telegram" href="https://t.me/roninpupmeme" />
        </div>
      </div>
    </div>
  );
};

export default Index;