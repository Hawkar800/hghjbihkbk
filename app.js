const navslide=()=>{
    const burger=document.querySelector('.burger');
    const nav =document.querySelector('.nav-links');
    const navlinks=document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        //toggle nav
        nav.classList.toggle('nav-active');

        //animate nav
        navlinks.forEach((link, index) => {   
            if(link.style.animation)
            {
                link.style.animation='';
            }
            else{
                link.style.animation= `navlinkfade 0.5s ease forwards ${index / 5 + 0.5}s`;
            }
            });
            burger.classList.toggle('toggle');
    });

    
}
navslide(); 