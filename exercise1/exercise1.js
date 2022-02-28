const prompts = require('prompts');

class Role {
  constructor(name, hitPoints, attackPoints) {
      this.name = name;
      this.hitPoints = hitPoints;
      this.attackPoints = attackPoints;
  }
}


class Player extends Role {
  constructor(name, hitPoints, attackPoints) {
      super(name, hitPoints, attackPoints);
  }
  ratDecreasePoints() {
    this.hitPoints -= 1;
    return this.hitPoints;
}
  

  enemiesDecreasePoints() {
    this.hitPoints -= 2;
}
  dragonDecreasePoints() {
    this.hitPoints -= 8;
}  
   lookDungeon() {
    console.log('You look around');
    console.log('You are in the dungeon and it is a big and damp room with broken statues all around');
    console.log(' ');
    console.log('There are doorways leading to:');
    console.log('Hallway');
    console.log('');
    console.log('');
    console.log('----------------'); 
   }

   lookHallway(){
    console.log('You move to the Hallway');
    console.log('----------------');
    console.log('You look around');
    console.log('You are in the Hallway and it is a long and dark hallway whith dark pools of water on the floor and some fungus growing on the walls');
    console.log('');
    console.log('There are doorways leading to:');
    console.log('The dungeon');
    console.log('Chamber');
    console.log('');
    console.log('');
    console.log('You see a Small sewer rat');
    function ratAttack() {
        console.log('Small sewer rat attacks Player with its sharp teeths');
 
        let a = Math.random();
        if (a > 0.5) {
            player1.hitPoints -=1;

          console.log('Small sewer rat hits Player with 1 points!');
          console.log('Player is hit and has ' + player1.hitPoints + ' hitpoints remaining');

        }else{
            console.log('Small sewer rat attack was miss!');
        }
   }
   ratAttack();
   console.log('And two enemies in front of you');

   function enemiesAttack() {
    console.log('Enemies attacks Player with its Sharo sword');

    let a = Math.random();
    if (a > 0.5) {
        player1.hitPoints -=2;


      console.log('Enemies hits Player with 2 points!');
      console.log('Player is hit and has ' + player1.hitPoints + ' hitpoints remaining');

    }else{
        console.log('Enemies attack was miss!');
    }
}
enemiesAttack();

   
 }
 lookaround(){
    console.log('You look around');
    console.log('You are in the Hallway and it is a long and dark hallway whith dark pools of water on the floor and some fungus growing on the walls');
    console.log('');
    console.log('There are doorways leading to:');
    console.log('The dungeon');
    console.log('Chamber');
    console.log('');
    console.log('');
 }
lookChamber() {
    console.log('You move to Chamber');
        console.log('----------------');
        console.log('You look around');
        console.log('You are in chamber an it is a small chamber, which is illuminated by a glowing portal of smoekind');
        console.log('');
        console.log('There are doorways leading to:');
        console.log('Hallway');
        console.log('Glowing portal');
        console.log('');
        console.log('');
        console.log('You see a Giant Dragon');
        console.log('Giant Dragon hits Player with its Sharp claws and fire breath');
        function dragonAttack() {
            console.log('Giant Dragon hits Player with its Sharp claws and fire breath');
            let y = Math.random();
            if (y > 0.1) {
                player1.hitPoints -=8;
              console.log('Dragon hits Player with 8 points!');
              console.log('Player is hit and has '+player1.hitPoints+' hitpoints remaining');
            }else{
              console.log('Dragon attack was miss!')
            }
          }
          dragonAttack();
         
}




}

let player1 = new Player("player", 10, 2);


