/*
Author: Jared Chou

Currently a testing script for learning how to use Puppeteer and implementing the scraping function 
*/
import {scraping} from './scrap.js';

const puppeteer = require('puppeteer');

(async () => {
    // saves the page as a pdf:
    /* 
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://www.bu.edu/phpbin/course-search/', {
        waitUntil: 'networkidle2',
    });
    await page.pdf({path: 'testscraping.pdf', format: 'a4'});
    await browser.close(); 
    */

    // use the scrap.js function to console.log all of the elements which come up when 'CAS CS 111' is searched
    await scraping('https://www.bu.edu/phpbin/course-search/', 'CAS CS 111');
})();