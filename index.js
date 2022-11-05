import dayjs from "dayjs";
import isLeapYear from "dayjs/plugin/isLeapYear.js"

dayjs.extend(isLeapYear);

const DateFormat = "YYYY-MM-DD";

export function piAnniversaries(anniversary) {
    let dates = [];
    anniversary = dayjs(anniversary, DateFormat);

    for (let i = 1; i < 100; i++) {
        let pis = Math.PI * i;
        let fullYears = Math.floor(pis);
        let dateBase = anniversary.add(fullYears, "year");
        let daysInYear = dateBase.isLeapYear() ? 366 : 365;
        let daysToAdd = (pis - fullYears) * daysInYear;
        dates.push({
            name: `${i} Pis`,
            nth: i,
            date: dateBase.add(daysToAdd, "day").format(DateFormat)
        });
    }
    return dates;
}

export function nextPiAnniversary(anniversary) {
    const now = dayjs();
    for (let date of piAnniversaries(anniversary)) {
        if (now.isBefore(date.date)) {
            return date;
        }
    }
    return null;
}

export default {
    piAnniversaries,
    nextPiAnniversary
}