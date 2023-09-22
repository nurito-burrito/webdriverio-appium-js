# webdriverio-appium-js

## About
Currently, this framework has been developed to run scripts in ANDROID platform with an emulator.
The calculator app APK used in this project can be found at: https://m.apkpure.com/calculator/com.google.android.calculator

## Tech Stack
- Appium - This is the node server which interacts with the mobile devices
- WebdriverIO - It is the selenium webdriver api bindings for node.js, It has a very simple api which could be used to automate web & browser apps in a fast and scalable way.
- JavaScript - (JS) is a lightweight interpreted (or just-in-time compiled) programming language with first-class functions.

# Getting Started
## Pre-requisites
1. NodeJS is installed globally in the system. https://nodejs.org/en/download/

2. JAVA(jdk) installed in the system.

3. Andriod(sdk) installed in the system.

4. Set JAVA_HOME & ANDROID_HOME paths correctly in the system.

Tip: Install ```npm install -g appium-doctor``` and run it from the command-line which checks if your java jdk and android sdk paths are set correctly or not.

# Installation
## Setup Scripts
Clone the repository into a folder
Go inside the folder and run the following command from terminal/command prompt
```npm install``` 
All the dependencies from package.json would be installed in node_modules folder.

# Run Tests

You will first need to create and open an Android emulator (https://developer.android.com/studio/run/managing-avds) to match with the current capabilities set in config.js. 
Or change it accordingly with whichever emulator or real device you'd like to use.

```
capabilities: [
    {
      platformName: "Android",
      "appium:deviceName": "Pixel 7",
      "appium:platformVersion": "13.0",
      "appium:automationName": "UiAutomator2",
      "appium:app": path.join(
        process.cwd(),
        "./app/android/Calculator_8.4.1.apk"
      ),
    },
  ],
```
To run the tests:

```npx wdio``` or ```npm run wdio```

https://github.com/nurito-burrito/webdriverio-appium-js/assets/44758040/f452c473-7a02-4ec7-a506-209651209f1e


# Reports
Currently, this project has been integrated with Allure-Reports. WebdriverIO's Allure Reporter helps us generate detailed reports of our mobile automated tests. 
Once the test execution is finished you will find the allure-results folder generated automatically with screenshots of the failure attached.
Then you would have to run the following command to generate an HTML Report

```npx allure generate allure-results --clean && npx allure open```

https://github.com/nurito-burrito/webdriverio-appium-js/assets/44758040/4f9a427d-2da8-47c4-9146-d813710e4127

