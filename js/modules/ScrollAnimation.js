export default class ScrollAnimation{
    constructor(sections){
        this.sections= document.querySelectorAll(sections);
        this.activeClass="show"
    };

    handleScroll(){
        const obverse = new IntersectionObserver(entrys=> entrys.forEach((entry) =>{
            if(entry.isIntersecting){
                entry.target.classList.add(this.activeClass)
            }else{
                entry.target.classList.remove(this.activeClass)
            }
        }))

        this.sections.forEach((el) => obverse.observe(el))
    }


    start(){
        if(this.sections.length){
            this.handleScroll()
        }
    }
}