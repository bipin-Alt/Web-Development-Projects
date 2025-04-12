const contentContainer = document.querySelector(".content");
const prevBtn = document.querySelector(".previous-btn");
const nextBtn = document.querySelector(".next-btn");

const contentObj = [
    {
               content:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias dolorem nisi, eaque quo consectetur doloribus suscipit sapiente exercitationem facere ea non mollitia sequi nostrum at voluptatibus ut voluptates, maxime obcaecati."
    },
    {
               content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias dolorem nisi, eaque quo consectetur doloribus suscipit sapiente exercitationem facere ea non mollitia sequi nostrum at voluptatibus ut voluptates, maxime obcaecati."
    },
    {
               content:" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium rem sunt unde laborum nostrum expedita sequi asperiores natus. Totam, nostrum magni temporibus fuga quia fugit distinctio beatae molestias perferendis quasi."
    },
    {
               content:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, eaque sapiente. Rerum enim praesentium perferendis numquam esse ut, blanditiis voluptatibus adipisci delectus molestias incidunt id facilis neque fuga reiciendis commodi."
    },
    {
               content:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi suscipit mollitia, reiciendis fugit numquam dicta atque quidem aliquid molestias tempora, iste, quo maxime totam non nobis. Architecto vitae quas sit.",
    },
    {
        
        content:" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde non tenetur eligendi magni dicta mollitia modi nihil asperiores, adipisci ullam aliquam dignissimos consectetur aliquid, nostrum dolores cupiditate porro ut debitis?"
    },
    {
        content:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem nam nostrum possimus sed in nesciunt incidunt fugiat, eius consequatur, at, aut nobis beatae eaque. Perferendis, modi! Dolore aspernatur deleniti impedit?"
    },
    {
        content:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni pariatur error voluptates. Ab beatae sint, repudiandae ipsa animi esse iure, ducimus pariatur ullam laudantium, ipsum accusamus! Autem ex possimus vero."
    },
    {
        content:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat corrupti veniam sequi expedita praesentium accusantium cupiditate? Unde odit consequatur ratione dolor. Repudiandae culpa corporis exercitationem iusto in veniam libero illum."
    },
    {
        content:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur, reprehenderit! Pariatur deserunt laudantium placeat veritatis optio nulla facere libero ipsam neque sapiente in corrupti fuga nemo, minima voluptatibus eum voluptates?"
    },
    {
        content:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa, nam veritatis, eum sed doloremque vero quis ipsum libero perspiciatis blanditiis aliquam officiis, maiores dignissimos neque aspernatur nihil veniam eaque rem."
    },
    {
        content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, expedita iusto eum vero mollitia, aliquid, ratione praesentium aliquam illum culpa neque delectus ipsam dolore recusandae facere ab soluta ipsa vitae."
    }
];



const toNextFunction =()=>{
    const paginationCount = document.querySelectorAll("li");
    const paginationCountArray =[...paginationCount];
    for(let i=0;i<paginationCountArray.length;i++){
        if(paginationCountArray[i].classList.contains("active") && i<5){
            paginationCountArray[i].classList.remove("active");
            paginationCountArray[i+=1].classList.add("active");
            const content = document.querySelector(".content");
           content.innerHTML =`
           <div>${contentObj[i].content}</div>
           <div>${contentObj[i+1].content}</div>
           <div>${contentObj[i+2].content}</div>
           <div>${contentObj[i+3].content}</div>`;
        };
    };
} 
//previous button functionality//
const prevBtnFunction = ()=>{
    const paginationCount= document.querySelectorAll("li");
    const paginationCountArray =[...paginationCount];
    for(let i=0;i<paginationCountArray.length;i++){
        if(paginationCountArray[i].classList.contains("active")&& i>0){
            paginationCountArray[i].classList.remove("active");
            paginationCountArray[i-=1].classList.add("active");
            const content = document.querySelector(".content");
            const startPage = (i-1) * 2;
           content.innerHTML =`
           <div>${contentObj[startPage].content}</div>
           <div>${contentObj[startPage + 1].content}</div>
           <div>${contentObj[startPage + 2].content}</div>
           <div>${contentObj[startPage + 3].content}</div>`
        };
    };
};
//event listener to the next btn//
nextBtn.addEventListener("click",toNextFunction);
prevBtn.addEventListener("click", prevBtnFunction);