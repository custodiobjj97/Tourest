import MenuMobile from "./modules/MenuMobile.js";
import ScrollAnimation from "./modules/ScrollAnimation.js";
import SlideNav from "./modules/slidenav.js";
import LinkSmooth from "./modules/LinkSmooth.js";
const menu = new MenuMobile('.toggle','.list-menu','.line');

menu.start()

const scroll = new ScrollAnimation('.hidden');

scroll.start()

const slide = new  SlideNav('.slide','.slide-wrapper');

slide.start();


slide.addControl('.custom-control')

const link = new LinkSmooth('.list-menu a[href^="#"]');

link.start()