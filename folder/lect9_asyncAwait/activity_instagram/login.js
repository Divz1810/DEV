const puppeteer = require("puppeteer");
const id2="xocali_singh";
const pwd= "123456789@";
const search= "netflix";

(async function () {
    try{
        let browser = await puppeteer.launch({
          headless: false,
          defaultViewport: null,
          args: ["--start-maximized"],
          executablePath:
            "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
        });
        let pages = await browser.pages();
        let tab = pages[0];
        await tab.goto("https://www.instagram.com/accounts/login");
        await tab.waitForSelector("input[name='username']");
        await tab.type("input[name='username']", id2);
        await tab.type('input[name="password"]', pwd);
        await tab.click(".L3NKy");
        await tab.waitForSelector(".cmbtv");
        await tab.click(".cmbtv");
        await tab.waitForSelector(".HoLwm");
        await tab.click(".HoLwm");
        await tab.waitForSelector(".x3qfX");
        await tab.type(".x3qfX", search);
        await tab.waitForSelector('a[href="/netflix/"]');
        await tab.click('a[href="/netflix/"]');
        //1st like
        // await tab.waitForSelector('a[href="/p/CQXtautHWtM/"]');//link of post
        // await tab.click('a[href="/p/CQXtautHWtM/"]');
        // await tab.waitForSelector(".fr66n");//like button
        // await tab.click(".fr66n");
        // // await tab.waitFor(3000);-- helps to wait for 3000ms
        // await tab.keyboard.press('Escape');//presing esc key of keyboard
        // console.log("logined");
        // //2nd like
        // await tab.waitForSelector('a[href="/p/CQWiO9nnulZ/"]');
        // await tab.click('a[href="/p/CQWiO9nnulZ/"]');
        // await tab.waitForSelector(".fr66n");
        // await tab.click(".fr66n");
        // await tab.keyboard.press('Escape');
        // //3rd like
        // await tab.waitForSelector('a[href="/p/CQWRKgCLlEW/"]');
        // await tab.click('a[href="/p/CQWRKgCLlEW/"]');
        // await tab.waitForSelector(".fr66n");
        // await tab.click(".fr66n");
        // await tab.keyboard.press('Escape');
        // //4th like
        // await tab.waitForSelector('a[href="/p/CQUEZXbNfpn/"]');
        // await tab.click('a[href="/p/CQUEZXbNfpn/"]');
        // await tab.waitForSelector(".fr66n");
        // await tab.click(".fr66n");
        // await tab.keyboard.press('Escape');
        // //5th like
        // await tab.waitForSelector('a[href="/p/CQT4X7Gn25I/"]');
        // await tab.click('a[href="/p/CQT4X7Gn25I/"]');
        // await tab.waitForSelector(".fr66n");
        // await tab.click(".fr66n");
        // await tab.keyboard.press('Escape');

        let posts= ['a[href="/p/CQXtautHWtM/"]', 'a[href="/p/CQWiO9nnulZ/"]', 'a[href="/p/CQWRKgCLlEW/"]' , 'a[href="/p/CQUEZXbNfpn/"]', 'a[href="/p/CQT4X7Gn25I/"]'];
        for(let i=0;i<posts.length;i++){
            let link= posts[i];
            await tab.waitForSelector(link);
            await tab.click(link);
            await tab.waitForSelector(".fr66n");
            await tab.click(".fr66n");
            await tab.keyboard.press('Escape');
        }
    }
    catch(err){
        console.log(err);
    }
})();

