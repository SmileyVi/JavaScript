    var time = new Date();
    var day = time.getDay();
    var weekday=new Array(7);
        weekday[0]="Mon";
        weekday[1]="Tue";
        weekday[2]="Wed";
        weekday[3]="Thu";
        weekday[4]="Fri";
        weekday[5]="Sat";
        weekday[6]="Sun";
    var date = time.getDate();
        if  (date <10){
            date = "0"+day;
        }
    var month = time.getMonth();
    var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "June",
        "July", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    var year = time.getFullYear();
    var hours = time.getHours();
        if (hours < 10) {
            hours = "0" + hours;
        }
    var minutes = time.getMinutes();
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
    var seconds = time.getSeconds();
        if (seconds < 10) {
            seconds = "0" + seconds;
        }
    console.log(weekday[day-1] + ", " + date +" "+ monthNames[month] + " "+ year + " " +
    hours + ":" + minutes + ":" + seconds + " GMT" );