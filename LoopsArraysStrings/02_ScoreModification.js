function solve(obj){

    var obj=obj;

    var score= obj.filter(function (x){
        if(x>0 && x<=400){
            return x;
        }
    });
    function newScore() {
        for(var i = 0; i<score.length;i++){
            score[i] = score[i]- ((20.0 * score[i])/ 100 );
        }
        score.sort(function(x,y){
        return x<y;
    });
        score.reverse();
        console.log(score);
    }
 newScore();
 }
solve([200, 120, 23, 67, 350, 420, 170, 212, 401, 615, -1]);
