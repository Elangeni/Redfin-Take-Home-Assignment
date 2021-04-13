const APP_TOKEN = 'p0AwZJPEBk5iSTb0xYZMeqSV0';
var https = require('https');
var limit = 10;
const getTime = require('./GetTime');
var date = getTime.getDateAndTime();
var stdin = process.openStdin();

var self = module.exports = {
    getFoodTrucks: function (offset) {

        if (date.hour <= 9) {
            date.hour = '0' + date.hour;
        }

        if (date.minutes <= 9) {
            date.minutes = '0' + date.minutes;
        }
        var cur_time = date.hour + ":" + date.minutes;


        var optionsget = {
            host: 'data.sfgov.org',
            path: `/resource/bbb8-hzi6.json?$$app_token=${APP_TOKEN}&dayorder=${date.day}&$where=start24<='${cur_time}'%20and%20end24>'${cur_time}'&$select=applicant,location&$order=applicant&$limit=${limit}&$offset=${offset}`,
            method: 'GET'
        }
        // do the GET request
        var reqGet = https.request(optionsget, function (res) {

            res.on('data', function (foodTruckData) {

                // process.stdout.write(foodTruckData);
                var parsedForTrucks = JSON.parse(foodTruckData);
                var count = parsedForTrucks.length;
                for (i = 0; i < count; i++) {
                    console.log(parsedForTrucks[i].applicant.padEnd(75) + parsedForTrucks[i].location);
                }
                self.printNextData(count, offset);
            });
        });

        reqGet.end();
        reqGet.on('error', function (e) {
            console.error(e);
        });
    },

    printNextData: function (count, offset) {
        if (count == limit) {
            console.log("Would you like to see more food trucks Y/N?");
            stdin.addListener('data', function (d) {
                console.log(d.toString().trim().length)
                if(d.toString().trim() == "y" || d.toString().trim() == "Y"){
                    stdin.removeAllListeners('data');
                    self.getFoodTrucks(offset + limit);
                }else if(d.toString().trim() == "n" || d.toString().trim() == "N") {
                    process.exit();
                }else{
                    console.log("Would you like to see more food trucks Y/N?");
                }
                
            });
        } else {
            process.exit();
        }

        
    }
}