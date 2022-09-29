const findMatching = (driverNames, name) => {
    return driverNames.filter(sameName => sameName.toLowerCase() === name.toLowerCase())
}

const fuzzyMatch = (driverNames, letters) => {
    return driverNames.filter(name => name.slice(0, letters.length) === letters)
}

const matchName = (driverObjects, name) => {
    return driverObjects.filter(driver => driver.name === name)
}