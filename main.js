x=0;
y=0;
var drawCircle="";
var drawRect="";
var SpeechRecognition=window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
function start(){
document.getElementById("status").innerHTML="O sistema está ouvindo, pode falar";
recognition.start();
}
recognition.onresult=function(event){
    console.log(event);
    var conteudo=event.results[0][0].transcript;
    document.getElementById("status").innerHTML="A fala foi reconhecida como:"+conteudo;
 if(conteudo=="círculo")  {
    x=Math.floor(Math.random()*900);
    y=Math.floor(Math.random()*600);
    document.getElementById("status").innerHTML="Desenhando um círculo";
    drawCircle="set";
 }
 if (conteudo=="retângulo") {
    x=Math.floor(Math.random()*900);
    y=Math.floor(Math.random()*600);
    document.getElementById("status").innerHTML="Desenhando um retângulo";
    drawRect="set";
 }
 }
 function setup(){
    canvas=createCanvas(900,600);
 }
 function draw(){
    if(drawCircle=="set"){
        radius=Math.floor(Math.random()*100);
        circle(x,y,radius);
        document.getElementById("status").innerHTML="O círculo foi desenhado";
        drawCircle="";
    }
    if(drawRect=="set"){
        width=Math.floor(Math.random()*100);
        height=Math.floor(Math.random()*100);
        rect(x,y,width,height);
        document.getElementById("status").innerHTML="O retângulo foi desenhado";
        drawRect="";
 }
 }