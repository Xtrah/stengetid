// eslint-disable-next-line no-unused-vars
module.exports = async function (context, req) {

    // Backend API call to Vinmonopolet
    const fetch = require("node-fetch");
    const VUE_APP_apikey = process.env.VUE_APP_apikey
    const headers = { "Ocp-Apim-Subscription-Key": VUE_APP_apikey };
    const response = await fetch("https://apis.vinmonopolet.no/stores/v0/details?storeID=160", { headers })
    if (response.ok) {
        var data = await response.json();
        data = data[0]
    } else {
        data = ("HTTP-Error: " + response.status);
    }
    // Find current time and day
    const now = new Date()
    var todayDate = now.toLocaleDateString('en-CA'); // YYYY-MM-DD
    var currentDay = now.getDay() - 1
    if (currentDay == -1) {
        currentDay = 6 // API Sunday
    }

    // Use Day.js to calculate time differences
    var dayjs = require('dayjs')
    require('dayjs/locale/nb')
    // import dayjs from 'dayjs' // ES 2015
    dayjs().format()
    dayjs.locale('nb') // use locale globally
    var customParseFormat = require('dayjs/plugin/customParseFormat')
    dayjs.extend(customParseFormat)
    var relativeTime = require('dayjs/plugin/relativeTime')
    // import relativeTime from 'dayjs/plugin/relativeTime' // ES 2015
    dayjs.extend(relativeTime)

    // Return relevant info
    if (data.openingHours.regularHours[currentDay].closed == true) {
        this.closingTime = "Stengt i dag"
        // TODO: Next opening hour
    } else {
        this.closingTime = data.openingHours.regularHours[currentDay].closingTime
        let closingTime = dayjs(this.closingTime, "HH:mm")
        this.timeLeft = dayjs().to(closingTime)
    }

    for (let i = 0; i < data.openingHours.exceptionHours.length; i++) {
        if (data.openingHours.exceptionHours[i].date == todayDate) {
            if (data.openingHours.exceptionHours[i].message != "") {
                this.closingTime = data.openingHours.exceptionHours[i].message
            }
            else {
                this.closingTime = data.openingHours.exceptionHours[i].closingTime
                let closingTime = dayjs(this.closingTime, "HH:mm")
                this.timeLeft = dayjs().to(closingTime)
            }
        }
    }

    context.res.json({
        text: [this.closingTime, this.timeLeft]
    });
};
