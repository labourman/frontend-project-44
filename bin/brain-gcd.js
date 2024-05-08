#!/usr/bin/env node

import { runGame } from '../src/gamesEngine.js';
import { generateQuestion, getCorrectAnswer } from '../src/games/brain-gcd.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

runGame(gameDescription, generateQuestion, getCorrectAnswer);