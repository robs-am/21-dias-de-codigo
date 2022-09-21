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

        </motion.div>
      </motion.div>
    </div>
  );
}

export default App;
