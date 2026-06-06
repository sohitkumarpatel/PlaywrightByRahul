// @ts-check
import { defineConfig, devices } from '@playwright/test';

const Config=({
  testDir: './tests',
  timeout:40*1000,
  expect:{
    timeout:5000,
  },
  reporter:'html',
  use: {
    browserName: 'chromium',
    headless: true,
    
  },

});
module.exports = Config;

