// // let qr = document.querySelectorAll("img") ;
// // console.log(qr) ;

// // for(let i=0 ; i<qr.length ; i++)
// // {
// //     qr[i].src = 'assets/creation_1.png';   
// // }
// // // 



// let boxels = document.querySelectorAll(".boxLink") ;

// for(let i= 0 ; i<boxels.length ; i++)
// {
//     boxels[i].style.color = "yellow" ;
// }

// for(links of boxels)
// {
//     links.style.color = "green" ;
// }


// let img = document.querySelector('img');
// console.log(img);
// console.log(img.classList) ;
// img.classList.add('red');



let button = document.createElement("button") ;
let input = document.createElement("input");

button.innerText = "Click ME !" ;

document.querySelector("body").append(button);
document.querySelector("body").append(input);

button.setAttribute('id' , 'btn') ;
input.setAttribute('placeholder' ,'username') ;


let bt1 = document.querySelector('#btn') ;
bt1.classList.add('bt1-style') ;

let h1 = document.createElement('h1');
h1.classList.add('h1-style');
h1.innerText = "DOM Practise" ;

document.querySelector('body').append(h1);

let p = document.createElement('p') ;
p.innerHTML = "Apna College <b>Delta</b> Practise" ;

document.querySelector('body').append(p);
