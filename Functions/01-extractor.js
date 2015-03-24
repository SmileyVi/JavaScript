function solve(input){
    var obj=input;
    function filtered(){
        for (var i = 0; i < obj.length; i++) {
            if(typeof obj[i] === 'object'){
                console.log(obj[i]);
            }
        }
   }
    filtered();
}
solve([
        "Pesho",
        4,
        4.21,
        { name : 'Valyo', age : 16 },
        { type : 'fish', model : 'zlatna ribka' },
        [1,2,3],
        "Gosho",
        { name : 'Penka', height: 1.65}
    ]
);