#!/usr/bin/env node

import { runGame } from '../src/gamesEngine.js';
import { generateQuestion, getCorrectAnswer } from '../src/games/brain-progression.js';

const gameDescription = 'What number is missing in the progression?';

runGame(gameDescription, generateQuestion, getCorrectAnswer);
