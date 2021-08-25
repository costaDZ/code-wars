// Write a function, which takes a non - negative integer(seconds) 
//as input and returns the time in a human - readable format(HH: MM: SS)
// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999(99: 59: 59)
// You can find some examples in the test fixtures.

function humanReadable(seconds) {
    if (seconds < 0 || seconds > 359999) return false;
    let hours = transferTime(seconds, 6000);
    let munites = transferTime(hours.reminder, 60);
    let sec = munites.reminder;
    return hours.val + ":" + munites.val + ":" + format(sec);
}

function transferTime(sec, devider) {
    let value = Math.floor(sec / devider);
    let rem = sec % devider;
    return {
        val: format(value),
        reminder: format(rem),
    }
}

function format(target) {
    return target.toString().length === 1 ? "0" + target : target;
}

console.log(humanReadable(86399));

// (humanReadable(0), '00:00:00', 'humanReadable(0)');
// Test.assertEquals(humanReadable(5), '00:00:05', 'humanReadable(5)');
// Test.assertEquals(humanReadable(60), '00:01:00', 'humanReadable(60)');
// Test.assertEquals(humanReadable(86399), '23:59:59', 'humanReadable(86399)');
// Test.assertEquals(humanReadable(359999), '99:59:59', 'humanReadable(359999)');
//   });