import { ICartItem } from "../../../core/interface";

class CartCoreActions {
  cartItems: ICartItem[];
  constructor(cartItems: ICartItem[]) {
    this.cartItems = cartItems;
  }
  increaseQuantity = (cartItem: ICartItem) => {
    return { ...cartItem, quantity: cartItem.quantity + 1 };
  };

  decreaseQuantity = (cartItem: ICartItem) => {
    return { ...cartItem, quantity: cartItem.quantity - 1 };
  };

  removeCartItem = (cartItem: ICartItem) => {
    const cartItemsCopy = [...this.cartItems];
    return cartItemsCopy.filter(
      (item) => item.product._id !== cartItem.product._id
    );
  };

  findCartItemById = (cartItem: ICartItem): ICartItem => {
    const itemIndex = this.cartItems.findIndex(
      (item) => item.product._id === cartItem.product._id
    );
    return this.cartItems[itemIndex];
  };

  updateCartItem = (updateCartItem: ICartItem) => {
    const itemIndex = this.cartItems.findIndex(
      (item) => item.product._id === updateCartItem.product._id
    );
    this.cartItems[itemIndex] = updateCartItem;
    return [...this.cartItems];
  };

  addCartItem = (cartItem: ICartItem): ICartItem[] | null => {
    if (!cartItem.product._id)
      throw new Error("This cart item does not have an id");
    const item = this.findCartItemById(cartItem);
    if (!item) {
      const newArray = [...this.cartItems, cartItem];
      return newArray;
    } else {
      const updateItem = {
        ...item,
        quantity: item.quantity + cartItem.quantity,
      };
      const updatedArray = this.updateCartItem(updateItem);
      return updatedArray;
    }
  };

  totalCartItemPriceByQuamtity = (cartItem: ICartItem): number => {
    const cartItemTotalPrice = cartItem.product.price * cartItem.quantity;
    return cartItemTotalPrice;
  };

  totalCartPrice = (): number => {
    const allCartItemsTotalPrice = this.cartItems.reduce(
      (totalPrice, cartItem) =>
        totalPrice + this.totalCartItemPriceByQuamtity(cartItem),
      0
    );
    return allCartItemsTotalPrice;
  };
}

export default CartCoreActions;
