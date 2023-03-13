/*
 * Copyright (c) QieTv, Inc. 2018
 * @Author: idzeir
 * @Date: 2023-03-10 17:33:17
 * @Last Modified by: idzeir
 * @Last Modified time: 2023-03-13 17:31:20
 */
const puppeteer = require("puppeteer");
const fs = require("fs");

(async () => {
    const baseURL = "http://www.npc.gov.cn/zgrdw/huiyi/cwh/1130/2012-12/29/content_1749762";
    const browser = await puppeteer.launch({product: 'chrome'});
    const page = await browser.newPage();
    
    async function papa(url) {
        await page.goto(url);
        const text = await page.waitForSelector("#Zoom");
        const allText = await text.$$eval("p", (nodes) => nodes.map((node) => node.innerHTML.trim()));
        return allText;
    }

    async function papaSpider() {
        const urls = Array.from({ length: 26 }, (_, id) => `${baseURL}${id === 0 ? "" : "_" + (id + 1)}.htm`);
        const map = [];
        for (let url of urls.slice(1)) {
            map.push(await papa(url));
        }

        return map;
    }

    const allPars = await papaSpider();

    await new Promise((res) => {
        const ws = fs.createWriteStream("./fe/api/law.json");
        ws.end(JSON.stringify({ code: 0, data: allPars }), res);
    });

    await browser.close();
})();
