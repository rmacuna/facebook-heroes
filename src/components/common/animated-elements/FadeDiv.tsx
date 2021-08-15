import { motion } from "framer-motion";

// Add props with children
export default function FadeDiv({ ...props }) {
  return (
    <motion.div
      initial={{
        scale: 0.8,
        y: 200,
      }}
      animate={{
        scale: 1,
        y: 0,
      }}
      transition={{
        duration: 0.2,
        ease: "easeOut",
      }}
      {...props}
    >
      {props.children}
    </motion.div>
  );
}
