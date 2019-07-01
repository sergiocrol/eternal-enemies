'use strict'

function main() {
  var mainElement = document.querySelector('#site-main');

  function buildDom(html) {
    mainElement.innerHTML = html;
    return mainElement;
  };

  function createSplashScreen() {
    var splashScreen = buildDom(`
      <section>
        <h1>Eternal Enemies</h1>
        <button>Start</button>
      </section>
    `);
    var startButton = splashScreen.querySelector('button');
    startButton.addEventListener('click', createGameScreen);
  };

  function createGameScreen() {
    var gameScreen = buildDom(`
      <section>
        <canvas width="500px" height="500px"></canvas>
      </section>
    `);
    var canvas = document.querySelector('canvas');
    var game = new Game(canvas);
    game.gameOverCallback(createGameOverScreen);
    game.startGame(); 
    document.addEventListener('keydown', function(event) {
      switch(event.key) {
        case 'ArrowDown':
          game.player.direction = 1;
          break;
        case 'ArrowUp':
          game.player.direction = -1;
          break;
      }
    })
  };

  function createGameOverScreen() {
    var gameOverScreen = buildDom(`
    <section>
      <h1>Game Over</h1>
      <button>Restart</button>
    </section>
    `)
    var restartButton = gameOverScreen.querySelector('button');

    restartButton.addEventListener('click', createSplashScreen);
  };

  createSplashScreen();
}

window.addEventListener('load', main);