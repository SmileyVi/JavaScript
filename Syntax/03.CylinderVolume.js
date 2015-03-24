function cylinderVol(arr){

        var r = arr[0];
        var h = arr[1];
        return Math.PI * r * r * h;
}


console.log(cylinderVol([2, 4]).toFixed(3));
console.log(cylinderVol([5, 8]).toFixed(3));
console.log(cylinderVol([12, 3]).toFixed(3));