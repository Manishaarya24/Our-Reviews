const reviews =[
    {
        id: 1,
        name: "Anjali nayal",
        job: "web Devloper",
        img:
        "https://i.pinimg.com/474x/83/2a/46/832a460b522c84fa9650c11face5927e.jpg",
        text:
        "My journey as a web developer is characterized by a constant pursuit of knowledge and mastery of new tools and frameworks. I thrive in dynamic and collaborative environments, where I can brainstorm ideas, collaborate with cross-functional teams, and turn concepts into reality through code.",
    },
    {
        id: 1,
        name: "Chetna",
        job: "web Devloper",
        img:
        "https://i.pinimg.com/474x/83/2a/46/832a460b522c84fa9650c11face5927e.jpg",
        text:
        "In addition to technical skills, I bring a creative mindset and attention to detail to every project I work on. I understand the importance of user-centric design and strive to create intuitive and accessible interfaces that provide seamless navigation and a delightful user experience.",
    },
    {
        id: 1,
        name: "Pooja",
        job: "web Devloper",
        img:
        "https://i.pinimg.com/originals/55/a5/89/55a589c4c118141188f1396ebada5e9b.png",
        text:
        "I stay up-to-date with the latest trends and technologies in the rapidly evolving web development landscape, enabling me to leverage the best tools and practices to deliver exceptional results. With a keen eye for detail and a commitment to continuous learning, I'm dedicated to creating impactful and innovative web experiences that resonate with users.",
    },
    {
        id: 1,
        name: "Suman",
        job: "web Devloper",
        img:
        "https://i.pinimg.com/474x/83/2a/46/832a460b522c84fa9650c11face5927e.jpg",
        text:
        "In JavaScript, the Promise.race() method takes an iterable of promises and returns a promise that resolves or rejects as soon as one of the promises in the iterable resolves or rejects, with the value or reason from that promise.",
    },
];



const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prex-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");


let currentItem = 4;

window.addEventListener("DOMContentLoaded", function (){
    showPerson(currentItem); 
});

function showPerson() {
    const item =reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

nextBtn.addEventListener("click", function () {
    currentItem++;
    if (currentItem > reviews.length - 1){
        currentItem = 0;
    }
    showPerson();
});

prevBtn.addEventListener("click", function () {
    currentItem--;
    if (currentItem < 0){
        currentItem = reviews.length - 1;
    }
    showPerson();
});

randomBtn.addEventListener("click", function(){
    currentItem = Math.floor(Math.random()* reviews.length);
    console.logshowPerso(); void 
    showPerson ();
});
