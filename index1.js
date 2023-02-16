const puppeteer = require('puppeteer');

(async () => {
    // Create a browser instance
    const browser = await puppeteer.launch({
        defaultViewport: null,
        args: [
            '--force-gpu-mem-available-mb=4096'
        ],
    });

    // Create a new page
    const page = await browser.newPage();

    // Set viewport width and height

    const website_url = 'https://admin.mapd-admin.test/application/map-editor/export-preview.php?size=3&Show_ID=6653&Map_ID=6432';

    // Open URL in current page
    await page.goto(website_url, { waitUntil: 'networkidle0' , timeout: 0 });

    const bodyWidth = await page.evaluate(() => document.body.scrollWidth);
    const bodyHeight = await page.evaluate(() => document.body.scrollHeight);
    await page.setViewport({ width: bodyWidth, height: bodyHeight });

    // await page.waitFor(2000);

    // Capture screenshot
    await page.screenshot({
        path: 'screenshot.jpg',
        fullPage: true,

    });

    // Close the browser instance
    await browser.close();
})();