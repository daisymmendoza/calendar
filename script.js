const date = new Date();
console.log(date);
// Function calendar
function calendar() {
    var month = date.getMonth();
    console.log(month);
    const yyyy = date.getFullYear();
    console.log(yyyy);
    date.setDate(1);

    const name_Days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
    const day_Week = [0, 1, 2, 3, 4, 5, 6];
    var month_number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    console.log(month_number);
    const namesMonth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    // Last date of the current month
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0,).getDate();
    console.log(lastDay);

    // Last date of the previous month
    const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0,).getDate();
    console.log(prevLastDay);

    // First day of the current month
    const firstDayIndex = date.getDay();
    console.log(firstDayIndex);

    // Last day of the week
    const lastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0,).getDay();
    console.log(lastDayIndex);

    // To start from the first day of the week
    const nextDays = 7 - lastDayIndex - 1;
    console.log(nextDays);

    // Display name of month and year
    const nameofmonth = document.querySelector(".month");
    for (var n = 0; n <= 11; n++) {
        if(month_number[n] === month) {
            nameofmonth.innerHTML = `<div><h1>${namesMonth[month]} ${yyyy}</h1></div>`
        }
    }

    // Display names of days
    const nameofdays = document.querySelector(".calWeekDays");
    let nod = "";
    for (var d = 0; d <= 6; d++) {
        nod+= `<div>${name_Days[d]}</div>`;
        console.log(nod);
        nameofdays.innerHTML = nod;
    }

    let days = "";
    for (let x = firstDayIndex; x > 0; x--) {
        days+= `<div class = "prev-date dayNums">${prevLastDay - x + 1}</div>`;
    }

    const displayDays = document.querySelector(".calMonthDays");
    for (let i = 1; i <= lastDay; i++) {
        if(i === new Date().getDate() && date.getMonth() === new Date().getMonth()) {
            days+= `<div class = "dayNums">${i}</div>`;
            displayDays.innerHTML = days;
        } else {
            days+= `<div class = "dayNums">${i}</div>`;
            displayDays.innerHTML = days;
        }
    }

    for (let j = 1; j <= nextDays; j++) {
        days+= `<div class = "next-date dayNums">${j}</div>`;
        displayDays.innerHTML = days;
    }
}

calendar();

// Prev month
const prev_btn = document.querySelector(".prevBtn");
prev_btn.addEventListener("click", function() {
    date.setMonth(date.getMonth() - 1);
    calendar();
})

// Next month
const next_btn = document.querySelector(".nextBtn");
next_btn.addEventListener("click", function() {
    date.setMonth(date.getMonth() + 1);
    calendar();
})