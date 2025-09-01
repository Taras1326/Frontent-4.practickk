
//           /* Frontent-4 
//           Подія урок 1 */

// const parentEl = document.querySelector(".parent");

// const childEl = document.querySelector(".child");

// const childrenEl = document.querySelector(".children");


// parentEl.addEventListener("click", onParentClick);

// function onParentClick (evt){
//     console.log("TARGET", evt.target);
//     console.log("CURRENTTARGET", evt.currentTarget);
// };

// childEl.addEventListener("click", onChildClick);

// function onChildClick(evt) {
//     console.log("TARGET", evt.target);
//     console.log("CURRENTTARGET", evt.currentTarget);
// };

// childrenEl.addEventListener("click", onChildrenClick)

// function onChildrenClick(evt) {
//     console.log("TARGET", evt.target);
//     console.log("CURRENTTARGET", evt.currentTarget);
// };




// //       варіант 1


// const list = document.querySelector('.list')
// list.addEventListener('click', onContainerClick)


// function onContainerClick(event) {

//     let currentValue = null;

//     if (event.target.nodeName !== "BUTTON") {
//         return
//     }
    


//     const currentBtn = document.querySelector('.active-btn')

//     if (currentBtn) {
//         currentBtn.classList.remove("active-btn")
//     }
   
//     event.target.classList.add("active-btn")


//     currentValue = event.target.dataset.value
//     console.log(currentValue);

//     // console.log(event.target.nodeName);
// }






// //           Варіант 2


// function onContainerClick(event) {

//     let currentValue = null;

//     if (event.target.nodeName !== "BUTTON") {
//         return
//     }
    
   
//     event.target.classList.toggle("active-btn")



//     // console.log(event.target.nodeName);
// }






// window.addEventListener("click", (event) => {
//     console.log(event.target);
//     console.log(event.currentTarget);
// })