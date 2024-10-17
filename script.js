// Data for different categories
const menuData = {
    entrees: [
        {
            name: 'Bouchées Camembert',
            img: 'img/bouchees-camembert.png',
            price: '4,90€'
        },
        {
            name: 'Chicken Nuggets',
            img: 'img/nuggets.png',
            price: '4,50€'
        },
        {
            name: 'Chicken Tenders',
            img: 'img/tenders.png',
            price: '6,90€'
        },
        {
            name: 'Chicken Wings',
            img: 'img/wings.png',
            price: '5,90€'
        }
    ],
    pizzas: [
        {
            name: 'Pizza Italienne',
            img: 'img/pizza-italienne.png',
            price: '7,50€'
        },
        {
            name: 'Pizza Savoureuse',
            img: 'img/pizza-savoureuse.png',
            price: '8,00€'
        },
        {
            name: 'Pizza Rustique',
            img: 'img/pizza-rustique.png',
            price: '9,00€'
        }
    ],
    salades: [
        {
            name: 'Salade Cheesy',
            img: 'img/salade-cheesy.png',
            price: '7,90€'
        },
        {
            name: 'Salade Mosaïque',
            img: 'img/salade-mosaique.png',
            price: '7,90€'
        },
        {
            name: 'Salade Océane',
            img: 'img/salade-oceane.png',
            price: '7,90€'
        }
    ],
    desserts: [
        {
            name: 'Brownie',
            img: 'img/brownie.png',
            price: '2,00€'
        },
        {
            name: 'Tiramisu',
            img: 'img/tiramisu.png',
            price: '3,00€'
        },
        {
            name: 'Barre Glacée',
            img: 'img/snickers.png',
            price: '1,50€'
        },
        {
            name: 'Häagen-Dazs',
            img: 'img/haagen-dazs.png',
            price: '3,60€'
        }
    ]
};

// Function to render the menu items based on the selected category
function renderMenu(category) {
    const menuItemsDiv = document.getElementById('menu-items');
    menuItemsDiv.innerHTML = ''; // Clear existing items

    let items = [];

    if (category === 'all') {
        // Merge all categories to display everything at once
        items = [...menuData.entrees, ...menuData.pizzas, ...menuData.salades, ...menuData.desserts];
    } else {
        items = menuData[category]; // Get data for the selected category
    }

    items.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');

        menuItem.innerHTML = `
            <img src="${item.img}" alt="${item.name}">
            <span>${item.name}</span>
            <span class="price">à partir de ${item.price} TTC</span>
        `;

        menuItemsDiv.appendChild(menuItem);
    });
}

// Event listeners for the category icons
document.querySelectorAll('.menu-icons .icon').forEach(icon => {
    icon.addEventListener('click', function() {
        const category = this.getAttribute('data-category');
        renderMenu(category); // Call the function to render items
    });
});

// Load 'all' by default on page load
window.onload = function() {
    renderMenu('all'); // Show all categories by default
};

// Script for setting active menu item
const currentUrl = window.location.href;

// Remove 'active' class from all nav links
document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active');
});

// Set the appropriate nav link as active
if (currentUrl.includes("home")) {
    document.getElementById('nav-accueil').classList.add('active');
} else if (currentUrl.includes("carte")) {
    document.getElementById('nav-carte').classList.add('active');
} else if (currentUrl.includes("restaurants")) {
    document.getElementById('nav-restaurants').classList.add('active');
} else if (currentUrl.includes("contact")) {
    document.getElementById('nav-contact').classList.add('active');
}
