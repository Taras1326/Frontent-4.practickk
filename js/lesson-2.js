
// const textType = document.querySelector(".text");
// console.log(textType);

// window.addEventListener("mousemove",  _.throttle(onMouse, 500))
// // _.debounce

// let count = 0

// function onMouse(event) {
//     console.log(event);
//     count += 1

//     textType.textContent = `кількість спрацьована функція ${count}`
// }





// const courses = [
//     { label: "html" },
//     { label: "css" },
//     { label: "java" },
//     { label: "python" },
//     { label: "react" },
//     { label: "java-script" },
//     { label: "node-js" },
//     { label: "scss" },
//     { label: "vite" },
//     { label: "C#" },
//     { label: "C++" },
//     { label: "SQL" },
//     { label: "PHP" },
//     { label: "Pascal" },
//     { label: "Scratch" },
//     { label: "Vue.js" },
//     { label: "Redux" },
//   ];
  
//   const listRef = document.querySelector(".list");
//   const inputEl = document.querySelector(".input");
  
//   const markupItems = array => {
//     const markup = array.map(item => `<li>${item.label}</li>`).join("");
//     listRef.innerHTML = markup;
//   };
  
//   inputEl.addEventListener("input", _.debounce(onInput, 500, {
//     leading: true,
//     trailing: false
//   }));
  
//   function onInput(event) {
//     const searchValue = event.target.value.toLowerCase().trim();
//     const filteredCourses = courses.filter(({ label }) =>
//       label.toLowerCase().startsWith(searchValue)
//     );
//     markupItems(filteredCourses);
//   }
  
//   markupItems(courses);
  
  







// const box = document.querySelector('.box');

// let isDragging = false;
// let offsetX = 0;
// let offsetY = 0;

// // 👉 Встановлюємо початкову позицію з localStorage або default (0, 0)
// const savedPosition = JSON.parse(localStorage.getItem('box-position')) || { x: 0, y: 0 };
// setBoxPosition(savedPosition.x, savedPosition.y);

// // mousedown — починаємо перетягування
// box.addEventListener('mousedown', (event) => {
//   isDragging = true;
//   offsetX = event.clientX - box.offsetLeft;
//   offsetY = event.clientY - box.offsetTop;
//   box.style.cursor = 'grabbing';
// });

// // mousemove — тягнемо за мишкою
// window.addEventListener('mousemove', (event) => {
//   if (!isDragging) return;

//   const maxX = window.innerWidth - box.offsetWidth;
//   const maxY = window.innerHeight - box.offsetHeight;

//   let newX = event.clientX - offsetX;
//   let newY = event.clientY - offsetY;

//   newX = Math.max(0, Math.min(newX, maxX));
//   newY = Math.max(0, Math.min(newY, maxY));

//   box.style.left = `${newX}px`;
//   box.style.top = `${newY}px`;
// });

// // mouseup — зберігаємо позицію і повертаємось назад
// window.addEventListener('mouseup', () => {
//   if (isDragging) {
//     // Повертаємося до останньої збереженої позиції
//     setBoxPosition(savedPosition.x, savedPosition.y);
//   }

//   isDragging = false;
//   box.style.cursor = 'grab';
// });

// // Функція для встановлення координат
// function setBoxPosition(x, y) {
//   box.style.left = `${x}px`;
//   box.style.top = `${y}px`;
// }






const boxEl = document.querySelector(".box");

let isMove = false;
let count = 0;

window.addEventListener("mousedown", () => {
    isMove = true
})
window.addEventListener("mousemove",  _.throttle(onMouse, 100) );
window.addEventListener("mouseup", () => {
    isMove = false
})

function onMouse(event) {
    if (isMove) {
        const x = event.clientX + "px";
        const y = event.clientY + "px";
      
        boxEl.style.left = x;
        boxEl.style.top = y;

        count += 1;
        console.log(count);
    }
 
}






















