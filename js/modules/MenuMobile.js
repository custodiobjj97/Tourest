import outsideClick from "./outsideClick.js";

export default class MenuMobile{
    constructor(toggle,menu,icon){
        this.toggle = document.querySelector(toggle);
        this.menu = document.querySelector(menu);
        this.icon = document.querySelector(icon)
        this.activeClass = "open";
    }

    openMenu(event){
        if(event.type === 'touchstart'){
            event.preventDefault();
        }
        outsideClick(this.menu,()=>{
            this.menu.classList.remove(this.activeClass);
            this.icon.classList.remove(this.activeClass)
        })
        this.menu.classList.toggle(this.activeClass)
        this.icon.classList.toggle(this.activeClass)
    }


    eventMenu(){
        this.toggle.addEventListener('click', this.openMenu);
        this.toggle.addEventListener('touchstart', this.openMenu);
    }

    bindEvent(){
        this.openMenu = this.openMenu.bind(this);
    }


    start(){
        if(this.menu){
            this.bindEvent();
            this.eventMenu()
        }
    }
}