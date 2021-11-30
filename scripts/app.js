const navSlide = () => {
    const mob_icon = document.querySelector(('.mob-icon'));
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.menu-item');
    //Toggle Nav//
    mob_icon.addEventListener('click',() => {
        nav.classList.toggle('nav-active');

        //Animate Links//
        navLinks.forEach( (link, index) => {
            if(link.style.animation){ 
                link.style.animation = '' 
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        //Mob-icon animation//
        mob_icon.classList.toggle('toggle');
    });

    navLinks[0].addEventListener('click',() => {
        nav.classList.toggle('nav-active');
        navLinks.forEach( (link, index) => {
            if(link.style.animation){ 
                link.style.animation = '' 
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
        
        mob_icon.classList.toggle('toggle');
    });
}

navSlide();