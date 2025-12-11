function initiateCard(id, pack) {

  let cardId = document.createElement("div")
  cardId.setAttribute("id", flags[0].name+"Card"+id)
  cardId.className = "cards"
  cardId.setAttribute("onclick", "pick("+pack[0].name+", "+id+")")
document.getElementById(pack[0].name+"Board").appendChild(cardId)

let cardImage = document.createElement("img")
  cardImage.className = "cardImages"
  cardImage.setAttribute("src", "./imgs/"+pack[id].name+".jpg")
  cardImage.setAttribute("alt", "Image can't be found")
cardId.appendChild(cardImage)

let cardDescription = document.createElement("h3")
  cardDescription.className = "cardDescriptions"
  cardDescription.innerHTML = pack[id].description
cardId.appendChild(cardDescription)
};

let page = 0
let lives = 3

function cardPicked() {
  console.log(flags[2].flag1.name)
};

function fillModals() {
  for (let number = 1; number < 10; number++)
  {
  let modalTitle = document.createElement("h1")
    modalTitle.className = "question"
    modalTitle.innerHTML = flags[number].question
  document.getElementById("modal"+number).appendChild(modalTitle)

  let container = document.createElement("div")
    container.className = "container"
    container.setAttribute("id", "container"+number)
  document.getElementById("modal"+number).appendChild(container)

  let card1 = document.createElement("div")
    card1.className = "cards"
    card1.setAttribute("id", "modal"+number+"card1")
    card1.setAttribute("onclick", "pick("+number+", "+1+")")
    card1.innerHTML = '<img class="imgs" src="./imgs/'+flags[number].flag1.name+'1.png" alt=""></img>'
    let card1Description = document.createElement("p")
    card1Description.setAttribute("id", "modal"+number+"description1")
    card1Description.innerHTML = flags[number].flag1.description
    card1Description.style.display = "none"
    card1.appendChild(card1Description)

  let card2 = document.createElement("div")
    card2.className = "cards"
    card2.setAttribute("id", "modal"+number+"card2")
    card2.setAttribute("onclick", "pick("+number+", "+2+")")
    card2.innerHTML = '<img class="imgs" src="./imgs/'+flags[number].flag1.name+'2.png" alt=""></img>'
    let card2Description = document.createElement("p")
    card2Description.setAttribute("id", "modal"+number+"description2")
    card2Description.innerHTML = flags[number].flag2.description
    card2Description.style.display = "none"
    card2.appendChild(card2Description)

  let card3 = document.createElement("div")
    card3.className = "cards"
    card3.setAttribute("id", "modal"+number+"card3")
    card3.setAttribute("onclick", "pick("+number+", "+3+")")
    card3.innerHTML = '<img class="imgs" src="./imgs/'+flags[number].flag1.name+'3.png" alt=""></img>'
    let card3Description = document.createElement("p")
    card3Description.setAttribute("id", "modal"+number+"description3")
    card3Description.innerHTML = flags[number].flag3.description    
    card3Description.style.display = "none"
    card3.appendChild(card3Description)

    let randomizer = [card1, card2, card3]
    randomizer.sort(function(){return 0.5 - Math.random()})

  document.getElementById("container"+number).appendChild(randomizer[0])
  document.getElementById("container"+number).appendChild(randomizer[1])
  document.getElementById("container"+number).appendChild(randomizer[2])
  
  let nextButton = document.createElement("button")
    nextButton.className = "nextBtn"
    nextButton.setAttribute("id", "nextbutton"+number)
    nextButton.setAttribute("onclick", "nextPage()")
    nextButton.innerHTML = "<h2>Next</h2>"
  document.getElementById("modal"+number).appendChild(nextButton)
  }
};

function pick(pageNumber, flagNumberTrue) {
  if (checkFlagTrue(pageNumber, flagNumberTrue) === true) {
    document.getElementById("modal"+pageNumber+"card"+flagNumberTrue).className = "cardsPicked"
    document.getElementById("modal"+pageNumber+"card2").className = "cardsPickedWrong"
    document.getElementById("modal"+pageNumber+"card3").className = "cardsPickedWrong"
    document.getElementById("modal"+pageNumber+"description2").style.display = "block"
    document.getElementById("modal"+pageNumber+"description3").style.display = "block"
    document.getElementById("modal"+pageNumber+"description"+flagNumberTrue).style.display = "block"
    document.getElementById("nextbutton"+pageNumber).style.display = "block"
  }
  else if (checkFlagTrue(pageNumber, flagNumberTrue) === false) {
    document.getElementById("modal"+pageNumber+"card"+flagNumberTrue).className = "cardsPickedWrong"
    document.getElementById("modal"+pageNumber+"description"+flagNumberTrue).style.display = "block"
    lives --
    showLives()
  }
  else {console.log("something went wrong")}
};

