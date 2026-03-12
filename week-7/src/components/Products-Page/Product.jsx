function Product({ product }) {
    return (
        <div className="bg-white rounded-2xl shadow-md hover:shadow-xl  flex flex-col">
            {/* Product Image */}
            <img
                src={product.image}
                alt={product.name}
                className="w-full h-52 "
            />

            {/* Card Body */}
            <div className="p-5 flex flex-col flex-1 gap-2">
                {/* Brand Badge */}
                <span className="text-xs font-semibold uppercase text-amber-600 bg-amber-50 px-3 py-1 rounded-full w-fit">
                    {product.brand}
                </span>

                {/* Product Name */}
                <h3 className="text-lg font-bold text-gray-800 ">{product.name}</h3>

                {/* Description */}
                <p className="text-sm text-gray-500  flex-1">{product.description}</p>

                {/* Price & Action */}
                <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100">
                    <span className="text-2xl font-extrabold text-gray-900">${product.price}</span>
                    <button className="bg-amber-400  text-white text-sm font-semibold px-5 py-2 rounded-xl h-0.5cursor-pointer">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Product