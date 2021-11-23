import Header from './components/Header';
import Footer from './components/Footer';
import Orders from './components/Orders';
import Prototypes from './components/Prototypes';
import AppStatePovider from './providers/AppStateProvider';

function App() {
  return (
    <AppStatePovider>
      <Header />
      <div className="container">
        <Prototypes />
        <Orders />
        <Footer />
      </div>
    </AppStatePovider>
  );
}

export default App;
