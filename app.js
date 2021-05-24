const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav_items');
    const navitems = document.querySelectorAll('.nav_items li');

    burger.addEventListener('click',()=>{
        //for toggle
        nav.classList.toggle('nav-active');
        //for animating links
        navitems.forEach((link, index)=>{
            if(link.style.animation){
                link.style.animation = '';
            }
            else{
                link.style.animation = `navitemfade 0.5s ease forwards`;
            }
        });
        //burger animation
        burger.classList.toggle('toggle');

    });

}

navSlide();