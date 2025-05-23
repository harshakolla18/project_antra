const model = {
    score: 0,
    timeLeft: 30,
    intervalId: null,
    moleIntervalId: null,
    blocks: Array.from({ length: 12 }, (_, i) => ({
      id: i,
      hasMole: false,
    }))
  };
  