const order = document.querySelector(".order");

window.addEventListener("load", async() => {
    const result = await fetch("order.json");
    const data = await result.json();

    console.log(data);

    let output = "";

    data.map(pizza => {
        output += `
            <div class="pizza">
                <h1>Rendelész száma: ${pizza.id}</h1>
                <h2>Pizza neve: ${pizza.pizza}</h2>
                <h2>Extrák: ${pizza.extra}</h2>
                <h2>Italok: ${pizza.ital}</h2>
                <h2>Végösszeg: ${pizza.ar}</h2>
            </div>
        `;
    })
    order.innerHTML = output;
})