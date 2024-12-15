"use client";
import { motion } from "framer-motion";
import { useRef } from "react";

export default function Stats() {
    const boxes = Array.from({ length: 6 }, (_, index) => index);
    const containerRef = useRef(null);

    return (
        <div
          ref={containerRef}
          style={{
            width: "400px",
            height: "400px",
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
            backgroundColor: "#f0f0f0",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {boxes.map((box) => (
            <motion.div
              key={box}
              drag
              dragConstraints={containerRef}
              dragElastic={0.5}
              whileDrag={{ scale: 1.1 }}
              style={{
                width: 80,
                height: 80,
                backgroundColor: "blue",
                color: "white",
                borderRadius: "10px",
                textAlign: "center",
                lineHeight: "80px",
                fontWeight: "bold",
                position: "absolute",
              }}
              onDrag={(event, info) => {
                if (info.point.x < 0 || info.point.x > 320) {
                  console.log(`Box ${box + 1} hit horizontal wall`);
                }
                if (info.point.y < 0 || info.point.y > 320) {
                  console.log(`Box ${box + 1} hit vertical wall`);
                }
              }}
            >
              {`Box ${box + 1}`}
            </motion.div>
          ))}
        </div>
    );
}