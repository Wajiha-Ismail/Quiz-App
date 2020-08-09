window.onload = function(){
    display(0);
}

var questions=[
    {
    id: 1,
    question:"Which number should come next in the pattern: 37, 34, 31, 28 ?",
    answer: "25, the numbers are decreasing by 3",
    options: [
        "24",
        "25",
        "21",
        "27"
    ]
},
{
    id: 2,
    question:"Find the answer that best completes the analogy: Book is to Reading as Fork is to:",
    answer: "eating",
    options: [
        "drawing",
        "writing",
        "stirring",
        "eating"
    ]
}
]


var quesCount = 0;
function next(){
    quesCount++;
    display(quesCount)
}


function display(d){
    var ques = document.getElementById("ques");
    ques.innerHTML = `<h3> ${questions[d].question} </h3>
    <ul class="list">
    <li class="option"> ${questions[d].options[0]} </li>
    <li class="option"> ${questions[d].options[1]} </li>
    <li class="option"> ${questions[d].options[2]} </li>
    <li class="option"> ${questions[d].options[3]} </li>
</ul>`
    active()
}

function active(){
    let quesAns = document.querySelectorAll("li.option")
    for(let i=0; i<quesAns.length;i++){
        quesAns[i].onclick = function(){
            for (let j=0; j<quesAns.length;j++){
                if(quesAns[j].classList.contains("active")){
                    quesAns[j].classList.remove("active")
                }
            }
            quesAns[i].classList.add("active")
        }
    }
}
