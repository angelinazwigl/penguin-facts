( async function(){
    "use strict";
$(document).ready(function() {
    $(".my-progress-bar").circularProgress({
        line_width: 6,
        color: "#ccc",
        starting_position: 0, // 12.00 o' clock position, 25 stands for 3.00 o'clock (clock-wise)
        percent: 0, // percent starts from
        percentage: true,
        text: "of a penguin's life is spent in water"
    }).circularProgress('animate', 75, 10000);
});

const myForm1 = document.querySelector('#convert1');     //when user clicks submit, form replaced with their guess
	myForm1.addEventListener('submit', function(event){
	event.preventDefault();
	const paragraph1 = document.querySelector('#text1').value;
    document.querySelector('#convert1').innerHTML = `<p>your guess: ${paragraph1}</p>`;
});

const myForm2 = document.querySelector('#convert2');     //when user clicks submit, form replaced with their guess
	myForm2.addEventListener('submit', function(event){
	event.preventDefault();
	const paragraph2 = document.querySelector('#text2').value;
    document.querySelector('#convert2').innerHTML = `<p>your guess: ${paragraph2}</p>`;
});

const myForm3 = document.querySelector('#convert3');    //when user clicks submit, form replaced with their guess 
	myForm3.addEventListener('submit', function(event){
	event.preventDefault();
	const paragraph3 = document.querySelector('#text3').value;
	document.querySelector('#convert3').innerHTML = `<p>your guess: ${paragraph3}</p>`;

});

    document.querySelector('#button1').addEventListener('click', function(event){
	event.preventDefault();
	document.querySelector('#button1').innerHTML = `<p>Gentoo Penguin</p>`; });   //when user clicks this button, replace button with answer

    document.querySelector('#button2').addEventListener('click', function(event){
        event.preventDefault();
        document.querySelector('#button2').innerHTML = `<p>Macaroni Penguin</p>`; });  //when user clicks this button, replace button with answer

    document.querySelector('#button3').addEventListener('click', function(event){
        event.preventDefault();
        document.querySelector('#button3').innerHTML = `<p>Yellow-eyed Penguin</p>`; }); //when user clicks this button, replace button with answer

}());


