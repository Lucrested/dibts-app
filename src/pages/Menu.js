import React, { Fragment, useEffect, useState } from "react";

const Menu = () => {
  const [menu, setMenu] = useState([]);

  const getMenu = async () => {
    try {
      const response = await fetch("http://localhost:8000/menu");
      const jsonData = await response.json();

      setMenu(jsonData);
    } catch (err) {
      alert(err.message);
      console.error(err.message);
    }
  };

  useEffect(() => {
    getMenu();
  }, []);

  const addToCart = async (itemId) => {
    try {
      const response = await fetch(`http://localhost:8000/cart/${itemId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          cartItemQuantity: 1,
        }),
      });

      alert(await response.text());
    } catch (error) {
      alert(error.message);
      console.error("Error adding item to cart:", error);
    }
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {menu.map((product) => (
            <span key={product.itemcode} href="#" className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src={product.imagehref}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{product.itemname}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">
                {product.itemprice}
              </p>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => addToCart(product.itemcode)}
              >
                {" "}
                Add to Cart
              </button>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

// const Menu = () => {
//   const [menu, setMenu] = useState([]);

//   useEffect(() => {
//     const fetchMenu = async () => {
//       try {
//         const response = await fetch("http://localhost:8000/menu");
//         const jsonData = await response.json();
//         setMenu(jsonData);
//         console.log(jsonData);
//       } catch (error) {
//         console.error("Error fetching menu:", error);
//       }
//     };

//     fetchMenu();
//     console.log(fetchMenu());
//   }, []);

//   return (
//     <div className="menu">
//       {menu.length > 0 ? (
//         menu.map((Item) => {
//           return (
//             <Fragment key={Item.itemCode} className="menu-item">
//               {console.log(Item.itemCode)}
//               <div className="item-name">{Item.itemName}</div>
//               <div className="item-price">{Item.itemPrice}</div>
//               <p className="item-description">{Item.itemDescription}</p>
//             </Fragment>
//           );
//         })
//       ) : (
//         <p>No items in the menu.</p>
//       )}
//     </div>
//   );
// };

export default Menu;
