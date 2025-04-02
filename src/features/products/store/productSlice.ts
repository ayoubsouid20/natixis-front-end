import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductItemTypes } from "../../../types/product-types";
import { products } from "../../../mocks/products";

type ProductSliceState = {
    items: ProductItemTypes[]
}

const initialState: ProductSliceState = {
    items: products
}

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        setProducts: (state, action: PayloadAction<ProductItemTypes[]>) => {
            state.items = action.payload;
        },
        addProduct: (state, action: PayloadAction<ProductItemTypes>) => {
            state.items.push(action.payload);
        },
        removeProduct: (state, action: PayloadAction<number>) => {
            state.items = state.items.filter((item) => item.id !== action.payload);
        },
    },
});


export const {setProducts, addProduct, removeProduct } = productSlice.actions;
export default productSlice.reducer;