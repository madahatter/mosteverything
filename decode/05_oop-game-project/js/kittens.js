// This sectin contains some game constants. It is not super interesting
var GAME_WIDTH = 520;
var GAME_HEIGHT = 480;

var ENEMY_WIDTH = 75;
var ENEMY_HEIGHT =100;
var MAX_ENEMIES = 3;

var ENEMY2_WIDTH = 75;
var ENEMY2_HEIGHT =100;

var LIFEUP_WIDTH = 75;
var LIFEUP_HEIGHT =100;

var PLAYER_WIDTH = 75;
var PLAYER_HEIGHT = 54;

var currentLifes = 3

// These two constants keep us from using "magic numbers" in our code
var LEFT_ARROW_CODE = 37;
var RIGHT_ARROW_CODE = 39;
var UP_ARROW_CODE = 38;
var DOWN_ARROW_CODE = 40;

// These two constants allow us to DRY
var MOVE_LEFT = 'left';
var MOVE_RIGHT = 'right';
var MOVE_UP = 'up'
var MOVE_DOWN = 'down'

// Preload game images
// var ranEnem = 0
// function ranEne() { 
          
//     randomEnemyIDX = Math.floor(Math.random() * allEnemies.length)
//     var ranEnem = allEnemies[randomEnemyIDX];
//     return ranEnem
//     }
var images = {};
['enemy.png', 'player.png', 'rsz_duck1.png', "space.jpg", "heart.jpg"].forEach(imgName => {
    var img = document.createElement('img');
    img.src = 'images/' + imgName;
    images[imgName] = img;
});

//var allEnemies = ['\'enemy.png\'','\'rsz_duck1.png\'']
//var enemiesImages = []
//enemiesImagesIDX = Math.floor(Math.random() * 3)



// This section is where you will be doing most of your coding
class Enemy{
    constructor(xPos) {
        this.x = xPos;
        this.y = -ENEMY_HEIGHT;
        this.sprite = images["enemy.png"];
        

        // Each enemy should have a different speed
        this.speed = Math.random() / 2 + 0.25;
    }
    render(ctx) {
        ctx.drawImage(this.sprite, this.x, this.y, ENEMY_WIDTH, ENEMY_HEIGHT);
    }
    update(timeDiff) {
        this.y = this.y + timeDiff * this.speed;
    }
}

class Enemy2{
    constructor(xPos) {
        this.x = xPos;
        this.y = -ENEMY2_HEIGHT;
        this.sprite = images['rsz_duck1.png'];
        

        // Each enemy should have a different speed
        this.speed = Math.random() / 2 + 0.25;
    }
    render(ctx) {
    ctx.drawImage(this.sprite, this.x, this.y, ENEMY2_WIDTH, ENEMY2_HEIGHT);
    }
    update(timeDiff) {
        this.y = this.y + timeDiff * this.speed;
    }
}

class LifeUp{
    constructor(xPos) {
        this.x = xPos;
        this.y = -LIFEUP_HEIGHT;
        this.sprite = images['heart.jpg'];
        this.id = "Life"

        // Each enemy should have a different speed
        this.speed = Math.random() / 2 + 0.25;
    }
    render(ctx) {
    ctx.drawImage(this.sprite, this.x, this.y, LIFEUP_WIDTH, LIFEUP_HEIGHT);
    }
    update(timeDiff) {
        this.y = this.y + timeDiff * this.speed;
    }
}

class Player{
    constructor() {
        this.x = 2 * PLAYER_WIDTH;
        this.y = GAME_HEIGHT - PLAYER_HEIGHT - 10;
        this.sprite = images['player.png'];
    }
    render(ctx) {
        ctx.drawImage(this.sprite, this.x, this.y, PLAYER_WIDTH, PLAYER_HEIGHT);
    }

    // This method is called by the game engine when left/right arrows are pressed
    move(direction) {
        if (direction === MOVE_LEFT && this.x > 0) {
            this.x = this.x - PLAYER_WIDTH;
        }
        else if (direction === MOVE_RIGHT && this.x < GAME_WIDTH - PLAYER_WIDTH) {
            this.x = this.x + PLAYER_WIDTH;
        }
        else if (direction === MOVE_UP && this.y < GAME_HEIGHT - PLAYER_HEIGHT) {
            this.y = this.y - PLAYER_HEIGHT;
        }
        else if (direction === MOVE_DOWN && this.y < GAME_HEIGHT - PLAYER_HEIGHT) {
            this.y = this.y + PLAYER_HEIGHT;
        }
    }


}





/*
This section is a tiny game engine.
This engine will use your Enemy and Player classes to create the behavior of the game.
The engine will try to draw your game at 60 frames per second using the requestAnimationFrame function
*/
class Engine {
    constructor(element) {
        // Setup the player
        this.player = new Player();

        // Setup enemies, making sure there are always three
        this.setupEnemies();

        // Setup the <canvas> element where we will be drawing
        var canvas = document.createElement('canvas');
        canvas.width = GAME_WIDTH;
        canvas.height = GAME_HEIGHT;
        element.appendChild(canvas);

        this.ctx = canvas.getContext('2d');

        // Since gameLoop will be called out of context, bind it once here.
        this.gameLoop = this.gameLoop.bind(this);
    }

