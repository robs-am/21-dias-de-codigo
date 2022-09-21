import "./App.css";

import { motion } from "framer-motion";
import { useRef, useEffect, useState} from "react";
import images from "./images";



function App() {
  console.log(images);
  return (
    <div className='App'>
      <motion.div className="carousel">
        <motion.div className="inner-carousel">
          {images.map(image => {
            return (
              <motion.div className="item">
                <img src={image} alt="" />
              </motion.div>
            );
          })}

        </motion.div>
      </motion.div>
    </div>
  );
}

export default App;
