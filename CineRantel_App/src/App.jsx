import Content from "./assets/Component/Content";
import Footer from "./assets/Component/Footer";
import Header from "./assets/Component/Header";
import Sidebar from "./assets/Component/Sidebar";
function App() {
  return (
    <>
      <Header />;
      <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
        <Sidebar />
        <Content />
      </div>
      <Footer />
    </>
  );
}

export default App;
