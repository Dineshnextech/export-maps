const puppeteer = require('puppeteer');
const args = process.argv;
const url = args[2];

(async () => {
    // Create a browser instance
    const browser = await puppeteer.launch({
        defaultViewport: null,
        headless: true,
        args: [
            '--force-gpu-mem-available-mb=4096'
        ],
    });

    // Create a new page
    const page = await browser.newPage();

    // Set viewport width and height

    const website_url = url;

    // Open URL in current page
    await page.goto(website_url, { waitUntil: 'networkidle0', timeout: 0 });

    const bodyWidth = await page.evaluate(() => document.body.scrollWidth);
    const bodyHeight = await page.evaluate(() => document.body.scrollHeight);
    await page.setViewport({ width: bodyWidth, height: bodyHeight });

    await page.screenshot({
        encoding: "base64",
        fullPage: true,

    }).then(function (data) {
        // let base64Encode = `data:image/png;base64,${data}`;
        console.log(data);
    });;

    await browser.close();
})();

