#!/usr/bin/env node

import { runGame } from '../src/gamesEngine.js';
import { generateQuestion, getCorrectAnswer } from '../src/games/brain-even.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

runGame(gameDescription, generateQuestion, getCorrectAnswer);
