#!/usr/bin/env node

import playGame from '../src/index.js';
import gcdGame from '../src/games/gcd-game.js';

console.log('Welcome to the Brain Games!');
playGame(gcdGame);
