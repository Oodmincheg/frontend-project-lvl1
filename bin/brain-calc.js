#!/usr/bin/env node

import playGame from '../src/index.js';
import calcGame from '../src/games/calc-game.js';

console.log('Welcome to the Brain Games!');
playGame(calcGame);
