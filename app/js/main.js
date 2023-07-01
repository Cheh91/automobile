window.addEventListener("DOMContentLoaded", () => {

    const burgerBtn = document.querySelector(".header__menu-btn"),
        headerMenu = document.querySelector(".header__menu"),
        headerMenuLink = document.querySelectorAll(".header__menu-link"),
        tabBtn = document.querySelectorAll(".info__text-list-btn"),
        tabPhotoGallery = document.querySelectorAll(".info__photo-item"),
        tabImage = document.querySelectorAll(".info__image"),
        tabText = document.querySelectorAll(".info__text-descr"),
        tabTitle = document.querySelectorAll(".info__text-title"),
        tabBtnParrent = document.querySelector(".info__text-list");


    const headerNav = () => {

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
                if (e.target == item) {
                    headerMenu.classList.remove("open");
                    burgerBtn.classList.remove("active");
                }
            })
        });

        document.body.addEventListener("click", (e) => {
            // console.log(e.target);
            if (!e.target.classList.contains("active")) {
                headerMenu.classList.remove("open");
                burgerBtn.classList.remove("active");
            }
        })
    }
    headerNav();


    // 1) Вариант
    // const tabSection = () => {

    //     const tabClose = () => {
    //         tabBtn.forEach((item, i) => {
    //             item.classList.remove("info__text-list-btn-active");
    //         });

    //         tabPhotoGallery.forEach(item => {
    //             item.classList.remove("active");
    //         });

    //         tabImage.forEach(item => {
    //             item.classList.remove("active");
    //         });

    //         tabText.forEach(item => {
    //             item.classList.remove("active");
    //         });

    //         tabTitle.forEach(item => {
    //             item.classList.remove("active");
    //         })

    //     }
    //     tabClose();


    //     const tabOpen = (i) => {
    //         tabBtn[i].classList.add("info__text-list-btn-active");
    //         tabPhotoGallery[i].classList.add("active");
    //         tabImage[i].classList.add("active");
    //         tabText[i].classList.add("active");
    //         tabTitle[i].classList.add("active");
    //     }
    //     tabOpen(2);


    //     tabBtn.forEach((item, i) => {
    //         item.addEventListener("click", (e) => {
    //             if (e.target == item) {
    //                 tabClose();
    //                 tabOpen(i);
    //             }
    //         });
    //     });

    // }
    // tabSection();



    // 2) Вариант (Через делегирование)
    // const tabSection = () => {

    //     const tabButtonInActive = () => {
    //         tabBtn.forEach(item => {
    //             item.classList.remove("info__text-list-btn-active");
    //         });
    //     }
    //     tabButtonInActive();

    //     const tabButtonAcvite = (i) => {
    //         tabBtn[i].classList.add("info__text-list-btn-active");
    //     }
    //     tabButtonAcvite(0);


    //     const tabTextInActive = () => {
    //         tabText.forEach(item => {
    //             item.classList.remove("active");
    //         });
    //     }
    //     tabTextInActive();

    //     const tabTextActive = (i) => {
    //         tabText[i].classList.add("active");
    //     }
    //     tabTextActive(0);


    //     const tabImageInActive = () => {
    //         tabImage.forEach(item => {
    //             item.classList.remove("active");
    //         });
    //     }
    //     tabImageInActive();

    //     const tabImageActive = (i) => {
    //         tabImage[i].classList.add("active");
    //     }
    //     tabImageActive(0);


    //     const tabPhotoGalleryInActive = () => {
    //         tabPhotoGallery.forEach(item => {
    //             item.classList.remove("active");
    //         });
    //     }
    //     tabPhotoGalleryInActive();

    //     const tabPhotoGalleryActive = (i) => {
    //         tabPhotoGallery[i].classList.add("active");
    //     }
    //     tabPhotoGalleryActive(0);


    //     tabBtnParrent.addEventListener("click", (e) => {
    //         tabBtn.forEach((item, i) => {
    //             if(e.target == item){
    //                 console.log("!!");
    //                 tabButtonInActive();
    //                 tabButtonAcvite(i);
    //                 tabTextInActive();
    //                 tabTextActive(i);
    //                 tabImageInActive();
    //                 tabImageActive(i);
    //                 tabPhotoGalleryInActive();
    //                 tabPhotoGalleryActive(i);
    //             }
    //         })
            
    //     });

    // }
    // tabSection();



    // 2) Вариант (Через делегирование (сокращенный))
    const tabSection = () => {

        const tabInActiveItem = () => {
            tabBtn.forEach(item => {
                item.classList.remove("info__text-list-btn-active");
            });
            tabText.forEach(item => {
                item.classList.remove("active");
            });
            tabImage.forEach(item => {
                item.classList.remove("active");
            });
            tabPhotoGallery.forEach(item => {
                item.classList.remove("active");
            });
            tabTitle.forEach((item) => {
                item.classList.remove("active");
            })
        }
        tabInActiveItem();

        const tabActiveItem = (i) => {
                tabBtn[i].classList.add("info__text-list-btn-active");
                tabText[i].classList.add("active");
                tabImage[i].classList.add("active");
                tabPhotoGallery[i].classList.add("active");
                tabTitle[i].classList.add("active");
        }
        tabActiveItem(0);

        
        tabBtnParrent.addEventListener("click", (e) => {
            tabBtn.forEach((item, i) => {
                if(e.target == item){
                    tabInActiveItem();
                    tabActiveItem(i);
                }
            })
        });

    }
    tabSection();


    
    const accordionSection = () => {

        const accordionTitle = document.querySelectorAll(".accordeon__item-title"),
              accordionContent = document.querySelectorAll(".accordeon__item-content");

        accordionTitle.forEach((item, i) => {
            item.addEventListener("click", (e) => {

                const elem = item.nextElementSibling;

                if (!elem.classList.contains("hidden")) {
                    elem.classList.add("hidden");
                } else {
                    accordionContent.forEach(elem => {
                        elem.classList.add("hidden");
                    });
                    accordionContent[i].classList.remove("hidden");
                }

                if (item.classList.contains("open")) {
                    item.classList.remove("open");
                } else {
                    accordionTitle.forEach(x => {
                        x.classList.remove("open");
                    });
                    accordionTitle[i].classList.add("open");
                }

            });

        });

    }
    accordionSection();


    const modalWindow = () => {

        const btnLearnMore = document.querySelectorAll(".info__text-item-btn"),
            modal = document.querySelector(".modal"),
            modalCloseBtn = document.querySelector(".modal__close"),
            modalOverlay = document.querySelector(".modal__overlay");


        const modalOpen = () => {
            btnLearnMore.forEach(item => {
                item.addEventListener("click", (e) => {
                    if (e.target == item) {
                        modal.classList.add("open");
                    }
                })
            });
        }
        modalOpen();

        const modalClose = (e) => {
            if (e.target == modalCloseBtn || modalOverlay) {
                modal.classList.remove("open");
            }
        }

        modalCloseBtn.addEventListener("click", modalClose);
        modalOverlay.addEventListener("click", modalClose);

        window.addEventListener("keydown", (e) => {
            // console.log(e);
            if (e.code == "Escape") {
                modal.classList.remove("open");
            }
        });

    }
    modalWindow();



    const scroll = () => {
        const scrollLink = document.querySelectorAll("a[href^='#']:not(a[href='#'])");
        // console.log(scrollBlock);

        scrollLink.forEach(item => {
            item.addEventListener("click", (e) => {
                e.preventDefault();
                // console.log(e);

                const id = item.getAttribute("href").substring(1);
                console.log(id);

                document.getElementById(id).scrollIntoView({
                    behavior: "smooth"
                });
            });

        });
    }
    scroll();


});



