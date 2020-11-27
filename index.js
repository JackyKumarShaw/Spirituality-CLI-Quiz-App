//The Quiz Game
var color=require('chalk');
var takeinput=require('readline-sync');
var score=0;
var leaderboard = [
  {
    Name: "Frederick",
    Score: 60
  },
  {
    Name: "Susan",
    Score: 55
  },
  {
    Name: "George",
    Score: 50
  },
  {
    Name: "Tom",
    Score: 45
  },
  {
    Name: "Frank",
    Score: 45
  },
  {
    Name: "Daniel",
    Score: 40
  },
  {
    Name: "Paul",
    Score: 35
  },
  {
    Name: "Chris",
    Score: 30
  },
  {
    Name: "Suresh",
    Score: 25
  },
  {
    Name: "Ramesh",
    Score: 20
  },
  {
    Name: "Mukesh",
    Score: 15
  },
  {
    Name: "Naresh",
    Score: 10
  },
  {
    Name: "Lokesh",
    Score: 5
  },
  {
    Name: "Sushant",
    Score: 0
  }
];
var quizList=[
  {
    que:"Did Lord Rama sang the spiritual song Bhagwad Gita?",
    ans:false
  },
  {
    que:"Was Swami Vivekananda Enlightened?",
    ans:true
  },
  {
    que:"Is Brahmacharya same as Celibacy?",
    ans:false
  },
  {
    que:"Can females get Enlightened?",
    ans:true
  },
  {
    que:"Is Enlightenement an Academic Qualification?",
    ans:false
  },
  {
    que:"What is the outermost kosha/layer called?",
    ans:3,
    options:["Pranamaya Kosha","Vigyanmaya Kosha","Annamaya Kosha","Manomaya Kosha"]
  },
  {
    que:"Which one is NOT a Pancha Bhuta?",
    ans:4,
    options:["Akash","Jal","Prithvi","Chitta"]
  },
  {
    que:"What does Karma really mean?",
    ans:2,
    options:["Fatalism","Its ALL Your Doing","Destiny","Luck/Joke/Bullshit"]
  },
  {
    que:"Who are we?",
    ans:3,
    options:["Our Body","Our Mind","Neither Body Nor Mind","Both"]
  },
  {
    que:"What did the Buddha NOT see?",
    ans:4,
    options:["Dead Man","Old Man","Sick Man","An Athelete"]
  },
  {
    que:"What is God?",
    ans:3,
    options:["Compassion","Mercy","Ultimate Intelligence","Bliss"]
  },
  {
    que:"What is Enlightenment?",
    ans:1,
    options:["Ego-Death","A Psychedelic Experience","A Consequence of LSD Drugs","Myth/Joke/Bullshit"]
  },
  {
    que:"Which one is NOT a way of Enlightenment?",
    ans:2,
    options:["Karma Yog","Jihad","Raja Yog","Gyana Yog"]
  },
  {
    que:"What is Enlightenment according the Buddha?",
    ans:4,
    options:["Flying","Becoming Invisible","End of Body Aches","End of Suffering"]
  },
  {
    que:"How to get Enlightened according to The Buddha?",
    ans:1,
    options:["Just Shut Up and Watch Your Breath","Do Yogasanas","Do Chanting","Do Pilgrimage"]
  },
  {
    que:"What was first teaching that came out of Shiva's mouth?",
    ans:3,
    options:["Life is Predestined","Life is a Suffering","Life is 100% your making"]
  },
  {
    que:"What was the first teaching that came out of Buddha's mouth?",
    ans:1,
    options:["Unconsious Desire is the root cause of all Suffering","Chill! God will take our responsibility","Everything is Impermanant"]
  },
  {
    que:"Primary and General Method taught by the Buddha for Enlightenment are?",
    ans:2,
    options:["Dharna and Pranayama","Shoonya and Vipassana","Shambhavi and Pratyahara"]
  },
  {
    que:"What is Yoga?",
    ans:1,
    options:["Union","Exercise","Acrobatic Prayer"]
  },
  {
    que:"The ways of Jiddu Krishnamurti is called?",
    ans:3,
    options:["Karma Yoga","Bhakti Yoga","Gyana Yoga"]
  },
  {
    que:"The three modes of nature which govern our Mental state are?",
    ans:3,
    options:["Vata-Pitta-Kapha","Sat-Chit-Ananda","Tamas-Rajas-Sattva"]
  },
  {
    que:"The three modes of nature which govern our Physical state are?",
    ans:1,
    options:["Vata-Pitta-Kapha","Sat-Chit-Ananda","Tamas-Rajas-Sattva"]
  },
  {
    que:"What did Lord Buddha say to his students who were showing off Spiritual Skills for gaining popularity?",
    ans:3,
    options:["Do it! You deserve it","Don't do it, otherwise I will kick you out form Sangha","Don't do it because it will motivate aspiring spiritual seekers to start seeking for worng reasons"]
  },
  {
    que:"According to yoga, the 4 parts of Mind are?",
    ans:3,
    options:["Fornt-Middle-Back-Underneath","Conscious-Subconscious-Unconscious-Collective Unconscious","Intellect-Identity-Memory-MindStuff"]
  },
  {
    que:"The way of Ramakrishna Paramhansa is called?",
    ans:1,
    options:["Bhakti Yoga","Karma Yoga","Gyana Yoga"]
  },
  {
    que:"The heart of all the Vedas are?",
    ans:1,
    options:["Upanishads","Puranas","Itihasa"]
  },
  {
    que:"A poet who was also Enlightened was?",
    ans:3,
    options:["Ruskin Bond","Lord Byron","Kabir"]
  },
  {
    que:"The perfect defination of Yoga is?",
    ans:3,
    options:["Yoga is the Exercise which leads to welbeing on all levels of experience","Yoga is the Union where duality ends","Yoga is the cessations of patterning of consciousness"]
  },
  {
    que:"The Ultimate Guide of Yoga is?",
    ans:1,
    options:["Yogasutras of Patanjali","Light on Yoga by BKS Iyengar","Tao De Ching"]
  },
  {
    que:"The way of Ramana Maharishi is called?",
    ans:3,
    options:["Self-Anihilation","Self-Satisfaction","Self-Enquiry"]
  }
];

