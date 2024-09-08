import { Route, Routes } from "react-router-dom";
import { Cart, Footer, Header, Home, ProductView } from "./components";

function App() {
  return (
    <>
      <Header />
      <main className="max-w-[1200px] mx-auto min-h-screen md:pt-[140px] pt-[160px]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<ProductView />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
