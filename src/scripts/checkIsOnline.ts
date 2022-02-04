const checkIsOnline = () => {

    const offlinePopup = document.querySelector(".offline") as HTMLDivElement;

    if(navigator.onLine){
        offlinePopup.classList.add("active");
    }else{
        offlinePopup.classList.remove("active");
    }

}
window.addEventListener("offline", checkIsOnline);
window.addEventListener("online", checkIsOnline);

export { checkIsOnline }