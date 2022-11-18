const puppeteer = require("puppeteer");

test("Test: Getting the information of student through the user interface", async () => {
  const browser = await puppeteer.launch({
    handless: false,
    slowMo: 80,
    args: ["--window-size=1920, 10800"],
    executablePath:
      "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  });

  const page = await browser.newPage();
  await page.goto("http://localhost:3100/");

  await page.click("input#STU_ID");
  await page.type("input#STU_ID", "2");
  page.on("dialog", async (dialog) => {
    await dialog.accept();
  });
  await page.click("input#select");
}, 20000);
