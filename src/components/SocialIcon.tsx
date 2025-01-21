import React from "react";
import { cn } from "@/lib/utils";
import { Twitter, Github, Facebook, Instagram } from "lucide-react";

type SocialIconProps = {
  platform: "twitter" | "github" | "facebook" | "instagram";
  href: string;
  className?: string;
};

const icons = {
  twitter: Twitter,
  github: Github,
  facebook: Facebook,
  instagram: Instagram,
};

const SocialIcon = ({ platform, href, className }: SocialIconProps) => {
  const Icon = icons[platform];
  
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "text-ronin-dark hover:text-ronin-primary transition-colors duration-300",
        className
      )}
    >
      <Icon size={24} />
    </a>
  );
};

export default SocialIcon;