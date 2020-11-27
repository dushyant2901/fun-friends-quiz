readlineSync=require("readline-sync");

var userName=readlineSync.question("What Is Your Name? ")

console.log("Welcome To The Quiz "+ userName+" Lets See How Much You Know About Me! ")
console.log("------------------------------------")

score=0

function play(Question,Answer){
  var userAnswer=readlineSync.question(Question);
  if (userAnswer.toUpperCase()===Answer.toUpperCase()){
    console.log("You Are Right!!!")
    score=score+1

  }else{
    console.log("You Are Wrong!!!")
  }
  console.log("Your Score Is "+ score);
  console.log("------------------------------------")
}



var Questions=[
  {
   Question: "Where Do I Live? ",
   Answer: "Gurugram"
  },
{
   Question: "Am I Older Than 20? ",
   Answer: "No"
  },{
   Question: "Do I Like To Listen Songs? ",
   Answer: "Yes"
  },{
   Question: "Do I Like To Read Books? ",
   Answer: "Yes"
  },{
   Question: "What Is My Favorite Color? ",
   Answer: "Black"
  },
]


for (var i=0;i<Questions.length;i++){
  var currentquestion=Questions[i];
play(currentquestion.Question,currentquestion.Answer)
}
console.log("--------------------------- ")
console.log("Your Final Score Is "+score)