class Enemies extends Role {
    constructor(name, hitPoints, attackPoints) {
        super(name, hitPoints, attackPoints);
    }
    playerDecreasePoints() {
        this.hitPoints -= 2;
    }
  }

  let enemies = [
      new Enemies("enemies1",2,1),
      new Enemies('enemies2',2,1),
  ];
  enemies[1].playerDecreasePoints();


  

  class Dragon extends Role {
    constructor(name, hitPoints, attackPoints) {
        super(name, hitPoints, attackPoints);
    }
    plarerDecreasePoints() {
        this.hitPoints -= 2;
    }
  }

  let dragon = new Dragon("dragon",4,8);
  
  function attackRat(){
    console.log('You bravely attack Small sewer rat with your Sharo sword');
    let b = Math.random();
    if (b > 0.25) {
      console.log('Player hits Small sewer rat with 2 points!');
      console.log('Small sewer rat is hit and is destroyed!');
    }else{
      console.log('Player attack was miss!')
    }
  }

  function attackDragon(){
    console.log('You bravely attack Dragon with your Sharo sword');
    let b = Math.random();
    if (b > 0.25) {
        dragon.hitPoints -= 2;
      console.log('Player hits Dragon with 2 points!');
      console.log('Dragon is hit and has '+dragon.hitPoints+' hitpoints remaining');
    }else{
      console.log('Player attack was miss!')
    }
  }

  function attackEnemies1(){
    console.log('You bravely attack enemies with your Sharo sword');
    let b = Math.random();
    if (b > 0.25) {
      console.log('Player hits enemies1 with 2 points!');
      console.log('enemies is hit and is destroyed!');
    }else{
      console.log('Player attack was miss!')
    }
  }
  attackEnemies1();

  function attackEnemies2(){
    console.log('You bravely attack enemies with your Sharo sword');
    let b = Math.random();
    if (b > 0.25) {
      console.log('Player hits enemies2 with 2 points!');
      console.log('enemies is hit and is destroyed!');
    }else{
      console.log('Player attack was miss!')
    }
  }
  attackEnemies2();





/* Above the same code what was used for class inheritance demonstratino
   with Car and RaceCar classes and objects created from those two. 
   Your task is to implement the dungeon adventure. The above is just an example.*/

async function gameLoop() {
    let continueGame = true;

    // Example set of UI options for the user to select
    const initialActionChoices = [
        { title: 'Look around', value: 'look' },
        { title: 'Go to room', value: 'go' },
        { title: 'Attack', value: 'attack'},
        { title: 'Exit game', value: 'exit'}
    ];
    const hallwayChoices = [
        { title: 'Hallway', value: 'hallway'},
      ];


    // Show the list of options for the user.
    // The execution does not proceed from here until the user selects an option.
    const response = await prompts({
      type: 'select',
      name: 'value',
      message: 'Choose your action',
      choices: initialActionChoices
    });

    // Deal with the selected value
    console.log('You selected ' + response.value);
    switch(response.value) {
      case 'look':
        player1.lookDungeon();
        break;
      
      case 'go':
        const twoResponse = await prompts({
            type: 'select',
            name: 'value',
            message: 'Which room you want to go?',
            choices: hallwayChoices
          });
          console.log('You selected ' + twoResponse.value); 
          player1.lookHallway();
          hallwayLoop();
          continueGame= false;
        break;
      
      case 'attack':
        console.log('Sorry,there is no enemy to attack.');
        break;
      
      case 'exit':
        continueGame = false;
        break;
    }
    
    if(continueGame) {
      gameLoop();
    }    
}



async function hallwayLoop() {
    let continueGame = true;


    // Example set of UI options for the user to select
    const initialActionChoices = [
        { title: 'Look around', value: 'look' },
        { title: 'Go to room', value: 'go' },
        { title: 'Attack', value: 'attack'},
        { title: 'Exit game', value: 'exit'}
    ];

    const roomChoices = [
        { title: 'Dungeon', value: 'dungeon'},
        { title:'Chamber', value: 'chamber'}
      ];
      const attackChoices = [
        { title: 'Small sewer rat', value: 'rat'},
        { title: 'Enemies', value: 'enemies'},
      ];

    // Show the list of options for the user.
    // The execution does not proceed from here until the user selects an option.
    const response = await prompts({
      type: 'select',
      name: 'value',
      message: 'Choose your action',
      choices: initialActionChoices
    });

    // Deal with the selected value
    console.log('You selected ' + response.value);
    switch(response.value) {
      case 'look':
        player1.lookaround();
        break;
      
      case 'go':
        const threeResponse = await prompts({
            type: 'select',
            name: 'value',
            message: 'Which room you want to go?',
            choices: roomChoices
          });
          console.log('You selected ' + threeResponse.value); 
          switch(threeResponse.value) {
              case 'dungeon':
                  gameLoop();
                  continueGame= false;
                  break;
              case 'chamber':
                  chamberLoop();
                  continueGame= false;
                  break;
          }
        break;
      
      case 'attack':
            const aResponse = await prompts({
                type: 'select',
                name: 'value',
                message: 'Which enemy you want to attack?',
                choices: attackChoices
              });
              console.log('You selected ' + aResponse.value);
              switch(aResponse.value) {
                case 'rat':
                    attackRat();
                    break;
                case 'enemies':
                    attackEnemies1();
                    attackEnemies2();
                    break;
            } 
        break;
      
      case 'exit':
        continueGame = false;
        break;
    }
    
    if(continueGame) {
      hallwayLoop();
    }    
}

