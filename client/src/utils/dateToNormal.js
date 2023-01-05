
export default function (date) {
    let date1 = new Date(date)
    let date2 = new Date()
    // console.log('Today is: ' + date2.toLocaleString())
    // console.log('Video upload is: ' + date1.toLocaleString())

    let day = Math.abs(date2 - date1)
    let minuts = day/1000/60

    if (minuts < 1) {
        return `Less than 1 minute`
    } else if (minuts > 1 && minuts < 60) {
        minuts = Math.floor(minuts)
        return (`${minuts} minutes ago`)
    } else if (minuts > 60 && minuts/60 <= 24) {
        let hour = Math.floor(minuts/60)
        return (`${hour} hours ago`)
    } else if (minuts/60/24 >= 1 && minuts/60/24/30 <= 1) {
        let day = Math.floor(minuts/60/24)
        return (`${day} day ago`)
    } else if (minuts/60/24/30 >= 1 && minuts/60/24/30/12 <= 1) {
        let month = Math.floor(minuts/60/24/30)
        return `${month} month ago`
    } else if (minuts/60/24/30/12 >= 1) {
        let year = Math.floor(minuts/60/24/30/12)
        return (`${year} year ago`)
    }
}
