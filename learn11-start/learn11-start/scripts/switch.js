function calculate() {
    var chi = '';
    let myname = document.getElementById("fname").value;
    let month = parseInt(document.getElementById("month").value);
    let date = parseInt(document.getElementById("date").value);
    let year = parseInt(document.getElementById("year").value);

    // Determining the Chinese Zodiac Sign (Compensates for the Chinese New Year)
    let chineseNewYearDates = {
        1924: new Date(1924, 1, 5),
        1925: new Date(1925, 0, 24),
        1926: new Date(1926, 1, 13),
        1927: new Date(1927, 1, 2),
        1928: new Date(1928, 0, 23),
        1929: new Date(1929, 1, 10),
        1930: new Date(1930, 0, 30),
        1931: new Date(1931, 1, 17),
        1932: new Date(1932, 1, 6),
        1933: new Date(1933, 0, 26),
        1934: new Date(1934, 1, 14),
        1935: new Date(1935, 1, 4),
        1936: new Date(1936, 0, 24),
        1937: new Date(1937, 1, 11),
        1938: new Date(1938, 0, 31),
        1939: new Date(1939, 1, 19),
        1940: new Date(1940, 1, 8),
        1941: new Date(1941, 0, 27),
        1942: new Date(1942, 1, 15),
        1943: new Date(1943, 1, 5),
        1944: new Date(1944, 0, 25),
        1945: new Date(1945, 1, 13),
        1946: new Date(1946, 1, 2),
        1947: new Date(1947, 0, 22),
        1948: new Date(1948, 1, 10),
        1949: new Date(1949, 0, 29),
        1950: new Date(1950, 1, 17),
        1951: new Date(1951, 1, 6),
        1952: new Date(1952, 0, 27),
        1953: new Date(1953, 1, 14),
        1954: new Date(1954, 1, 3),
        1955: new Date(1955, 0, 24),
        1956: new Date(1956, 1, 12),
        1957: new Date(1957, 0, 31),
        1958: new Date(1958, 1, 18),
        1959: new Date(1959, 1, 8),
        1960: new Date(1960, 0, 28),
        1961: new Date(1961, 1, 15),
        1962: new Date(1962, 1, 5),
        1963: new Date(1963, 0, 25),
        1964: new Date(1964, 1, 13),
        1965: new Date(1965, 1, 2),
        1966: new Date(1966, 0, 21),
        1967: new Date(1967, 1, 9),
        1968: new Date(1968, 0, 30),
        1969: new Date(1969, 1, 17),
        1970: new Date(1970, 1, 6),
        1971: new Date(1971, 0, 27),
        1972: new Date(1972, 1, 15),
        1973: new Date(1973, 1, 3),
        1974: new Date(1974, 0, 23),
        1975: new Date(1975, 1, 11),
        1976: new Date(1976, 0, 31),
        1977: new Date(1977, 1, 18),
        1978: new Date(1978, 1, 7),
        1979: new Date(1979, 0, 28),
        1980: new Date(1980, 1, 16),
        1981: new Date(1981, 1, 5),
        1982: new Date(1982, 0, 25),
        1983: new Date(1983, 1, 13),
        1984: new Date(1984, 1, 2),
        1985: new Date(1985, 0, 20),
        1986: new Date(1986, 1, 9),
        1987: new Date(1987, 0, 29),
        1988: new Date(1988, 1, 17),
        1989: new Date(1989, 1, 6),
        1990: new Date(1990, 0, 27),
        1991: new Date(1991, 1, 15),
        1992: new Date(1992, 1, 4),
        1993: new Date(1993, 0, 23),
        1994: new Date(1994, 1, 10),
        1995: new Date(1995, 0, 31),
        1996: new Date(1996, 1, 19),
        1997: new Date(1997, 1, 7),
        1998: new Date(1998, 0, 28),
        1999: new Date(1999, 1, 16),
        2000: new Date(2000, 1, 5),
        2001: new Date(2001, 0, 24),
        2002: new Date(2002, 1, 12),
        2003: new Date(2003, 0, 31),
        2004: new Date(2004, 1, 21),
        2005: new Date(2005, 1, 9),
        2006: new Date(2006, 0, 29),
        2007: new Date(2007, 1, 18),
        2008: new Date(2008, 1, 7),
        2009: new Date(2009, 0, 26),
        2010: new Date(2010, 1, 14),
        2011: new Date(2011, 1, 3),
        2012: new Date(2012, 0, 23),
        2013: new Date(2013, 1, 10),
        2014: new Date(2014, 0, 31),
        2015: new Date(2015, 1, 19),
        2016: new Date(2016, 1, 8),
        2017: new Date(2017, 0, 28),
        2018: new Date(2018, 1, 16),
        2019: new Date(2019, 1, 5),
        2020: new Date(2020, 0, 25),
        2021: new Date(2021, 1, 12),
        2022: new Date(2022, 1, 1),
        2023: new Date(2023, 0, 22),
        2024: new Date(2024, 1, 10),

    }

    let birthDate = new Date(year, month - 1, date);
    let zodiacYear = year;

    if (birthDate < chineseNewYearDates[year]) {
        zodiacYear -= 1;
    }

    switch (zodiacYear % 12) {
        case 0:
            chi = "Monkey";
            break;
        case 1:
            chi = "Rooster";
            break;
        case 2:
            chi = "Dog";
            break;
        case 3:
            chi = "Pig";
            break;
        case 4:
            chi = "Rat";
            break;
        case 5:
            chi = "Ox";
            break;
        case 6:
            chi = "Tiger";
            break;
        case 7:
            chi = "Rabbit";
            break;
        case 8:
            chi = "Dragon";
            break;
        case 9:
            chi = "Snake";
            break;
        case 10:
            chi = "Horse";
            break;
        case 11:
            chi = "Goat";
            break;
        default:
            chi = "Unknown, that year is not included in my list";

    }

    // Determining the Western Zodiac Sign
    if ((month == 1 && date >= 21) || (month == 2 && date <= 18)) {
        western = "Aquarius";
    } else if ((month == 2 && date >= 19) || (month == 3 && date <= 20)) {
        western = "Pisces";
    } else if ((month == 3 && date >= 21) || (month == 4 && date <= 19)) {
        western = "Aries";
    } else if ((month == 4 && date >= 20) || (month == 5 && date <= 20)) {
        western = "Taurus";
    } else if ((month == 5 && date >= 21) || (month == 6 && date <= 20)) {
        western = "Gemini";
    } else if ((month == 6 && date >= 21) || (month == 7 && date <= 22)) {
        western = "Cancer";
    } else if ((month == 7 && date >= 23) || (month == 8 && date <= 22)) {
        western = "Leo";
    } else if ((month == 8 && date >= 23) || (month == 9 && date <= 22)) {
        western = "Virgo";
    } else if ((month == 9 && date >= 23) || (month == 10 && date <= 22)) {
        western = "Libra";
    } else if ((month == 10 && date >= 23) || (month == 11 && date <= 21)) {
        western = "Scorpio";
    } else if ((month == 11 && date >= 22) || (month == 12 && date <= 21)) {
        western = "Sagittarius";
    } else if ((month == 12 && date >= 21) || (month == 1 && date <= 20)) {
        western = "Capricorn";
    } else {
        western = "Unknown";
    }

    // Displaying the results
    document.getElementById("nameout").innerHTML = myname;
    document.getElementById("chinese").innerHTML = "Your Chinese zodiac sign is: " + chi;
    document.getElementById("western").innerHTML = "Your Western zodiac sign is: " + western;


}