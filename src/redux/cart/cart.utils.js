export const addItemToCart = (cartItems, cartItemToAdd) => {
  // Gjen nese item qe shtojme eshte ekzistues
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  )

  // Nese po , atehere rrit quantity me 1
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    )
  }

  // Nese jo , krijo nje array te ri me kete item , me base quantity 1
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
}