const cars = [
    {
      photo: "https://images.wallpaperscraft.ru/image/single/bmw_avtomobil_bamper_191131_300x168.jpg",
      name: "Червоний седан 2024",
      price: 22000,
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus iusto harum distinctio quis cupiditate iure, dolorem, eveniet ipsam nostrum, totam natus quidem aperiam? Tempore nulla accusantium molestiae fugiat ducimus et architecto dolorem modi doloremque saepe sint similique, commodi consequuntur beatae autem asperiores perspiciatis animi fuga reprehenderit eos alias obcaecati amet molestias quisquam! ...`,
    },
    {
      photo: "https://st2.depositphotos.com/3591429/5247/i/450/depositphotos_52470577-stock-photo-red-car-on-white-background.jpg",
      name: "Розкішний червоний седан",
      price: 45000,
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus iusto harum distinctio quis cupiditate iure, dolorem, eveniet ipsam nostrum, totam natus quidem aperiam? Tempore nulla accusantium molestiae fugiat ducimus et architecto dolorem modi doloremque...`,
    },
    {
      photo: "https://img.mercedes-benz-kiev.com/data/lineup/c-class-coupe/c-class-coupe-8.jpeg",
      name: "Спортивне купе",
      price: 35000,
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus iusto harum distinctio quis cupiditate iure, dolorem, eveniet ipsam nostrum, totam natus quidem aperiam? Tempore nulla accusantium molestiae fugiat ducimus et architecto dolorem modi doloremque saepe sint similique, commodi consequuntur beatae autem asperiores perspiciatis animi fuga reprehenderit eos alias obcaecati amet molestias quisquam! ...`,
    },
    {
      photo: "https://media.istockphoto.com/id/1124669413/ru/%D1%84%D0%BE%D1%82%D0%BE/%D1%81%D0%B8%D0%BD%D0%B8%D0%B9-%D1%81%D0%B5%D0%B4%D0%B0%D0%BD-%D0%B0%D0%B2%D1%82%D0%BE%D0%BC%D0%BE%D0%B1%D0%B8%D0%BB%D1%8C.jpg?s=612x612&w=0&k=20&c=6ULg9CUh06MGw-RMrz5SxVOhozroYQiaTlCQ96FyKJc=",
      name: "Сімейний седан",
      price: 25000,
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus iusto harum distinctio quis cupiditate iure, dolorem, eveniet ipsam nostrum, totam natus quidem aperiam? Tempore nulla accusantium molestiae fugiat ducimus et architecto dolorem modi doloremque...`,
    },
    {
      photo: "https://st.depositphotos.com/2528559/4990/i/450/depositphotos_49904447-stock-photo-small-black-economic-car-back.jpg",
      name: "Міський компакт",
      price: 18000,
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus iusto harum distinctio quis cupiditate iure, dolorem, eveniet ipsam nostrum, totam natus quidem aperiam? Tempore nulla accusantium molestiae fugiat ducimus et architecto dolorem modi doloremque...`,
    },
    {
      photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCtuJIfLarKwVMYTTpH1YCQyVUoJqf1OrzP6tBc1r2hkb54VGvujQovRpDO4Eytt96oYA&usqp=CAU",
      name: "Бізнес-седан",
      price: 52000,
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus iusto harum distinctio quis cupiditate iure, dolorem, eveniet ipsam nostrum, totam natus quidem aperiam? Tempore nulla accusantium molestiae fugiat ducimus et architecto dolorem modi doloremque...`,
    },
    {
      photo: "https://st4.depositphotos.com/1350793/19604/i/450/depositphotos_196046280-stock-photo-a-brand-new-white-tesla.jpg",
      name: "Електричний седан",
      price: 38000,
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus iusto harum distinctio quis cupiditate iure, dolorem, eveniet ipsam nostrum, totam natus quidem aperiam? Tempore nulla accusantium molestiae fugiat ducimus et architecto dolorem modi doloremque...`,
    },
    {
      photo: "https://cdn.riastatic.com/photosnew/auto/photo/bmw_1-series__583604633f.jpg",
      name: "Червоний хетчбек",
      price: 20000,
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus iusto harum distinctio quis cupiditate iure, dolorem, eveniet ipsam nostrum, totam natus quidem aperiam? Tempore nulla accusantium molestiae fugiat ducimus et architecto dolorem modi doloremque...`,
    },
    {
      photo: "https://cdn0.riastatic.com/photosnew/auto/photo/byd_han__489747315f.jpg",
      name: "Преміум седан",
      price: 60000,
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus iusto harum distinctio quis cupiditate iure, dolorem, eveniet ipsam nostrum, totam natus quidem aperiam? Tempore nulla accusantium molestiae fugiat ducimus et architecto dolorem modi doloremque...`,
    },
    {
      photo: "https://images.pexels.com/photos/12506011/pexels-photo-12506011.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      name: "Червоний спідстер",
      price: 48000,
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus iusto harum distinctio quis cupiditate iure, dolorem, eveniet ipsam nostrum, totam natus quidem aperiam? Tempore nulla accusantium molestiae fugiat ducimus et architecto dolorem modi doloremque...`,
    },
  ];

  

  const listRef = document.querySelector(".list2");

const markupItem = arr => {
  listRef.innerHTML = arr.map(({photo, name, price, description}) => {
    return `<li class="item">
      <img src="${photo}" alt="${name}" width="700" height="500" loading="lazy">
      <h3>${name}</h3>
      <p>${price}</p>
      <p>${description}</p>
    </li>`
  }).join("");
}

markupItem(cars)