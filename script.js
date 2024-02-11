const daysOfWeek = [
    'sun', 'mon', 'tue' , 'wed', 'thu', 'fri', 'sat', 'sun'
];

const months = [
    'JAN', 'FEB', 'MAR', 'APR', 'MAY',
    'JUN', 'JUL', 'AUG', 'SPT',
    'OCT', 'NOV', 'DEC'
];

const $ = (id) => document.getElementById(id);

const zeroPadding = (num)=> String(num).
padStart(2, 0);

function clock (){
    const today = new Date();
    const h = today.getHours();
    const m = today.getMinutes();
    const s = today.getSeconds();
    const ampm = h <= 11 ? 'AM' : 'PM';
    const day = today.getDay();
    const date = today.getDate();
    const month = today.getMonth();
    const year = today.getFullYear();

    $('year').innerHTML = zeroPadding(year);
    $('month').innerHTML = months[month];
    $('day').innerHTML = zeroPadding(date);

    $('hours').innerHTML = zeroPadding(h);
    $('min').innerHTML = zeroPadding(m);
    $('sec').innerHTML = zeroPadding(s);
    $('ampm').innerHTML = ampm;
    $(daysOfWeek[day])
    .classList.remove('active');

    // console.log(day, today.getDay());
    $(daysOfWeek[day]).classList.add('active');
}

setInterval(clock, 400);