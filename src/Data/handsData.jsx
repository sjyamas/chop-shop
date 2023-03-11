/*
w = win
l = loss
p = push
bw = blackjack win
bl = blackjack loss
dw = double down win
dl = double down loss
spp = split push push
swl = split win loss
sww = split win win
swp = split win push
sll = split loss loss
slp = split loss push
*/

export const testHands = [
  {
    sessionID: 1,
    startMoney: 1000,
    dateTime: '2023-03-07T16:41:27.271Z',
    hands: [
      { handNum: 0, bet: 1000, outcome: "w", outBal: 2000, betPM: 1},
      { handNum: 1, bet: 1000, outcome: "w", outBal: 3000, betPM: 2 },
      { handNum: 2, bet: 1000, outcome: "l", outBal: 2000, betPM: 1 },
      { handNum: 3, bet: 1000, outcome: "dw", outBal: 4000, betPM: 3 },
      { handNum: 4, bet: 1000, outcome: "dl", outBal: 2000, betPM: 1 },
      { handNum: 5, bet: 1000, outcome: "w", outBal: 3000, betPM: 2 },
      { handNum: 6, bet: 1000, outcome: "w", outBal: 4000, betPM: 3 },
      { handNum: 7, bet: 1000, outcome: "p", outBal: 4000, betPM: 3 },
      { handNum: 8, bet: 1000, outcome: "sll", outBal: 2000, betPM: 1 },
      { handNum: 0, bet: 1000, outcome: "w", outBal: 2000, betPM: 1},
      { handNum: 1, bet: 1000, outcome: "w", outBal: 3000, betPM: -2 },
      { handNum: 2, bet: 1000, outcome: "l", outBal: 2000, betPM: 1 },
      { handNum: 3, bet: 1000, outcome: "dw", outBal: 4000, betPM: 3 },
      { handNum: 4, bet: 1000, outcome: "dl", outBal: 2000, betPM: 1 },
      { handNum: 5, bet: 1000, outcome: "w", outBal: 3000, betPM: 2 },
      { handNum: 6, bet: 1000, outcome: "w", outBal: 4000, betPM: 3 },
      { handNum: 7, bet: 1000, outcome: "p", outBal: 4000, betPM: 3 },
      { handNum: 8, bet: 1000, outcome: "sll", outBal: 2000, betPM: 1 },
      { handNum: 0, bet: 1000, outcome: "w", outBal: 2000, betPM: 0},
      { handNum: 1, bet: 1000, outcome: "w", outBal: 3000, betPM: 2 },
      { handNum: 2, bet: 1000, outcome: "l", outBal: 2000, betPM: 1 },
      { handNum: 3, bet: 1000, outcome: "dw", outBal: 4000, betPM: 3 },
      { handNum: 4, bet: 1000, outcome: "dl", outBal: 2000, betPM: -1 },
      { handNum: 5, bet: 1000, outcome: "w", outBal: 3000, betPM: 0 },
      { handNum: 6, bet: 1000, outcome: "w", outBal: 4000, betPM: 3 },
      { handNum: 7, bet: 1000, outcome: "p", outBal: 4000, betPM: -3 },
      { handNum: 8, bet: 1000, outcome: "sll", outBal: 2000, betPM: 1 },
      { handNum: 0, bet: 1000, outcome: "w", outBal: 2000, betPM: 1},
      { handNum: 1, bet: 1000, outcome: "w", outBal: 3000, betPM: 2 },
      { handNum: 2, bet: 1000, outcome: "l", outBal: 2000, betPM: 1 },
      { handNum: 3, bet: 1000, outcome: "dw", outBal: 4000, betPM: 3 },
      { handNum: 4, bet: 1000, outcome: "dl", outBal: 2000, betPM: 1 },
      { handNum: 5, bet: 1000, outcome: "w", outBal: 3000, betPM: 2 },
      { handNum: 6, bet: 1000, outcome: "w", outBal: 4000, betPM: 3 },
      { handNum: 7, bet: 1000, outcome: "p", outBal: 4000, betPM: 3 },
      { handNum: 8, bet: 1000, outcome: "sll", outBal: 2000, betPM: 1 },
    ],
  },
  {
    sessionID: 2,
    startMoney: 1000,
    dateTime: '2023-03-08T16:41:27.271Z',
    hands: [
      { handNum: 0, bet: 1000, outcome: "w", outBal: 2000, betPM: 1},
      { handNum: 1, bet: 1000, outcome: "w", outBal: 3000, betPM: 2 },
      { handNum: 2, bet: 1000, outcome: "l", outBal: 2000, betPM: 1 },
      { handNum: 3, bet: 1000, outcome: "dw", outBal: 4000, betPM: 3 },
      { handNum: 4, bet: 1000, outcome: "dl", outBal: 2000, betPM: 1 },
      { handNum: 5, bet: 1000, outcome: "w", outBal: 3000, betPM: 2 },
      { handNum: 6, bet: 1000, outcome: "w", outBal: 4000, betPM: 3 },
      { handNum: 7, bet: 1000, outcome: "p", outBal: 4000, betPM: 3 },
      { handNum: 8, bet: 1000, outcome: "sll", outBal: 2000, betPM: 1 },
      { handNum: 0, bet: 1000, outcome: "w", outBal: 2000, betPM: 1},
      { handNum: 1, bet: 1000, outcome: "w", outBal: 3000, betPM: -2 },
      { handNum: 2, bet: 1000, outcome: "l", outBal: 2000, betPM: 1 },
      { handNum: 3, bet: 1000, outcome: "dw", outBal: 4000, betPM: 3 },
      { handNum: 4, bet: 1000, outcome: "dl", outBal: 2000, betPM: 1 },
      { handNum: 5, bet: 1000, outcome: "w", outBal: 3000, betPM: 2 },
      { handNum: 6, bet: 1000, outcome: "w", outBal: 4000, betPM: 3 },
      { handNum: 7, bet: 1000, outcome: "p", outBal: 4000, betPM: 3 },
      { handNum: 8, bet: 1000, outcome: "sll", outBal: 2000, betPM: 1 },
      { handNum: 0, bet: 1000, outcome: "w", outBal: 2000, betPM: 0},
      { handNum: 1, bet: 1000, outcome: "w", outBal: 3000, betPM: 2 },
      { handNum: 2, bet: 1000, outcome: "l", outBal: 2000, betPM: 1 },
      { handNum: 3, bet: 1000, outcome: "dw", outBal: 4000, betPM: 3 },
      { handNum: 4, bet: 1000, outcome: "dl", outBal: 2000, betPM: -1 },
      { handNum: 5, bet: 1000, outcome: "w", outBal: 3000, betPM: 0 },
      { handNum: 6, bet: 1000, outcome: "w", outBal: 4000, betPM: 3 },
      { handNum: 7, bet: 1000, outcome: "p", outBal: 4000, betPM: -3 },
      { handNum: 8, bet: 1000, outcome: "sll", outBal: 2000, betPM: 1 },
      { handNum: 0, bet: 1000, outcome: "w", outBal: 2000, betPM: 1},
      { handNum: 1, bet: 1000, outcome: "w", outBal: 3000, betPM: 2 },
      { handNum: 2, bet: 1000, outcome: "l", outBal: 2000, betPM: 1 },
      { handNum: 3, bet: 1000, outcome: "dw", outBal: 4000, betPM: 3 },
      { handNum: 4, bet: 1000, outcome: "dl", outBal: 2000, betPM: 1 },
      { handNum: 5, bet: 1000, outcome: "w", outBal: 3000, betPM: 2 },
      { handNum: 6, bet: 1000, outcome: "w", outBal: 4000, betPM: 3 },
      { handNum: 7, bet: 1000, outcome: "p", outBal: 4000, betPM: 3 },
      { handNum: 8, bet: 1000, outcome: "sll", outBal: 2000, betPM: 1 },
    ],
  },
];
