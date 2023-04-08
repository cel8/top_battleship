import ButtonManager from "Utilities/button-manager";
import InputManager from "Utilities/input-manager";
import DomManager from "Utilities/dom-manager";
import BotDifficulty from "Modules/bot-difficulty";
import PlayerType from "Modules/player-type";
import Player from "Controller/player-controller";
import GameboardController from "Controller/gameboard-controller";
import 'Svg/account-multiple-outline.svg';
import 'Svg/robot-angry-outline.svg';
import Ship from "Modules/ship";

const phases = {
  rest:          0,
  createPlayerA: 1,
  createPlayerB: 2,
  playA:         3,
  playB:         4,
  winner:        5
};

export default class UiGameController {
  constructor() {
    this.#initGameVariables();
  }

  #initGameVariables() {
    this.stepPhase = phases.rest;
    this.playerA = {
      name: '',
      object: undefined,
      human: true
    };
    this.playerB = {
      name: '',
      difficulty: undefined,
      human: false,
      object: undefined
    };
    this.desPlaceShip = {
      lengths: [ 2, 3, 3, 4, 5 ],
      current: 0,
      vertical: true
    };
    this.previousHover = {
      length: 0,
      valid: false
    }
  }

  doResetGame() {
    const divOverlay = document.querySelector('.overlay-popup');
    if (divOverlay) {
      const divPlayGameOverlay = divOverlay.querySelector('.manage-div-play');
      if (divPlayGameOverlay) {
        const divButtons = divPlayGameOverlay.querySelectorAll('.form-icon');
        const buttons = [...divButtons];
        buttons.forEach(btn => {
          if(btn.style.display === 'none') DomManager.toggleDisplayByNode(btn);
          btn.disabled = false;
        });
      }
      const formPlayGameOverlay = divOverlay.querySelector('.manage-form-players');
      if (formPlayGameOverlay) DomManager.removeAllChildNodes(formPlayGameOverlay);
      const divFormPlaceBoat = divOverlay.querySelector('.manage-form-placeboat');
      if (divFormPlaceBoat) DomManager.removeAllChildNodes(divFormPlaceBoat);
    }
    this.#initGameVariables();
  }

  doCreateGameOverlay() {
    let btnTwoPlayers;
    let btnBotPlayer;
    const divOverlay = document.querySelector('.overlay-popup');
    const divPlayGameOverlay = DomManager.createAddNode('div', divOverlay, 'manage-div-play');
    const formPlayGameOverlay = DomManager.createAddNode('form', divOverlay, 'manage-form-players');
    DomManager.createAddNode('div', divOverlay, 'manage-form-placeboat');

    const patterns = {
      editPlayerNameA: /^[a-z\s']{2,30}$/i,
      editPlayerNameB: /^[a-z\s']{2,30}$/i,
    }
    
    const validate = (field, regex) => {
      if (regex.test(field.value)) {
        field.setCustomValidity('');
      } else {
        field.setCustomValidity('invalid');
      }
    };

    // Hide form and overlay
    const cbFinalizeForm = () => {
      DomManager.removeAllChildNodes(formPlayGameOverlay);
    };

    // Cancel event
    const cbEventCancel = () => {
      if(btnTwoPlayers.style.display === 'none') DomManager.toggleDisplayByNode(btnTwoPlayers);
      if(btnBotPlayer.style.display === 'none') DomManager.toggleDisplayByNode(btnBotPlayer);
      btnTwoPlayers.disabled = false;
      btnBotPlayer.disabled = false;
      DomManager.removeAllChildNodes(formPlayGameOverlay);
    };

    // Submit event
    const cbEventSubmit = (e) => {
      e.preventDefault();
      const { target } = e;
      const inputA = target.querySelector('#editPlayerNameA');
      this.playerA.name = inputA.value;

      if (btnTwoPlayers.disabled) {
        const inputB = target.querySelector('#editPlayerNameB');
        this.playerB.name = inputB.value;
        this.playerB.human = true;
      } else {
        const botDiff = target.querySelector('#selectBotDifficulty');
        this.playerB.difficulty = botDiff.options[botDiff.selectedIndex].text;
        this.playerB.name = 'AngryAI';
        this.playerB.human = false;
      }

      cbFinalizeForm();
      this.#doGameFSM(phases.createPlayerA);
    };

    const cbCreatePlayForm = (vsAI = false) => {
      let editPlayerB;
      DomManager.removeAllChildNodes(formPlayGameOverlay);
      const editPlayerA = InputManager.createEditText('editPlayerNameA', 'First player', 'First player name');
      const btnCancel   = InputManager.createTextButton('btnCancel', 'Cancel', 'form-create-player-button', cbEventCancel);
      const btnSubmit   = InputManager.createTextButton('btnSubmit', 'Submit', 'form-create-player-button', cbEventSubmit, formPlayGameOverlay);
      DomManager.addNodeChild(formPlayGameOverlay, editPlayerA.label);
      DomManager.addNodeChild(formPlayGameOverlay, editPlayerA.input);
      
      if (!vsAI) {
        btnTwoPlayers.disabled = true;
        DomManager.toggleDisplayByNode(btnBotPlayer);
        editPlayerB = InputManager.createEditText('editPlayerNameB', 'Second player', 'Second player name');
        DomManager.addNodeChild(formPlayGameOverlay, editPlayerB.label);
        DomManager.addNodeChild(formPlayGameOverlay, editPlayerB.input);
      } else {
        btnBotPlayer.disabled = true;
        DomManager.toggleDisplayByNode(btnTwoPlayers);
        const selectAiDiff = InputManager.createSelect('selectBotDifficulty', [ BotDifficulty.easy, BotDifficulty.medium ], BotDifficulty.easy, 'Bot difficulty');
        DomManager.addNodeChild(formPlayGameOverlay, selectAiDiff.label);
        DomManager.addNodeChild(formPlayGameOverlay, selectAiDiff.input);
      }

      DomManager.addNodeChild(formPlayGameOverlay, btnCancel.input);
      DomManager.addNodeChild(formPlayGameOverlay, btnSubmit.input);

      const inputs = document.querySelectorAll('.manage-form-players > input');
      inputs.forEach((input) => {
        input.addEventListener('keyup', (e) => {
          if (undefined !== e.target.attributes.name) {
            validate(e.target, patterns[e.target.attributes.name.value]);
          }
        });
      });
    };

    btnTwoPlayers = ButtonManager.createButton('Two Players', 'account-multiple-outline.svg', 'form-icon', () => cbCreatePlayForm());
    btnBotPlayer = ButtonManager.createButton('AI Bot', 'robot-angry-outline.svg', 'form-icon', () => cbCreatePlayForm(true));

    DomManager.addNodeChild(divPlayGameOverlay, btnTwoPlayers);
    DomManager.addNodeChild(divPlayGameOverlay, btnBotPlayer);
  }

  #doCreateUserGameboard() {
    const gameboardController = new GameboardController(true);
    this.desPlaceShip.current = 0;
    const {current, lengths } = this.desPlaceShip;

    const formPlaceBoat = document.querySelector('.manage-form-placeboat');
    DomManager.removeAllChildNodes(formPlaceBoat);
    const divPlaceBoat = DomManager.createAddNode('div', formPlaceBoat, 'manage-div-placeboat');
    for (let i = 0; i < gameboardController.BoardSize; i+=1) {
      for (let j = 0; j < gameboardController.BoardSize; j+=1) {
        const grid = ButtonManager.createButton('', null, 'box', (e) => this.#onPlaceBoatCellClick(e, gameboardController));
        grid.addEventListener('mouseenter', (e) => this.#onPlaceBoatMouseEnter(e, gameboardController));
        grid.addEventListener('mouseleave', (e) => this.#onPlaceBoatMouseLeave(e, gameboardController));
        grid.dataset.x = i;
        grid.dataset.y = j;
        DomManager.addNodeChild(divPlaceBoat, grid);
      }
    }

    const divLegendPlaceBoat = DomManager.createAddNode('div', formPlaceBoat, 'div-legend-placeboat');
    const name = this.stepPhase === phases.createPlayerA ? this.playerA.name
      : this.playerB.name;
    DomManager.createAddNode('p', divLegendPlaceBoat, 'player-name-legend', null,  `It's ${name} turn for place boats.`);
    DomManager.createAddNode('p', divLegendPlaceBoat, 'boat-length-legend', null,  `Place ${lengths[current]} length boat.`);
    const switchVertical = InputManager.createSwitchButton('switchVertical', true, 'Vertical boat', () => this.#doToggleVertical(), true);
    DomManager.addNodeChild(divLegendPlaceBoat, switchVertical.label);
    DomManager.addNodeChild(divLegendPlaceBoat, switchVertical.input);
  }

  #doCreateBotGameboard() {
    let exit = false;
    const gameboardController = new GameboardController(false);
    this.desPlaceShip.current = 0;
    const { lengths } = this.desPlaceShip;
    const formPlaceBoat = document.querySelector('.manage-form-placeboat');
    DomManager.removeAllChildNodes(formPlaceBoat);
    DomManager.createAddNode('p', formPlaceBoat, 'player-name-legend', null,  `It's ${this.playerB.name} turn for place boats.`);

    do {
      const vertical = Math.random() < 0.5;
      const x = Math.floor(Math.random() * gameboardController.BoardSize);
      const y = Math.floor(Math.random() * gameboardController.BoardSize);

      if (gameboardController.place(new Ship(lengths[this.desPlaceShip.current]), x, y, vertical)) {
        console.log(`bot place @ (${x},${y}) vertical = ${vertical}`)
        this.desPlaceShip.current += 1;
        if (this.desPlaceShip.current === lengths.length) {
          this.playerB.object = new Player(this.playerB.name, gameboardController, PlayerType.ai, this.playerB.difficulty);
          this.#doGameFSM(phases.playA);
          exit = true;
        }
      }
    } while(!exit);
  }

  #doChangeBoatLengthLegend() {
    const {current, lengths } = this.desPlaceShip;
    const pBoatLength = document.querySelector('.boat-length-legend');
    pBoatLength.textContent = `Place ${lengths[current]} length boat.`;
  }

  #onPlaceBoatCellClick(event, gameboardController) {
    const { target } = event;
    const dataset = (target.nodeName.toLowerCase() === 'button') ? target.dataset
      : target.parentNode.dataset;
    const x = +dataset.x;
    const y = +dataset.y;
    const {current, lengths, vertical } = this.desPlaceShip;
    if (gameboardController.place(new Ship(lengths[current]), x, y, vertical)) {
      event.target.classList.add('set');
  
      if (vertical) {
        for (let i = x + 1; i < gameboardController.BoardSize && i < (x + lengths[current]); i += 1) { 
          const btn = document.querySelector(`[data-x='${i}'][data-y='${y}']`);
          btn.classList.add('set');
        }
      } else {
        for (let i = y + 1; i < gameboardController.BoardSize && i < (y + lengths[current]); i += 1) {
          const btn = document.querySelector(`[data-x='${x}'][data-y='${i}']`);
          btn.classList.add('set');
        }
      }

      this.#unsetPreviousHover(event.target, x, y, gameboardController.BoardSize, this.desPlaceShip.vertical);
      this.desPlaceShip.current += 1;
      this.#doChangeBoatLengthLegend();
      if (this.desPlaceShip.current === lengths.length) {
        if(this.stepPhase === phases.createPlayerA) {
          this.playerA.object = new Player(this.playerA.name, gameboardController);
        } else {
          this.playerB.object = new Player(this.playerB.name, gameboardController);
        }
        const nextState = this.stepPhase === phases.createPlayerA ? phases.createPlayerB 
          : phases.playA;
        this.#doGameFSM(nextState);
      }
    }
  }

  #doToggleVertical() {
    this.desPlaceShip.vertical = !this.desPlaceShip.vertical;
  }

  static #setPlaceBoatHover(element, valid) {
    if (valid) {
      element.classList.add('valid');
    } else {
      element.classList.add('invalid');
    }
  }

  static #unsetPlaceBoatHover(element, valid) {
    if (valid) {
      element.classList.remove('valid');
    } else {
      element.classList.remove('invalid');
    }
  }

  #onPlaceBoatMouseEnter(event, gameboardController) {
    const { target } = event;
    const { dataset } = target;
    const x = +dataset.x;
    const y = +dataset.y;
    const { current, lengths, vertical } = this.desPlaceShip;
    this.previousHover.length = lengths[current];
    this.previousHover.valid = gameboardController.checkPlace(lengths[current], x, y, vertical);
    UiGameController.#setPlaceBoatHover(event.target, this.previousHover.valid);

    if (vertical) {
      for (let i = x + 1; i < gameboardController.BoardSize && i < (x + lengths[current]); i += 1) { 
        const btn = document.querySelector(`[data-x='${i}'][data-y='${y}']`);
        UiGameController.#setPlaceBoatHover(btn, this.previousHover.valid);
      }
    } else {
      for (let i = y + 1; i < gameboardController.BoardSize && i < (y + lengths[current]); i += 1) {
        const btn = document.querySelector(`[data-x='${x}'][data-y='${i}']`);
        UiGameController.#setPlaceBoatHover(btn, this.previousHover.valid);
      }
    }
  }

  #unsetPreviousHover(element, x, y, boardSize, vertical) {
    if (this.previousHover.length) {
      UiGameController.#unsetPlaceBoatHover(element, this.previousHover.valid);

      if (vertical) {
        for (let i = x + 1; i < boardSize && i < (x + this.previousHover.length); i += 1) { 
          const btn = document.querySelector(`[data-x='${i}'][data-y='${y}']`);
          UiGameController.#unsetPlaceBoatHover(btn, this.previousHover.valid);
        }
      } else {
        for (let i = y + 1; i < boardSize && i < (y + this.previousHover.length); i += 1) {
          const btn = document.querySelector(`[data-x='${x}'][data-y='${i}']`);
          UiGameController.#unsetPlaceBoatHover(btn, this.previousHover.valid);
        }
      }

      this.previousHover.length = 0;
      this.previousHover.valid = false;
    }
  }

  #onPlaceBoatMouseLeave(event, gameboardController) {
    const { target } = event;
    const { dataset } = target;
    const x = +dataset.x;
    const y = +dataset.y;
    this.#unsetPreviousHover(event.target, x, y, gameboardController.BoardSize, this.desPlaceShip.vertical);
  }

  #doGameFSM(nextStep) {
    // Set next step
    this.stepPhase = nextStep;

    // Do operation
    switch (this.stepPhase) {
      case phases.createPlayerA:
        this.#doCreateUserGameboard();
        break;
      case phases.createPlayerB:
        if (this.playerB.human) {
          this.#doCreateUserGameboard();
        } else {
          this.#doCreateBotGameboard();
        }
        break;
      case phases.rest:
      default:
        break;
    }
  }
};
