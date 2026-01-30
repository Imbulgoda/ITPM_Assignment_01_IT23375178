import { test, expect } from '@playwright/test';
import { TranslatorPage } from '../pages/TranslatorPage';
import { positiveTestScenarios } from '../test-data/testScenarios';

positiveTestScenarios.forEach((scenario) => {
  test(`Positive Test: ${scenario.id}`, async ({ page }) => {

    const translatorPage = new TranslatorPage(page);

    await translatorPage.goto();
    await translatorPage.enterText(scenario.input);
    await translatorPage.waitForOutputUpdate();
    
    const actualOutput = await translatorPage.getOutput();

    if (scenario.expected) {
      expect(actualOutput.trim()).toBe(scenario.expected.trim());
    }

    console.log(`Test: ${scenario.id}`);
    console.log(`Input: ${scenario.input}`);
    console.log(`Expected to be: ${scenario.expected || 'Not specified'}`);
    console.log(`Output: ${actualOutput}`);
    console.log('---');
  });
});
