function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}
saturdayFun()

const mondayWork = function (work = "go to the office") {
    return `This Monday, I will ${work}.`;
}
mondayWork()

function wrapAdjective (wrap) {
    return function (adjective) {
        return `You are ${wrap}${adjective}${wrap}!`
    }
}
wrapAdjective()