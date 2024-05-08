#!/usr/bin/env node

import { runGame } from '../src/gamesEngine.js';
import { generateQuestion, getCorrectAnswer } from '../src/games/brain-prime.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no"';

runGame(gameDescription, generateQuestion, getCorrectAnswer);