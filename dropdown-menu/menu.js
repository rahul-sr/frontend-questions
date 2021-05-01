const cityOptions = [{
        id: 0,
        label: 'Select City'
    },
    {
        id: 1,
        label: 'Delhi',
    },
    {
        id: 2,
        label: 'Bengaluru',
    },
    {
        id: 3,
        label: 'Mumbai',
    },
    {
        id: 4,
        label: 'Pune',
    }
];

const nameOptions = [{
        id: 0,
        label: 'Select Name'
    },
    {
        id: 1,
        label: 'Rahul',
    },
    {
        id: 2,
        label: 'Sanoj',
    },
    {
        id: 3,
        label: 'Mohit',
    },
    {
        id: 4,
        label: 'Akash',
    }
];

/**
 * Creates the dropdown menu using the params below:
 * @param {*} options - The list of menu-options to populate the dropdown list
 * @param {*} containerId - The id of container where dropdown needs to be created
 */
function createMenu(options, containerId) {
    const container = document.getElementById(containerId);
    const menuListElement = generateMenuElement(options);
    container.innerHTML += menuListElement;

    container.querySelector('ul').addEventListener('click', function (event) {
        if (event.target.classList.contains('option')) {
            container.querySelector('.selected').textContent = event.target.textContent;
        }
        toogleMenu(event.currentTarget);
        event.stopPropagation();
    });

    document.addEventListener('click', function (event) {
        hideMenu(container);
    });

    function toogleMenu(menuElement) {
        const subList = menuElement.querySelector('.sub-list');
        if (!subList.classList.contains("show")) {
            menuElement.querySelector('.sub-list').classList.add('show');
            menuElement.querySelector('.selected').classList.add('expanded');
        } else {
            hideMenu(menuElement);
        }
    }

    function hideMenu(menuElement) {
        const subList = menuElement.querySelector('.sub-list');
        if (subList.classList.contains("show")) {
            menuElement.querySelector('.sub-list').classList.remove('show');
            menuElement.querySelector('.selected').classList.remove('expanded');
        }
    }

    function generateMenuElement(options) {
        let menuListElement = '<ul class="menu">';
        menuListElement += `<li class="selected">${options[0].label}</li><ul class="sub-list">`;
        options.shift();
        options.forEach((option, index) => {
            menuListElement += `<li class="option">${option.label}</li>`;
        });
        menuListElement += '</ul></ul>'
        return menuListElement;
    }
}

createMenu(cityOptions, 'cityContainer');
createMenu(nameOptions, 'nameContainer');