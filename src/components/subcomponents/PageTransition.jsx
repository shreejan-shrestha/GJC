import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const pageVariants = {
    initial: {
        opacity: 0,
        x: "-100vw",
    },
    in: {
        opacity: 1,
        x: 0,
        y: 0,
    },
    out: {
        opacity: 0,
        x: -100,
    },
};

const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5,
};

const PageTransition = ({ children }) => {
    return (
        <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
        >
            <AnimatePresence>{children}</AnimatePresence>
        </motion.div>
    );
};

export default PageTransition;
