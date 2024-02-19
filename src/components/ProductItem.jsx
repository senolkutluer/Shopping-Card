const ProductItem = ({ product, cart, setCart }) => {
  const findProduct = cart.find((item) => item.id === product.id);
  const addToCart = (product) => {
   setCart((prevState) => [...prevState, product]);
  }
   

    return (
    <div className="border p-4 m2 rounded-lg shadow-lg">
          <img className="w-full h-48 object-cover rounded-t-lg"
          src={product.image} 
          alt="prodcut-image" 
          />
      <div className="p-4">
        <h2 className="tex-xl font-semibold">{product.name}</h2>
        <p className="tex-gray-500 my-2">{product.price} ₺</p>
        <button
         className={'bg-blue-500 text-white px-4 py-[8px] rounded hover:bg-blue-600 w-full ${findProduct && "opacity-50 cursor-no-drop"}'}
        onClick={() => addToCart(product)}
        disabled={findProduct}
        >
        Add to Cart
        </button>
      </div>
    </div>
    )
}

export default ProductItem