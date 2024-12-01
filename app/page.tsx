import Banner from "@/components/Banner";
import Hero from "@/components/Hero";
import NewArrivals from "@/components/NewArrivals";
import ProductA from "@/components/ProductA";
import ProductList from "@/components/ProductList";

export default function Home() {
  return (
    <div>
      <Hero />
      <Banner />
      <ProductList />
      <NewArrivals />
      <ProductA />

    </div>
  );
}
