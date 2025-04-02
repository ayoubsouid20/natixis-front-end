import { ProductItemProps } from '../../../types/product-types'
import './product-item.css'


const ProductItem = ({ product, onAddToCart }: ProductItemProps) => {
    return (
        <div className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-description">{product.description}</p>
                <span className="product-price">${product.price}</span>

            </div>
            <button className="add-to-cart" onClick={() => onAddToCart?.(product)}>
                Add to Cart
            </button>
           
        </div>
    )
}

export default ProductItem