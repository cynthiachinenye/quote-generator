//DOM Manipulation

//  const title = document.querySelector('#main-heading');
//  console.log(title)
//  title.style.color = "#f56342";
//  title.style.textAlign= 'center';


//  const listItems = document.querySelectorAll(".list-items");
//   console.log (listItems);

//    for(i=0; i < listItems.length; i++){
//     listItems[i].style.fontSize= "20px";
//     listItems[i].style.color='#f56342';
//    }

//    const ul = document.querySelector('ul');
//    const li = document .createElement('li');

// //    Adding Elements

// ul.append(li)

// // modifying the text 
// li.innerText = 'X-men';

// // modifying  Attributes & classes
// // li.setAttribute('class', 'list-items')
// // li.remove()
// li.classList.add('list-items')
// console.log(li.classList.contains('list-items'))

// // event listeners
// // element.addEvenLisener('click', function);

// const buttonTwo = document.querySelector('.btn-2');
// function alertBtn (){
//    alert('i also love javascript');
// };

// buttonTwo.addEventListener('click',alertBtn)

// // onMouse

// const Three =document.querySelector('.box-3')

// function changeBgColor(){
//    alert('it is a must and sure for me to be a web developer');
//    Three.style.backgroundColor = 'red';
// }
// Three.addEventListener('mouseover',changeBgColor);


// Reveal Event

// const revealBtn = document.querySelector('.reveal-btn');

//  const hiddenContent = document.querySelector('.hidden-content');

//  function revealContent (){

//    if(hiddenContent.classList.contains('reveal-btn')
//    ){
        
//       hiddenContent.classList.remove('reveal-btn')


//    }else{
//       hiddenContent.classList.add('reveal-btn')
//    }
//  }
//  revealBtn.addEventListener('click',  revealContent )

// Event Probagaion
 window.addEventListener("click", function(){
   console.log('window');
 },true);
 document.addEventListener('click', function(){
   console.log('document')
 },true);
 document.querySelector('.div2').addEventListener('click', function(){
   console.log('Div 2')
 },true);
 document.querySelector('.div1').addEventListener('click', function(){
   console.log("div 1")
 }, true);
 document.querySelector('button').addEventListener('click', function(e){
   console.log(e.target.innerText="clicked!")
 })