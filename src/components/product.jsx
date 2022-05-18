import './product.css'
import QuantityPicker from './quantityPicker';

const Product = () => {
    return(<div className='product'>
           <img src='https://picsum.photos/200/300'></img>
           <h2>title</h2>
           <label>$price</label>
           <label>$total</label>
           <QuantityPicker></QuantityPicker>
           <button>add</button>
        </div>
        );
};

export default Product;