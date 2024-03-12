import React from 'react';
import product1 from '../../assets/img/products/product1/1.png';
import CloseIcon from '@mui/icons-material/Close';

const Cart = () => {
  return (
    <section className="mt-12">
      <div className="container">
        <div className="flex justify-between">
          <div className="table-wrapper w-2/3">
            <table className="w-full">
              <thead>
                <th>{''}</th>
                <th>Product</th>
                <th>Price</th>
                <th className="text-center">Quantity</th>
                <th className="text-center">Subtotal</th>
              </thead>
              <tbody className="cart-wrapper">
                <tr className="cart-item">
                  <td className="relative">
                    <img src={product1} />
                    <i className="w-4 h-4 rounded-full flex items-center justify-center bg-red-700 absolute top-1 -left-2 hover:cursor-pointer">
                      <CloseIcon
                        style={{
                          fontSize: '12px',
                          color: 'white',
                          fontWeight: '1200',
                        }}
                        className=" "
                      />
                    </i>
                  </td>
                  <td>Analogue Resin Stray</td>
                  <td>$108.00</td>
                  <td>1</td>
                  <td>$108.00</td>
                </tr>
                <tr className="cart-item">
                  <td>
                    <img src={product1} alt="" />
                    <i></i>
                  </td>
                  <td>Analogue Resin Stray</td>
                  <td>$108.00</td>
                  <td>1</td>
                  <td>$108.00</td>
                </tr>
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
                <span>$216.00</span>
              </div>
              <div>
                <span>Shipping</span>
                <span>$15.00</span>
              </div>
              <div>
                <span>Total</span>
                <span className="font-bold text-xl">$108.00</span>
              </div>

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
