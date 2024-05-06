
import Header from './components/Header/Header'
import './App.scss'
import MainContent from './components/MainContent/MainContent';
import Footer from './components/Footer/Footer';

function App() {

  return (
    <div className={"App"}>
      <main>
        <Header />
        <MainContent />
      </main>
      <Footer />
    </div>
  );
}

export default App
