import { useEffect, useState } from "react";

const MIN_WIDTH = 40;
const MIN_HEIGHT = 20;
const MAX_WIDTH = 200;
const MAX_HEIGHT = 100;
const STEP = 10;

export default function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      <PulsatingButton />
    </div>
  );
}

function getEntryPoint(min, max) {
  return Math.floor(Math.random() * ((max - min) / STEP + 1)) * STEP + min;
}

const PulsatingButton = () => {
  const [width, setWidth] = useState(getEntryPoint(MIN_WIDTH, MAX_WIDTH));
  const [height, setHeight] = useState(getEntryPoint(MIN_HEIGHT, MAX_HEIGHT));

  // manage puls state with variable isGrowing
  const [isGrowing, setIsGrowing] = useState(true);

  // Triggered to update width and height value whenever change in isGrowing value
  useEffect(() => {
    const interval = setInterval(() => {
      setWidth((prevWidth) => {
        const newWidth = isGrowing ? prevWidth + STEP : prevWidth - STEP;
        return newWidth;
      });

      setHeight((prevHeight) => {
        const newHeight = isGrowing ? prevHeight + STEP : prevHeight - STEP;
        return newHeight;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isGrowing]);

  // Triggered to update value of pulse state isGrowing whenever change in either height/width
  useEffect(() => {
    if (width >= MAX_WIDTH || height >= MAX_HEIGHT) {
      setIsGrowing(false);
    }
    if (width <= MIN_WIDTH || height <= MIN_HEIGHT) {
      setIsGrowing(true);
    }
  }, [width, height]);

  const handleClick = () => {
    setIsGrowing((prev) => !prev);
  };

  return (
    <>
      <div style={{ height: `${MAX_HEIGHT + 100}px` }}>
        <button
          style={{
            width: `${width}px`,
            height: `${height}px`,
            transition: "width 1s, height 1s",
            backgroundImage:
              "linear-gradient(to top right, #e6c754 , #de5a5d, #8630c2)",
            borderRadius: "10px",
            marginTop: "50px",
            marginBottom: "50px",
          }}
          onClick={handleClick}
        >
          {isGrowing ? "Shrink" : "Grow"}
        </button>
      </div>
      <div
        style={{
          position: "absolute",
          bottom: "-3em",
        }}
      >
        <div>
          <strong>Status:</strong> {isGrowing ? "Growing" : "Shrinking"}
        </div>
        <div>
          <strong>Width:</strong> {width}
        </div>
        <div>
          <strong>Height:</strong> {height}
        </div>
      </div>
    </>
  );
};
