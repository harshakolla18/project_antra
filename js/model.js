const model = {
  score: 0,
  timeLeft: 30,
  intervalId: null,
  moleIntervalId: null,
  snakeIntervalId: null,
  currentSnakeBlock: null,
  blocks: Array.from({ length: 12 }, (_, i) => ({
    id: i,
    hasMole: false,
    hasSnake: false,
  })),
};
