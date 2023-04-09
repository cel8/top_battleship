import PlayerType from "Modules/player-type";
import BotDifficulty from "Modules/bot-difficulty";
import AttackTrackerSet from "Modules/attack-tracker-set";

export default class Player {
  constructor(name, gameboard, type = PlayerType.human, difficulty = undefined) {
    this.name = name;
    if ((type !== PlayerType.human) && (type !== PlayerType.ai)) throw new 'Invalid input';
    if (!gameboard) throw new 'Invalid input';
    this.gameboard = gameboard;
    this.type = type;
    if (!difficulty && this.type === PlayerType.ai) this.difficulty = BotDifficulty.easy;
    else this.difficulty = difficulty;
    this.stateAI = {
      lastPosition: undefined,
      isHorizontal: undefined,
      trackAttacks: new AttackTrackerSet(),
      trackPositions: []
    };
  }

  get Name() { return this.name }
  
  get GameBoard() { return this.gameboard }

  playTurn(x = undefined, y = undefined) {
    if ((this.type === PlayerType.human) && ((x === undefined) || (y === undefined))) 
      throw new 'Invalid input';
    
    if (this.type === PlayerType.human) {
      return this.gameboard.receiveAttack(x, y);
    } 
    
    return this.#playTurnAI();
  }

  #playTurnAI() {
    const {lastPosition} = this.stateAI;
    const attacks = [];
    let reply;
    let random = false;
    let position;

    if (this.difficulty === BotDifficulty.medium) {
      if (lastPosition === undefined) {
        random = true;
      } else {
        if (!this.stateAI.trackAttacks.has({ x: lastPosition.x, y: lastPosition.y }))
          attacks.push({ x: lastPosition.x, y: lastPosition.y });

        if (this.stateAI.isHorizontal === undefined || !this.stateAI.isHorizontal) {
          if (!this.stateAI.trackAttacks.has({ x: lastPosition.x - 1, y: lastPosition.y }))
            attacks.push({ x: lastPosition.x - 1, y: lastPosition.y });
          if (!this.stateAI.trackAttacks.has({ x: lastPosition.x + 1, y: lastPosition.y }))
            attacks.push({ x: lastPosition.x + 1, y: lastPosition.y });
        } 

        if (this.stateAI.isHorizontal === undefined || this.stateAI.isHorizontal) {
          if (!this.stateAI.trackAttacks.has({ x: lastPosition.x, y: lastPosition.y - 1 }))
            attacks.push({ x: lastPosition.x, y: lastPosition.y - 1 });
          if (!this.stateAI.trackAttacks.has({ x: lastPosition.x, y: lastPosition.y + 1 }))
            attacks.push({ x: lastPosition.x, y: lastPosition.y + 1 });
        } 
      }
    }

    do {
      if (this.difficulty === BotDifficulty.easy || random) {
        position = { 
          x: Math.floor(Math.random() * this.gameboard.boardSize),
          y: Math.floor(Math.random() * this.gameboard.boardSize)
        };
      } else {
        // use `stateAI` to evaluate BOT difficulty (remember state)
        position = attacks.shift();
      }
      reply = this.gameboard.receiveAttack(position.x, position.y);
      this.stateAI.trackAttacks.add(position);
    } while (!reply.exit);

    if (reply.sunk) {
      this.stateAI.lastPosition = undefined;
      this.stateAI.isHorizontal = undefined;
      this.stateAI.trackPositions = [];
    } else if (!reply.water) {
      this.stateAI.isHorizontal = (this.stateAI.lastPosition.x - position.x) === 0;
      this.stateAI.lastPosition = position;
      for (let i = 0; i < attacks.length; i += 1) {
        const attack = attacks[i];
        if (this.stateAI.isHorizontal) {
          if ((attack.x - position.x) === 0) this.stateAI.trackPositions.push(attack);
        } else if ((attack.y - position.y) === 0) this.stateAI.trackPositions.push(attack);
      };
    } else if (this.stateAI.trackPositions.length > 0) {
        // water
      this.stateAI.lastPosition = this.stateAI.trackPositions.shift();
    }

    return reply;
  }
};
