import AnounceBar from "./assets/BaseComponent/AnounceBar";
import Footer from "./assets/BaseComponent/Footer";
import Header from "./assets/BaseComponent/Header";
import CartItem from "./assets/Ecommerce/CartItem";
import Filter from "./assets/Ecommerce/Filter";
import NewsLatter from "./assets/Ecommerce/NewsLatter";
import OrderSummery from "./assets/Ecommerce/OrderSummery";
import ProductList from "./assets/Ecommerce/ProductList";
import Store from "./assets/store";

function App() {
  return (
    <Store>
      <AnounceBar />
      <Header />
      <main className="container mx-auto px-4 md:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div class="lg:col-span-2">
            <Filter />
            <ProductList />
          </div>
          <div class="lg:col-span-1">
            <div class="bg-white rounded-lg p-6 border border-gray-200">
              <h2 class="text-2xl font-bold mb-6">YOUR CART</h2>
              <CartItem />
              <CartItem />
              <CartItem />
              <OrderSummery />
            </div>
          </div>
        </div>
      </main>
      <NewsLatter />
      <Footer />
    </Store>
  );
}

export default App;
