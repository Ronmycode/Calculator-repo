//trying with a slot machine


const reels = {
    reel_one : 1,
    reel_two : 2,
    reel_three : 3
};




function pull (){
    for(i=0; i<=2; i++){
    reels[i] = Math.floor(Math.random() * 5);
    }
}



pull();
console.log(reels);