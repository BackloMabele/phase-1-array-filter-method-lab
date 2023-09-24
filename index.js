function findMatching(drivers, name) {
    const nameToLowerText = name.toLowerCase();
    const matchingDrivers = drivers.filter(driver => {
        const driverLower = driver.toLowerCase();
        return driverLower.includes(nameToLowerText);
    });
    if (matchingDrivers.length === 0) {
        return [];
    }
    return matchingDrivers;
    }
    function fuzzyMatch(drivers, name) {
        const searchToLowerCase = name.toLowerCase()
        const matchingDrivers = drivers.filter(driver => {
            const driverLower = driver.toLowerCase();
            return driverLower.startsWith(searchToLowerCase);
        })
        return matchingDrivers;
        }
    function matchName(drivers, name) {
        const matchingString = drivers.filter(driver => driver.name === name);
        return matchingString;
        }
