# IT3040 - ITPM Assignment 1
## Playwright Automation Tests – SwiftTranslator

### Student Registration Number
IT23375178

# Swift Translator Automation Tests

This project contains Playwright automation tests for the Swift Translator website (https://www.swifttranslator.com/), which converts Singlish text to Sinhala.

## Project Structure

```
qan/
├── pages/
│   └── TranslatorPage.ts          # Page Object Model for the translator page
├── test-data/
│   └── testScenarios.ts            # Test data containing all test scenarios
├── tests/
│   ├── positive-functional.spec.ts # Positive functional test cases
│   ├── negative-functional.spec.ts # Negative functional test cases
│   └── ui-functional.spec.ts       # UI-related test cases
├── playwright.config.ts             # Playwright configuration
├── package.json                     # Project dependencies
└── README.md                        # This file
```

## Page Object Model (POM)

This project follows the Page Object Model design pattern:

- **TranslatorPage**: Contains all page elements and methods for interacting with the Swift Translator website
- All test files use the `TranslatorPage` class to interact with the page
- This ensures maintainability and reusability of page interactions

## Test Coverage

### Positive Functional Tests (24+ scenarios)
- Simple, compound, and complex sentences
- Interrogative and imperative forms
- Positive and negative sentence forms
- Greetings, requests, and responses
- Tense variations (past, present, future)
- Pronoun variations
- Mixed language content (Singlish + English)
- Punctuation and formatting
- Various input lengths (S, M, L)

### Negative Functional Tests (10+ scenarios)
- Chat-style shorthand (Thx, u, gr8)
- Joined words without spaces
- Very long inputs
- Special characters
- Edge cases and error conditions

### UI Functional Tests
- Real-time output updates
- Clear button functionality

## Installation

1. Make sure you have Node.js installed (version 16 or higher)

2. Install dependencies:
```bash
npm install
```

3. Install Playwright browsers:
```bash
npx playwright install
```

## Running Tests

### Run all tests
```bash
npm test
```

### Run tests in headed mode (see the browser)
```bash
npm run test:headed
```

### Run tests in debug mode
```bash
npm run test:debug
```

### Run tests with UI mode
```bash
npm run test:ui
```

### View test report
```bash
npm run test:report
```

## Test Execution Steps

For functional test cases, the standard execution steps are:

1. Navigate to https://www.swifttranslator.com/
2. Enter Singlish text in the input field
3. Observe that Sinhala output is generated automatically in real-time
4. Record the generated Sinhala output as the Actual Output

## Test Case Naming Convention

- **Positive functional tests**: `Pos_Fun_XXXX`
- **Negative functional tests**: `Neg_Fun_XXXX`
- **Positive UI tests**: `Pos_UI_XXXX`
- **Negative UI tests**: `Neg_UI_XXXX`

## Input Length Types

- **S**: ≤ 30 characters
- **M**: 31–299 characters
- **L**: ≥ 300 characters

## Test Categories

Tests cover the following categories:

1. **Input Type / Domain**
   - Daily language usage
   - Greeting / request / response
   - Word combination / phrase pattern
   - Mixed Singlish + English
   - Slang / informal language
   - Typographical error handling
   - Names / places / common English words
   - Punctuation / numbers
   - Formatting (spaces / line breaks / paragraph)
   - Empty/cleared input handling

2. **Sentence / Grammar Focus**
   - Simple sentence
   - Compound sentence
   - Complex sentence
   - Interrogative (question)
   - Imperative (command)
   - Present tense / Past tense / Future tense
   - Negation (negative form)
   - Pronoun variation (I/you/we/they)
   - Plural form

3. **Quality Focus**
   - Accuracy validation
   - Robustness validation
   - Formatting preservation
   - Real-time output update behavior
   - Error handling / input validation

## Notes

- The application is designed for standard Singlish-to-Sinhala transliteration
- Chat-style shorthand (e.g., "Thx", "u", "gr8") may not be handled correctly
- Test results are logged to the console for manual verification
- Screenshots and videos are captured on test failures
- HTML reports are generated after test execution

## Troubleshooting

If tests fail:

1. Check your internet connection
2. Verify the website is accessible: https://www.swifttranslator.com/
3. Check browser installation: `npx playwright install`
4. Review test logs and screenshots in the `test-results/` directory
