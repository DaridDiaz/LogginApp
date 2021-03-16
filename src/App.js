import logo from './logo.svg';
import './App.css';
import BrandHeader from './Components/Brand/BrandHeader';
import Login from './Components/Login/Login';

function App() {
  return (
    <section>
      <BrandHeader></BrandHeader>
      <section>
        <Login></Login>
      </section>
    </section>
  );
}

export default App;
