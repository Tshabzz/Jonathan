// Declearation of Five arrays
const players = ['John', 'Doe', 'Rooney', 'Luke']
const scores = [1, 5, 2, 0]
const objects = ['laptop', 'Mouse', 'Radio', 'Notebook', 'Pen']
const users = ['Josh', 'Mike', 'Steph', 'Ama']
const People = ['Josh John', 'Mike Doe', 'Steph Rooney', 'Ama Luke']

//Looping through arrays

// Loop through #players
for (let x = 0; x < players.length; x++) (

    console.log(`Player: ${players[x]}`)
)

// Loop through #scores, loop from back to front
for (let x = players.length - 1; x >= 0; x--) {
    console.log(`Score: ${scores[x]}`)
}

// Loop through #objects
for (let x = 0; x < players.length; x++) (

    console.log(`Object: ${objects[x]}`)
)

// Loop through #users
for (let x = 0; x < players.length; x++) (

    console.log(`User: ${users[x]}`)
)

// Loop through #people
for (let x = 0; x < players.length; x++) (

    console.log(`Person: ${People[x]}`)
)
