
import './App.css'
import image from './images/image-product-desktop.jpg';
import { FiShoppingCart } from 'react-icons/fi';


function App() {


  return (
    <div class="card">
      <div class="img_container">
        <img src={image} alt="" />
      </div>
      <div class="details_container">
        <p class="montserrat">PERFUME</p>
        <h1 class="name">Gabrielle Essence Eau De Parfum</h1>
        <p class="description">
          A floral, solar and voluptuous interpretation composed by Olivier
          Polge, Perfumer-Creator for the House of CHANEL.
        </p>

        <div class="price_container">
          <h1 class="current_price">$149.99</h1>
          <p class="old_price">$169.99</p>
        </div>

        <button class="btn">
        <FiShoppingCart className="custom-icon" />
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default App;