function check(obj,i){
  console.log(color.bold.bgBlue.underline("QUESTION "+(i+1)+":-"));
  if(i<5){
    var userAnswer=takeinput.keyInYNStrict(color.yellow.bold.italic(obj.que));
    console.log(color.cyan.bold("You entered : ")+color.bold.magentaBright(userAnswer? "Yes":"No"));
    console.log(color.cyan.bold("Correct answer : ")+color.bold.magentaBright(obj.ans));
    if(userAnswer==obj.ans){
    console.log(color.bgGreen.bold.italic("CONGRATS!! You are Right!"));
    score=score+2;
    }
    else{
    console.log(color.bgRed.bold.italic("Uh oh! You are Wrong!"));
    score=score-1;
    }
  }
  else{
    console.log(color.yellow.bold.italic(obj.que));
    var userAnswer=takeinput.keyInSelect(obj.options,color.yellow.bold("Choose:-"),{cancel: false});
    console.log(color.cyan.bold("You entered : ")+color.bold.magentaBright(userAnswer+1));
    console.log(color.cyan.bold("Correct answer : ")+color.bold.magentaBright(obj.options[obj.ans-1]));
    if((userAnswer+1)==obj.ans){
    console.log(color.bgGreen.bold.italic("CONGRATS!! You are Right!"));
    score=score+2;
    }
    else{
    console.log(color.bgRed.bold.italic("Uh oh! You are Wrong!"));
    score=score-1;
    }
  }
  if(i!=29){
    console.log(color.cyan.bold("Your SCORE = ")+color.bold.magentaBright(score)+"\n");
    console.log(color.redBright("=========================="));
  }else{
    console.log(color.bgCyanBright.bold.black.underline("\nTHANK YOU FOR PLAYING..."+userName+"!!"));
    console.log(color.cyan.bold("\nYour FINAL SCORE = ")+color.bold.magentaBright(score)+"\n");
  }
}

