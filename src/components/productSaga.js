import {call, put, takeEvery} from "redux-saga/effects"
import {getProductsSuccess} from "./productSlice"

function* workGetProductsFetch() {
    const products = yield call(() => fetch("https://fakestoreapi.com/products"));
    const formattedProducts = yield products.json();
    const formattedProductsShortened = formattedProducts.slice(0, 6);
    yield put(getProductsSuccess(formattedProductsShortened))
}

function* productsSaga() {
    yield takeEvery('products/getProductsFetch', workGetProductsFetch)
}

export default productsSaga;