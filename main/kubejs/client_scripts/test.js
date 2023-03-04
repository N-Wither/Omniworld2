let time = new Date();
let digitFormat = (num) => {
    if (num < 10) {
        return '0' + num.toString();
    }
    else return num.toString();
}
let yr = digitFormat(time.getFullYear());
let mth = digitFormat(time.getMonth() + 1);
let dy = digitFormat(time.getDate());
let hr = digitFormat(time.getHours());
let mn = digitFormat(time.getMinutes());
let sc = digitFormat(time.getSeconds());
let timeText = `${yr}/${mth}/${dy} ${hr}:${mn}:${sc}`;

console.log(timeText)