import "../../index.css";
//import styles from "./app.module.css";
import { BookstorePage } from "../../pages/bookstore/bookstore";
import { BookstoreReactPage } from "../../pages/bookstoreReact/bookStoreReactPage";
import { CartPage } from "../../pages/bookstoreReactCartPage/cartPage";
import { Route, Routes } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { BookstoreHeader } from "../bookstoreHeader/bookstoreHeader";
import { BookstoreReactHeader } from "../bookstoreReactHeader/bookstoreReactHeader";

function App() {
  const location = useLocation();
  const isBookstoreReact = location.pathname.startsWith("/bookstore-react");

   return (
    <div>
      {isBookstoreReact ? <BookstoreReactHeader /> : <BookstoreHeader />}

      <Routes>
        <Route path="/" element={<BookstorePage />} />
        <Route path="/bookstore-react">
          <Route index element={<BookstoreReactPage />} />
          <Route path="cart" element={<CartPage />} />
        </Route>
      </Routes>
    </div>
  );
}


export default App;
