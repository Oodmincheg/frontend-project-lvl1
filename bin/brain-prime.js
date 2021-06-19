#!/usr/bin/env node

import playGame from '../src/index.js';
import primeGame from '../src/games/prime-game.js';

console.log('Welcome to the Brain Games!');
playGame(primeGame);
