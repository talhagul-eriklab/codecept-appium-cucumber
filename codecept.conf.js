const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './tests/features/*.feature',
  output: './output',
  gherkin: {
    features: './tests/features/*.feature',
    steps: './tests/step_definitions/*.js'
  },
  helpers: {
    Playwright: {
      browser: 'chromium',
      url: 'https://www.google.com',
      show: true
    },
    // Appium: {
    //   url: 'http://localhost:4723/wd/hub',
    //   platform: 'Android',
    //   device: 'emulator-5554',
    //   desiredCapabilities: {
    //     platformName: 'Android', 
    //     platformVersion: '10.0',
    //     automationName: 'UiAutomator2', 
    //     deviceName: 'emulator-5554',
    //     app: apk dosya yolu,  
    //   }
    // },
  },
  include: {
    I: './steps_file.js'
  },
  name: 'codecept-js',
  plugins: {
    cucumber: {
      require: '/tests/step_definitions/*.js',
      backtrace: false,
      requireModule: ['@babel/register'],
      dryRun: false,
      failFast: false,
      format: ['json:output/cucumber.json'], 
      colorsEnabled: true,
      coloredLogs: true,
      log: true,
      debug: false,
      parallel: false,
      profile: [],
      strict: false,
      tags: [],
      timeout: 60000,
    },
    
  },

}