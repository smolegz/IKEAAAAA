import './frontpage.styles.scss'



const Frontpage = () => {

    return (
    <div className= "frontpage" style = {{
      backgroundImage: `url(https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/posters-in-cozy-apartment-interior-royalty-free-image-943910360-1534189931.jpg)`}}>
 
    <div className='frontpage-title'>
    <h2>Your One-stop Funiture Retail - 'IKEAA'</h2>
    
    </div>
    <div className="frontpage-container">
    
      <div className= "background-image" style ={{backgroundImage: `url(https://labellavie.com/wp-content/uploads/2021/03/LandscapeXLDiningTableJL19-1-e1614975844956.jpg)`}}></div>
      <a className="frontpage-button" href ='/categories' style = {{position: 'absolute'}}>Click Here to Shop With Us</a>
    </div>
  </div>
    )
}

export default Frontpage