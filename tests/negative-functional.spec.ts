import { test, expect } from '@playwright/test';
import { TranslatorPage } from '../pages/TranslatorPage';
import { negativeTestScenarios } from '../test-data/testScenarios';

negativeTestScenarios.forEach((scenario) => {
  test(`Negative Test: ${scenario.id}`, async ({ page }) => {

    const translatorPage = new TranslatorPage(page);
    
    await translatorPage.goto();
    await translatorPage.enterText(scenario.input);
    await translatorPage.waitForOutputUpdate();
    
    const actualOutput = await translatorPage.getOutput();

    if (scenario.expected) {
      expect(actualOutput.trim()).not.toBe(scenario.expected.trim());
    }
    
    console.log(`Test: ${scenario.id}`);
    console.log(`Input: ${scenario.input}`);
    console.log(`Expected NOT to be: ${scenario.expected || 'Not specified'}`);
    console.log(`Output: ${actualOutput}`);
    console.log('---');
  });
});
