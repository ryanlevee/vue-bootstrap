function randInt(low, high) {
  const rndDec = Math.random();
  const rndInt = Math.floor(rndDec * (high - low + 1) + low);
  return rndInt;
};

function addError(field) {
  if (field.previousElementSibling &&
    field.previousElementSibling.className === 'error') {
    return;
  };
  const error = document.createElement('div');
  error.innerHTML = '&#x26A1' + field.dataset.errorMsg +  '&#x26A1';
  error.className = 'error';
  field.parentNode.insertBefore(error, field);
};

function removeError(field) {
  if (field.previousElementSibling &&
    field.previousElementSibling.className === 'error') {
    field.previousElementSibling.remove();
  };
};

function checkSelect(field) {
  if ( field.selectedIndex === 0 ) {
    field.setCustomValidity('Invalid');
    addError(field);
  } else {
    field.setCustomValidity('');
    removeError(field);
  };
};

addEventListener('load', function(e) {
  let interval;
  let timer;
  let timeout;
  let errTimer;
  let errTimeout;
  let correctTimer;
  let solution;
  let score = 0;
  const startDiv = document.getElementById('start-div');
  const menu = document.getElementById('menu');
  menu.dataset.errorMsg = "Please select a game.";
  const gameScore = document.querySelector('#game-score > span');
  const gameTimer = document.querySelector('#game-timer > span');
  const goButton = document.getElementById('go-button');
  const backButton = document.getElementById('back-button');
  const againButton = document.getElementById('again-button');
  const gameDiv = document.getElementById('game-div');
  const problem = document.getElementById('problem');
  const divide = document.getElementById('divide');
  const gameRight = document.getElementById('game-right');
  gameRight.dataset.errorMsg = "Incorrect! Try again.";
  const form = document.getElementById('numpad');
  const display = document.getElementById('display');
  const gameSelected = document.getElementsByClassName('game-selected');
  display.dataset.errorMsg = "Only real numbers allowed";
  const buttons = document.getElementsByClassName('buttons');
  const clear = document.getElementById('clear');
  const endDiv = document.getElementById('end-div');
  const endScore = document.querySelector('#end-score > span');

  function division() {
    const reSolution = /\//;
    if (reSolution.test(problem.innerHTML)) {
      divide.style.display = "block";
      problem.innerHTML = problem.innerHTML + '';
      solution = solution.toFixed(1);
      console.log('fixed solution: ' + solution);
    } else {
    };
  };

  function math() {
    const operator = menu.options[menu.selectedIndex].value;
    const option = menu.options[menu.selectedIndex].innerHTML;
    const randInt1 = randInt(1,100);
    const randInt2 = randInt(1,100);
    problem.innerHTML = randInt1 + ' ' + operator + ' ' + randInt2;
    solution = window.eval(randInt1 + operator + randInt2);
    console.log('solution: ' + solution);
    for (let game of gameSelected) {
      game.innerHTML = option;
    };
    division();
    return solution;
  };

  function scoreCount(val) {
    if (val === true) {
      score += 1;
      gameScore.innerHTML = parseInt(score);
      math();
      return score;
    };
  };

  function startError() {
    errTimer = 1;
    errTimeout = setTimeout(() => {
      removeError(gameRight);
      errTimer = 0;
    }, 2000);
  }

  function startCorrect() {
    gameScore.style.backgroundColor = "#00C853";
    gameScore.style.outline = "1rem solid #00C853";
    gameScore.style.borderRadius = ".25rem";
    correctTimer = setTimeout(() => {
      gameScore.style.backgroundColor = '';
      gameScore.style.outline = ""
  }, 1500);
  }

  function checkSolution(val) {
    if (val !== String(solution)) {
      addError(gameRight);
      if (errTimer === 0) {
        startError();
      } else {
        clearTimeout(errTimeout);
        startError();
      };
    } else {
      removeError(gameRight);
      val = true;
      scoreCount(val);
      startCorrect();
      display.value = "";
    }
  };

  function letsPlay() {
    score = 0;
    startDiv.style.display = "none";
    gameDiv.style.display = "block";
    goButton.style.display = "none";
    backButton.style.display = "block";
    display.focus();
    display.value = "";
    startTimer();
    removeError(display);
    math();
  };

  function backHome() {
    stopTimer();
    removeError(menu);
    startDiv.style.display = "block";
    gameDiv.style.display = "none";
    endDiv.style.display = "none";
    goButton.style.display = "block";
    backButton.style.display = "none";
    againButton.style.display = "none";
    divide.style.display = "none";
    gameSelected.innerHTML = "";
    problem.innerHTML = "";
    gameScore.innerHTML = 0;
    gameTimer.innerHTML = 0;
  };

  function finalScore() {
    gameDiv.style.display = "none";
    endDiv.style.display = "block";
    backButton.style.display = "none";
    againButton.style.display = "block";
    endScore.innerHTML = score;
    gameScore.innerHTML = 0;
  };

  function startInterval() {
    interval = setInterval(() => {
      timer--;
      gameTimer.innerHTML = timer;
      return interval;
    }, 1000);
  }

  function startTimer() {
    timer = 30;
    gameTimer.innerHTML = 30;
    startInterval();
    timeout = setTimeout(() => {
      timer = 0;
      clearInterval(interval);
      finalScore();
      return timer;
    }, 30000);
  };

  function stopTimer() {
    clearTimeout(timeout);
    clearInterval(interval);
  };

  // // comment out from here...
  // display.addEventListener('keyup', function(e) {
  //   const reDisplay = /^[\d\s.,'-]*$/
  //   if (!reDisplay.test(display.value)) {
  //     addError(display);
  //   } else {
  //     removeError(display);
  //   };
  //   if (e.key === 'Enter') {
  //     checkSolution(display.value);
  //   };
  // });

  // for (let b of buttons) {
  //   b.addEventListener('click', function(e) {
  //     if (e.target === clear) {
  //       display.value = "";
  //     } else {
  //       display.value = String(display.value + b.innerHTML);
  //     };
  //     display.focus();
  //   });
  // };
  // // ...to here

  // uncomment from here...
  document.querySelector('#game-left > p').style.display = "none";
  display.addEventListener('keyup', function(e) {
    const reDisplay = /^[\d\s.,'-]*$/
    if (!reDisplay.test(display.value)) {
      addError(display);
    } else if (e.key === 'Enter') {
      checkSolution(display.value);
    } else if (reDisplay.test(display.value)) {
      removeError(display);
      checkSolution(display.value);
      removeError(gameRight);
    };
  });

  for (let b of buttons) {
    b.addEventListener('click', function(e) {
    const reDisplay = /^[\d\s.,'-]*$/
    if (e.target === clear) {
        display.value = "";
        removeError(display);
        removeError(gameRight);
    } else if (reDisplay.test(display.value)) {
        display.value = String(display.value + b.innerHTML);
        removeError(display);
        checkSolution(display.value);
        removeError(gameRight);
      };
      display.focus();
    });
  };
  // ...to here

  menu.addEventListener('change', function(e) {
    checkSelect(menu);
  });

  goButton.addEventListener('click', function(e) {
    checkSelect(menu);
    if (menu.checkValidity()) {
      letsPlay();
    } else {
      addError(menu)
      alert(menu.dataset.errorMsg)
    };
  });

  backButton.addEventListener('click', backHome);

  againButton.addEventListener('click', backHome);

  form.addEventListener('submit', function(e) {
    e.preventDefault();
  });
});