import RelatedProducts from "./DailyStaples/relatedproduct";
import NutiritionDetails from "./NutritionFacts/page";
import ProductPage from "./Product/product";
import ProductTabs from "./ProductTabs/ProductTabs";
import ShopHeader from "./ShopHeader/ShopHeader";


export default function ProductDetailsPage() {
  return (
    <>
     <ShopHeader/>
     <ProductPage/>
     <ProductTabs/>
     <NutiritionDetails/>
     <RelatedProducts/>
    </>
  );
}
