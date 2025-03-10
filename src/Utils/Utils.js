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
    if (!isExistCart) {
        storedCart.push(category);
        localStorage.setItem('cart', JSON.stringify(storedCart))
        toast.success('Congress! Add To Cart.')
    }
    else {
        toast.error('Already Exist Cart.')
    }
};


// remove cart by local storage..
const removeCategoryCartByLocalStorage = (category) => {
    const storedCart = getCategoryStoredByLocalStorage();
    const remainCart = storedCart.filter(cart => cart.id !== category.id);

    localStorage.setItem('cart', JSON.stringify(remainCart))
    toast.success('Remove successfully Cart.')
}
// remove all items cart
const removeCartItemLC = () =>{
    localStorage.removeItem('cart')
    toast.success('Remove All cart')
}


// wishlist

// get stored wishlist by local storage
const getWishlistStoredByLC = () => {
    const storedWishlist = localStorage.getItem('wishlist');
    if (storedWishlist) {
        return JSON.parse(storedWishlist)
    } else {
        return []
    }
}

// set wishlist by local storage
const saveWishlistByLC = (wishlist) => {
    const storedWishlist = getWishlistStoredByLC();
    const isExistWishlist = storedWishlist.find(wish => wish.id === wishlist.id);
    if (!isExistWishlist) {
        storedWishlist.push(wishlist);
        localStorage.setItem('wishlist', JSON.stringify(storedWishlist))
        toast.success('Congress! Add To Wishlist.')
    }
    else {
        toast.error('Already Exist Wishlist.')
    }
};


// remove wishlist by local storage..
const removeWishlistByLC = (wish) => {
    const storedWishlist = getWishlistStoredByLC();
    const remainWishlist = storedWishlist.filter(wishlist => wishlist.id !== wish.id);
    
    localStorage.setItem('wishlist', JSON.stringify(remainWishlist))
    toast.success('Remove successfully Wishlist.')
}



export {
    saveCategoryCartByLocalStorage,
    getCategoryStoredByLocalStorage,
    removeCategoryCartByLocalStorage,
    getWishlistStoredByLC,
    saveWishlistByLC,
    removeWishlistByLC,
    removeCartItemLC
}