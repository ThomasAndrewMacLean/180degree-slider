import React, { useState, useEffect } from "react";
import "./styles/index.css";
import * as Styles from "./App.styles";
const App = () => {
  const [imageIndex, setImageIndex] = useState(1);

  // load all images in memory
  useEffect(() => {
    for (let index = 1; index <= 36; index++) {
      const image = new Image();
      image.src = `./static/${index}.webp`;
    }
  }, []);

  return (
    <Styles.Main>
      <Styles.Title>SLIDER</Styles.Title>

      <img src={`./static/${imageIndex}.webp`} alt="" />
      <Styles.Slider
        type="range"
        value={imageIndex}
        onChange={(e) => setImageIndex(e.target.value)}
        min="1"
        max="36"
        step="1"
      />
    </Styles.Main>
  );
};

export default App;
