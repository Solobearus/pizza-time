const Pizza = {};
Pizza.toppings = ["olives", "corn", "mushrooms", "onion", 'tomatos']

Pizza.start = () => {
    Pizza.bindOptions();
    Pizza.createToppingsList();
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
    }
}

Pizza.new = () => {

}

Pizza.load = () => {

}

Pizza.save = () => {

}

Pizza.start();