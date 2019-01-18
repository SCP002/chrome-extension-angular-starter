## Chrome Extension Angular Starter

> Sample google chrome extension for Angular 7.

## Getting started

Clone repository:

`git clone https://github.com/SCP002/chrome-extension-angular-starter.git`

Install dependencies:

`npm install`

Install gulp-cli globally:

`npm install -g gulp-cli`

## How to use

To build, in the project root directory run command:

`gulp`

Go to `chrome://extensions` with google chrome, toggle developer mode, 
click `Load unpacked` and point `dist` directrory.

---
Background page - `src/app/background/*`.

Options page - `src/app/options/*`.

Popup page - `src/app/popup/*`.

Content script - `src/app/content-script.ts`.

Manifest file - `src/manifest.json`.
