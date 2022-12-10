//https://leetcode.com/problems/race-car/
type Directions = {
    instructions: string[]
    position: number
    speed: number
}

function racecar(target: number): number {
    console.log("t", target)

    let position: number = 0; //start at 0
    let speed: number = 1;
    let instructions: string[] = []

    let myDir: Directions = {
        instructions,
        position,
        speed,
    }

    while(myDir.position !== target) {
        console.log("my dir", myDir)
        if(myDir.position < target){
            myDir = drive(myDir.instructions,'A', myDir.position, myDir.speed)
        } else {
            myDir = drive(myDir.instructions,'R', myDir.position, myDir.speed)
        }
    }

    return myDir.instructions.length
};

function drive(instructions: string[], w: string, position: number, speed: number): Directions {
    switch(w) {
        case 'A': 
            position += speed
            speed *= 2
            instructions.push('A')
            break
        case 'R':
            if(speed > 0 && instructions[instructions.length-1] === 'A') {
                speed -=1
            } else {
                speed = 1
                position = position-1
            }
            instructions.push('R')
            break
    }
    
    let newDir = {
        instructions,    
        position,
        speed
    }

    console.log("dir", newDir)
    return newDir
}