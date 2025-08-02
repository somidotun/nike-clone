import { useCartStore } from "@/app/store/cartStore";

const Cart = () => {
  const {
    cart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getTotalItems,
    getTotalPrice,
  } = useCartStore();

  return (
    <div
      className="absolute  right-0 top-12 bg-white 
     p-4 rounded-lg shadow-lg border w-80 z-[100]"
    >
      <h2 className="text-xl font-bold mb-4">Your Cart ({getTotalItems()})</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <ul className="space-y-2 mb-4">
            {cart.map((item) => (
              <li key={item.id} className="border-b pb-2">
                <div className="flex justify-between">
                  <span>{item.name}</span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
                <div className="flex items-center mt-1">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="px-2 bg-gray-200 rounded"
                  >
                    -
                  </button>

                  <span className="mx-2">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="px-2 bg-gray-200 rounded"
                  >
                    +
                  </button>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="ml-auto text-red-500"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div className="font-bold text-lg">
            Total: ${getTotalPrice().toFixed(2)}
          </div>

          <div className="mt-4 space-x-2">
            <button
              onClick={clearCart}
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
            >
              Clear Cart
            </button>
            <button className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600">
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
