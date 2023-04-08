
import 'Svg/home-outline.svg';
import 'Svg/github.svg';
import 'Svg/dark-theme.svg';
import 'Svg/light-theme.svg';
import DomManager from 'Utilities/dom-manager';
import ButtonManager from 'Utilities/button-manager';
import UiGameController from 'View/ui-game-controller';

const root = document.documentElement;
const body = document.querySelector('body');
const main = document.querySelector('main');

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
  }

  #doLoadOverlay() {
    const overlay = document.querySelector('#overlay');
    const divOverlay = DomManager.createAddNode('div', overlay, 'overlay-popup');
    // Hide overlay
    // DomManager.toggleDisplayByNode(overlay);
    this.uiGameController.doCreateGameOverlay();
    // document.addEventListener('click', (e) => {
    //   if(e.target.id === 'overlay') { // Close overlay
    //     DomManager.toggleDisplayByNode(overlay);
    //     if(formOverlay.style.display !== 'none') DomManager.toggleDisplayByNode(formOverlay);
    //     if(divWinnerOverlay.style.display !== 'none') DomManager.toggleDisplayByNode(divWinnerOverlay);
    //   }
    // });
  }

  #doLoadMainContent() {
    this.#doCreateNavBar();
    this.#doCreateHome();
  }

  #doCreateNavBar() {
    /* Create navigation bar */
    const nav = document.querySelector('nav');
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
