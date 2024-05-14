import Link from "next/link";
import type {Product} from "product"
import ProductImage from "./product-image";

interface ProductProps {
  product: Product;
};

function SingleProduct({ product }: ProductProps): JSX.Element {
  return (
    <Link
      className="h-96 flex flex-col p-5 rounded border group hover:scale-105 transition-transform ease-out duration-200"
      href={`/products/${product.id}`}
    >
      <div className="relative max-h-72 flex-1">
        <ProductImage fill product={product} />
      </div>

      <div className="font-semibold flex items-center justify-between mt-4 mb-1">
        <p className="w-44 truncate">{product.title}</p>
        <p>${product.price}</p>
      </div>

      <p className="italic text-xs mx-w-58 line-clamp-2 text-gray-600">
        {product.description}
      </p>
    </Link>
  );
}

export default SingleProduct;