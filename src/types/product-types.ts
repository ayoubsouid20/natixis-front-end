export type ProductItemTypes = {
    id: number;
    name: string;
    description: string;
    price: number;
    image?: string;
}


export type ProductItemProps = {
    product: ProductItemTypes
    onAddToCart?: (product: ProductItemTypes) => void;
}