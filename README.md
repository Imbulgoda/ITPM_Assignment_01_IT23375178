# IT3040 – ITPM Assignment 1  
## Playwright Automation Tests – Swift Translator

### Student Registration Number  
IT23375178

### Student Name  
I.G.I.N Imbulgoda

---

## Introduction

This assignment focuses on automating test cases for the Swift Translator website  
(https://www.swifttranslator.com/).

The main objective is to test how accurately the system converts *Singlish input into Sinhala output* and to check the stability and usability of the user interface.

All test cases have been automated using Playwright.

---

## Project Overview

- Tested application: Swift Translator  
- Input language: Singlish  
- Output language: Sinhala  
- Automation tool: Playwright  
- Design pattern used: Page Object Model (POM)

---

## Project Structure

qan/
├── pages/
│ └── TranslatorPage.ts
├── test-data/
│ └── testScenarios.ts
├── tests/
│ ├── positive-functional.spec.ts
│ ├── negative-functional.spec.ts
│ └── ui-functional.spec.ts
├── playwright.config.ts
├── package.json
└── README.md


---

## Page Object Model (POM)

- TranslatorPage.ts contains all page elements and actions
- All test cases use this page class
- This approach improves code reusability and maintainability

---

## Test Coverage

### Positive Functional Tests
- Simple, compound, and complex sentences  
- Interrogative and imperative sentences  
- Positive and negative sentence forms  
- Greetings, requests, and responses  
- Tense variations (past, present, future)  
- Pronoun variations  
- Mixed Singlish + English inputs  
- Short, medium, and long inputs  

### Negative Functional Tests
- Incorrect sentence formats  
- Joined words without spaces  
- Very long inputs  
- Special characters and edge cases  

### UI Functional Tests
- Page elements visibility  
- Real-time output generation  
- Clear button functionality  
- UI stability during rapid actions  

---

## Installation

1. Install Node.js (version 16 or higher)

2. Install dependencies:
```bash
npm install
Install Playwright browsers:

npx playwright install
Running Tests
Run all tests:

npm test
Run tests in headed mode:

npm run test:headed
Run tests in debug mode:

npm run test:debug
Run tests using Playwright UI:

npm run test:ui
View test report:

npm run test:report
Test Execution Steps
Navigate to https://www.swifttranslator.com/

Enter Singlish text into the input field

Observe automatic Sinhala output generation

Compare actual output with expected output


## Test Case Naming Convention
Positive Functional Tests: Pos_Fun_XXXX

Negative Functional Tests: Neg_Fun_XXXX

Positive UI Tests: Pos_UI_XXXX

Negative UI Tests: Neg_UI_XXXX


##Notes

The application is designed for standard Singlish-to-Sinhala conversion

Informal chat-style abbreviations may not convert correctly

Screenshots and videos are captured on test failures

HTML reports are generated after test execution

Troubleshooting

If tests fail:

Check internet connection

Verify website accessibility

Run npx playwright install