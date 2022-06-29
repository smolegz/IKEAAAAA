const CartList = ({header}) => {

    let myCart = JSON.parse(window.localStorage.getItem('cart'))

    let totalPrice = 0;

    if(myCart) {
        totalPrice = myCart.reduce((total,item)=> total + item.price, 0)
    }

    return (
        <div className='cart-container'>
            <h2 className='cart-header'>{header}</h2>
            <table width = '50%' className='table'>
            <tr  className="table-row" >
                <th>Item</th>
                <th>Price</th>
            </tr>
            {myCart.map(({name,price})=>
                (
                <tr className="table-row" >
                    <td className='table-data' >{name}</td>
                    <td className='table-data'>{price}</td>
                </tr>
                ))}

                <tr className="table-row" >
                <th className='finalise-price'>Total</th>
                <th className='finalise-price'>{totalPrice}</th>
            </tr>
        </table>
        </div>
    )

}

export default CartList