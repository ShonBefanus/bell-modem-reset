import puppeteer from 'puppeteer';
import config  from './config.json' assert { type: 'json' };

const {password, url} = config;

(async () => {
  const browser = await puppeteer.launch({
    'headless': true,
    'args': ['--no-sandbox', '--disable-setuid-sandbox']
});
    const page = await browser.newPage();
    const yes = '#yes';
    await page.setViewport({width:1624,height:768});
    await page.goto(`${url}/?c=advancedtools/`);
    await page.setViewport({width:1624,height:988});
    await page.waitForNavigation();
    await page.waitForSelector('#advancedSettingsContainer');
    await page.click('#advancedSettingsContainer');
    await page.waitForSelector('#password');
    await page.type('#password', password);
    await page.click('#loginButton');
    await page.waitForNavigation();
    await page.goto(`${url}/?c=advancedtools/resets`);
    await page.waitForNavigation();
    await page.click('#restart');
    await page.waitForSelector(yes);
    await page.click(yes);
    await page.waitForSelector(yes,{timeout:500});
    await page.click(yes);
    await browser.close();
})();