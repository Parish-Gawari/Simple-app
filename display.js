let arr = [];
if (localStorage.length === 0) {
    console.log('Plesae Insert Some Items')
}
else {
    for (let i = 0; i <localStorage.length; i++) {
        
        arr.push(JSON.parse(localStorage.getItem(i)));
    }
}
console.log(arr);
const display = (data) => {
    let show = document.getElementById("show");
    
    for(let i= 0;i<data.length;i++){
        let card = document.createElement("div");
        let image = document.createElement("img");
        let span = document.createElement("span");

        image.src = data[i].img;
        image.style.marginTop = "30px";
        span.innerHTML = `<b> Item-Price Rs.</b>  ${data[i].price}`;

        // image styling
        image.style.height = "60px";
        image.style.width = "60px";
        image.style.marginLeft = "15px"

        
        // span styling
        span.style.marginLeft = '10px';

        card.innerHTML = `<b> Item-Name: </b> ${data[i].name}`;
        card.style.height = "100px"
        if(i%2 === 0){
            card.style.backgroundColor = "Grey";
        }

        
        card.append(span,image);
        show.append(card)
    }
}
display(arr);