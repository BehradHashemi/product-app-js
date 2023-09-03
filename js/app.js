const searchInput = document.getElementById('search-input');
const products = document.querySelectorAll('.product-item');
const buttons = document.querySelectorAll('.filter')

// const addBtn = document.querySelectorAll('.add-cart')

// addBtn.forEach(btn => {
//     btn.addEventListener('click', (event) => {
//         event.preventDefault()
        
//     })
// })

const changeClass = (filter) => {
    buttons.forEach(btn => {
        if (btn.dataset.filter === filter) {
            btn.classList.add('selected')
        } else {
            btn.classList.remove('selected')
        }
    })
}

const searchHandler = (event) => {
    const searchValue = event.target.value.toLowerCase().trim();
    products.forEach((product) => {
        const productName = product.children[1].innerText.toLowerCase();
        if (productName.includes(searchValue)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    })
}

const filterHandler = (event) => {
    const { filter } = event.target.dataset;
    changeClass(filter);

    products.forEach(product => {
        const category = product.dataset.category;
        if (filter === 'all') {
            product.style.display = 'block';
        } else {
            if (filter === category) {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
        }
    })
}

searchInput.addEventListener('keyup', searchHandler)
buttons.forEach((btn => {
    btn.addEventListener('click', filterHandler)
}))
