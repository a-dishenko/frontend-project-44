#!/usr/bin/env node
import { greeting, evenGame } from '../src/even.js';

const name = greeting();
evenGame(name);
