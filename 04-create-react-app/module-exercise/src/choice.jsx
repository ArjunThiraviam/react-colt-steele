function choice(items) {
    return items[Math.floor(Math.random() * items.length)];
}

function  removeFruit(items, item){
        items = items.filter(items => items !== item);
    return items;
}

export {choice, removeFruit};