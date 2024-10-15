//Write your solutions in this file, don't forget to test your functions.
const countFromOne = (int) =>{
    for(let i = 0; i < int; i++){
        console.log(i)
    }
}

const countEveryOdd = (int) =>{
    for(let i = 0; i < int; i++){
        if(i % 2 !== 0){
            console.log(i)
        }
    }
}

const isNegative = (num) =>{
    if(num < 0){
        return true
    } else {
        return false
    }
}

const betweenFiveAndTwenty = (int) =>{
    if(int > 5 && int < 20){
        return true
    } else {
        return false
    }
}

const sumOfThreeOrFive = () =>{
    for(let i = 0; i <= 1000; i++){
        if(i % 3 === 0 || i % 5 === 0){
            console.log(i)
        }
    }
}

