//Required library
const puppeteer = require('puppeteer');

async function scraping(url, tag) {
    try {

        const URL = '' + url;
        const browser = await puppeteer.launch({headless: false});
        const page = await browser.newPage()

        await page.goto(URL)

        /*
        //put in my username
        await page.$eval('#j_username', el => el.value = 'XXXXXX');
        //put in my password
        await page.$eval('#j_password', el => el.value = 'XXXXX');

        //click the button
        await page.$eval( '.input-submit', form => form.click() );

        //Wait for navigation
        await page.waitForNavigation();
        */

        let resultRecord = await page.evaluate( ()=>{
            let results = [];
            let items = document.querySelectorAll('' + tag);
            items.forEach((item) => {

                results.push(item.innerHTML);

            });

            return results
        });

        console.log(resultRecord);

        await page.screenshot({ path: "./screenshot.png", fullPage: true});

        await browser.close();
        


    } catch (error) {
        console.log(error);
    }
};

console.log("Ran!");


//Create the necessary Json's


// export the function so it is usable in other files
export {scraping};