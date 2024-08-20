export default class LinkSmooth{
    constructor(links){
        this.links = document.querySelectorAll(links);
        this.handleSmooth = this.handleSmooth.bind(this)
    }

    handleSmooth(event){
        event.preventDefault()
        const href = event.target.getAttribute('href');
        const section = document.querySelector(href);
        section.scrollIntoView({ behavior: "smooth", block: "start"});
    };


    eventLink(){
        this.links.forEach((item)=>{item.addEventListener('click', this.handleSmooth)})
    }

   
    start(){
        if(this.links.length){
            this.eventLink()
        }
    }
}