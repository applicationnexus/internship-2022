function onMaturity(){
var principal=document.getElementById('principal').value;
var rate=document.getElementById('rate').value;
var ci=document.getElementById('ci').value;
var time=document.getElementById('time').value;
var irate=rate/ci;
var mv=document.getElementById('mv').value;
document.getElementById('mv').value=(document.getElementById('principal').value*Math.pow((1 + irate/100),(time/12*ci))).toFixed(2);
}


