const puppeteer = require('puppeteer');

(async () => {
  // Create a browser instance
  const browser = await puppeteer.launch();

  // Create a new page
  const page = await browser.newPage();

  // Set viewport width and height
  await page.setViewport({ width: 12043, height: 11811 });

  const website_url = 'https://admin.mapd-admin.test/application/map-editor/export-preview.php?size=3&Show_ID=6653&Map_ID=6432';

  // Open URL in current page
  await page.goto(website_url, { waitUntil: 'networkidle0' });

  await page.evaluate(() => window.scrollTo(0, Number.MAX_SAFE_INTEGER));
  // await page.waitFor(2000);

  // Capture screenshot
  await page.screenshot({
    path: 'screenshot.jpg',
    fullPage: true,
 
  });

  // Close the browser instance
  await browser.close();
})();