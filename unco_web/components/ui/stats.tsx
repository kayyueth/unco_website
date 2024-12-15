"use client";
import { motion } from "framer-motion";

export default function Stats() {
    return (
        <motion.div
            drag
            dragConstraints={{ top: -200, left: -300, right: 300, bottom: 0 }}
            style={{
                width: 100,
                height: 100,
                backgroundColor: "blue",
                color:"white",
                borderRadius: "10px",
                textAlign:"center"
            }}
            dragElastic={0.2}
        >
        testing
        </motion.div>
    );
}