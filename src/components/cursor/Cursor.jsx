// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import "./cursor.scss";

// const Cursor = () => {
//   const [position, setPosition] = useState({ x: 0, y: 0 });

//   useEffect(() => {
//     const mouseMove = (e) => {
//       setPosition({ x: e.clientX, y: e.clientY });
//     };

//     window.addEventListener("mousemove", mouseMove);

//     return () => {
//       window.removeEventListener("mousemove", mouseMove);
//     };
//   }, []);

//   return (
//     <motion.div
//       className="cursor"
//       animate={{ x: position.x+10, y: position.y+10 }}
//     ></motion.div>
//   );
// };

// export default Cursor;

import React, { useEffect, useState } from 'react';
import './Cursor.scss'; // Import the CSS file for styling

const GlowingCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event) => {
            setPosition({ x: event.clientX, y: event.clientY });
        };

        // Attach the event listener to the mouse move
        window.addEventListener('mousemove', handleMouseMove);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div
            className="glowing-cursor"
            style={{ left: `${position.x}px`, top: `${position.y}px` }}
        />
    );
};

export default Cursor;
