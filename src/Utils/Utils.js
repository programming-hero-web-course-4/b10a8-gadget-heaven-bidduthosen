// get stored cart by local storage
const getCategoryStoredByLocalStorage = () => {
    const storedCategoryCart = localStorage.getItem('cart');
    if (storedCategoryCart) {
        return JSON.parse(storedCategoryCart)
    } else {
        return []
    }
}

// set cart by local storage

const saveCategoryCartByLocalStorage = (category) => {
    const storedCart = getCategoryStoredByLocalStorage();
    const isExistCart = storedCart.find(cate => cate.id === category.id);
    console.log(isExistCart)
    if (!isExistCart) {
        storedCart.push(category);
        localStorage.setItem('cart', JSON.stringify(storedCart))
    }
    else{
        alert('added')
    }
}



export {saveCategoryCartByLocalStorage, getCategoryStoredByLocalStorage }