let date1 = new Date('2022/11/10 08:13:06')
let date2 = new Date()
console.log('Today is: ' + date2.toLocaleString())
console.log('Video upload is: ' + date1.toLocaleString())

let day = Math.abs(date2 - date1)
let minuts = day/1000/60

if (minuts < 1) {
    console.log(`Less than 1 minute`)
} else if (minuts > 1 && minuts < 60) {
    minuts = Math.floor(minuts)
    console.log(`${minuts} minuts have passed`)
} else if (minuts > 60 && minuts/60 <= 24) {
    let hour = Math.floor(minuts/60)
    console.log(`${hour} hours have passed`)
} else if (minuts/60/24 >= 1 && minuts/60/24/30 <= 1) {
    let day = Math.floor(minuts/60/24)
    console.log(`${day} day have passed`)
} else if (minuts/60/24/30 >= 1 && minuts/60/24/30/12 <= 1) {
    month = Math.floor(minuts/60/24/30)
    console.log(`${month} month have passed`)
} else if (minuts/60/24/30/12 >= 1) {
    year = Math.floor(minuts/60/24/30/12)
    console.log(`${year} year have passed`)
}