import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import "./App.scss";
import MainContent from "./components/MainContent/MainContent";
import Footer from "./components/Footer/Footer";
import CookiesModal from "./Modals/CookiesModal";

function App() {
  const [cookieModal, setCookieModal] = useState(false);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setCookieModal(true);
  //   }, 1000);
  // },[]);

  return (
    <>
      <div className={"App"}>
        <main>
          <Header />
          <MainContent />
        </main>

        {cookieModal && <CookiesModal onClose={() => setCookieModal(false)} />}
      </div>
      <Footer />
    </>
  );
}

export default App;
