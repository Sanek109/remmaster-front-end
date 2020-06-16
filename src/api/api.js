import instance from './instance';

export const productsApi = {
    getProducts() {
        return instance.get('/');
    },
    getSearchProduct(value) {
        return instance.get(`/search?select=category&value=${value}`)
    }
}
