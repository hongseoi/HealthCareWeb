
//수면시간 계산
function sum(){
    var stime = document.getElementById('stime').value;
    var wtime = document.getElementById('wtime').value;
    document.getElementById('result').innerHTML = Math.abs(Number(wtime) - Number(stime));

}
$('button').on('click', function () {
    var timeOfCall = $('#timeOfCall').val(),
        timeOfResponse = $('#timeOfResponse').val(),
        hours = timeOfResponse.split(':')[0] - timeOfCall.split(':')[0],
        minutes = timeOfResponse.split(':')[1] - timeOfCall.split(':')[1];
    
    minutes = minutes.toString().length<2?'0'+minutes:minutes;
    if(minutes<0){ 
        hours--;
        minutes = 60 + minutes;
    }
    hours = hours.toString().length<2?'0'+hours:hours;
    $('#delay').val(hours + ':' + minutes);
});

var calories = document.getElementById("calories").value;
var sleeptime = document.getElementById("delay").value;
var works = document.getElementById("works").value;

function foodscore(){
    if(calories>=2000) document.write("칼로리 섭취량을 줄이세요");
    else if(works>=1500) document.write("칼로리 섭취량 적절함");
    else document.write("No data");
}

function sleepscore(){
    if(hours>9) document.write("수면시간을 줄이세요.");
    else if(hours>=7) document.write("수면 시간이 적절합니다.");
    else document.write("수면시간이 부족합니다.");

}

function exerscore(){
    if(works>=7000) document.write("A");
    else if(works>=5000) document.write("B");
    else if(works>=3000) document.write("C");
    else document.write("No data");
}