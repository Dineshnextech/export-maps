const puppeteer = require('puppeteer');

(async()=>{
    {
        const browser = await puppeteer.launch({
            headless: true, // Set to false while development
            defaultViewport: null,
            args: [
                '--no-sandbox',
                '--start-maximized', // Start in maximized state
                '--force-gpu-mem-available-mb=4096'
            ],
        });
    
        const page = await  browser.newPage();
        await page.goto('https://admin.mapd-admin.test/application/map-editor/export-preview.php?size=3&Show_ID=6653&Map_ID=6432', {
            waitUntil: 'networkidle0', timeout: 0
        });
    
        // Get scroll width and height of the rendered page and set viewport
        const bodyWidth = await page.evaluate(() => document.body.scrollWidth);
        const bodyHeight = await page.evaluate(() => document.body.scrollHeight);
        await page.setViewport({ width: bodyWidth, height: bodyHeight });
    
        // await page.waitFor(1000);
        await page.screenshot({path: 'digg-example.png' });
    }
})();