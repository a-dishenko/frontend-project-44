#!/usr/bin/env node
import { greeting } from '../src/index.js';
import evenGame from '../src/even.js';

const name = greeting();
evenGame(name);