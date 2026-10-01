// get button element

// const element = document.getElementById('btn')

// console.log("element")
// let count = 0;
// const getcount = document.getElementById('count');
// const dec = document.getElementById('dec');
// let element = document.getElementById('demo');

// function changeText() {
//     element.style.color = "green";
//     count++;
//     getcount.innerText = count;
//     getcount.style.color = "green";
// }

// function decrese() {
//     count--;
//     getcount.innerText = count;
//     console.log(count);
//     element.style.color = "red";
//     getcount.style.color = "red";
// }


// +++++++++++++++++++++++++++ DOM ++++++++++++++++++++++++++++++


// let giftbox = document.getElementById("gift-box");
// let clickBtn = document.getElementById("click-btn");

// // console.log(giftbox);
// // console.log(clickBtn);

// clickBtn.addEventListener('click', ()=>{
//     giftbox.classList.remove('hide');
// })

// ++++++++++++++++++++++++ Toggle Switch ++++++++++++++++++++++++++++++

// const onBtn = document.querySelector('#on');
// const offBtn = document.querySelector('#off');
// const light = document.querySelector('div');

// // console.log(light);

// onBtn.addEventListener('click', ()=> {
//     light.style.backgroundColor = "orange";
//       light.style.borderRadius = "50%";
// });

// offBtn.addEventListener('click', ()=> {
//     light.style.backgroundColor = "black";
//     light.style.borderRadius = "50%";
// })

// ++++++++++++++++++++++++++++ Project 1: Quote Generator ++++++++++++++++++++++++

// const quotes = [
//     {
//         quote: "I do the very best I know how - the very best I can; and I mean to keep on doing so untill the end.",
//         person: "Abraham Lincoln"
//     },
//     {
//         quote: "When some blessings come to you, do not drive them away through thanklessness.",
//         person: "Hazrat Ali a.s"
//     },
//     {
//         quote: "I am the city of knowledge & Ali is it's gate so whoso ever intends to acquire knowledge must come through the gate.",
//         person: "Hazrat Muhammad S.A.W.W"
//     },
//     {
//         quote: "Allah executed & rendered justice for the sake of putting together & harmonization of the hearts.",
//         person: "Bibi Fatima"
//     },
//     {
//         quote: "One who seeks the pleasure of people by displeasing Allah. Allah makes him over to the people.",
//         person: "Imam Hussain a.s"
//     },
//     {
//         quote: "He who marries a woman for the hope of her wealth, Allah leaves him with only that wealth.",
//         person: "Imam Jaffar Sadiq a.s"
//     }
// ];


// document.getElementById("new-quote").addEventListener('click',
//     function() {
//         const random = Math.floor(Math.random() * quotes.length);
//         const newQuote = document.querySelector('.quote-text');
//         const person = document.querySelector('.person');

//         newQuote.innerText = quotes[random].quote;
//         person.innerText = quotes[random].person;
//     }
// )


// +++++++++++++++++++++++++++++++++++ Project:2  Model Open Button +++++++++++++++++++++++

// let openBtn = document.getElementById('open-btn');
// let modalContainer = document.getElementById('modal-container');
// let closeBtn = document.getElementById('close-btn');


// openBtn.addEventListener('click', ()=>{

//     modalContainer.style.display = 'block';
// });

// closeBtn.addEventListener('click', ()=> {

//     modalContainer.style.display = 'none';
// });



// +++++++++++++++++++++++++++++++ Project 3 ++++++++++++++++++++++++++++++++++++


// Variable

const accordion = document.getElementsByClassName('content-container');
// console.log(accordion);

for(let i = 0; i< accordion.length; i++) {

    accordion[i].addEventListener('click', function (){

        this.classList.toggle('active')
    })
}