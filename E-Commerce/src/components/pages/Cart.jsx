import React, { Suspense, useContext } from 'react';

import CloseIcon from '@mui/icons-material/Close';
import { ModalContext } from '../../ContextAPI/ModalProvider';

const Cart = () => {
  const { cartItems, deleteItem } = useContext(ModalContext);
  const subtotal = cartItems.reduce(
    (total, item) => total + item.quantity * item.price.newPrice,
    0
  );
  let shipping = 15;
  if (subtotal > 100) {
    shipping = 0;
  }

  return (
    <section className="mt-12">
      <div className="container">
        <div className="flex justify-between">
          <div className="table-wrapper w-2/3">
            <table className="w-full">
              <thead>
                <tr>
                  <th>{''}</th>
                  <th>Product</th>
                  <th>Price</th>
                  <th className="text-center">Quantity</th>
                  <th className="text-center">Subtotal</th>
                </tr>
              </thead>
              <tbody className="cart-wrapper">
                {cartItems.map((item) => {
                  return (
                    <tr className="cart-item" key={item.id}>
                      <td className="relative">
                        <img src={item.img.thumbs[0]} />
                        <i className="w-4 h-4 rounded-full flex items-center justify-center bg-red-700 absolute top-1 -left-2 hover:cursor-pointer">
                          <CloseIcon
                            style={{
                              fontSize: '12px',
                              color: 'white',
                              fontWeight: '1200',
                            }}
                            onClick={() => deleteItem(item.id)}
                          />
                        </i>
                      </td>
                      <td>{item.title}</td>
                      <td>${item.price.newPrice}</td>
                      <td>{item.quantity}</td>
                      <td>${item.quantity * item.price.newPrice}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="cart-totals border border-bg-[#dee0ea] p-6 w-1/4 ">
            <div className="cart-items flex flex-col gap-5">
              <div>
                <h3 className="font-bold text-xl">Cart Totals</h3>
              </div>

              <div>
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>

              {cartItems.length === 0 ? (
                ''
              ) : subtotal >= 100 ? (
                <div className="line-through opacity-55">
                  <span>Shipping</span>
                  <span>$15.00</span>
                </div>
              ) : (
                <div>
                  <span>Shipping</span>
                  <span>$15.00</span>
                </div>
              )}

              <div>
                <span>Total</span>
                <span className="font-bold text-xl">
                  $
                  {cartItems.length > 0
                    ? subtotal > 100
                      ? subtotal
                      : subtotal + shipping
                    : 0}
                </span>
              </div>

              <span className="text-xs">
                * Min order $100 dolar for free shipping.
              </span>
              <button className="pt-3 pb-3 pl-6 pr-6 text-white bg-red-700 ">
                Proceed to checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
