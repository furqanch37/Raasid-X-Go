import RelatedProducts from "./DailyStaples/relatedproduct";
import ProductPage from "./Product/product";
import ProductTabs from "./ProductTabs/ProductTabs";
import ShopHeader from "./ShopHeader/ShopHeader";


export default function ProductDetailsPage() {
  return (
    <>
     <ShopHeader/>
     <ProductPage/>
     <ProductTabs/>
     <RelatedProducts/>
    </>
  );
}
