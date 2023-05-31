let itemCart = [];
let cont = document.getElementById("container");
const seTItem = (data) =>{
    if(data.length === 0) {
        alert('Plesae Add some items in the cart');
        return false
    }
    else{
        for(let i in data){
            let item = i;
            let dataString = JSON.stringify(data[i]);
            localStorage.setItem(item,dataString)
        }
    }
}
const append = (data) => {
    data.forEach((ele) => {
        let span = document.createElement("li");
        let div = document.createElement("div");
        let btn = document.createElement("button");
        let img = document.createElement("img");


        img.src = ele.image;
        img.style.height = "50px"
        img.style.width = "50px"
        img.style.marginLeft = "10px"
        img.style.marginRight = "10px"
        img.style.marginTop = "10px";

        btn.setAttribute("class", "atc");
        btn.innerText = "Add to cart";
        btn.style.marginLeft = '10px';
        btn.style.borderRadius = "12px";
        btn.style.padding = '8px';

        span.innerHTML = ` <b> ID :</b> is  ${ele.id} <b> Title :</b>  ${ele.title}`;
        div.innerHTML = `<b>Product Details :</b> ${ele.description}`;

        span.style.backgroundColor = 'grey'
        span.style.height = '80px'
        span.style.listStyle = 'none'



        div.style.marginBottom = '12px'
        div.style.marginTop = '12px'


        btn.onclick = () => {
            let newItem = {
                "name": ele.title,
                "price": ele.price,
                "img": ele.image
            }
            let item = ele.id
            itemCart.push(newItem);
            console.log(itemCart);
            seTItem(itemCart);
        }
        


        span.insertAdjacentElement("afterbegin", img)
        span.append(btn);
        cont.append(span, div);
    })
}


fetch('https://fakestoreapi.com/products')
    .then((val) => {
        return val.json();

    })
    .then((res) => {
        console.log(res);
        append(res)
    })
    .catch((err) => {
        console.log(err);
    })