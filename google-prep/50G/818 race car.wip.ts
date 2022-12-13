//https://leetcode.com/problems/race-car/
type Directions = {
    instructions: string[]
    position: number
    speed: number
    fwd: boolean
}

function racecar(target: number): number {
    console.log("------- TARGET", target)

    let position: number = 0; //start at 0
    let speed: number = 1;
    let instructions: string[] = []
    let fwd: boolean = true

    let myDir: Directions = {
        instructions,
        position,
        speed,
        fwd
    }

    while(myDir.position !== target) {
        console.log("my dir", myDir)
        console.log("FWD:", myDir.fwd)

        if(myDir.fwd){
            console.log("FWD TRUE:", myDir.fwd)
            //forward
            if(myDir.position > target){
                //stop (R)
                console.log("stop T")

                myDir = drive(myDir.instructions,'R', myDir.position, myDir.speed, myDir.fwd)
            } else {
                //keep going (A)
                console.log("keep going A")
                myDir = drive(myDir.instructions,'A', myDir.position, myDir.speed, myDir.fwd)
            }
        } else {

            console.log("--- false FWD:", myDir.fwd)
            //going back
            if(myDir.position < target) {
                //going back too much stop (R)
                myDir = drive(myDir.instructions,'R', myDir.position, myDir.speed, myDir.fwd)
            } else {
                //keep going (A)
                myDir = drive(myDir.instructions,'A', myDir.position, myDir.speed, myDir.fwd)
            }
        }

    }

    return myDir.instructions.length
};

function drive(instructions: string[], w: string, position: number, speed: number, fwd: boolean): Directions {
    console.log("inside DRIVE")
    switch(w) {
        case 'A': 
            console.log("case A")
            position += speed
            if(!fwd) {
                speed *= 2*(-1)
            } else {
                speed *= 2
            }
            instructions.push('A')
            break
        case 'R':
            console.log("case R")
            if(speed > 0) {
                speed = -1
            } else {
                speed = 1
            }
            fwd = !fwd 
            instructions.push('R')
            break
    }
    
    let newDir = {
        instructions,    
        position,
        speed,
        fwd
    }

    console.log("DIR FROM DRIVE-----", newDir)
    return newDir
}