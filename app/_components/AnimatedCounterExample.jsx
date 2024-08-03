"use client"

import { useEffect, useState } from 'react';
import { AnimatedCounter } from 'react-animated-counter';
import { CircleProgress } from 'react-gradient-progress'

const AnimatedCounterExample = () => {

  const [counterValue, setCounterValue] = useState(0);
  const [direction, setDirection] = useState("up");

  useEffect(() => {
    const updateTimer = setInterval(() => {
      setCounterValue((prev) => {
        if (prev >= 100) {
          setDirection("down");
          return prev - 5;
        } else if (prev <= 0) {
          setDirection("up");
          return prev + 5;
        }

        return direction === "up" ? prev + 5 : prev - 5;
      });
    }, 800);

    return () => clearInterval(updateTimer);
  }, [direction]);

  return (
    <>
      <AnimatedCounter
        value={counterValue}
        color="black"
        fontSize="40px"
        includeDecimals={false}
        // decimalPrecision={0}
        containerStyles={{
          position: "flex",
          justifyContent: "start",
          alignItems: "start",
        }}
      />
      <CircleProgress
        primaryColor={["#f83cb5","#0782fd"]}
        hidePercentageText={false}
        percentage={counterValue}
      />
    </>
  )
}

export default AnimatedCounterExample;
