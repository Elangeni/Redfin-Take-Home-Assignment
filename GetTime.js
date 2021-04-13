/*
The purpose of this object is to get the current date and time. 
I am saving the hours, minutes, seconds, year, month, date, and 
day so that if future date contraints are added it will be simple. 
For example, getting food trucks that were open on the same day of the 
week as today for the last year
*/
module.exports = {

    getDateAndTime: function () {
        const today = new Date();
        var date = {
            "hour": today.getHours(),
            "minutes": today.getMinutes(),
            "seconds": today.getSeconds(),
            "year": today.getFullYear(),
            "month": today.getMonth() + 1,
            "date": today.getDate(),
            "day": today.getDay()
        }

        return date;
    }
};