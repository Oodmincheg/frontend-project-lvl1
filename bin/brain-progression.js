#!/usr/bin/env node

import playGame from '../src/index.js';
import progressionGame from '../src/games/progression-game.js';

console.log('Welcome to the Brain Games!');
playGame(progressionGame);
