
import 'Svg/home-outline.svg';
import 'Svg/github.svg';
import 'Svg/dark-theme.svg';
import 'Svg/light-theme.svg';
import DomManager from 'Utilities/dom-manager';
import ButtonManager from 'Utilities/button-manager';
import UiGameController from 'View/ui-game-controller';

const root = document.documentElement;

export const settings = { theme: 'dark' };

export default class UiController {
  constructor() {
    this.uiGameController = new UiGameController();
  }

  #doLoadHeader() {
    const header  = document.querySelector('header');
    
    DomManager.addNodeChild(header, ButtonManager.createImageButton('home-outline.svg', 'header-button', () => {
      this.#doCreateHome();
    }));

    const btnToggleTheme = ButtonManager.createImageButton(`${settings.theme}-theme.svg`, 'header-button', () => {
      settings.theme = (settings.theme !== 'dark' ? 'dark' : 'light');
      ButtonManager.editButtonImage(btnToggleTheme, `${settings.theme}-theme.svg`);
      root.className = settings.theme;
    });

    DomManager.addNodeChild(header, btnToggleTheme);
  }

  #doCreateHome() {
    this.uiGameController.doResetGame();
  }

  #doLoadOverlay() {
    const overlay = document.querySelector('#overlay');
    DomManager.createAddNode('div', overlay, 'overlay-popup');
    // Hide overlay
    this.uiGameController.doCreateGameOverlay();
    document.addEventListener('click', (e) => {
       if(e.target.id === 'overlay') { // Close overlay
          DomManager.toggleDisplayByNode(overlay);
       }
    });
  }

  #doLoadMainContent() {
    this.#doCreateHome();
  }

  static #doLoadFooter() {
    const curYear = new Date().getFullYear();
    const footer = document.querySelector('footer')
    DomManager.createAddNode('p', footer, null, null, `Copyright © ${curYear} Alessandro Celotti`);
    DomManager.addNodeChild(footer, ButtonManager.createImageLinkButton('https://github.com/cel8', 'github.svg'));
  }

  doLoadUI() {
    // Set main root theme
    root.className = settings.theme;
    this.#doLoadHeader();
    this.#doLoadOverlay();
    this.#doLoadMainContent();
    UiController.#doLoadFooter();
  }
}
