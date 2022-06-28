import './category.styles.scss'

const Category = () => {
    const categories = [
        {
     
            title: 'Chairs',
            imageurl: 'https://admincms.carlhansen.com/contentassets/321e9bc7db2c4bc3bc26180212945938/wegner_stole_wide.png?aspect=16:9&device=desktop&size=large&display=standard'
        },
        {
          
            title: 'Tables',
            imageurl: 'https://www.ikea.com/images/roenninge-series-c715c4211be8e1a3d13dc6077d8676f5.jpg?f=s'
        },
        {
     
            title: 'Beds',
            imageurl: 'https://res.cloudinary.com/castlery/image/private/w_700,f_auto,q_auto/b_rgb:F3F3F3,c_fit/v1629947221/crusader/variants/52460070-LW4001/Joseph-Queen-Size-Bed-Ivory-Beige-Lifestyle-Crop.jpg'
        },
        {

            title: 'Shelves',
            imageurl: 'https://i.etsystatic.com/10146012/r/il/788882/2089383224/il_794xN.2089383224_b6gd.jpg'
        },
        {
            title: 'Kitchen',
            imageurl: 'https://i1.wp.com/www.theweddingvowsg.com/wp-content/uploads/2020/07/scanpan-kitchenware.jpg?w=1080&ssl=1'
        }
    ]
    
    return (
        

        <div className='categories-container'>
        <div className='topimage' style={{
            backgroundImage: `url(https://foyr.com/learn/wp-content/uploads/2021/12/wabi-sabi-interior-design.png)`
        }}>
        </div>
        <div className='box'>
        {categories.map(({title,imageurl}) => (
            <div className="category-box">
                <div className="category-bgimg" style ={{
                    backgroundImage: `url(${imageurl})`
                }}></div>
                <div className="category-box-container">
                    <a id="hover-effect" href ={`${title}`}>{title}</a>
                 
                </div>
            </div>
        
        ))}
        </div>
        </div>
    
    )
}

export default Category