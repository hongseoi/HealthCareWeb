
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

var totalscore = 0;
var sleeptime = document.getElementById("delay").value;

function foodscore(){
    var calories = eval(document.getElementById("calories").value);
    if (calories>2000){
        document.getElementById("calreturn").value = "일일 섭취량을 줄이세요";
    }
    else if(calories>=1500){
        totalscore += 1;
        document.getElementById("calreturn").value = "칼로리 섭취량이 적절합니다.";
    }
    else{
        document.getElementById("calreturn").value = "더 많이 먹으세요";
    }

}

function sleepscore(){

    var sleeptime = eval(document.getElementById("delay").value);
    
    if (sleeptime>9){
        document.getElementById("sleepreturn").value = "수면 시간을 줄이세요";
    }
    else if(sleeptime>6){
        totalscore += 1;
        document.getElementById("sleepreturn").value = "수면시간이 적절합니다.";
    }
    else{
        document.getElementById("sleepreturn").value = "좀 더 주무세요";
    }

}

function exerscore(){

    var exercise = eval(document.getElementById("exercise").value);

    if (exercise>9){
        document.getElementById("exreturn").value = "운동을 줄이세요";
    }
    else if(exercise>=1500){
        totalscore += 1;
        document.getElementById("exreturn").value = "적절합니다.";
    }
    else{
        document.getElementById("exreturn").value = "좀 더 걸으세요";
    }


}

function totallscore (){

    this.totalscore = totalscore;

    if (totalscore==3){
        document.getElementById("totalreturn").value = "A";
    }
    else if(totalscore==2){
        document.getElementById("totalreturn").value = "B";

    }
    else{
        document.getElementById("totalreturn").value = "C";
    }
}