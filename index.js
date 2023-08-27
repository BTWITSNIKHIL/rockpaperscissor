const container = document.querySelector(".container");
const user = document.querySelector(".user img");
const cpu = document.querySelector(".cpu img");
const result = document.querySelector(".result");
// const optionimg = document.querySelector(".optionImg");
const optimg = document.querySelectorAll(".optimg");

optimg.forEach((image, index) => {

    image.addEventListener("click", (e) => {
        image.classList.add("active");

        user.src = cpu.src = "images/rock.png"
        result.textContent = "wait.."
        optimg.forEach((image2, index2) => {

            index !== index2 && image2.classList.remove("active")
        });

        let time = setTimeout(() => {

        let imgSrc = e.target.querySelector("img").src;
        user.src = imgSrc;

        let randomNum = Math.floor(Math.random() * 3);
        let cpuimg = ["images/rock.png", "images/paper.png", "images/scissors.png"];
        cpu.src = cpuimg[randomNum];
        let cpuvalue = ["R", "P", "S"][randomNum];
        let uservalue = ["R", "P", "S"][index];

        let outcomes = {
            RR: "Draw",
            RP: "Cpu",
            RS: "User",
            RR: "Draw",
            PP: "Draw",
            PR: "User",
            PS: "Cpu",
            SS: "Draw",
            SR: "Cpu",
            SP: "User",

        };

        let outcomevalue = outcomes[uservalue + cpuvalue];
        result.textContent = uservalue === cpuvalue ? "Match Draw" : `${outcomevalue} Won!!`;
    
}, 2000);


    });
});