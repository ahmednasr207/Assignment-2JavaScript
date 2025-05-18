var Pointernumbr = document.getElementById("pointer")
function loopindex() {


    var degrtr = ["1-Be yourself; everyone else is already taken.",
        "2-Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        "3-Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind",
        "Here's to the crazy ones. The misfits. The rebels. The troublemakers. The round pegs in the square holes. The ones who see things differently. They're not fond of rules. And they have no respect for the status quo. You can quote them, disagree with them, glorify or vilify them. About the only thing you can't do is ignore them. Because they change things. They push the human race forward. And while some may see them as the crazy ones, we see genius. Because the people who are crazy enough to think they can change the world, are the ones who do",
        "5-You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
        "6-You only live once, but if you do it right, once is enough."];

    var asd;





    do {

        var fahed = Math.floor(Math.random() * degrtr.length);

        asd = degrtr[fahed];



    } while (asd === Pointernumbr.innerHTML)

    Pointernumbr.innerHTML = asd;
    console.log(asd);

}

// var fahed=Math.floor(Math.random()*degrtr.length);

//  asd=degrtr[fahed];
// if(asd===Pointernumbr.innerHTML){
// var fahed=Math.floor(Math.random()*degrtr.length);
// var asd=degrtr[fahed];
// Pointernumbr.innerHTML=asd;
// console.log(asd+"i");
// }else{

//     Pointernumbr.innerHTML=asd;
// console.log(asd);
// }
