"use client";

import Window from "@/app/components/Window";
import React, { useEffect, useRef, useState } from "react";

import { useInterval } from "./useInterval";
import {
  FaArrowUp,
  FaArrowDown,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";

import { useGlobalContext } from "@/app/Context/appcontext";
import useWindowSize from "@/app/hooks/useWindowSize";
const initialSnake = [
  [4, 10],
  [4, 10],
];
const initialApple = [14, 10];
const scale = 50;
const timeDelay = 100;
const canvasX = 1000 ;
const canvasY = 1000
const Snake: React.FC = () => {
  const { windows } = useGlobalContext();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [snake, setSnake] = useState(initialSnake);
  const [apple, setApple] = useState(initialApple);
  const [direction, setDirection] = useState([0, -1]);
  const [delay, setDelay] = useState<number | null>(null);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const isMobile = useWindowSize();
 

  useInterval(() => runGame(), delay);
  useEffect(() => {
    // Access localStorage only after the component mounts
    const storedHighScore = localStorage.getItem("snakeScore");
    if (storedHighScore) {
      setHighScore(parseInt(storedHighScore));
    }
  }, []);
  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.setTransform(scale, 0, 0, scale, 0, 0); // Check if this transform is correct
        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight); // Clearing the entire window or just the canvas area?
        ctx.fillStyle = "#a3d001";
        snake.forEach(([x, y]) => ctx.fillRect(x, y, 1, 1)); // Check if snake coordinates are correct

        ctx.fillStyle = "red"; // Example color for apple
        ctx.fillRect(apple[0], apple[1], 1, 1); // Draw apple as a red square
      }
    }
  }, [snake, apple, gameOver]); // Removed isImageLoaded as it's not applicable for fillRect

  function handleSetScore() {
    if (score > highScore) {
      setHighScore(score);
      localStorage.setItem("snakeScore", JSON.stringify(score));
    }
  }

  function play() {
    setSnake(initialSnake);
    setApple(initialApple);
    setDirection([1, 0]);
    setDelay(timeDelay);
    setScore(0);
    setGameOver(false);
  }

  function checkCollision(head: number[]) {
    for (let i = 0; i < head.length; i++) {
      if (head[i] < 0 || head[i] * scale >= canvasX) return true;
    }
    for (const s of snake) {
      if (head[0] === s[0] && head[1] === s[1]) return true;
    }
    return false;
  }

  function appleAte(newSnake: number[][]) {
    let coord = apple.map(() => Math.floor((Math.random() * canvasX) / scale));
    if (newSnake[0][0] === apple[0] && newSnake[0][1] === apple[1]) {
      let newApple = coord;
      setScore(score + 1);
      setApple(newApple);
      return true;
    }
    return false;
  }

  function runGame() {
    const newSnake = [...snake];
    const newSnakeHead = [
      newSnake[0][0] + direction[0],
      newSnake[0][1] + direction[1],
    ];
    newSnake.unshift(newSnakeHead);
    if (checkCollision(newSnakeHead)) {
      setDelay(null);
      setGameOver(true);
      handleSetScore();
    }
    if (!appleAte(newSnake)) {
      newSnake.pop();
    }
    setSnake(newSnake);
  }

  function changeDirection(e: React.KeyboardEvent<HTMLDivElement>) {
    let newDirection;
    switch (e.key) {
      case "ArrowLeft":
        newDirection = [-1, 0];
        break;
      case "ArrowUp":
        newDirection = [0, -1];
        break;
      case "ArrowRight":
        newDirection = [1, 0];
        break;
      case "ArrowDown":
        newDirection = [0, 1];
        break;
      default:
        return;
    }

    // Check if the new direction is the opposite of the current direction
    if (
      newDirection[0] === -direction[0] &&
      newDirection[1] === -direction[1]
    ) {
      // Prevent the snake from reversing directly into itself
      return;
    }

    setDirection(newDirection);
  }

  return (
    <Window
      windowWidth="70vw"
      windowHeight="70vh"
      id={windows.snakeWindow.id}
      title="snake"
      defLeft={isMobile?"5vw":"15vw"}
    >
      <div
        className="gameContainer bg-main h-full w-full flex justify-center items-center gap-8 "
        onKeyDown={(e) => changeDirection(e)}
        tabIndex={0}
      >
        <div className="controlPanel flex lg:flex-col items-center justify-between gap-8 absolute bottom-0  lg:relative">
          <div className="scoreBox">
            <h2>Score: {score}</h2>
            <h2>High Score: {highScore}</h2>
          </div>
          <button
            onClick={play}
            className="playButton bg-forth border border-third shadow-md px-6 py-2"
          >
            Play
          </button>
        </div>
        <canvas
          className="playArea bg-black lg:w-[585px] lg:h-[440px] w-[340px] h-[340px]"
          ref={canvasRef}
          width={`${canvasX}px`}
          height={`${canvasY}px`}
        />
        {gameOver && (
          <div className="gameOver fixed top-10rem left-10rem text-third text-3xl">
            Game Over
          </div>
        )}
        <div className="lg:flex lg:flex-col items-center justify-between  gap-3 w-[10rem] hidden">
          <p>
            {" "}
            Click <span className="text-terminal_text">Play</span> for start the game, use your
            <span className="flex text-terminal_text">
              <FaArrowUp />
              <FaArrowLeft />
              <FaArrowDown />
              <FaArrowRight></FaArrowRight>
            </span>
            for play
          </p>
          <p>Note: Walls can be deadly</p>
        </div>
      </div>
    </Window>
  );
};

export default Snake;
