import "./mainProduct.css"

const MainProduct = ({ mainProductInfo }) => {

    const highestRatedProduct = mainProductInfo.reduce((prev, current) => {
        return (prev.rating.rate > current.rating.rate) ? prev : current;
    });

    const { title, price, description, image, rating } = highestRatedProduct;

    return (
        <>
        <div className="divMainProduct">
            <div className="divPhoto">
            <h3>Our Must Sell Product:</h3>
                <h2>{title}</h2>
                <img src={image} alt={title} className="imgMainProduct"/>
            </div>
            <div className="divDetails">
                <h3>About product:</h3>
                <p>{description}</p>
                <h3>Price:</h3>
                <div>
                    <p className="price">${price}</p>
                    <button className="buyBtn">Buy</button>
                </div>
                <p>Rating: {rating.rate}</p>
                <p>Total Ratings: {rating.count}</p>
            </div>
        </div>
        </>
    );
}

export default MainProduct;
