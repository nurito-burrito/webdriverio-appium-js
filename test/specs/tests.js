const calculator = require("../pageobjects/calculator");

describe("Test basic calculator functions", () => {
  beforeEach(async () => {
    await calculator.clear.click();
    await expect(calculator.emptyDisplay).toBeDisplayed();
  });

  it("test addition", async () => {
    await calculator.one.click();
    await calculator.plus.click();
    await calculator.one.click();
    await expect(calculator.display).toHaveText("1+1");
    await expect(calculator.resultPreview).toHaveText("2");
    await calculator.equals.click();
    await expect(calculator.resultDisplay).toHaveText("2");
  });

  it("test substraction", async () => {
    await calculator.nine.click();
    await calculator.minus.click();
    await calculator.eight.click();
    await expect(calculator.display).toHaveText("9−8");
    await expect(calculator.resultPreview).toHaveText("1");
    await calculator.equals.click();
    await expect(calculator.resultDisplay).toHaveText("1");
  });

  it("test multiplication", async () => {
    await calculator.five.click();
    await calculator.multiply.click();
    await calculator.six.click();
    await expect(calculator.display).toHaveText("5×6");
    await expect(calculator.resultPreview).toHaveText("30");
    await calculator.equals.click();
    await expect(calculator.resultDisplay).toHaveText("30");
  });

  it("test division", async () => {
    await calculator.nine.click();
    await calculator.divide.click();
    await calculator.three.click();
    await expect(calculator.display).toHaveText("9÷3");
    await expect(calculator.resultPreview).toHaveText("3");
    await calculator.equals.click();
    await expect(calculator.resultDisplay).toHaveText("3");
  });
});
