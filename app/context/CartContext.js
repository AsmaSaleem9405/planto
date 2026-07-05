"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Add Item to Cart
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      // Clean up price string to number for mathematical calculations (e.g., "Rs. 459/-" -> 459)
      const numericPrice = parseInt(product.price.replace(/[^0-9]/g, ""), 10);
      return [...prevCart, { ...product, numericPrice, quantity: 1 }];
    });
  };

  // Update Quantity
  const updateQuantity = (id, delta) => {
    setCart((prevCart) =>
      prevCart
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : item;
          }
          return item;
        })
        .filter((item) => item.quantity > 0)
    );
  };

  // Remove Item
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // Calculate Totals
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subTotal = cart.reduce((sum, item) => sum + item.numericPrice * item.quantity, 0);
  
  // Custom discount logic (10% if applied)
  const [discountApplied, setDiscountApplied] = useState(false);
  const discountAmount = discountApplied ? subTotal * 0.1 : 0;
  
  // Free Shipping / Cash on delivery standard fee
  const deliveryFee = 0; 
  const grandTotal = subTotal - discountAmount + deliveryFee;

  return (
    <CartContext.Provider
      value={{
        cart,
        isCartOpen,
        setIsCartOpen,
        addToCart,
        updateQuantity,
        removeFromCart,
        totalItems,
        subTotal,
        discountAmount,
        grandTotal,
        discountApplied,
        setDiscountApplied,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);