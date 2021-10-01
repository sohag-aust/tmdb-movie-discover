export interface ProductData {
    readonly myProduct: Product
}

export interface Product {
    readonly name: string,
    readonly vote_count: number 
}
