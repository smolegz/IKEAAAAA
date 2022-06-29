import './itemcard.scss'
import {addItem} from '../cart/cart'


const Card = ({name, price, imageUrl}) => {


    return(
        <div className="card-container">
            <div className='item-name'>{name}</div>
            <div className="card-img" style = {{
                backgroundImage: `url(${imageUrl})`
            }}>

            </div>
            <div className="description">
                <p>Production description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Praesent at vehicula nibh. Pellentesque accumsan commodo mi, eu commodo nibh finibus ac. Phasellus id luctus nisl, nec tristique neque.</p>
            </div>
            <h2>${price}</h2>
            <button className='cart-button' onClick= {()=> addItem(name,price)}>Add to Cart</button>
          

        </div>
    )
}

export default Card 