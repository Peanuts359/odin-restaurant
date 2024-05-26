function createMenuItem (title, description){
    const menuItem = document.createElement('div');
    menuItem.classList.add('menu_item');

    const itemTitle = document.createElement('h3');
    itemTitle.classList.add('item_title');
    itemTitle.textContent = title;

    const itemDescription = document.createElement('p');
    itemDescription.classList.add('item_description');
    itemDescription.textContent = description;

    menuItem.append(itemTitle, itemDescription);
    return menuItem;
}

function mainMenu() {
    const foodList = document.createElement('div');
    foodList.classList.add('food_list_div');

    const foodListHeader = document.createElement('h2');
    foodListHeader.classList.add('food_list_header');
    foodListHeader.textContent = "Available Food";
    foodList.append(foodListHeader);

    let gcheese = createMenuItem('Grilled Cheese Sandwich',
        'A classic comfort food with melted cheddar cheese \ between two slices of buttery, toasted bread.'
    );

    let hcheese = createMenuItem('Ham & Cheese Sandwich',
        'Sliced ham and Swiss cheese on a fresh baguette, \ served with a tangy Dijon mustard spread.'
    );    

    let blt = createMenuItem('BLT Sandwich',
        'Crispy bacon, fresh lettuce, and juicy tomatoes \ layered on toasted whole wheat bread with a light mayo spread.'
    );
        
    let muffin = createMenuItem('Chocolate Chip Muffin',
        'A moist and fluffy muffin loaded with rich chocolate chips, \ perfect for a sweet breakfast or snack.'
    );
        
    let croll = createMenuItem('Cinnamon Roll',
        'Soft, gooey, and generously spiced with cinnamon, \ topped with a smooth cream cheese icing.'
    );
        
    let donut = createMenuItem('Glazed Donut',
        'A classic light and airy donut covered in a \ sweet, shiny glaze that melts in your mouth.'
    );
        
    let bagel = createMenuItem('Smoked Salmon Bagel',
        'A toasted bagel with creamy dill cream cheese, \ layered with delicate smoked salmon, capers, and red onions.'
    );
        
    let croissant = createMenuItem('Croissant',
        'A buttery, flaky pastry with a golden crust.'
    );

    foodList.append(gcheese, hcheese, blt, muffin, croll, donut, bagel, croissant);
    return foodList;
}

function drinkMenu(){
    const drinkList = document.createElement('div');
    drinkList.classList.add('drink_list_div');
    
    const drinkListHeader = document.createElement('h2');
        drinkListHeader.classList.add('drink_list_header');
        drinkListHeader.textContent = "Drink Menu";
        drinkList.append(drinkMenuHeader);

    let coffee = createMenuItem('Coffee',
        'A rich and aromatic blend of freshly ground beans, brewed to perfection. \ Available in light, medium, and dark roasts.');


    let tea = createMenuItem('Tea',
        'A selection of fine teas, including black, green, and herbal varieties, \ served hot or iced. Enjoy plain or with lemon and honey.');

    let lemonade = createMenuItem('Lemonade',
        'A classic, zesty lemonade made with freshly squeezed lemons, sugar, \ and a hint of mint. Perfectly refreshing on a hot day.');
    
    let latte = createMenuItem('Latte',
        'A smooth and creamy blend of espresso and steamed milk, topped with a light layer of froth. \ Available with your choice of flavors such as vanilla, caramel, or hazelnut.');

    let juice = createMenuItem('Apple Juice',
        'Freshly pressed apple juice, chilled and refreshing, with the sweet and tangy taste of ripe apples.');


    drinkList.append(coffee, tea, lemonade, latte, juice);
    return drinkList;
};

export {mainMenu, drinkMenu}