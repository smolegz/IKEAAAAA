import Card from '../../../components/items/itemcard'
import './bed.styles.scss'


const bed = [
    {
      "name": "Bed 1",
      "imageUrl": "https://res.cloudinary.com/castlery/image/private/w_700,f_auto,q_auto/b_rgb:F3F3F3,c_fit/v1629947221/crusader/variants/52460070-LW4001/Joseph-Queen-Size-Bed-Ivory-Beige-Lifestyle-Crop.jpg",
      "price": 2500
    },
    {
      "name": "Bed 2",
      "imageUrl": "https://www.fortytwo.sg/media/catalog/product/cache/1/image/600x601/040ec09b1e35df139433887a97daa66f/j/a/janvier.jpeg",
      "price": 1800
    },
    {
      "name": "Bed 3",
      "imageUrl": "https://media.karousell.com/media/photos/products/2022/4/28/plain_grey_modern_simple_bed_f_1651141247_31831ccc_progressive.jpg",
      "price": 3500
    },
    {
      "name": "Bed 4",
      "imageUrl": "https://static.thehoneycombers.com/wp-content/uploads/sites/2/2017/08/fortytwo.png",
      "price": 960
    },
    {
      "name": "Bed 1",
      "imageUrl": "https://res.cloudinary.com/castlery/image/private/w_700,f_auto,q_auto/b_rgb:F3F3F3,c_fit/v1629947221/crusader/variants/52460070-LW4001/Joseph-Queen-Size-Bed-Ivory-Beige-Lifestyle-Crop.jpg",
      "price": 2500
    },
    {
      "name": "Bed 2",
      "imageUrl": "https://www.fortytwo.sg/media/catalog/product/cache/1/image/600x601/040ec09b1e35df139433887a97daa66f/j/a/janvier.jpeg",
      "price": 1800
    },
    {
      "name": "Bed 3",
      "imageUrl": "https://media.karousell.com/media/photos/products/2022/4/28/plain_grey_modern_simple_bed_f_1651141247_31831ccc_progressive.jpg",
      "price": 3500
    },
    {
      "name": "Bed 4",
      "imageUrl": "https://static.thehoneycombers.com/wp-content/uploads/sites/2/2017/08/fortytwo.png",
      "price": 960
    },
    {
      "name": "Bed 3",
      "imageUrl": "https://media.karousell.com/media/photos/products/2022/4/28/plain_grey_modern_simple_bed_f_1651141247_31831ccc_progressive.jpg",
      "price": 3500
    },
    {
      "name": "Bed 4",
      "imageUrl": "https://static.thehoneycombers.com/wp-content/uploads/sites/2/2017/08/fortytwo.png",
      "price": 960
    }
]
  


const Bed = () => {
    
    return(
        <div className='bed-page'>
        {bed.map( ({name, price, imageUrl})=> (<div>

        
        <Card price ={price} name = {name} imageUrl ={imageUrl}/>
        </div>))}
        </div>
    )
}

export default Bed