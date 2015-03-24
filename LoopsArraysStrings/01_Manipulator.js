 function solve(obj){

     var obj = obj;
     var arrNum = obj.filter(function(x){
        return !isNaN(x);
    });

    arrNum.sort(function(x,y){
        return x>y;
    });

    var minNum = arrNum[0];
    var maxNum =arrNum[arrNum.length-1];

    console.log("Min number: "+minNum);
    console.log("Max number: "+maxNum);


    var mf = 1;
    var m = 0;
    var item;
    for (var i=0; i<arrNum.length; i++)
    {
        for (var j=i; j<arrNum.length; j++)
        {
            if (arrNum[i] == arrNum[j])
            m++;
            if (mf<m)
            {
            mf=m;
            item = arrNum[i];
            }
        }
        m=0;
    }
    console.log("Most frequent number: "+item);
     var newArr=arrNum;
    newArr.sort(function(a,b){
        return a<b;
    });
     console.log(newArr);
 }

 solve(["Pesho", 2, "Gosho", 12, 2, "true", 9,  undefined, 0, "Penka", { bunniesCount : 10}, [10, 20, 30, 40]]);