async function chamberLoop() {
    let continueGame = true;

    // Example set of UI options for the user to select
    const initialActionChoices = [
        { title: 'Look around', value: 'look' },
        { title: 'Go to room', value: 'go' },
        { title: 'Attack', value: 'attack'},
        { title: 'Exit game', value: 'exit'}
    ];

    // Show the list of options for the user.
    // The execution does not proceed from here until the user selects an option.
    const response = await prompts({
      type: 'select',
      name: 'value',
      message: 'Choose your action',
      choices: initialActionChoices
    });
    const attackDragonChoices = [
        { title: 'Dragon', value: 'dragon'},
      ];
      const room2Choices = [
        { title: 'Hallway', value: 'hallway'},
        { title: 'Glowing Portal', value: 'portal'},

      ];
    


    // Deal with the selected value
    console.log('You selected ' + response.value);
    switch(response.value) {
      case 'look':
        player1.lookChamber();
        if(player1.hitPoints <= 0){
            console.log('Game over!');
            continueGame = false;
        }
        break;
      
      case 'go':
        const fourResponse = await prompts({
            type: 'select',
            name: 'value',
            message: 'Which room you want to go?',
            choices: room2Choices
          });
          console.log('You selected ' + fourResponse.value); 
          switch(fourResponse.value) {
              case 'hallway':
                  hallwayLoop();
                  continueGame= false;
                  break;
              case 'portal':
                  portalLoop();
                  continueGame= false;
                  break;
          }
        break;
      
      case 'attack':
        const bResponse = await prompts({
            type: 'select',
            name: 'value',
            message: 'Which enemy you want to attack?',
            choices: attackDragonChoices
          });
          console.log('You selected ' + bResponse.value);
          attackDragon();
          if(dragon.hitPoints <= 0){
            console.log('Dragon is hit and is destroyed!');          
        }
        break;
      
      case 'exit':
        continueGame = false;
        break;
    }
    
    if(continueGame) {
      chamberLoop();
    }    
}

async function portalLoop() {
    let continueGame = true;
     
   

    // Example set of UI options for the user to select
    const initialActionChoices = [
        { title: 'Look around', value: 'look' },
        { title: 'Go to room', value: 'go' },
        { title: 'Attack', value: 'attack'},
        { title: 'Exit game', value: 'exit'}
    ];

    const room3Choices = [
        { title: 'Chamber', value: 'chamber'},
      ];

    // Show the list of options for the user.
    // The execution does not proceed from here until the user selects an option.
    const response = await prompts({
      type: 'select',
      name: 'value',
      message: 'Choose your action',
      choices: initialActionChoices
    });

    // Deal with the selected value
    console.log('You selected ' + response.value);
    switch(response.value) {
      case 'look':
        console.log('You move to Glowing Portal');
        console.log('Congratulations,you made through the dungeons');
        break;
      
      case 'go':
        const fiveResponse = await prompts({
            type: 'select',
            name: 'value',
            message: 'Which room you want to go?',
            choices: room3Choices
          });
        console.log('You selected ' + fiveResponse.value); 
        chamberLoop();
        continueGame= false;
        break;
      
      case 'attack':
        console.log('Sorry,there is no enemy to attack.');
        break;
      
      case 'exit':
        continueGame = false;
        break;
    }
    
    if(continueGame) {
      portalLoop();
    }    
}



process.stdout.write('\033c'); // clear screen on windows

console.log('WELCOME TO THE DUNGEONS OF LORD OBJECT ORIENTUS!')
console.log('================================================')
console.log('You walk down the stairs to the dungeons')
gameLoop();


