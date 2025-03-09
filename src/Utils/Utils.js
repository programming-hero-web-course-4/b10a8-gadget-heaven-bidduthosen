import toast from "react-hot-toast";

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
        toast.success('Congress! Add To Cart.')
    }
    else{
        toast.error('Already Exist Cart.')
    }
};


// remove cart by local storage..




export {saveCategoryCartByLocalStorage, getCategoryStoredByLocalStorage }