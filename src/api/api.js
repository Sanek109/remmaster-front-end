import instance from './instance';

export const productsApi = {
    getProducts() {
        return instance.get('/products/');
    }
}

export const repairsApi = {
    getRepairs() {
        return instance.get('/repairs');
    },
    getSearchRepairs(repairs, name) {
        debugger
        return instance.get(`/repairs/search/repair?repairs=${repairs}&name=${name}`)
    }
}
