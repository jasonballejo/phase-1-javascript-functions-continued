// code your solution here
function saturdayFun(skate = "roller-skate") {
    return `This Saturday, I want to ${skate}!`
}
saturdayFun();
saturdayFun("bathe my dog");

function mondayWork(mon = "go to the office") {
    return `This Monday, I will ${mon}.`
}


function wrapAdjective(msg = "You are") {
    return function (character = "special"){
        return `You are ${msg}${character}${msg}!`;
    };
}