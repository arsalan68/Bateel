import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'

const Home = () => {
    return (
        <div>
            <div  id="carouselExampleAutoplaying" class="carousel slide  carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://bateel.com/media/mageplaza/bannerslider/banner/image/b/a/banner-1_42.jpg" className="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block text-dark mb-5">
                            <h2>Eid Delights</h2>
                            <p>A TASTE OF TRADITION AND A</p>
                            <p>GIFT OF SPLENDOUR</p>
                            <button type="button" class="btn btn-outline-dark">SHOP COLLECTION</button>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://bateel.com/media/mageplaza/bannerslider/banner/image/b/a/banner-2_44.jpg" className="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block text-dark mb-5">
                            <h2>Meaningful Moments</h2>
                            <p>SAVOUR BATEEL’S ORGANIC DATES FOR AN</p>
                            <p>UNFORGETTABLE GIFT EXPERIENCE</p>
                            <button type="button" class="btn btn-outline-dark">SHOP COLLECTION</button>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://bateel.com/media/mageplaza/bannerslider/banner/image/b/a/banner-3_15.jpg" className="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block text-dark mb-5">
                            <h2>Cultivating Connections</h2>
                            <p>INSPIRE WITH A MEANINGFUL</p>
                            <p>GIFT THIS EID</p>
                            <button type="button" class="btn btn-outline-dark">SHOP COLLECTION</button>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                </button>
            </div>


            <div className='w-auto d-flex mt-5 mx-5 gap-5'>
                <div style={{ width: '36rem' }}>
                    <img src="https://bateel.com/media/wysiwyg/Hero-Banner-11.jpg" className="card-img-top" alt="..." />
                    <div className="card-body text-center">
                        <h2>Crafting Joy this Eid</h2>
                        <p>Discover memorable gifts to celebrate</p>
                        <p> the special occasion</p>
                        <Link to="#" className='text-dark'>Shop Collection</Link>
                    </div>
                </div>
                <div style={{ width: '36rem' }}>
                    <img src="https://bateel.com/media/wysiwyg/Hero-Banner-23.jpg" className="card-img-top" alt="..." />
                    <div className="card-body text-center">
                        <h3>Timeless Treasures</h3>
                        <p>Lavish Eid gift experiences for the true</p>
                        <p> date connoisseur</p>
                        <Link to="#" className='text-dark'>Shop Collection</Link>
                    </div>
                </div>
            </div>

            <hr className='w-auto mx-5 my-4 ' />

            <h4 className='mx-5'>Featured</h4>
            <div className='w-auto d-flex mt-3 mx-5 gap-4'>
                <div style={{ width: '24rem' }}>
                    <img src="https://bateel.com/media/catalog/product/cache/ca15cb01acc6da5b48940382a5be6024/l/e/leather_collection_argyle_-_rectangle_creative.jpg" className="card-img-top" alt="..." />
                    <div className="card-body text-center">
                        <Link className='text-dark text-decoration-none' to="#"><h6>Leather Gift Set - Stars</h6></Link>
                        <p>From AED555.00</p>
                    </div>
                </div>
                <div style={{ width: '24rem' }}>
                    <img src="https://bateel.com/media/catalog/product/cache/ca15cb01acc6da5b48940382a5be6024/g/o/gold_palm_-_nuts_gift_set_-_creative.jpg" className="card-img-top" alt="..." />
                    <div className="card-body text-center">
                        <Link className='text-dark text-decoration-none' to="#"><h6>Gold Palm Nuts Gift Set</h6></Link>
                        <p>AED440.00</p>
                    </div>
                </div>
                <div style={{ width: '24rem' }}>
                    <img src="https://bateel.com/media/catalog/product/cache/ca15cb01acc6da5b48940382a5be6024/b/l/black_sapphire_-_creative_-_filled_dates.jpg" className="card-img-top" alt="..." />
                    <div className="card-body text-center">
                        <Link className='text-dark text-decoration-none' to="#"><h6>Black Sapphire Gift Set</h6></Link>
                        <p>From AED80.00</p>
                    </div>
                </div>
            </div>

            <div className='d-flex justify-content-between w-auto mx-5 mt-3'>
                <h4>Best-Sellers</h4>
                <Link to="#" className='text-dark'>Show All Products</Link>
            </div>

            <div className='w-auto d-flex mt-3 mx-5 gap-4'>
                <div style={{ width: '24rem' }}>
                    <img src="https://bateel.com/media/catalog/product/cache/ca15cb01acc6da5b48940382a5be6024/c/r/crescent_-_family_-_assorted_dates_-_creative_2.jpg" className="card-img-top" alt="..." />
                    <div className="card-body text-center">
                        <Link className='text-dark text-decoration-none' to="#"><h6>Crescent Gift Set</h6></Link>
                        <p>From AED190.00</p>
                    </div>
                </div>
                <div style={{ width: '24rem' }}>
                    <img src="https://bateel.com/media/catalog/product/cache/ca15cb01acc6da5b48940382a5be6024/n/a/najma_dates_family-sq.jpg" className="card-img-top" alt="..." />
                    <div className="card-body text-center">
                        <Link className='text-dark text-decoration-none' to="#"><h6>Najma Gift Set</h6></Link>
                        <p>From AED210.00</p>
                    </div>
                </div>
                <div style={{ width: '24rem' }}>
                    <img src="https://bateel.com/media/catalog/product/cache/ca15cb01acc6da5b48940382a5be6024/d/i/diwali_collection_2023_-_zinnia_collection_square_-_creative.jpg" className="card-img-top" alt="..." />
                    <div className="card-body text-center">
                        <Link className='text-dark text-decoration-none' to="#"><h6>Zinnia Gift Set</h6></Link>
                        <p>From AED220.00</p>
                    </div>
                </div>
            </div>



            <div className='d-flex justify-content-between w-auto mx-5 mt-3'>
                <h4>Luxury Gifts</h4>
                <Link to="#" className='text-dark'>Show All Products</Link>
            </div>

            <div className='w-auto d-flex mt-3 mx-5 gap-4'>
                <div style={{ width: '24rem' }}>
                    <img src="https://bateel.com/media/catalog/product/cache/ca15cb01acc6da5b48940382a5be6024/n/a/nakhla_-_family_-_assorted_dates_-_creative.jpg" className="card-img-top" alt="..." />
                    <div className="card-body text-center">
                        <Link className='text-dark text-decoration-none' to="#"><h6>Nakhla Gift Set</h6></Link>
                        <p>From AED1035.00</p>
                    </div>
                </div>
                <div style={{ width: '24rem' }}>
                    <img src="https://bateel.com/media/catalog/product/cache/ca15cb01acc6da5b48940382a5be6024/z/a/zareen_dates_family-sq.jpg" className="card-img-top" alt="..." />
                    <div className="card-body text-center">
                        <Link className='text-dark text-decoration-none' to="#"><h6>Zareen Gift Set</h6></Link>
                        <p>From AED1035.00</p>
                    </div>
                </div>
                <div style={{ width: '24rem' }}>
                    <img src="https://bateel.com/media/catalog/product/cache/ca15cb01acc6da5b48940382a5be6024/m/o/mosaic_-_family_-_creative.jpg" className="card-img-top" alt="..." />
                    <div className="card-body text-center">
                        <Link className='text-dark text-decoration-none' to="#"><h6>Mosaic Gift Set</h6></Link>
                        <p>From AED1035.00</p>
                    </div>
                </div>
            </div>

            <hr className='w-auto mx-5 my-4 ' />


            <div className='w-auto d-flex mt-5 align-items-center mx-5 my-5' style={{gap:'100px'}}>
                {/* <video height="400px" width="600px" controls autoPlay loop>
            <source src="" typ="mp4" /></video> */}
                <iframe width="560" height="315" src="https://www.youtube.com/embed/lsxAGI3Sbvo?si=ziJEma83dzr0PjXq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <div style={{display:"flex", flexDirection:"column", gap:"10px"}}>
                    <h6>FEATURED</h6>
                    <h3>The Making Of <br /> A Bateel Box</h3>
                    <p style={{width:"300px"}}>Discover the creative inspiration and artisan techniques behind the “perfect treasure chests”.</p>
                </div>
            </div>

           <div className='py-5'>
             <img style={{height:'500px'}} src="https://bateel.com/media/wysiwyg/home-last-banner-new.jpg" alt="" />
           </div>

           <div className='text-center mt-5'>
           <p>Explore exquisite packaging and experience innovative <br />
           confectionaries waiting to be discovered at the Bateel Boutique</p>

          <button classname="py-4" type="button" className="btn btn-outline-dark">FIND A BOUTIQUE</button>

           </div>

           <Footer/>
        </div>
    )
}

export default Home
