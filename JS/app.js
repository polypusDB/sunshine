window.addEventListener("load", function(){

    /****************************
    ********** BOUTONS **********
    ****************************/
    let btn_acheter = document.querySelector(".conteneur_bouton");
    let btn_cours = document.querySelector(".course .conteneur");
    let achete_lift = document.querySelector(".lift .conteneur");
    let achete_heli = document.querySelector(".heli .conteneur");
    let achete_chalet = document.querySelector(".chalets .conteneur");
    let exit = document.querySelectorAll(".exit");
    let send = document.querySelectorAll(".send");

    /*************************************
    ********** SECTIONS DU HTML **********
    *************************************/
    let div_cache = document.querySelector(".book");
    let div_ski = document.querySelector(".resski");
    let div_heli = document.querySelector(".resheli");
    let div_chalet = document.querySelector(".reschalet");
    let div_remerciemnt = document.querySelector(".remerciemnt");

    /****************************************************************
    ********** ADD OU REMOVE LES CLASSES SELON LES ACTIONS **********
    ****************************************************************/
    achete_lift.addEventListener("click", function(){
        div_cache.classList.add("ouvert");
        div_ski.classList.add("ouvert");
    })

    achete_heli.addEventListener("click", function(){
        div_cache.classList.add("ouvert");
        div_heli.classList.add("ouvert");
    })

    achete_chalet.addEventListener("click", function(){
        div_cache.classList.add("ouvert");
        div_chalet.classList.add("ouvert");
    })

    btn_acheter.addEventListener("click", function(){
        div_cache.classList.add("ouvert");
        div_ski.classList.add("ouvert");
    });

    btn_cours.addEventListener("click", function(){
        div_cache.classList.add("ouvert");
        div_ski.classList.add("ouvert");
    })



    for(let i=0; i< exit.length; i++){
        exit[i].addEventListener("click", function(){
            div_cache.classList.remove("ouvert");
            div_chalet.classList.remove("ouvert");
            div_heli.classList.remove("ouvert");
            div_ski.classList.remove("ouvert");
            div_remerciemnt.classList.remove("ouvert");
        })
    }

    for(let i=0; i< send.length; i++){
        send[i].addEventListener("click", function(){
            div_chalet.classList.remove("ouvert");
            div_heli.classList.remove("ouvert");
            div_ski.classList.remove("ouvert");
            div_remerciemnt.classList.add("ouvert");
        })
    }

    /*********************************************
    ********** TOUT FERMER SUR UN SCROLL **********
    **********************************************/
    window.addEventListener("scroll", function(){
        div_cache.classList.remove("ouvert");
        div_chalet.classList.remove("ouvert");
        div_heli.classList.remove("ouvert");
        div_ski.classList.remove("ouvert");
        div_remerciemnt.classList.remove("ouvert");
    })

});