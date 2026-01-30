import { Page, Locator, expect } from '@playwright/test';

const BASE_URL = 'https://www.swifttranslator.com';

export class TranslatorPage {
  readonly page: Page;
  readonly input: Locator;
  readonly output: Locator;
  readonly clearButton: Locator;
  readonly helpButton: Locator;
  readonly helpModal: Locator;

  constructor(page: Page) {
    this.page = page;
    this.input = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });
    this.output = page.locator('.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap');
    this.clearButton = page.getByLabel('Clear');
    this.helpButton = page.getByRole('button', { name: 'Help' });
    this.helpModal = page.getByRole('heading', { name: 'Singlish Character Mapping' });
  }

  async goto() {
    await this.page.goto(BASE_URL);
    await expect(this.input).toBeVisible();
  }

  async enterText(text: string) {
    await this.input.fill(text);
  }

  async getOutput(): Promise<string> {
    const text = await this.output.textContent();
    return text || '';
  }

  async waitForOutputUpdate(previousText?: string) {
    if (typeof previousText === 'string') {
      await expect(this.output).not.toHaveText(previousText, { timeout: 5000 });
    } else {
      await expect(this.output).not.toHaveText('', { timeout: 5000 });
    }
  }

  async clearAll() {
    await this.clearButton.click();
    await expect(this.input).toBeEmpty();
    await expect(this.output).toBeEmpty();
  }

  async clickHelp() {
    await this.helpButton.click();
  }

  async verifyHelpModalVisible() {
    await expect(this.helpModal).toBeVisible();
  }
}
