export function removeProduct(products, product, removeCompletely) {
  const existingProduct = products.find((item) => item.id === product.id);

  if (existingProduct.quantity > 1 && !removeCompletely) {
    return products.map((item) => {
      return {
        ...item,
        quantity: item === existingProduct ? item.quantity - 1 : item.quantity,
      };
    });
  }

  return products.filter((item) => item.id !== product.id);
}

export function addProduct(products, product) {
  const existingProduct = products.find((item) => item.id === product.id);

  if (existingProduct) {
    return products.map((item) => {
      return item === existingProduct
        ? { ...item, quantity: item.quantity + 1 }
        : item;
    });
  }

  return [...products, { ...product, quantity: 1 }];
}