function checkFlagTrue(pageNumber, flagNumber) {
  if (flagNumber === 1) {return flags[pageNumber].flag1.rightAnswer}
  else if (flagNumber === 2) {return flags[pageNumber].flag2.rightAnswer}
  else if (flagNumber === 3) {return flags[pageNumber].flag3.rightAnswer}
  else {console.log("something went wrong")}
} ;

function nextPage() {
  document.getElementById("modal"+page).style.display = "none"
  page ++
  document.getElementById("modal"+page).style.display = "block"
  if (page === 1) {document.getElementById("lifeContainer").style.display = "block"}
  else if (page === 10) {document.getElementById("lifeContainer").style.display = "none"}
};

function showLives() {
if (lives < 3) {document.getElementById("heart3").src = "./imgs/HeartBroken.png"}
if (lives < 2) {document.getElementById("heart2").src = "./imgs/HeartBroken.png"}
if (lives < 1) {document.getElementById("heart2").src = "./imgs/Heart.png"
  document.getElementById("heart3").src = "./imgs/Heart.png"
  resetFlags()
}
};

function resetFlags() {
  lives = 3
  for (let number = 1; number < 10; number++) {
    document.getElementById("modal"+number).innerHTML = ""
    document.getElementById("modal"+number).style.display = "none"
  }
  document.getElementById("modal0").style.display = "block"
    page = 0
    fillModals()
};

let part1 = 0
let part2 = 0

function testMe() {
  document.getElementById("movieContainer").style.display = "block"
  document.getElementById("nextbutton10").style.display = "none"
  nextQuestion()
};

let movieRandomizer = [0,1,2,3,4,5,6,7,8,9,10]

function movieRand() {
    movieRandomizer.pop()
    movieRandomizer.sort(function(){return 0.5 - Math.random()})
    movieRandomizer.push(10)
  };

function writeUpQuestion() {
  if (movieRandomizer[part2] < 5) {
    document.getElementById("movieTestTitle").innerHTML = movieQuestions[0]+movieQuestionsPart2[movieRandomizer[part2]]+"?"
  }
  else if (movieRandomizer[part2] >= 5) {
  document.getElementById("movieTestTitle").innerHTML = movieQuestions[1]+movieQuestionsPart2[movieRandomizer[part2]]+"?"
  }
  else{
    console.log("Something is wrong in writeUpQuestion()")
  }
}

function nextQuestion() {
  if (part2 >= 10) {
    document.getElementById("movieTestTitle").innerHTML = "Congratulations you won, click the Next button to claim your reward"
    document.getElementById("movieContainer").style.display = "none"
    document.getElementById("nextbutton10b").style.display = "block"
    
  }
  else {
    writeUpQuestion()
  }
};

function questionCheck(movieTitle) {

  if (movieQuestionsPart2[movieRandomizer[part2]] === movieTitle[0]) {
    part2 ++
    nextQuestion()
  }
  else if (movieQuestionsPart2[movieRandomizer[part2]] === movieTitle[1]) {
    part2 ++
    nextQuestion()
  }
  else {
    console.log("false")
  }
};

function test(pageNum) {
  document.getElementById("modal0").style.display = "none"
  page = pageNum
  nextPage()
};

let currentHint = "I guess you aren't getting any hints, my bad"
let numberOfHints = 0

function getHint() {
  document.getElementById("hintContainer").style.display = "block"
  currentHint = document.createElement("p")
  currentHint.innerHTML = hints[numberOfHints]
  numberOfHints ++
  document.getElementById("hintContainer").appendChild(currentHint)
  if (numberOfHints >= 7) {
    document.getElementById("nextbutton11").style.display = "none"
  }
};

fillModals()
movieRand()

// Haven't made a fail consequence for losing the movie test
// Nor did I make getting the question right obvious