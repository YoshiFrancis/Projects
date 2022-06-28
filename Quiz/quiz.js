const form = document.querySelector("#quizform")
let score;
const maximum = 6;
let topscore1, topscore2, topscore3, topscore4;
let x = form ?? false


if (window.location.href == 'http://127.0.0.1:5500/Quiz/index.html') {
    console.log(document.querySelector("#score1").innerHTML)
    console.log("hello world again")
    document.querySelector("#score1").innerHTML = `Current Score: ${maximum}`
}

if (x != false) {
    x = true
}

/* this is for the first quiz */
if (x){


    form.addEventListener('submit', (e) => {
        
        e.preventDefault();
        score = 0;

        const question1 = document.querySelector("input[name='question1']:checked");
        const question2 = document.querySelector("input[name='question2']:checked");
        const question3 = document.querySelector("input[name='question3']:checked");
        const question4 = document.querySelector("input[name='question4']:checked");
        const question5 = document.querySelector("input[name='question5']:checked");
        const question6 = document.querySelector("input[name='question6']:checked");


        if (question1.classList.contains("right")) {
            score++
        }
        if (question2.classList.contains("right")) {
            score++
        }
        if (question3.classList.contains("right")) {
            score++
        }
        if (question4.classList.contains("right")) {
            score++
        }
        if (question5.classList.contains("right")) {
            score++
        }
        if (question6.classList.contains("right")) {
            score++
        }

        let title = document.querySelector(".quizTitle")
        console.log(title.classList)
        
        if (title.classList.contains("one")) {
            if (!topscore1){
                topscore1 = score;
            } 
            else {
                if (topscore1 < score) 
                {
                    topscore1 = score;
                }
                
            }
            localStorage.setItem("quiz1", topscore1)
        } else if (title.classList.contains("two")) {
            if (!topscore2){
                topscore2 = score;
            } 
            else {
                if (topscore2 < score) 
                {
                    topscore2 = score;
                }
            }
            localStorage.setItem("quiz2", topscore2)
        } else if(title.classList.contains("three")) {
            if (!topscore3){
                topscore3 = score;
            } 
            else {
                if (topscore3 < score) 
                {
                    topscore3 = score;
                }
            }
            localStorage.setItem("quiz3", topscore3)
        } else {
            if (!topscore4){
                topscore4 = score;
            } 
            else {
                if (topscore4 < score) 
                {
                    topscore4 = score;
                }
            }
            localStorage.setItem("quiz4", topscore4)
        }

        window.location.href = "./index.html";
        // window.open("./index.html", target="_blank")
    })

}

