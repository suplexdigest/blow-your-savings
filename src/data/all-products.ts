import { PRODUCTS } from "./products";
import { PRODUCTS_BATCH2 } from "./products-batch2";
import { PRODUCTS_BATCH4 } from "./products-batch4";

// Combine all product batches
export const ALL_PRODUCTS = [
  ...PRODUCTS,
  ...PRODUCTS_BATCH2,
  ...PRODUCTS_BATCH4,
];
