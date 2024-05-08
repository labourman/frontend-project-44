#!/usr/bin/env node

import { runGame } from '../src/gamesEngine.js';
import { generateQuestion, getCorrectAnswer } from '../src/games/brain-calc.js';

const gameDescription = 'What is the result of the expression?';

runGame(gameDescription, generateQuestion, getCorrectAnswer);