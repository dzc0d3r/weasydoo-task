import type { Product } from "product";
import SingleProduct from "@/components/product";

export default async function Home(): Promise<JSX.Element> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`);
  const products  = await res.json() as Product[];

  return (
    <main className="min-h-screen container max-w-6xl mx-auto px-8 xl:px-0 mt-10">
      <section className="flex flex-col space-y-12 pb-44">
        <h1 className="text-4xl font-semibold text-center">Trending</h1>
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  xl:gap-x-8">
          {products.map((product) => (
            <SingleProduct key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}