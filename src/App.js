import logo from './logo.svg';
import './App.css';
import Topbar from './components/Topbar';
import FetchVibe from './components/FetchVibe';
import ProductList from './components/ProductList';
import ProductToggle from './components/ProductToggle';
import HorizontalScrollBar from './components/HorizontalScrollBar';
function App() {
  return (
    <div className="App min-h-screen bg-gray-100">
      <Topbar/>
      <FetchVibe />
      <ProductToggle/>
      <HorizontalScrollBar/>
      <br/> 
      <br/>
      <ProductList />
    </div>
  );
}

export default App;
