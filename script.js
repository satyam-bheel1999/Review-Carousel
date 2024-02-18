
// we will create an array of objects, in wich all the data will be stored as a key value pair
let reviews = [
    {
        id : 1,
        name : "Susan Smith",
        img :"/img/img.jpg",
        Role : "Web Developer",
        info : 
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque eum voluptatum dolores laudantium! Quo praesentium ratione nesciunt soluta labore. Nobis magni vel, quaerat illo reiciendis qui non ipsa ratione laboriosam!"
    },
    {
        id : 2,
        name : "John",
        img :"/img/img-2.png",
        Role : "MERN Stack Developer",
        info : 
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque eum voluptatum dolores laudantium! Quo praesentium ratione nesciunt soluta labore. Nobis magni vel, quaerat illo reiciendis qui non ipsa ratione laboriosam!"
    },
    {
        id : 3,
        name : "selena",
        img :"/img/img-3.jpg",
        Role : "Full Stack Developer",
        info : 
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque eum voluptatum dolores laudantium! Quo praesentium ratione nesciunt soluta labore. Nobis magni vel, quaerat illo reiciendis qui non ipsa ratione laboriosam!"
    },
    {
        id : 4,
        name : "lua hamsworth",
        img :"/img/img-4.jpg",
        Role : "UI/UX Designer",
        info : 
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque eum voluptatum dolores laudantium! Quo praesentium ratione nesciunt soluta labore. Nobis magni vel, quaerat illo reiciendis qui non ipsa ratione laboriosam!"
    },

]

// we will get all the data in their respective variable name
let name = document.getElementById("name");
let img = document.getElementById("myImg");
let role = document.getElementById("role");
let info = document.getElementById("info");


let prevBtn = document.getElementById("prev");
let nextBtn = document.getElementById("next");

let currentItem = 0;// by using this currentItem as an index,we will ittreat array 

function showReview(){
    const item = reviews[currentItem];
    img.src = item.img;
    name.innerText = item.name;
    role.innerText = item.Role;
    info.innerText = item.info;
    
}

nextBtn.addEventListener("click", function(){

    currentItem++
    if(currentItem > reviews.length-1){
        currentItem = 0;
    }
    showReview(currentItem);
    
})

prevBtn.addEventListener("click", function(){

    currentItem--
    if(currentItem < 0){
        currentItem = reviews.length-1;
    }
    showReview(currentItem);
    
})







