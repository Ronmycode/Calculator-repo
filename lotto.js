//tryi[0]ith a slot machine


const reels = [];

function pull (){
    for(i=0; i<=2; i++){
    reels[i] = Math.floor(Math.random() * 2);
    console.log(reels[i]);
    }
}

function evaluate(){
    if (reels[0]=== reels[1] && reels[0] === reels [2]){
        console.log("winner, winner, chicken dinner!!");
    }
}

pull();
console.log(reels);
stop();