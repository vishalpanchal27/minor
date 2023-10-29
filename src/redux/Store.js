import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./slices/ProductSlice";
import CartSlice from "./slices/CartSlice";
import SearchSlice from './slices/SearchSlice'
import HomeApiSlice from "./slices/HomeApiSlice";
import ProductDetailSlice from "./slices/ProductDetailSlice";
import FavouriteSlice from "./slices/FavouriteSlice";


const Store = configureStore({
    reducer: {
        products: ProductSlice,
        cart: CartSlice,
        search: SearchSlice,
        productData: HomeApiSlice,
        productDetail:ProductDetailSlice,
        cartFakeFavData:FavouriteSlice,

    }
})

export default Store;