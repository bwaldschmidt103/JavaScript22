const holidays = {
    January: ["New Year's Day", "Martin Luther King Jr. Day"],
    February: ["Presidents' Day", "Valentine's Day"],
    March: ["St. Patrick's Day", "International Women's Day"],
    April: ["April Fool's Day", "Earth Day"],
    May: ["Labor Day", "Memorial Day"],
    June: ["Flag Day", "Juneteenth"],
    July: ["Independence Day", "Parents' Day"],
    August: ["Friendship Day", "Women's Equality Day"],
    September: ["Labor Day", "Patriot Day"],
    October: ["Columbus Day", "Halloween"],
    November: ["Veterans Day", "Thanksgiving"],
    December: ["Christmas", "New Year's Eve"]
};

const months = Object.keys(holidays);
const holidaysDiv = document.getElementById('holidays');

for (let i = 0; i < months.length; i++) {
    const month = months[i];
    const monthHolidays = holidays[month];

    const monthDiv = document.createElement('div');
    monthDiv.innerHTML = `<h2>${month}</h2>`;

    const holidayList = document.createElement('ul');

    switch (month) {
        case 'January':
        case 'February':
        case 'March':
        case 'April':
        case 'May':
        case 'June':
        case 'July':
        case 'August':
        case 'September':
        case 'October':
        case 'November':
        case 'December':
            for (let j = 0; j < monthHolidays.length; j++) {
                const holiday = monthHolidays[j];
                const listItem = document.createElement('li');
                listItem.textContent = holiday;
                holidayList.appendChild(listItem);
            }
            monthDiv.appendChild(holidayList);
            break;
        default:
            monthDiv.innerHTML = `<h2>Unknown Month</h2>`;
    }

    holidaysDiv.appendChild(monthDiv);

}