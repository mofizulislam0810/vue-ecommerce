const baseURL = 'https://localhost:7016/api/';

export const api = {
  signUp: baseURL + 'User/Registration',
  signIn: baseURL + 'User/Post',
  category: baseURL + 'ProductCategory',
  inventory: baseURL + 'ProductInventory',
  discount: baseURL + 'Discount',
  product: baseURL + 'Product'
};