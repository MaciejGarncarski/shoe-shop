import { createOfferList } from "./createOfferList";

const setActivePage = () => {
    const linkList = document.querySelectorAll<HTMLAnchorElement>(".link__anchor");
    
    linkList.forEach((link) => {
        link.classList.remove("active");
        const linkParent = link.parentNode as HTMLLIElement;
        if(linkParent.dataset.to === location.hash.substring(1)){
            link.classList.add("active");
            if(linkParent.dataset.to === "shop"){
                createOfferList();
            }
        }
    })    
}

export { setActivePage };