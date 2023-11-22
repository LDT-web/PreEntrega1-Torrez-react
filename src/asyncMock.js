const products = [
  {
    id: "1",
    name: "vans",
    price: 350,
    category: "decoracion",
    img: "https://www.tripstore.com.ar/media/catalog/product/cache/4769e4d9f3516e60f2b4303f8e5014a8/v/n/vn0a3b3uy28_0_1.jpg",
    stock: 13,
    description: "Vans negras con blanco",
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 500);
  });
};

export const getProductsById = (productId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((prod) => prod.id === productId));
    }, 500);
  });
};

export default getProducts;
