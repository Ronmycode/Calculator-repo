
var winner_numbers = [];
var ticket = [];

function raffle(){
    while(winner_numbers.length <= 1){
    var num = Math.floor(Math.random() * 10); 
        winner_numbers.push(num);
        console.log(winner_numbers);

    }
}

function Gold_ticket(){
        if (ticket !== winner_numbers){
        while(ticket.length <= 1 ){
        var x = Math.floor(Math.random() * 10); 
            ticket.push(x);
            console.log(ticket);
        }
    }
}



raffle();
console.log("sorteo");
Gold_ticket();
