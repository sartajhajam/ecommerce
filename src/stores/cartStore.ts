import { create } from "zustand";
import { persist } from "zustand/middleware";
import { CartItemType } from "@/types";

interface CartStore {
  cart: CartItemType[];
  addToCart: (item: CartItemType) => void;
  removeFromCart: (id: string | number) => void;
  updateQuantity: (id: string | number, quantity: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      cart: [],
      
      addToCart: (item) => {
        const existingItem = get().cart.find(
          (cartItem) => 
            cartItem.id === item.id && 
            cartItem.selectedSize === item.selectedSize && 
            cartItem.selectedColor === item.selectedColor
        );
        
        if (existingItem) {
          set((state) => ({
            cart: state.cart.map((cartItem) =>
              cartItem.id === item.id && 
              cartItem.selectedSize === item.selectedSize && 
              cartItem.selectedColor === item.selectedColor
                ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
                : cartItem
            ),
          }));
        } else {
          set((state) => ({ cart: [...state.cart, item] }));
        }
      },
      
      removeFromCart: (id) => {
        set((state) => ({
          cart: state.cart.filter((item) => item.id !== id),
        }));
      },
      
      updateQuantity: (id, quantity) => {
        if (quantity <= 0) {
          get().removeFromCart(id);
          return;
        }
        
        set((state) => ({
          cart: state.cart.map((item) =>
            item.id === id ? { ...item, quantity } : item
          ),
        }));
      },
      
      clearCart: () => {
        set({ cart: [] });
      },
      
      getTotalItems: () => {
        return get().cart.reduce((total, item) => total + item.quantity, 0);
      },
      
      getTotalPrice: () => {
        return get().cart.reduce((total, item) => total + (item.price * item.quantity), 0);
      },
    }),
    {
      name: "cart-storage",
    }
  )
);

export default useCartStore;
