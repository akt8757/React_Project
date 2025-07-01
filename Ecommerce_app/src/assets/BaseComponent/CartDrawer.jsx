// import React, { useState } from "react";
// import { Button, Drawer } from "antd";
// import CartIte from "../Ecommerce/CartItem";
// import OrderSummery from "../Ecommerce/OrderSummery";
// const CartDrawer = ({ openDrawer }) => {
//   const [open, setOpen] = useState(false);
//   const showDrawer = () => {
//     setOpen(true);
//   };

//   const onClose = () => {
//     setOpen(false);
//   };
//   return (
//     <>
//       <Button type="primary" onClick={showDrawer}>
//         Open
//       </Button>
//       <Drawer
//         title="Basic Drawer"
//         closable={{ "aria-label": "Close Button" }}
//         onClose={onClose}
//         open={open}
//       >
//         <CartIte />
//         <OrderSummery />
//       </Drawer>
//     </>
//   );
// };
// export default CartDrawer;
