#!/usr/bin/env node
import { greeting } from '../src/index.js';
import calcGame from '../src/calc.js';

const name = greeting();
calcGame(name);
