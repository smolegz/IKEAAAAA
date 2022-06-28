import Card from '../../../components/items/itemcard'
import './table.styles.scss'


const table = [
    {
      "id": 1,
      "name": "Table 1",
      "imageUrl": "https://www.asiaone.com/sites/default/files/inline-images/20208007_ethnicraft_OriginalsFurniture.jpg",
      "price": 250
    },
    {
      "id": 2,
      "name": "Table 2",
      "imageUrl": "https://res.cloudinary.com/castlery/image/private/w_700,f_auto,q_auto/b_rgb:F3F3F3,c_fit/v1634035070/crusader/variants/40280038/Jaxon-Round-Coffee-Table-Lifestyle-Crop.jpg",
      "price": 180
    },
    {
      "id": 3,
      "name": "Table 3",
      "imageUrl": "https://www.huntersfurniture.com/blog/wp-content/uploads/sites/42/2019/11/tables-in-foley-1024x731.jpg",
      "price": 350
    },
    {
      "id": 4,
      "name": "Table 4",
      "imageUrl": "https://res.cloudinary.com/castlery/image/private/w_700,f_auto,q_auto/b_rgb:F3F3F3,c_fit/v1624966597/crusader/variants/40550078/Miles-Coffee-Table-92cm-Lifestyle-Crop.jpg",
      "price": 250
    },
    {
      "id": 5,
      "name": "Table 5",
      "imageUrl": "https://res.cloudinary.com/castlery/image/private/w_700,f_auto,q_auto/b_rgb:F3F3F3,c_fit/v1624966597/crusader/variants/40550078/Miles-Coffee-Table-92cm-Lifestyle-Crop.jpg",
      "price": 200
    },
    {
      "id": 6,
      "name": "Table 6",
      "imageUrl": "https://www.huntersfurniture.com/blog/wp-content/uploads/sites/42/2019/11/tables-in-foley-1024x731.jpg",
      "price": 300
    },
    {
      "id": 7,
      "name": "Table 7",
      "imageUrl": "https://www.asiaone.com/sites/default/files/inline-images/20208007_ethnicraft_OriginalsFurniture.jpg",
      "price": 180
    },
    {
      "id": 5,
      "name": "Table 5",
      "imageUrl": "https://res.cloudinary.com/castlery/image/private/w_700,f_auto,q_auto/b_rgb:F3F3F3,c_fit/v1624966597/crusader/variants/40550078/Miles-Coffee-Table-92cm-Lifestyle-Crop.jpg",
      "price": 200
    },
    {
      "id": 6,
      "name": "Table 6",
      "imageUrl": "https://www.huntersfurniture.com/blog/wp-content/uploads/sites/42/2019/11/tables-in-foley-1024x731.jpg",
      "price": 300
    },
    {
      "id": 7,
      "name": "Table 7",
      "imageUrl": "https://www.asiaone.com/sites/default/files/inline-images/20208007_ethnicraft_OriginalsFurniture.jpg",
      "price": 180
    }
  ]
  


const Table = () => {
    
    return(
        <div className='table-page'>
        {table.map( ({name, price, imageUrl})=> (<div>

        
        <Card price ={price} name = {name} imageUrl= {imageUrl}/>
        </div>))}
        </div>
    )
}

export default Table