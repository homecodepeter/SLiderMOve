const reviews = [
    {
        id: 1,
        name: "sare jones",
        job: "The Boss",
        img: "https://cdn.pixabay.com/photo/2015/11/20/17/29/person-1053543_960_720.jpg",
        text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag."
    },
    {
        id: 2,
        name: "peter save",
        job: "senier soft",
        img: "https://cdn.pixabay.com/photo/2015/07/28/19/21/person-864804_640.jpg",
        text: 
        "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic."
    },
    {
        id: 3,
        name: "Susan Smith",
        job: "WEB DEVELOPER",
        img: "https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?size=626&ext=jpg",
        text: 
        "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry"
    },
    {
        id: 4,
        name: "Anna Johnson",
        job: "WEB DESIGNER",
        img: "https://cdn.pixabay.com/photo/2016/02/07/21/01/person-1185618_1280.jpg",
        text: 
        "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal. "
    }
];
// select items
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const  info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');


// set staring item
let currentItem = 0;

//  load intial item
window.addEventListener('DOMContentLoaded', function (){
 showPerson();
});

// shwo person based on item
function showPerson(){
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

// show next person
nextBtn.addEventListener('click', () => {
    currentItem++;
    if(currentItem > reviews.length -1){
    currentItem = 0;
    }
    showPerson();
})
prevBtn.addEventListener('click', () => {
    currentItem--;
    showPerson();
})
randomBtn.addEventListener('click', () => {
    currentItem++;
    if(currentItem > reviews.length -1){
    currentItem = 0;
    }
    showPerson();
})