var userName=takeinput.question(color.yellow.bold("What's you name?\n"));
console.log(color.redBright("==============================================="));
console.log(color.redBright("==============================================="));
console.log(color.bgCyanBright.bold.black.underline("Hello! "+userName+" WELCOME to SPIRITUALITY Quiz!\n"));
console.log(color.redBright("==============================================="));
console.log(color.redBright("==============================================="));
console.log(color.bgMagenta.bold.underline("RULES:-"));
console.log(color.bgGreen.blue.bold.italic("1.There are 3 levels."));
console.log(color.bgGreen.blue.bold.italic("2.Level-ONE has 5 questions of simple YES/NO type.\n  (Level-ONE Full Marks = 2*5=10)\n  Level-TWO has 10 MCQ type questions each with 4-options.\n  (Level-TWO Full-Marks = 10*2=20)\n  Level-Three has 15 MCQ type questions each with 3-options.\n  (Level-Three Full Marks = 15*2=30)"));
console.log(color.bgGreen.blue.bold.italic("3.To reach level-TWO Minimum Score needed = 4/10 in Level-ONE\n  To reach level-THREE Minimum Score needed = 8/20 in Level-TWO"));
console.log(color.bgGreen.blue.bold.italic("4.Each correct answer will give you 2 points."));
console.log(color.bgGreen.blue.bold.italic("5.But each wrong answer will take away 1 points.\n"));
console.log(color.blue.bgWhiteBright.bold("All THE BEST "+userName+"!\n"));
console.log(color.bgMagenta.bold.italic("Level-ONE Begins:-"));

for(var i=0;i<5;i++){
  check(quizList[i],i);
}
if(score>=4){
  console.log(color.yellow.bold("Congratulations! You have passed Level-ONE.\nWelcome to Level-TWO:-"));
  console.log(color.bold.italic.bgMagenta("Level-TWO Begins:-"));
  for(var i=5;i<15;i++){
  check(quizList[i],i);
  }
}else{
  console.log(color.red.bold("Sorry you could not clear Level-ONE"));
  console.log(color.cyan.bold("\nYour FINAL SCORE = ")+color.bold.magentaBright(score)+"\n");
  process.exit();
}
console.log(color.redBright("==============================================="));
if(score>=12){
  console.log(color.yellow.bold("Congratulations! You have passed Level-TWO.\nWelcome to Level-THREE:-"));
  console.log(color.bold.italic.bgMagenta("Level-THREE Begins:-"));
  for(var i=15;i<30;i++){
  check(quizList[i],i);
  }
}else{
  console.log(color.red.bold("Sorry you could not clear Level-TWO"));
  console.log(color.cyan.bold("\nYour FINAL SCORE = ")+color.bold.magentaBright(score)+"\n");
  process.exit();
}
console.log(color.redBright("==============================================="));

console.log(color.bgCyanBright.bold("LEADER-BOARD:-"));
console.log(color.bold.bgBlue("NAME")+"  -  "+color.bold.bgBlue("SCORE"));
var flag=0;
for(var i=0;i<leaderboard.length;i++){
  if(leaderboard[i].Score>score){
    console.log(color.bold.green(leaderboard[i].Name)+"  -  "+color.bold.red(leaderboard[i].Score));
  }
  else{
    console.log(color.bold.yellow.italic(userName)+"  -  "+color.bold.green.italic(score));
    flag=1;
    break;
  }
}
if(flag==1){
  while(i<leaderboard.length){
    console.log(color.bold.green(leaderboard[i].Name)+"  -  "+color.bold.red(leaderboard[i].Score));
    i++;
    //console.log();
  }
}
console.log(color.green.bold.italic("Send me a screenshot of the leaderboard so that I can update the leaderboard with your name and score!"));
console.log(color.redBright("==============================================="));