import { motion } from "framer-motion";

interface PhoenixLogoProps {
  className?: string;
  size?: number;
}

export const PhoenixLogo = ({ className = "", size = 40 }: PhoenixLogoProps) => {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400 }}
    >
      <defs>
        <linearGradient id="phoenixGradient" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="hsl(220, 80%, 60%)" />
          <stop offset="50%" stopColor="hsl(270, 70%, 70%)" />
          <stop offset="100%" stopColor="hsl(25, 95%, 55%)" />
        </linearGradient>
        <linearGradient id="phoenixGlow" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="hsl(220, 80%, 60%)" stopOpacity="0.5" />
          <stop offset="100%" stopColor="hsl(270, 70%, 70%)" stopOpacity="0.2" />
        </linearGradient>
      </defs>
      
      {/* Glow effect */}
      <motion.path
        d="M32 8L44 24L56 16L48 32L56 48L44 40L32 56L20 40L8 48L16 32L8 16L20 24L32 8Z"
        fill="url(#phoenixGlow)"
        filter="blur(8px)"
        animate={{ opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      
      {/* Main phoenix shape - geometric rising bird */}
      <path
        d="M32 8L44 24L56 16L48 32L56 48L44 40L32 56L20 40L8 48L16 32L8 16L20 24L32 8Z"
        fill="url(#phoenixGradient)"
      />
      
      {/* Inner detail */}
      <path
        d="M32 18L38 28L46 24L42 32L46 40L38 36L32 46L26 36L18 40L22 32L18 24L26 28L32 18Z"
        fill="hsl(var(--background))"
        fillOpacity="0.3"
      />
    </motion.svg>
  );
};
