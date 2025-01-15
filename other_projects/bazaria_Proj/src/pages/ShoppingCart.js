// import React from 'react'
// import LogInSection from '../assets/components/LogInSection'

// export default function ShoppingCart() {
//   return (
//     <LogInSection 
//         bg="transparent"
//         mainTitle="سجّل وعيش تجربة تسوّق فريدة"
//         firstPlaceHolder="الإسم الكريم"
//         secondPlaceHolder="البريد الإلكتروني ( الإيميل )"
//         thirdPlaceHolder="شنو المنتجات اللي تفضلها؟"
//         mainBtn="تسجيل الدخول"
//         rightBtn="™إنشاء حساب بازاريا"
//         leftBtn="نسيت كلمة المرور؟"
//         />
//   )
// }


// Cart.js
import { useState } from 'react';
// Import FontAwesome cart icon
import '../../src/Cart.css'; // Import CSS for styling

const Cart = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCart = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Circular Sticky Cart Button */}
      <button className="cart-button" onClick={toggleCart}>
        <h1>Click</h1>
      </button>

      {/* Sliding Panel */}
      <div className={`cart-panel ${isOpen ? 'open' : ''}`} onClick={toggleCart}>
        <h1>Shopping Cart</h1>
      </div>
    </>
  );
};

export default Cart;
