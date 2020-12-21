(function(){
	printCart();
}());
    

function printCart(){
    let totalCount = localStorage.getItem('checkout');
    let cart = document.getElementById('cartNum');
    cartNum.innerHTML = totalCount;
    
    let totalPrice = 0;

    if (totalCount >= 1){
    for(i=0; i < totalCount; i++){
        let checkout = document.getElementById('cartProducts');
        let list = document.createElement('li');
        list.classList.add("list-group-item", "d-flex", "justify-content-between", "lh-condensed", "checkout-bg");
        let div = document.createElement('div');
        let title = document.createElement('h6');
        title.classList.add("my-0", "colour");
        let name = JSON.parse(localStorage.getItem('names'));
        title.innerHTML = name[i];
        let productprice = document.createElement('span');
        productprice.classList.add('text-white');
        let price = JSON.parse(localStorage.getItem('price'));
        productprice.innerHTML = "€" + price[i];

        div.appendChild(title);
        list.appendChild(div);
        list.appendChild(productprice);
        checkout.appendChild(list);

        totalPrice +=  parseInt(price[i]);
        }

        let overallPrice = document.getElementById('priceTotal');
        overallPrice.innerHTML = "€" + totalPrice;
    }

}