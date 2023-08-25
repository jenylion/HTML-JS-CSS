let grade = 1000 
// if(grade >= 50){
//     console.log("you passed")
// } else {
//     console.log("you failed")
// }

// if(grade >= 50 && grade < 60){
//     console.log("not bad grade")
// }

if(grade < 50 && grade > 0){
    console.log("failed")
} else {
    if(grade < 60 && grade >= 50){
        console.log("good")
    } else {
        if(grade < 80 && grade >= 60){
            console.log("very good")
        } else {
            if(grade <= 100 && grade >= 80){
                console.log("excellent")
            }
        }
    }
}


