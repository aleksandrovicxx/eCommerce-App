import "./style.css"

const MainProduct = ({ mainProductInfo }) => {

    const highestRatedProduct = mainProductInfo.reduce((prev, current) => {
        return (prev.rating.rate > current.rating.rate) ? prev : current;
    });

    const { title, price, description, image, rating } = highestRatedProduct;

    return (
        <div>
            <h1>Our main product</h1>
            <div>
                <img src={image} alt={title} className="imgMainProduct"/>
                <h2>{title}</h2>
                <h3>About product:</h3>
                <p>{description}</p>
                <h3>Price:</h3>
                <p>${price}</p>
                <p>Rating: {rating.rate}</p>
                <p>Total Ratings: {rating.count}</p>
            </div>
        </div>
    );
}

export default MainProduct;
