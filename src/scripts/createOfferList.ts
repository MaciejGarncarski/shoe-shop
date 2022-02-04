import { offers } from "../data/offers"

export const createOfferList = () => {
    const offersContainer = document.querySelector(".offers")
    offers.forEach(({name, price, discount}) => {
        const container = document.createElement("div");
        offersContainer?.appendChild(container);
        
        const productImage = document.createElement("img");
        container.appendChild(productImage);
        
        if(discount){
            const discountTag = document.createElement("p");
            const discountValue = (discount / 100) * price;
            discountTag.textContent = (price - discountValue).toString();
            container.appendChild(discountTag);
        }

        const productName = document.createElement("p");
        productName.textContent = name;
        container.appendChild(productName);


        const priceTag = document.createElement("p");
        priceTag.textContent = price.toString();
        container.appendChild(priceTag);



    });
}
