/*
Replace some of the content on line 39, 40 and line 41, before running. Press the repl name, then the dots and fork the repl to edit it.
:)
*/


const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({ headless: false, args: ['--no-sandbox', '--disable-setuid-sandbox'] });
    
    const page = await browser.newPage();

    await page.setBypassCSP(true);

    await page.goto("https://www.blooket.com");

    function spam() {
      console.log(gameId)

      nameNo += 1

      $.ajax({
        url: 'https://api.blooket.com/api/firebase/join',
        type: 'PUT',
        data: JSON.stringify({
          id: gameId,
          name: namePrefix + nameNo
        }),
        contentType: "application/json",
        success: function () {
          document.getElementById("output").innerHTML += "done<br>"
        }
      })
    }

    await page.evaluate(() => {
      window.nameNo = 0
      window.gameId = "989945" //game id
      window.namePrefix = "ana" + "" //bot name
      window.botCount = 4 //How many bots
    });

    await page.addScriptTag({ url: 'https://code.jquery.com/jquery-3.2.1.min.js' })

    await page.addScriptTag({ content: `${spam}` })

    await page.evaluate(() => {
      for (var i = 0; i <= botCount; i++) {
        spam()
      }
    });



    //await browser.close()
})();
