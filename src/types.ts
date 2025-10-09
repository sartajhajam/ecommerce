export type ProductType = {
  id: string | number;
  name: string;
  shortDescription: string;
  description: string;
  price: number;
  sizes: string[];
  colors: string[];
  images: Record<string, string>;
};

export type ProductsType = ProductType[]

export type CartItemType = ProductType & {
  quantity: number;
  selectedSize: string;
  selectedColor: string;
};

export type CartItemsType = CartItemType[];

// Form types
export type ShippingFormInputs = {
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  phone: string;
  email: string;
};

export type PaymentFormInputs = {
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  cardholderName: string;
  billingAddress: string;
  billingCity: string;
  billingState: string;
  billingZipCode: string;
};

// Zod schemas
import { z } from "zod";

export const shippingFormSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  address: z.string().min(1, "Address is required"),
  city: z.string().min(1, "City is required"),
  state: z.string().min(1, "State is required"),
  zipCode: z.string().min(1, "ZIP code is required"),
  country: z.string().min(1, "Country is required"),
  phone: z.string().min(1, "Phone number is required"),
  email: z.string().email("Invalid email address"),
});

export const paymentFormSchema = z.object({
  cardNumber: z.string().min(16, "Card number must be at least 16 digits"),
  expiryDate: z.string().min(1, "Expiry date is required"),
  cvv: z.string().min(3, "CVV must be at least 3 digits"),
  cardholderName: z.string().min(1, "Cardholder name is required"),
  billingAddress: z.string().min(1, "Billing address is required"),
  billingCity: z.string().min(1, "Billing city is required"),
  billingState: z.string().min(1, "Billing state is required"),
  billingZipCode: z.string().min(1, "Billing ZIP code is required"),
});