import { notFound } from "next/navigation";
import type {Product} from "product"
import ProductImage from "@/components/product/product-image";

interface ProductPageProps  {
  params: {
    id: string;
  };
};

async function ProductPage({ params: { id } }: ProductPageProps): Promise<JSX.Element> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${id}`);
    const product = await res.json() as Product;

    return (
      <main className="container mx-auto mt-5">
        <div className="max-w-5xl flex flex-col md:flex-row items-center justify-center gap-8 px-4 mt-15 pb-5">
        <ProductImage product={product} />
        

        <div className="divide-y">
          <div className="space-y-2 pb-8">
            <h1 className="text-2xl md:text-3xl font-bold">{product.title}</h1>
            <h2 className="text-primary/70 font-medium text-xl md:text-3xl">
              ${product.price}
            </h2>
          </div>

          <div className="pt-8">
            <p className="text-xs md:text-sm">{product.description}</p>
          </div>
        </div>
      </div>
      </main>
    );
  } catch (error) {
    notFound();
  }
}

export default ProductPage;