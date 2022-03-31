// import axios from "axios";
// import React,{useEffect, useState } from "react";
// import Client from "shopify-buy";



// const client = Client.buildClient({
//   storefrontAccessToken: 'b14f8fead3b26b18c6e5d5f59a575438',
//   domain:'drillcut-shop.myshopify.com'
// });


// const ShopProvider = () => {
// const [state, setState] = useState({
//   products: [],
//   product: {},
//   checkout: {},
//   isCartOpen: false,
//   isMenuOpen: false
// })
  
//     useEffect(() => {
//       fetchNavigation()
//       // fetchAllProducts();
//       if (localStorage.checkout_id) {
//         fetchCheckout(localStorage.checkout_id)
//       } else {
//         createCheckout()
//       }
//     }, [])
    
  
//     const createCheckout= async() => {
//       const checkout = await client.checkout.create();
//       localStorage.setItem("checkout_id", checkout.id)
//       setState({ checkout: checkout });
//     };

//     const fetchNavigation=()=>
//     {
//       axios
//         .get("https://drillcut-shop.myshopify.com/admin/menus/200200519937.json", {
//           headers: {
//             'Access-Control-Allow-Origin':'*'
//           },
//           responseType: "json",
//         })
//         .then((response) => {
//           console.log({ tableData: response.data });
//         });
//   }
  
//     const fetchCheckout = async (checkoutId) => {
//       client.checkout
//         .fetch(checkoutId)
//         .then((checkout) => {
//           setState({ checkout: checkout });
//         })
//         .catch((error) => console.log(error));
//     };
  
//    const addItemToCheckout = async (variantId, quantity) => {
//       const lineItemsToAdd = [
//         {
//           variantId,
//           quantity: parseInt(quantity, 10),
//         },
//       ];
//       const checkout = await client.checkout.addLineItems(
//         state.checkout.id,
//         lineItemsToAdd
//       );
//       setState({ checkout: checkout });
  
//       openCart();
//     };
  
//     const removeLineItem = async (lineItemIdsToRemove) => {
//       const checkoutId = state.checkout.id
  
//       client.checkout.removeLineItems(checkoutId, lineItemIdsToRemove)
//         .then(checkout => setState({ checkout }))
//     }
  
//     const fetchAllProducts = async () => {
//       const products = await client.product.fetchAll();
//       // console.log(products);
//     };
  
//     const fetchProductWithHandle = async (handle) => {
//       const product = await client.product.fetchByHandle(handle);
//       setState({ product: product });
  
//       return product;
//     };
  
//    const closeCart = () => {
//       setState({ isCartOpen: false });
//     };
//    const openCart = () => {
//       setState({ isCartOpen: true });
//     };
  
//    const closeMenu = () => {
//       setState({ isMenuOpen: false })
//     }
//    const openMenu = () => {
//       setState({ isMenuOpen: true })
//     }
  
  
//       return (<></>
//         // <ShopContext.Provider
//         //   value={{
//         //     ...state,
//         //     fetchAllProducts: fetchAllProducts,
//         //     fetchProductWithHandle: fetchProductWithHandle,
//         //     closeCart: closeCart,
//         //     openCart: openCart,
//         //     closeMenu: closeMenu,
//         //     openMenu: openMenu,
//         //     addItemToCheckout: addItemToCheckout,
//         //     removeLineItem: removeLineItem
//         //   }}
//         // >
//         //   {props.children}
//         // </ShopContext.Provider>
//       );
// }


// // const ShopConsumer = ShopContext.Consumer;

// // export { ShopConsumer, ShopContext };

// export default ShopProvider;