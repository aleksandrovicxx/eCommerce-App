import ProductListItem from "./ProductListItem";

const ProductList = ({products}) => {

    return(
        <div>
            {products.map(product =>{
                return <ProductListItem key={product.id} product={product}/>
            })}
        </div>
    )
}

export default ProductList;