import React from "react";
import { motion } from "framer-motion";
import { ctaHover } from "../motionVariants";

interface SimpleAnchorProps {
  href?: string;
  className?: string;
  target?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  children?: React.ReactNode;
}

interface SimpleButtonProps {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  children?: React.ReactNode;
}

export const MotionLink: React.FC<SimpleAnchorProps> = ({ children, ...props }) => {
  return (
    <motion.a whileHover={ctaHover} whileTap={{ scale: 0.98 }} href={props.href} className={props.className} target={props.target} onClick={props.onClick}>
      {children}
    </motion.a>
  );
};

export const MotionButton: React.FC<SimpleButtonProps> = ({ children, ...props }) => (
  <motion.button whileHover={ctaHover} whileTap={{ scale: 0.98 }} onClick={props.onClick} className={props.className} type={props.type} disabled={props.disabled}>
    {children}
  </motion.button>
);

export default MotionLink;
