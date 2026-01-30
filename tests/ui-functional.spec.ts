import { test, expect } from '@playwright/test';
import { TranslatorPage } from '../pages/TranslatorPage';

let translatorPage: TranslatorPage;

test.beforeEach(async ({ page }) => {
  translatorPage = new TranslatorPage(page);
  await translatorPage.goto();
});

test.describe('UI Tests - Translator Page', () => {

 

  test('Pos_UI_0002 - Clear button resets input and output', async () => {
    await translatorPage.enterText('mata bath oonee.');

    const before = await translatorPage.getOutput();
    await translatorPage.waitForOutputUpdate(before);

    const outputBeforeClear = await translatorPage.getOutput();
    expect(outputBeforeClear).not.toBe('');

    await translatorPage.clearAll();

    await expect(translatorPage.input).toBeEmpty();
    await expect(translatorPage.output).toBeEmpty();
  });

  test('Pos_UI_0003 - Page elements visible on load', async () => {
    await expect(translatorPage.input).toBeVisible();
    await expect(translatorPage.input).toBeEnabled();
    await expect(translatorPage.output).toBeVisible();
  });

  test('Pos_UI_0004 - Help section accessibility', async () => {
    await translatorPage.clickHelp();
    await translatorPage.verifyHelpModalVisible();
  });

  test('Neg_UI_0002 - Rapid Clear clicks should not crash UI', async () => {
    // Ensure input is empty
    await expect(translatorPage.input).toBeVisible();
    await expect(translatorPage.input).toHaveValue('');

    // Click Clear button multiple times rapidly
    for (let i = 0; i < 5; i++) {
      await translatorPage.clearAll();
    }

    // UI should remain stable
    await expect(translatorPage.input).toHaveValue('');
    await expect(translatorPage.output).toBeVisible();

    // Optional strict check (only if output clears in your app)
    // await expect(translatorPage.output).toHaveText('');
  });

});
