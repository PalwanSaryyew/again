import ProductCard from "./product-card";
import { getUcAll } from "../../../../prisma/data";
import { MySelect } from "@/components/my-ui/mySelect";

const ProductsPartial = async () => {
  const products = await getUcAll();
  return (
    <section className="max-w-[1280px] flex">
      {/* filter */}
      <div className="border">
        <MySelect />
      </div>

      {/* products container */}
      <div className="flex flex-wrap gap-6 justify-center">
        {/* product cards */}
        {products.map((product) => (
          <ProductCard
            key={product.id}
            cost={product.cost}
            pic={product.pic}
            price={product.price}
            bgcolor={product.bgcolor}
            id={product.id}
          ></ProductCard>
        ))}
      </div>
    </section>
  );
};

export default ProductsPartial;
