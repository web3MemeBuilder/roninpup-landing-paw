import React from "react";
import { cn } from "@/lib/utils";

type BuyButtonProps = {
  className?: string;
  onClick?: () => void;
};

const BuyButton = ({ className, onClick }: BuyButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "bg-ronin-primary hover:bg-ronin-light text-white font-bold py-4 px-8 rounded-full",
        "transform transition-all duration-300 hover:scale-105 hover:shadow-lg",
        "text-lg md:text-xl",
        className
      )}
    >
      Buy Now
    </button>
  );
};

export default BuyButton;