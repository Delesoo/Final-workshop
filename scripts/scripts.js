{
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        autoplay:true,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:1
            }
        }
    })
    
    const navigation=["მთავარი", "კონტაქტი", "აუქციონი"];
    const navigationlinks=["index.html", "contact.html", "#"];

    let navigationsigrdze= navigation.length;
    let navigationtext= '<ul>';

    for(let i = 0; i<navigationsigrdze;i++){
        navigationtext += '<li><a href='+'' + navigationlinks[i] +">" + navigation[i] + "<a/></li>";
    }
    navigationtext += "</ul>";
    document.getElementById("nav").innerHTML = navigationtext;

    const currentLocation = location.href;
    const menuItem = document.querySelectorAll('a');
    const menuLength = menuItem.length;
    for(let i = 0;i<menuLength;i++){
        if(menuItem[i].href === currentLocation){
            menuItem[i].className = "active"
        }
    }

    
}

let showchat = () => {
    document.getElementById("messagebox").style.display = "block";
    document.getElementById("chatopener").style.display = "none";
}
let closechat = () => {
    document.getElementById("messagebox").style.display = "none";
    document.getElementById("chatopener").style.display = "flex";
}