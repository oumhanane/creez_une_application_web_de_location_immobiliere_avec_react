import "./Banner.css";

function Banner() {
  return (
    <div className='banner'>
      <img className="apartment_page_banner" src="bannerHome.png" alt="" />
      {/* <img className="banner_image" src="bannerHome.png" alt="banner" />  */}
      <h1 className="banner_text">Chez vous, partout et ailleurs</h1>
    </div>
  )
}

export default Banner