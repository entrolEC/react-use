import { fetchProducts } from '@/libs/fetchProducts';
import { Products } from '@/app/async-component/products';

export async function ProductsContainer() {
  const products = await fetchProducts();

  return <Products products={products} />;
}
