c1= localStorage.getItem("b1");
c2= localStorage.getItem("b2");

s1= 0;
s2= 0;

document.getElementById("player1_name").innerHTML=c1+":";
document.getElementById("player2_name").innerHTML=c2+":";
document.getElementById("player1_score").innerHTML=s1;
document.getElementById("player2_score").innerHTML=s2;
document.getElementById("pq").innerHTML="QUESTION TURN-"+c1;
document.getElementById("pa").innerHTML="ANSWER TURN-"+c2;

function send(){
    
    getword=document.getElementById("word").value;
    word=getword.toLowerCase();
    console.log(word);

    gl1=word.charAt(1);
    console.log(gl1);

    floor=Math.floor( word.length/2);
    gl2=word.charAt(floor);
    console.log(gl2);

    lminusone=word.length-1;
    gl3=word.charAt(lminusone);
    console.log(gl3);

    r1=word.replace(gl1, "_");
    r2=r1.replace(gl2 ,"_");
    r3=r2.replace(gl3,"_");
    console.log(r3);
    
    qw="<h4 id='question'>Q."+r3+"</h4>";
    input="<br>Answer: <input type='text' id='i9'>";
    bbb="<br> <button class='btn btn-success' onclick='check()'>CHECK</button>";
    ro=qw+input+bbb;
    document.getElementById("output").innerHTML=ro;
    document.getElementById("word").value="";


}
qt="player1"
at="player2"
function check(){
ga=document.getElementById("i9").value;
answer=ga.toLowerCase();
console.log("answer is:"+answer);

    if(answer==word){
if (at=="player1"){
s1=s1+1;
document.getElementById("player1_score").innerHTML=s1;
}
else{
    s2=s2+1;
document.getElementById("player2_score").innerHTML=s2;
}
    }
    if(at=="player1"){
        at="player2";
        document.getElementById("pq").innerHTML="Answer Turn:"+at;
    }
    else{
at="player1"
document.getElementById("pq").innerHTML="Answer Turn:"+at;
    }
    if(qt=="player1"){
        qt="player2";
        document.getElementById("pq").innerHTML="Question Turn:"+qt;
    }
    else{
qt="player1"
document.getElementById("pq").innerHTML="Question Turn:"+qt;
    }

}