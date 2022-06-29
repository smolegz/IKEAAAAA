
import Card from '../../../components/items/itemcard'



const chair = [
    {
      "id": 1,
      "name": "Brown Chair",
      "imageUrl": "https://finaplaspackaging.com/wp-content/uploads/2021/04/chair-2@2x.jpg",
      "price": 250
    },
    {
      "id": 2,
      "name": "Brown Chair1",
      "imageUrl": "https://www.hermanmiller.com/content/dam/hmicom/page_assets/home/masthead/mh_home_zeph_20220613.jpg.rendition.480.360.jpg",
      "price": 180
    },
    {
      "id": 3,
      "name": "Brown Chair2",
      "imageUrl": "https://www.fortytwo.sg/media/wysiwyg/Menu_Landing_Page/Furniture/Chairs/Mobile/Office_Chair_Mobile.jpg",
      "price": 350
    },
    {
      "id": 4,
      "name": "Brown Chair3",
      "imageUrl": "https://static.thehoneycombers.com/wp-content/uploads/sites/2/2019/11/Crate-Barrel-chairs-and-sofas-900x643.jpg",
      "price": 200
    },
    {
      "id": 5,
      "name": "Brown Chair4",
      "imageUrl": "https://www.thefunempire.com/wp-content/uploads/2021/10/Cassina-Furnitures-Singapore.jpg",
      "price": 180
    },
    {
      "id": 6,
      "name": "Brown Chair5",
      "imageUrl": "https://xtra.com.sg/wp-content/uploads/2019/06/EAMES-LOUNGE-CHAIR-AND-OTTOMAN-tall-back-700x700.jpg",
      "price": 90
    },
    {
      "id": 7,
      "name": "Brown Chair6",
      "imageUrl": "https://finaplaspackaging.com/wp-content/uploads/2021/04/chair-2@2x.jpg",
      "price": 180

    }]
  


const Chair = () => {
    
    return(
        <div className='collection-page'>
        {chair.map( ({name, price, imageUrl})=> (<div>

        
        <Card price ={price} name = {name} imageUrl ={imageUrl}/>
        </div>))}
        </div>
    )
}

export default Chair