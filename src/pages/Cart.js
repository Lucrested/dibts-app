import { Fragment, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import ImageC from "../images/piccart.png";

const Cart = () => {
  const [open, setOpen] = useState(false);
  const [cart, setCart] = useState([]);

  const getCart = async () => {
    try {
      const response = await fetch("http://localhost:8000/cart");
      const jsonData = await response.json();
      console.log(jsonData);

      setCart(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getCart();
  }, []);

  const deleteCartItem = async (itemCode) => {
    try {
      const deleteCartItem = await fetch(
        `http://localhost:8000/cart/${itemCode}`,
        {
          method: "DELETE",
        }
      );
      console.log(cart);
      setCart(cart.filter((cart) => cart.itemcode !== itemCode));
      console.log(cart);
    } catch (err) {
      alert(err.message);
      console.error(err.message);
    }
  };

  const checkout = async () => {
    try {
      if (cart.length == 0) return alert("Your cart is empty.");
      const checkout = await fetch("http://localhost:8000/checkout", {
        method: "POST",
      });
      getCart();
      alert(await checkout.text());
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <>
      {!open && (
        <button
          type="button"
          className="fixed bottom-0 right-0 m-4 p-2 rounded-md z-50"
          onClick={() => {
            if (!open) getCart();
            setOpen(!open);
          }}
        >
          <img src={ImageC} alt="Cart" className="w-10 h-10" />
        </button>
      )}

      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                    <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                      <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                        <div className="flex items-start justify-between">
                          <Dialog.Title className="text-lg font-medium text-gray-900">
                            Shopping cart
                          </Dialog.Title>
                          <div className="ml-3 flex h-7 items-center">
                            <button
                              type="button"
                              className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                              onClick={() => setOpen(false)}
                            >
                              <span className="sr-only">Close panel</span>
                              <XMarkIcon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            </button>
                          </div>
                        </div>

                        <div className="mt-8">
                          <div className="flow-root">
                            <ul
                              role="list"
                              className="-my-6 divide-y divide-gray-200"
                            >
                              {cart.map((product) => (
                                <li
                                  key={product.itemcode}
                                  className="flex py-6"
                                >
                                  <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                    <img
                                      src={product.imagehref}
                                      className="h-full w-full object-cover object-center"
                                    />
                                  </div>

                                  <div className="ml-4 flex flex-1 flex-col">
                                    <div>
                                      <div className="flex justify-between text-base font-medium text-gray-900">
                                        <h3>
                                          <span>{product.itemname}</span>
                                        </h3>
                                        <p className="ml-4">
                                          {product.totalitemprice}
                                        </p>
                                      </div>
                                      <p className="mt-1 text-sm text-gray-500">
                                        {product.color}
                                      </p>
                                    </div>
                                    <div className="flex flex-1 items-end justify-between text-sm">
                                      <p className="text-gray-500">
                                        Qty {product.cartitemquantity}
                                      </p>

                                      <div className="flex">
                                        <button
                                          type="button"
                                          className="font-medium text-customBrown hover:text-customLBrown"
                                          onClick={() =>
                                            deleteCartItem(product.itemcode)
                                          }
                                        >
                                          Remove
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <p>
                            PRICE:{" "}
                            {cart
                              .reduce(
                                (accumulator, currentValue) =>
                                  accumulator +
                                  parseFloat(currentValue.totalitemprice),
                                0
                              )
                              .toFixed(2)}
                          </p>
                        </div>
                        <div className="mt-6">
                          <button
                            href="#"
                            className="flex items-center justify-center rounded-md border border-transparent bg-customBrown px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-customBun"
                            onClick={() => checkout()}
                          >
                            Checkout
                          </button>
                        </div>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};

export default Cart;
