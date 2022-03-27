function addUser(){
    b1=document.getElementById("input1").value;
    b2=document.getElementById("input2").value;

    localStorage.setItem("b1", b1);
    localStorage.setItem("b2", b2);

    window.location="game_page.html";
}
