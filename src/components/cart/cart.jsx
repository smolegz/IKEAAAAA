import './cart.scss'
import CartList from './cart-list'


let cart = [];

function addItem(name, price){

    let existingCart = JSON.parse(window.localStorage.getItem('cart'))

    if (existingCart){

        existingCart.push({name: name,price:price})
        window.localStorage.setItem('cart',JSON.stringify(existingCart))

    } else {
        cart.push({name: name,price:price})
        window.localStorage.setItem('cart',JSON.stringify(cart))
    }

}

function clearCart() {
    window.localStorage.removeItem('cart')
}

const Cart = () => {
    
    // var totalPrice = 0

    let myCart = JSON.parse(window.localStorage.getItem('cart'))

    // if(myCart) {
    //     totalPrice = myCart.reduce((total,item)=> total + item.price, 0)
    // }

    if (myCart) {
        return(
            <div>
                <CartList header ='Cart'/>
            <div className='buttons'>
                <a className= "clear-button" onClick={()=> clearCart()} href='/categories'>Clear Cart</a>
                <a className= "buy-button" href='/submission'>Proceed</a>
            </div>
        </div>)
        
    } else {
        return (
            <div>
            <h2 className='cart-header'>Empty Cart</h2>
            <table width = '50%' className='table'>
            <thead>
            <tr  className="table-row" >
                <th>Item</th>
                <th>Price</th>
            </tr>
            </thead>
            </table>
            </div>
        )
    }


}

export {Cart, addItem}