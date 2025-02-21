enum Direction{
    up,
    down,
    right,
    left
}

function move(direction:any){
    console.log('moving'  +'  '+Direction[direction].toLowerCase());
}


move(Direction.up);
