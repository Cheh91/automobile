window.addEventListener("DOMContentLoaded", () => {

    const burgerBtn = document.querySelector(".header__menu-btn"),
          headerMenu = document.querySelector(".header__menu"),
          headerMenuLink = document.querySelectorAll(".header__menu-link"),
          tabBtn = document.querySelectorAll(".info__text-list-btn"),
          tabPhotoGallery = document.querySelectorAll(".info__photo-item"),
          tabImage = document.querySelectorAll(".info__image"),
          tabText = document.querySelectorAll(".info__text-descr"),
          tabTitle = document.querySelectorAll(".info__text-title");


    burgerBtn.addEventListener("click", () => {
        headerMenu.classList.toggle("open");
        burgerBtn.classList.toggle("active");
    });

    // headerMenuLink.forEach(item => {
    //     item.addEventListener("click", (e) => {
    //         if(headerMenu.classList.contains("open")){
    //             headerMenu.classList.remove("open");
    //             burgerBtn.classList.remove("active");
    //         }
    //     });
    // });

    // headerMenu.addEventListener("click", (e) => {
    //     if(e.target.classList.contains("header__menu-link")){
    //         headerMenu.classList.remove("open");
    //         burgerBtn.classList.remove("active");
    //     }
    // });

    headerMenu.addEventListener("click", (e) => {
        headerMenuLink.forEach(item => {
            if(e.target == item){
                headerMenu.classList.remove("open");
                burgerBtn.classList.remove("active");
            }
        })
    });

    

    const tabClose = () => {
        tabBtn.forEach((item, i) => {
            item.classList.remove("info__text-list-btn-active");
        });

        tabPhotoGallery.forEach(item => {
            item.classList.remove("active");
        });

        tabImage.forEach(item => {
            item.classList.remove("active");
        });

        tabText.forEach(item => {
            item.classList.remove("active");
        });

        tabTitle.forEach(item => {
            item.classList.remove("active");
        })

    }
    tabClose();


    const tabOpen = (i) => {
        tabBtn[i].classList.add("info__text-list-btn-active");
        tabPhotoGallery[i].classList.add("active");
        tabImage[i].classList.add("active");
        tabText[i].classList.add("active");
        tabTitle[i].classList.add("active");
    }
    tabOpen(0);


    tabBtn.forEach((item, i) => {
        item.addEventListener("click", (e) => {
            if(e.target == item){
                tabClose();
                tabOpen(i);
            }
        });
    });



    const accordionTitle = document.querySelectorAll(".accordeon__item-title"),
          accordionContent = document.querySelectorAll(".accordeon__item-content");

    accordionTitle.forEach((item, i) => {
        item.addEventListener("click", (e) => {

            const elem = item.nextElementSibling;

            if(!elem.classList.contains("hidden")){
                elem.classList.add("hidden");
            } else {
                accordionContent.forEach(elem => {
                    elem.classList.add("hidden");
                });
                accordionContent[i].classList.remove("hidden");
            }
            
            if(item.classList.contains("open")){
                item.classList.remove("open");
            } else {
                accordionTitle.forEach(x => {
                    x.classList.remove("open");
                });
                accordionTitle[i].classList.add("open");
            }

        });

    });
    

});
