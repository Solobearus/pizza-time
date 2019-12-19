const Pizza = {};

Pizza.start = () => {
    const newBtn = $('#new');
    const saveBtn = $('#save');
    const loadBtn = $('#load');
    newBtn.click(Pizza.new);
    saveBtn.click(Pizza.save);
    loadBtn.click(Pizza.load);
}

Pizza.new = () => {

}

Pizza.load = () => {
    
}

Pizza.save = () => {
    
}

Pizza.start();