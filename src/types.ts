export interface UserInput{
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: UserAddress;
}
export interface UserAddress{
  street: string
  city: string
  state: string
  zipCode: string
  country: string
}

export interface Variant {
  _id: string;
  size: string;
  color: string;
  inventory: number;
  sku: string;
}

export interface Product {
  _id: string;
  name: string;
  description: string;
  category: string;
  price: number;
  salePrice?: number | null;
  images: string[];
  variants: Variant[];
  isActive: boolean;
  createdAt: string;
}

export interface ApiResponse {
  total: number;
  page: number;
  totalPages: number;
  products: Product[];
}

export interface FilterParams {
  category?: string;
  search?: string;
  minPrice?: string;
  maxPrice?: string;
  page?: number;
  limit?: number;
  sortBy?: string;
  order?: 'asc' | 'desc';
}

// export interface Variant {
//   size: string;
//   color: string;
//   inventory: number;
//   sku: string;
// }

export interface CartItemInput {
  _id: string;
  productId: string;
  size: string;
  color: string;
  quantity: number;
}

export interface CartItem {
    _id: string;
  productId: Product; // populated version
  size: string;
  color: string;
  quantity: number;
}

export interface Cart {
  _id: string;
  userId: string;
  items: CartItem[];
  createdAt: string;
  __v: number;
}

export interface ShippingAddress {
  firstName: string;
  lastName: string;
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  phone: string;
}

// Payload from frontend when creating an order
export interface OrderDataInput {
  shippingAddress: ShippingAddress;
}

// Extended payload if you're sending a Stripe session ID from frontend
export interface CreateOrderRequest {
  shippingAddress: ShippingAddress;
  checkoutSessionId?: string;
}

// One item inside an order
export interface OrderItem {
  productId: string;
  productName: string;
  size: string;
  color: string;
  quantity: number;
  price: number;
}

// Full order object returned from backend
export interface Order {
  _id: string;
  orderNumber: string;
  customerId: string;
  status: 'pending' | 'paid' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  items: OrderItem[];
  total: number;
  shippingAddress: ShippingAddress;
  stripePaymentId: string | null; // nullable
  createdAt: string;
  updatedAt: string;
}

// Response from backend when an order is created
export interface CreateOrderResponse {
  message: string;
  order: Order;
}


export interface OrderData {
  // Contact Information
  email: string

  // Shipping Address
  firstName: string
  lastName: string
  address: string
  city: string
  state: string
  zipCode: string
  country: string
  phone: string

  // Shipping Method
  shippingMethod: string

  // Payment Method
  paymentMethod: string
  cardNumber: string
  expiryDate: string
  nameOnCard: string
}