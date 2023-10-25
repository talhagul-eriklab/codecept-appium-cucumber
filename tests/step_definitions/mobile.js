const { pause } = require("codeceptjs");

const { I } = inject();

  Given('I am open the app', () => {
    I.amOnPage('/')
    I.wait(2);
    I.saveScreenshot('1.png')
    // pause();
  });

  When('I perform some action', () => {
    I.tap('#com.google.android.calculator:id/digit_5');
    I.tap('~plus');
  });

  Then('I should see the expected result', () => {
    I.tap('#com.google.android.calculator:id/digit_2');
    I.tap('~equals');
    I.saveScreenshot('2.png')
  });

  After(async ({I}) => {
    I.switchToNative();
  });