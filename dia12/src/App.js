import "./App.css";
import { motion } from "framer-motion";
//eslint-disable-next-line
import { useRef, useEffect, useState} from "react";
import images from "./images";
import { duration } from "@material-ui/core";



function App() {
  const [width, setWidth] = useState(0);
  const carousel =  useRef();

  useEffect (() => {
    
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  },[]);

  return (
    <div className='App'>
      
        
      
      
      <motion.div ref={carousel} className="carousel" whileTap={{cursor:"grabbing"}}>
        <motion.div 
        drag= "x" 
        dragConstraints={{right:0, left: -width}} className="inner-carousel">
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
