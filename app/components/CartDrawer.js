"use client";
import React, { useState } from "react";
import { useCart } from "@/app/context/CartContext";
import Image from "next/image";
import { FiTrash2, FiX, FiCheckCircle, FiArrowLeft } from "react-icons/fi";

export default function CartDrawer() {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
    subTotal,
    discountAmount,
    grandTotal,
    setDiscountApplied,
    clearCart, // Destructured assuming you might want to reset the cart on success
  } = useCart();

  // Navigation steps: 'cart' | 'checkout' | 'success'
  const [step, setStep] = useState("cart");
  const [coupon, setCoupon] = useState("");

  // Form Details State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
  });

  if (!isCartOpen) return null;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    // Execute backend tracking / API actions here if needed
    setStep("success");
    if (clearCart) clearCart();
  };

  const handleClose = () => {
    setIsCartOpen(false);
    // Graceful delay to reset the state view back to 'cart' after slide animation completes
    setTimeout(() => setStep("cart"), 300);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm">
      {/* Backdrop closer */}
      <div className="absolute inset-0" onClick={handleClose} />

      {/* Main Panel Canvas */}
      <div className="relative z-10 w-full max-w-4xl bg-white p-6 md:p-8 overflow-y-auto text-neutral-800 flex flex-col justify-between shadow-2xl">
        
        {/* Header Block Section */}
        <div className="flex justify-between items-center mb-6 border-b border-neutral-100 pb-4">
          <div className="flex items-center gap-3">
            {step === "checkout" && (
              <button 
                onClick={() => setStep("cart")} 
                className="p-2 hover:bg-neutral-100 rounded-full transition-colors text-neutral-600"
              >
                <FiArrowLeft size={20} />
              </button>
            )}
            <h2 className="text-2xl font-bold tracking-tight text-black">
              {step === "cart" && "Shopping Cart"}
              {step === "checkout" && "Checkout Details"}
              {step === "success" && "Order Confirmed"}
            </h2>
          </div>
          <button onClick={handleClose} className="p-2 hover:bg-neutral-100 rounded-full transition-colors">
            <FiX size={24} className="text-black" />
          </button>
        </div>

        {/* STEP 1: CART VIEW CONTAINER */}
        {step === "cart" && (
          cart.length === 0 ? (
            <div className="flex-grow flex flex-col items-center justify-center py-16">
              <p className="text-neutral-500 text-lg">Your shopping cart looks empty!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start flex-grow">
              
              {/* Product Layout List (Left Side) */}
              <div className="lg:col-span-2 space-y-4 border border-neutral-200 rounded-2xl p-4 bg-white">
                <div className="hidden md:grid grid-cols-4 font-bold text-xs uppercase tracking-wider text-neutral-400 pb-2 border-b border-neutral-100">
                  <span className="col-span-2">Product Info</span>
                  <span className="text-center">Quantity</span>
                  <span className="text-right">Total Price</span>
                </div>

                {cart.map((item) => (
                  <div key={item.id} className="grid grid-cols-1 md:grid-cols-4 items-center gap-4 py-4 border-b border-neutral-100 last:border-none">
                    <div className="col-span-1 md:col-span-2 flex items-center gap-4">
                      <div className="relative w-16 h-16 bg-neutral-50 border border-neutral-100 rounded-xl overflow-hidden p-1">
                        <Image src={item.image} alt={item.name} fill className="object-contain" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-black">{item.name}</h4>
                        <p className="text-xs text-neutral-400 italic">{item.scientificName}</p>
                      </div>
                    </div>

                    <div className="flex justify-center">
                      <div className="flex items-center border border-neutral-300 rounded-full px-3 py-1 gap-3 bg-neutral-50">
                        <button onClick={() => updateQuantity(item.id, -1)} className="font-bold text-neutral-500 hover:text-black transition-colors">-</button>
                        <span className="font-semibold text-sm w-4 text-center text-black">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, 1)} className="font-bold text-neutral-500 hover:text-black transition-colors">+</button>
                      </div>
                    </div>

                    <div className="flex items-center justify-between md:justify-end gap-4">
                      <span className="font-bold text-black md:text-right w-full">
                        Rs. {item.numericPrice * item.quantity}/-
                      </span>
                      <button onClick={() => removeFromCart(item.id)} className="text-neutral-400 hover:text-red-500 p-2 transition-colors">
                        <FiTrash2 size={18} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Pricing Block (Right Side) */}
              <div className="bg-neutral-50 border border-neutral-200 rounded-2xl p-6 space-y-6">
                <h3 className="text-lg font-bold text-black">Order Summary</h3>

                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Discount voucher code"
                    value={coupon}
                    onChange={(e) => setCoupon(e.target.value)}
                    className="w-full bg-white border border-neutral-300 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-black"
                  />
                  <button 
                    onClick={() => coupon.toLowerCase() === "save10" && setDiscountApplied(true)}
                    className="bg-black hover:bg-neutral-800 text-white font-medium text-xs rounded-xl px-4 py-2 transition-colors"
                  >
                    Apply
                  </button>
                </div>

                <div className="space-y-3 border-b border-neutral-200 pb-4 text-sm font-medium text-neutral-600">
                  <div className="flex justify-between">
                    <span>Sub Total</span>
                    <span className="text-black">Rs. {subTotal}/-</span>
                  </div>
                  {discountAmount > 0 && (
                    <div className="flex justify-between text-emerald-600 font-semibold">
                      <span>Discount (10%)</span>
                      <span>- Rs. {discountAmount}/-</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span>Delivery Fee</span>
                    <span className="text-emerald-600 font-bold">FREE (COD)</span>
                  </div>
                </div>

                <div className="flex justify-between items-baseline">
                  <span className="text-base font-bold text-black">Total</span>
                  <span className="text-xl font-black text-black">Rs. {grandTotal}/-</span>
                </div>

                <button 
                  onClick={() => setStep("checkout")}
                  className="w-full bg-black text-white py-3.5 rounded-full font-semibold text-center hover:bg-neutral-800 active:scale-95 transition-all shadow-lg"
                >
                  Checkout Now
                </button>
              </div>
            </div>
          )
        )}

        {/* STEP 2: PROFESSIONAL CHECKOUT SHIPPING FORM */}
        {step === "checkout" && (
          <form onSubmit={handlePlaceOrder} className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start flex-grow">
            
            {/* Delivery Inputs Box */}
            <div className="lg:col-span-2 space-y-5 border border-neutral-200 rounded-2xl p-6 bg-white">
              <h3 className="text-lg font-bold text-black border-b border-neutral-100 pb-2">Shipping Information</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-neutral-400 uppercase tracking-wider">Full Name</label>
                  <input
                    required
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter full name"
                    className="w-full border border-neutral-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-black bg-neutral-50"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-neutral-400 uppercase tracking-wider">Email Address</label>
                  <input
                    required
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="name@domain.com"
                    className="w-full border border-neutral-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-black bg-neutral-50"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-1 md:col-span-2">
                  <label className="text-xs font-bold text-neutral-400 uppercase tracking-wider">City Location</label>
                  <input
                    required
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    placeholder="e.g. Islamabad, Karachi"
                    className="w-full border border-neutral-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-black bg-neutral-50"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-neutral-400 uppercase tracking-wider">Postal Code</label>
                  <input
                    required
                    type="text"
                    name="postalCode"
                    value={formData.postalCode}
                    onChange={handleInputChange}
                    placeholder="44000"
                    className="w-full border border-neutral-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-black bg-neutral-50"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-neutral-400 uppercase tracking-wider">Complete Shipping Address</label>
                <input
                  required
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  placeholder="Apartment, Street number, Sector area info..."
                  className="w-full border border-neutral-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-black bg-neutral-50"
                />
              </div>

              <div className="pt-4 border-t border-neutral-100">
                <label className="text-xs font-bold text-neutral-400 uppercase tracking-wider block mb-2">Payment Option</label>
                <div className="flex items-center justify-between border-2 border-emerald-500 bg-emerald-50/40 rounded-xl p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded-full border-4 border-emerald-600 bg-white" />
                    <div>
                      <p className="font-bold text-neutral-900 text-sm">Cash on Delivery (COD)</p>
                      <p className="text-xs text-neutral-500">Pay inside cash directly at your doorstep</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold bg-emerald-600 text-white px-2.5 py-1 rounded-full uppercase tracking-wider">Active</span>
                </div>
              </div>
            </div>

            {/* Verification Block Summary Panel */}
            <div className="bg-neutral-50 border border-neutral-200 rounded-2xl p-6 space-y-6">
              <h3 className="text-lg font-bold text-black tracking-tight">Final Verification</h3>
              
              <div className="space-y-3 text-sm font-medium text-neutral-600 border-b border-neutral-200 pb-4">
                <div className="flex justify-between">
                  <span>Items Value</span>
                  <span className="text-black">Rs. {subTotal}/-</span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between text-emerald-600 font-semibold">
                    <span>Discount Deducted</span>
                    <span>- Rs. {discountAmount}/-</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Shipping Fees</span>
                  <span className="text-emerald-600 font-bold">FREE</span>
                </div>
              </div>

              <div className="flex justify-between items-baseline">
                <span className="text-base font-bold text-black">Grand Total</span>
                <span className="text-2xl font-black text-black">Rs. {grandTotal}/-</span>
              </div>

              <button 
                type="submit"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-4 rounded-full font-bold text-center active:scale-98 transition-all shadow-md tracking-wide"
              >
                Place Order
              </button>
            </div>

          </form>
        )}

        {/* STEP 3: SUCCESS BLOCK SCREEN WITH GREEN TICK */}
        {step === "success" && (
          <div className="flex-grow flex flex-col items-center justify-center py-16 text-center max-w-md mx-auto space-y-6">
            <div className="text-emerald-600 bg-emerald-50 p-4 rounded-full animate-bounce">
              <FiCheckCircle size={68} />
            </div>
            
            <div className="space-y-2">
              <h3 className="text-2xl font-black text-black tracking-tight">Order Placed Successfully!</h3>
              <p className="text-neutral-500 text-sm leading-relaxed">
                Thank you for your order, <b>{formData.name || "Customer"}</b>. Your order details have been received securely via <b>Cash on Delivery</b>. We will begin processing delivery to your address in <b>{formData.city}</b> shortly.
              </p>
            </div>

            <div className="w-full bg-neutral-50 border border-neutral-200 rounded-2xl p-4 text-left divide-y divide-neutral-200/60 text-sm">
              <div className="py-2.5 flex justify-between"><span className="text-neutral-400 font-medium">Payment Option:</span><span className="font-bold text-emerald-700">COD Available</span></div>
              <div className="py-2.5 flex justify-between"><span className="text-neutral-400 font-medium">Order Status:</span><span className="font-bold text-neutral-900">Processing Dispatch</span></div>
            </div>

            <button 
              onClick={handleClose}
              className="w-full bg-black text-white py-3.5 rounded-full font-bold hover:bg-neutral-800 transition-colors tracking-wide text-sm shadow-md"
            >
              Continue Shopping
            </button>
          </div>
        )}

      </div>
    </div>
  );
}