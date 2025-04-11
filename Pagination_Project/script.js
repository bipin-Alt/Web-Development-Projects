const contentContainer = document.querySelector(".content");
const prevBtn = document.querySelector(".previous-btn");
const nextBtn = document.querySelector(".next-btn");

const contentObj = [
    {
        id:1,
        content:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias dolorem nisi, eaque quo consectetur doloribus suscipit sapiente exercitationem facere ea non mollitia sequi nostrum at voluptatibus ut voluptates, maxime obcaecati."
    },
    {
        id :2,
        content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias dolorem nisi, eaque quo consectetur doloribus suscipit sapiente exercitationem facere ea non mollitia sequi nostrum at voluptatibus ut voluptates, maxime obcaecati."
    },
    {
        id:3,
        content:" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium rem sunt unde laborum nostrum expedita sequi asperiores natus. Totam, nostrum magni temporibus fuga quia fugit distinctio beatae molestias perferendis quasi."
    },
    {
        id:4,
        content:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, eaque sapiente. Rerum enim praesentium perferendis numquam esse ut, blanditiis voluptatibus adipisci delectus molestias incidunt id facilis neque fuga reiciendis commodi."
    },
    {
        id:5,
        content:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi suscipit mollitia, reiciendis fugit numquam dicta atque quidem aliquid molestias tempora, iste, quo maxime totam non nobis. Architecto vitae quas sit.",
    },
    {
        id:"6",
        content:" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde non tenetur eligendi magni dicta mollitia modi nihil asperiores, adipisci ullam aliquam dignissimos consectetur aliquid, nostrum dolores cupiditate porro ut debitis?"
    }
];

const toNextFunction =()=>{
    const paginationCount = document.querySelectorAll("li");
    const paginationCountArray =[...paginationCount];
    for(let i=0;i<paginationCountArray.length;i++){
        if(paginationCountArray[i].classList.contains("active") && i<5){
            paginationCountArray[i].classList.remove("active");
            paginationCountArray[i+=1].classList.add("active");
        }
    }
}

//event listener to the next btn//
nextBtn.addEventListener("click",toNextFunction);