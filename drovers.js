const { database } = require("./database.js")

const hireDrovers = (herdSize) => {
    let drovers = []
    let allDrovers = database.drovers
    let numberNeeded = herdSize / 10

    for (let counter = 0; counter < numberNeeded; counter++) {
        const randomHerderId = Math.floor(Math.random() * allDrovers.length)
        drovers.push(allDrovers[randomHerderId])
    }
    return drovers
}

module.exports = { hireDrovers }