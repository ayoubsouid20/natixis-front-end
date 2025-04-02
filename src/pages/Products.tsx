import ProductItem from '../features/products/components/ProductItem'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'
import { useProducts } from '../features/products/hooks/useProducts'
import Loader from '../components/Loader/Loader'

const Products = () => {
    const { isPending } = useProducts()
    const products = useSelector((state: RootState) => state.product.items)

    return (
        isPending ? <Loader /> :
            <div className="product-list">
                {products.map((product) => (
                    <ProductItem key={product.id} product={product} />
                ))}
            </div>
    )
}

export default Products