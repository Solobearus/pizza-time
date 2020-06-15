const Pizza = {};

Pizza.toppings = ["olives", "corn", "mushroom", "onion", 'tomato']
Pizza.pizza = $('#pizza');
Pizza.pizzaTitleElement = $('#pizza-title');
Pizza.selectedTopping;

Pizza.currentPizza = {
    name: 'no name',
    toppings: []
};

Pizza.start = () => {
    Pizza.pizza.hide();
    // Pizza.pizza.show();
    Pizza.bindOptions();
    Pizza.createToppingsList();
    Pizza.pizza.click(Pizza.wrapAddTopping);
}

Pizza.bindOptions = () => {
    const newBtn = $('#new');
    const saveBtn = $('#save');
    const loadBtn = $('#load');
    newBtn.click(Pizza.new);
    saveBtn.click(Pizza.save);
    loadBtn.click(Pizza.load);
}

Pizza.createToppingsList = () => {
    const toppingsMenu = $('#toppings-menu');
    for (const topping of Pizza.toppings) {
        const li = $('<li/>');
        li.attr('class', 'cover-bg');
        li.attr('id', topping);
        li.text(topping);
        toppingsMenu.append(li);

        li.click((event) => {
            for (const topping of Pizza.toppings) {
                const currentElement = $('#' + topping)
                currentElement.removeClass('selected');
            }
            $(event.target).addClass('selected');
            Pizza.selectedTopping = topping;
        })
    }
}

Pizza.wrapAddTopping = (e) => {
    Pizza.addTopping(
        Pizza.selectedTopping,
        e.pageY - e.target.offsetTop - 30 + 'px',
        e.pageX - e.target.offsetLeft - 50 + 'px',
        false
    )
}
Pizza.addTopping = (selectedTopping, top, left, load) => {
    console.log(selectedTopping);
    
    if (selectedTopping != undefined) {

        const newTopping = $('<img/>');
        newTopping.attr('src', './img/' + selectedTopping + '.png');
        newTopping.addClass('topping');

        Pizza.pizza.append(newTopping);
        newTopping.css('top', top);
        newTopping.css('left', left);

        if (!load) {
            Pizza.currentPizza.toppings.push({
                topping: selectedTopping,
                top: top,
                left: left,
            })
        }
    }
}

Pizza.new = () => {
    Pizza.pizzaName = prompt("please name the pizza");
    Pizza.pizzaTitleElement.text(Pizza.pizzaName);
    Pizza.currentPizza = {
        name: Pizza.pizzaName,
        toppings: []
    };
    Pizza.pizza.empty();
    Pizza.pizza.show();
}

Pizza.load = () => {
    Pizza.pizza.empty();
    Pizza.pizza.show();
    Pizza.currentPizza = JSON.parse(localStorage.getItem('savedPizza'));
    Pizza.pizzaTitleElement.text(Pizza.currentPizza.name);

    for (const topping of Pizza.currentPizza.toppings) {
        Pizza.addTopping(topping.topping, topping.top, topping.left, true);
    }
}

Pizza.save = () => {
    localStorage.setItem('savedPizza', JSON.stringify(Pizza.currentPizza));
    alert('saved');
}

Pizza.start();