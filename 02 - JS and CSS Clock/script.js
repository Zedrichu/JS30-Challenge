const secondHand = document.querySelector('.second-hand');
const minutesHand = document.querySelector('.min-hand')
const hoursHand = document.querySelector('.hour-hand')

function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    const secondsDegrees = 90 + (seconds * 6) // 60 sec = 360 deg
    const minutesDegrees = 90 + (minutes * 6) // 60 min = 360 deg
    const hoursDegrees = 90 + (hours * 30) // 12 hours = 360 deg

    if (seconds == 59) {
        secondHand.style.transition = 'none'
    }
    if (seconds == 2) {
        secondHand.style.transition = 'all 0.05s cubic-bezier(0.1,2.7, 0.58, 1)'
    }

    if (minutes == 59) {
        minutesHand.style.transition = 'none'
    }
    if (minutes == 2) {
        minutesHand.style.transition = 'all 0.05s cubic-bezier(0.1,2.7, 0.58, 1)'
    }

    if (hours == 11) {
        hoursHand.style.transition = 'none'
    }
    if (hours == 2) {
        hoursHand.style.transition = 'all 0.05s cubic-bezier(0.1,2.7, 0.58, 1)'
    }

    secondHand.style.transform = `rotate(${secondsDegrees}deg)`
    minutesHand.style.transform = `rotate(${minutesDegrees}deg)`
    hoursHand.style.transform = `rotate(${hoursDegrees}deg)`
}

setInterval(setDate, 1000);
setDate()