    /*
     The game allows for 5 horizontal slots where an enemy can be present.
     At any point in time there can be at most MAX_ENEMIES enemies otherwise the game would be impossible
     */
    setupEnemies() {
        if (!this.enemies) {
            this.enemies = [];
        }

        while (this.enemies.filter(e => !!e).length < MAX_ENEMIES) {
            this.addEnemy();
        }
    }

    setupLifeUp() {
        if (!this.enemies) {
            this.enemies = [];
        }

        while (this.enemies.filter(e => !!e).length < MAX_ENEMIES) {
            this.addEnemy();
        }
    }

    // This method finds a random spot where there is no enemy, and puts one in there
    addEnemy() {
        var enemySpots = GAME_WIDTH / ENEMY_WIDTH;

        var enemySpot;
        // Keep looping until we find a free enemy spot at random
        while (enemySpot === undefined || this.enemies[enemySpot]) {
        // while (this.enemies[enemySpot]) {
            enemySpot = Math.floor(Math.random() * (enemySpots));
         }
         var testMath = Math.random()
         if (testMath <= .4){
            this.enemies[enemySpot] = new Enemy(enemySpot * ENEMY_WIDTH);
         }
         else if(testMath >= .6) {
             this.enemies[enemySpot] = new Enemy2(enemySpot * ENEMY2_WIDTH);
            }
         else {
                this.enemies[enemySpot] = new LifeUp(enemySpot * LIFEUP_WIDTH);
        }
    }


    // This method kicks off the game
    start() {
        this.score = 0;
        
        this.lastFrame = Date.now();

        // Listen for keyboard left/right and update the player
        document.addEventListener('keydown', e => {
            if (e.keyCode === LEFT_ARROW_CODE) {
                this.player.move(MOVE_LEFT);
            }
            else if (e.keyCode === RIGHT_ARROW_CODE) {
                this.player.move(MOVE_RIGHT);
            }
            else if (e.keyCode === UP_ARROW_CODE) {
                this.player.move(MOVE_UP);
            }
            else if (e.keyCode === DOWN_ARROW_CODE) {
                this.player.move(MOVE_DOWN);
            }
        });

        this.gameLoop();
    }

    /*
    This is the core of the game engine. The `gameLoop` function gets called ~60 times per second
    During each execution of the function, we will update the positions of all game entities
    It's also at this point that we will check for any collisions between the game entities
    Collisions will often indicate either a player death or an enemy kill

    In order to allow the game objects to self-determine their behaviors, gameLoop will call the `update` method of each entity
    To account for the fact that we don't always have 60 frames per second, gameLoop will send a time delta argument to `update`
    You should use this parameter to scale your update appropriately
     */
    gameLoop() {
        // Check how long it's been since last frame
        var currentFrame = Date.now();
        var timeDiff = currentFrame - this.lastFrame;

        // Increase the score!
        this.score += timeDiff;

        // Call update on all enemies
        this.enemies.forEach(enemy => enemy.update(timeDiff));

        // Draw everything!
        this.ctx.drawImage(images['space.jpg'], 0, 0); // draw the star bg
        this.enemies.forEach(enemy => enemy.render(this.ctx)); // draw the enemies
        this.player.render(this.ctx); // draw the player

        // Check if any enemies should die
        this.enemies.forEach((enemy, enemyIdx) => {
            if (enemy.y > GAME_HEIGHT) {
                delete this.enemies[enemyIdx];
            }
        });
        this.setupEnemies();

        // Check if player is dead
        if (this.isPlayerDead()) {
            // If they are dead, then it's game over!
            this.ctx.font = 'bold 30px Impact';
            this.ctx.fillStyle = '#ffffff';
            this.ctx.fillText(Math.floor(this.score / 1000) + ' GAME OVER', 5, 30);
        }
        else {
            // If player is not dead, then draw the score
            this.ctx.font = 'bold 30px Impact';
            this.ctx.fillStyle = '#ffffff';
            this.ctx.fillText(Math.floor(this.score / 1000), 5, 30);

            // Set the time marker and redraw
            this.lastFrame = Date.now();
            requestAnimationFrame(this.gameLoop);
        }
    }


    isPlayerDead() {
//console.log("the element is: ", this.enemies)
        return(this.enemies.some((element,index,arrayItSelf) => {
            //console.log("the element is :" + element.x)
           if(element.x == this.player.x && element.y + ENEMY_HEIGHT >= this.player.y && element.y <= this.player.y) {
               if(element.id) {
                   currentLifes = currentLifes + 1
                   delete this.enemies[index]
                   console.log(currentLifes)
                   return false
               }
               return true
           }
           // console.log(element)
            //    { var whichEnemy = element.x
            // }  
            // else if(element != "LifeUp"){
            //     currentLifes = currentLifes + 1
            //     return true
            // }
            // else {return true}
        }))

        // TODO: fix this function!
        return false;

   }
}





// This section will start the game
var gameEngine = new Engine(document.getElementById('app'));
gameEngine.start();