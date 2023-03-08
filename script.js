
if (localStorage.firstVisit == null){
    localStorage.firstVisit = true;
    document.querySelector("h1").innerHTML = "Refresh Me";
    
}else{
    var firstNumber = Math.floor(Math.random() * 6) + 1;
    var secondNumber = Math.floor(Math.random() * 6) + 1;

    var firstImage = document.firstElementChild.getElementsByTagName("div")[0].getElementsByTagName("img")[0];
    firstImage.setAttribute("src", "images/dice"+firstNumber+".png");
    firstImage.style.visibility = "visible";

    var secondImage = document.firstElementChild.getElementsByTagName("div")[1].getElementsByTagName("img")[0];
    secondImage.setAttribute("src", "images/dice"+secondNumber+".png");
    secondImage.style.visibility = "visible";

    if (firstNumber == secondNumber){
        document.querySelector("h1").innerHTML = "DRAW";
    }else if (firstNumber > secondNumber) {
        document.querySelector("h1").innerHTML = "🚩 Player 1 - WON";
    }else {
        document.querySelector("h1").innerHTML = "Player 2 - WON 🚩";

    }
}