/**
 * Framer Motion Animation Variants
 * Centralized animation definitions for consistent, elegant scroll animations
 */

// Shared viewport configuration for all scroll animations
export const viewportConfig = {
  once: true,
  margin: '-50px',
  amount: 0.2,
};

// Standard transition presets
const transitions = {
  default: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  fast: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  slow: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  medium: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

// Fade + rise from below
export const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: transitions.default },
};

// Pure opacity fade
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: transitions.medium },
};

// Fade + gentle scale
export const fadeScale = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: transitions.medium },
};

// Slide in from left
export const slideFromLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: transitions.default },
};

// Slide in from right
export const slideFromRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: transitions.default },
};

// Small pop-in effect
export const scalePop = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: transitions.fast },
};

// Decorative drift from left
export const floatFromLeft = {
  hidden: { opacity: 0, x: -25 },
  visible: { opacity: 1, x: 0, transition: transitions.slow },
};

// Decorative drift from right
export const floatFromRight = {
  hidden: { opacity: 0, x: 25 },
  visible: { opacity: 1, x: 0, transition: transitions.slow },
};

// Parent container for staggered children (standard)
export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0,
    },
  },
};

// Parent container for staggered grid items (faster)
export const staggerGrid = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0,
    },
  },
};

// Page transition variants
export const pageExit = {
  hidden: { opacity: 1, y: 0, scale: 1 },
  exit: { 
    opacity: 0, 
    y: -60, 
    scale: 0.97,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  },
};

export const pageEnter = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.7, 
      ease: [0.22, 1, 0.36, 1],
      delay: 0.15 
    }
  },
};

// Countdown digit roll animation
export const digitRoll = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
};

// Variant map for dynamic lookup
export const variants = {
  fadeUp,
  fadeIn,
  fadeScale,
  slideFromLeft,
  slideFromRight,
  scalePop,
  floatFromLeft,
  floatFromRight,
  staggerContainer,
  staggerGrid,
};
