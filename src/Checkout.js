import React from 'react'
import { useStateValue } from "./StateProvider";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from './Subtotal';
import CurrencyFormat from 'react-currency-format';

function Checkout() {
    const [{ basket }] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout__left">
              <img className="checkout__ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK-hq/2020/img/Giftcard/XCM_Manual_1300x90_1213785_1103763_uk_asv_nca_2020_812ea861_fdae_48a7_b147_b0b4516772fa_png._CB421904704_.png" alt=""/>

              {basket?.length === 0 ? (
                  <div>
                      <h2>Your Shopping Basket is empty</h2>
                      <p>You have no items in your basket. To buy one or more items, click "Add to basket" next to the item.</p>
                  </div>
            ) : (
                  <div>
                      <h2 className="checkout__title">Your Shopping Basket</h2>

                      {/* List out all of the Checkout Products */}
                      {basket?.map(item => (
                        <CheckoutProduct 
                        id = {item.id}
                        title = {item.title}
                        image = {item.image}
                        price = {item.price}
                        rating = {item.rating}
                        />
                    ))}
                </div>
            )}
            </div>
            {basket.length > 0 && (
                <div className="checkout__right">
                    <Subtotal />
                </div>
            )}
        </div>  
    );
}

export default Checkout
