import dynamic from "next/dynamic";
import Link from "next/link";
import { Nav, Tab } from "react-bootstrap";
import Slider from "react-slick";
import ClientLogoSlider from "../src/components/ClientLogoSlider";
import { HomeSlider1 } from "../src/components/HomeSlider";
import CustomerReviews from "../src/components/slider/CustomerReviews";
import PhotoGallery from "../src/components/slider/PhotoGallery";
import Layout from "../src/layout/Layout";
import { productActive } from "../src/sliderProps";
const MunfimCountdown = dynamic(
  () => import("../src/components/MunfimCountdown"),
  {
    ssr: false,
  }
);

// import { GetProductDetails } from '../src/components/services';

// console.log(GetProductDetails.getAllProductList());

// const apiUrl = GetProductDetails.getAllProductList();

// export const getStaticProps = async () => {
//   const res = await fetch(apiUrl);
//   const data = await res.json();
//   console.log(data);

//   return {
//     props: {
//       data,
//     },
//   };
// };

const Index = () => {
  return (
    
    <Layout header>
      {/*End Hidden Sidebar */}
      {/* Slider Section Start */}
      <section className="slider-section bg-lighter">
        <div className="main-slider-active">
          <HomeSlider1 />
        </div>
        <img
          className="bg-leaf"
          src="assets/images/slider/slider-bg-leaf.png"
          alt="Shape"
        />
        <img
          className="bg-shape"
          src="assets/images/slider/slider-bg-shape.png"
          alt="Shape"
        />
        
      </section>
      {/* Slider Section End */}
      {/* Category Section Start */}
      <section className="category-section pt-130 rpt-100">
        <div className="container">
          <div className="row align-items-end pb-35">
            <div className="col-lg-7 wow fadeInUp delay-0-2s">
              <div className="section-title mb-20">
                <span className="sub-title mb-20">
                  {/* Popular Foods and Vegetables */}
                  Popular Drugs & Medications
                </span>
                <h2>Quality Drugs &amp; Medications</h2>
              </div>
            </div>
            <div className="col-lg-5 wow fadeInUp delay-0-4s">
              <div className="text mb-20">
                <p>
                The distribution network of AroMedBay covers all of worldwide We can transport your products securely and on schedule to your customers thanks to our logistical knowledge. With our distribution services, we take a Furious approach to make sure our company runs more smoothly and your consumers get their products when they need them.
                </p>
              </div>
            </div>
          </div>
          <div className="category-wrap">
            <div className="category-item wow fadeInUp delay-0-3s">
              <div className="icon">
                <img src="assets/images/category/icon1.png" alt="Icon" />
              </div>
              <h5>
                <Link href="/services">Clinical Practice</Link>
              </h5>
              {/* <img src="assets/images/category/arrow.png" alt="Arrow" /> */}
            </div>
            <div className="category-item wow fadeInUp delay-0-4s">
              <div className="icon">
                <img src="assets/images/category/icon2.png" alt="Icon" />
              </div>
              <h5>
                <Link href="/services">Biomedical research</Link>
              </h5>
              {/* <img src="assets/images/category/arrow.png" alt="Arrow" /> */}
            </div>
            <div className="category-item wow fadeInUp delay-0-5s">
              <div className="icon">
                <img src="assets/images/category/icon3.png" alt="Icon" />
              </div>
              <h5>
                <Link href="/services">Medications</Link>
              </h5>
              {/* <img src="assets/images/category/arrow.png" alt="Arrow" /> */}
            </div>
            <div className="category-item wow fadeInUp delay-0-6s">
              <div className="icon">
                <img src="assets/images/category/icon4.png" alt="Icon" />
              </div>
              <h5>
                <Link href="/services">Surgery</Link>
              </h5>
              {/* <img src="assets/images/category/arrow.png" alt="Arrow" /> */}
            </div>
            <div className="category-item wow fadeInUp delay-0-7s">
              <div className="icon">
                <img src="assets/images/category/icon5.png" alt="Icon" />
              </div>
              <h5>
                <Link href="/services">Medical devices</Link>
              </h5>
              {/* <img src="assets/images/category/arrow.png" alt="Arrow" /> */}
            </div>
          </div>
        </div>
      </section>
      {/* Category Section End */}
      {/* About Section Start */}
      <section className="about-section pt-85 rpt-55 pb-130 rpb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-images wow fadeInLeft delay-0-2s">
                <div className="row align-items-center">
                  <div className="col-6">
                    <img src="assets/images/about/about1.jpg" alt="About" />
                  </div>
                  <div className="col-6">
                    <img src="assets/images/about/about2.jpg" alt="About" />
                    <img src="assets/images/about/about3.jpg" alt="About" />
                  </div>
                </div>
                {/* <div className="offer">
                  <img src="assets/images/shapes/organic.png" alt="Offer" />
                </div> */}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-content rpt-65 wow fadeInRight delay-0-2s">
                <div className="section-title mb-35">
                  <span className="sub-title mb-20">About Company</span>
                  <h2>Antibacterial Mask &amp; Sanitizer</h2>
                </div>
                <Tab.Container defaultActiveKey={"mission"}>
                  <Nav className="nav jusctify-content-between">
                    <li>
                      <Nav.Link
                        eventKey="mission"
                        className="nav-link"
                        data-toggle="tab"
                        href="#mission"
                      >
                        <i className="flaticon-spa" />
                        <h4>
                        Mission
                          {/* <br />
                          &amp; Foods */}
                        </h4>
                      </Nav.Link>
                    </li>
                    <li>
                      <Nav.Link
                        eventKey="expert_team"
                        className="nav-link"
                        data-toggle="tab"
                        href="#expert_team"
                      >
                        <i className="flaticon-spa" />
                        <h4>
                        Expert Team
                          {/* <br />
                          &amp; Fruits */}
                        </h4>
                      </Nav.Link>
                    </li>
                  </Nav>
                  <Tab.Content className="tab-content pt-25">
                    <Tab.Pane className="tab-pane fade" eventKey="mission">
                      <p>
                      The mission of the AroMedBay is to provide accurate, up-to-date information on medicines and healthcare to help individuals make informed decisions about their health.
                      </p>
                      {/* <div className="author-wrap">
                        <img
                          src="assets/images/about/author.jpg"
                          alt="Authro"
                        />
                        <div className="title">
                          <h4>Michael D. Foreman</h4>
                          <span>CEO &amp; Founder</span>
                        </div>
                        <img
                          src="assets/images/about/signature.png"
                          alt="Signature"
                        />
                      </div> */}
                    </Tab.Pane>
                    <Tab.Pane className="tab-pane fade" eventKey="expert_team">
                      <p>
                      The AroMedBay is managed by a team of healthcare professionals, including licensed pharmacists and medical doctors, who are dedicated to providing accurate and reliable information.
                      </p>
                      {/* <div className="author-wrap">
                        <img
                          src="assets/images/about/author.jpg"
                          alt="Authro"
                        />
                        <div className="title">
                          <h4>Russell J. Knoll</h4>
                          <span>CEO &amp; Founder</span>
                        </div>
                        <img
                          src="assets/images/about/signature.png"
                          alt="Signature"
                        />
                      </div> */}
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Section End */}
      {/* About Section 2 custom Start */}
      <section className="offer-banners-area">
      
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-4 col-md-6">
              <div className="offer-banner-item color-two wow fadeInUp delay-0-2s">
                <div className="content">
                        <style jsx>{`
                .content {
                  max-width: 100%;
                }
                
              `}</style>
                  <span className="sub-title">Mission</span>
                  <h4>The mission of AroMedBay is to provide a platform for buying and selling pharmaceutical products in a safe, reliable, and cost-effective manner.</h4>
                  {/* <p>Best Medicine in your city</p> */}
                  {/* <Link href="/shop-grid">
                    <a className="theme-btn style-two">
                      Shop Now <i className="fas fa-angle-double-right" />
                    </a>
                  </Link> */}
                </div>
                {/* <div className="image">
                  <img
                    src="assets/images/offers/offer-banner1.png"
                    alt="Offer Banner"
                  />
                </div> */}
                {/* <img
                  className="offer-bg"
                  src="assets/images/offers/offer-baner-bg1.png"
                  alt="Offer BG"
                /> */}
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="offer-banner-item wow fadeInUp delay-0-4s">
                <div className="content">
                <style jsx>{`
                .content {
                  max-width: 100%;
                }
                
              `}</style>
                  <span className="sub-title">Wide Selection</span>
                  <h4> AroMedBay offers a wide selection of prescription and over-the-counter medications, covering a range of health conditions and needs.</h4>
                  {/* <p>Best For Your Family</p> */}
                  {/* <Link href="/shop-grid">
                    <a className="theme-btn style-two">
                      Shop Now <i className="fas fa-angle-double-right" />
                    </a>
                  </Link> */}
                </div>
                {/* <div className="image">
                  <img
                    src="assets/images/offers/offer-banner2.png"
                    alt="Offer Banner"
                  />
                </div> */}
                {/* <img
                  className="offer-bg"
                  src="assets/images/offers/offer-baner-bg2.png"
                  alt="Offer BG"
                /> */}
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="offer-banner-item wow fadeInUp delay-0-6s">
                <div className="content">
                <style jsx>{`
                .content {
                  max-width: 100%;
                }
                
              `}</style>
                  <span className="sub-title">Verified Suppliers</span>
                  <h4>AroMedBay works with verified suppliers to ensure the quality and authenticity of the products offered.</h4>
                  {/* <p>Best For Your Family</p> */}
                  {/* <Link href="/shop-grid">
                    <a className="theme-btn style-two">
                      Shop Now <i className="fas fa-angle-double-right" />
                    </a>
                  </Link> */}
                </div>
                {/* <div className="image">
                  <img
                    src="assets/images/offers/offer-banner3.png"
                    alt="Offer Banner"
                  />
                </div> */}
                {/* <img
                  className="offer-bg"
                  src="assets/images/offers/offer-baner-bg3.png"
                  alt="Offer BG"
                /> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Section 2 custom End */}
      {/* About Section 3 custom Start */}
      <section className="offer-banners-area">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-4 col-md-6">
              <div className="offer-banner-item color-two wow fadeInUp delay-0-2s">
                <div className="content">
                <style jsx>{`
                .content {
                  max-width: 100%;
                }
                
              `}</style>
                  <span className="sub-title">Competitive Pricing</span>
                  <h4>We offers competitive pricing, helping buyers save money on their healthcare expenses.</h4>
                  {/* <p>Best Medicine in your city</p> */}
                  {/* <Link href="/shop-grid">
                    <a className="theme-btn style-two">
                      Shop Now <i className="fas fa-angle-double-right" />
                    </a>
                  </Link> */}
                </div>
                {/* <div className="image">
                  <img
                    src="assets/images/offers/offer-banner1.png"
                    alt="Offer Banner"
                  />
                </div> */}
                {/* <img
                  className="offer-bg"
                  src="assets/images/offers/offer-baner-bg1.png"
                  alt="Offer BG"
                /> */}
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="offer-banner-item wow fadeInUp delay-0-4s">
                <div className="content">
                <style jsx>{`
                .content {
                  max-width: 100%;
                }
                
              `}</style>
                  <span className="sub-title">Convenient Ordering</span>
                  <h4> AroMedBay provides an easy-to-use platform for ordering medications, with fast delivery options.</h4>
                  {/* <p>Best For Your Family</p> */}
                  {/* <Link href="/shop-grid">
                    <a className="theme-btn style-two">
                      Shop Now <i className="fas fa-angle-double-right" />
                    </a>
                  </Link> */}
                </div>
                {/* <div className="image">
                  <img
                    src="assets/images/offers/offer-banner2.png"
                    alt="Offer Banner"
                  />
                </div> */}
                {/* <img
                  className="offer-bg"
                  src="assets/images/offers/offer-baner-bg2.png"
                  alt="Offer BG"
                /> */}
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="offer-banner-item wow fadeInUp delay-0-6s">
                <div className="content">
                <style jsx>{`
                .content {
                  max-width: 100%;
                }
                
              `}</style>
                  <span className="sub-title"> Customer Support</span>
                  <h4>AroMedBay offers excellent customer support, helping buyers with any questions or concerns they may have about the products or ordering process.</h4>
                  {/* <p>Best For Your Family</p> */}
                  {/* <Link href="/shop-grid">
                    <a className="theme-btn style-two">
                      Shop Now <i className="fas fa-angle-double-right" />
                    </a>
                  </Link> */}
                </div>
                {/* <div className="image">
                  <img
                    src="assets/images/offers/offer-banner3.png"
                    alt="Offer Banner"
                  />
                </div> */}
                {/* <img
                  className="offer-bg"
                  src="assets/images/offers/offer-baner-bg3.png"
                  alt="Offer BG"
                /> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Section 3 End */}
      {/* About Section 4 Start */}
      <section className="offer-banners-area">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-4 col-md-6">
              <div className="offer-banner-item color-two wow fadeInUp delay-0-2s">
                <div className="content">
                <style jsx>{`
                .content {
                  max-width: 100%;
                }
                
              `}</style>
                  <span className="sub-title">Transparency</span>
                  <h4>We are committed to transparency, providing detailed information about the products offered, including dosage, side effects, and interactions.</h4>
                  {/* <p>Best Medicine in your city</p> */}
                  {/* <Link href="/shop-grid">
                    <a className="theme-btn style-two">
                      Shop Now <i className="fas fa-angle-double-right" />
                    </a>
                  </Link> */}
                </div>
                {/* <div className="image">
                  <img
                    src="assets/images/offers/offer-banner1.png"
                    alt="Offer Banner"
                  />
                </div> */}
                {/* <img
                  className="offer-bg"
                  src="assets/images/offers/offer-baner-bg1.png"
                  alt="Offer BG"
                /> */}
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="offer-banner-item wow fadeInUp delay-0-4s">
                <div className="content">
                <style jsx>{`
                .content {
                  max-width: 100%;
                }
                
              `}</style>
                  <span className="sub-title">Compliance With Regulations</span>
                  <h4>AroMedBay complies with all relevant regulations, ensuring that buyers can purchase medications with confidence and peace of mind.</h4>
                  {/* <p>Best For Your Family</p> */}
                  {/* <Link href="/shop-grid">
                    <a className="theme-btn style-two">
                      Shop Now <i className="fas fa-angle-double-right" />
                    </a>
                  </Link> */}
                </div>
                {/* <div className="image">
                  <img
                    src="assets/images/offers/offer-banner2.png"
                    alt="Offer Banner"
                  />
                </div> */}
                {/* <img
                  className="offer-bg"
                  src="assets/images/offers/offer-baner-bg2.png"
                  alt="Offer BG"
                /> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Section 4 End */}
      {/* Offer Banners Start */}
      <section className="offer-banners-area">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-4 col-md-6">
              <div className="offer-banner-item color-two wow fadeInUp delay-0-2s">
                <div className="content">
                  <span className="sub-title">35% Off Medicine</span>
                  <h4>Exporters Of Special Medicine</h4>
                  <p>Best Medicine in your city</p>
                  <Link href="/shop-grid">
                    <a className="theme-btn style-two">
                      Shop Now <i className="fas fa-angle-double-right" />
                    </a>
                  </Link>
                </div>
                <div className="image">
                  <img
                    src="assets/images/offers/offer-banner1.png"
                    alt="Offer Banner"
                  />
                </div>
                <img
                  className="offer-bg"
                  src="assets/images/offers/offer-baner-bg1.png"
                  alt="Offer BG"
                />
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="offer-banner-item wow fadeInUp delay-0-4s">
                <div className="content">
                  <span className="sub-title">35% Off Kits</span>
                  <h4>Pregnancy Test Kit</h4>
                  <p>Best For Your Family</p>
                  <Link href="/shop-grid">
                    <a className="theme-btn style-two">
                      Shop Now <i className="fas fa-angle-double-right" />
                    </a>
                  </Link>
                </div>
                <div className="image">
                  <img
                    src="assets/images/offers/offer-banner2.png"
                    alt="Offer Banner"
                  />
                </div>
                <img
                  className="offer-bg"
                  src="assets/images/offers/offer-baner-bg2.png"
                  alt="Offer BG"
                />
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="offer-banner-item wow fadeInUp delay-0-6s">
                <div className="content">
                  <span className="sub-title">35% Off Capsules</span>
                  <h4>Titanic-K2 Capsules</h4>
                  <p>Best For Your Family</p>
                  <Link href="/shop-grid">
                    <a className="theme-btn style-two">
                      Shop Now <i className="fas fa-angle-double-right" />
                    </a>
                  </Link>
                </div>
                <div className="image">
                  <img
                    src="assets/images/offers/offer-banner3.png"
                    alt="Offer Banner"
                  />
                </div>
                <img
                  className="offer-bg"
                  src="assets/images/offers/offer-baner-bg3.png"
                  alt="Offer BG"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Offer Banners End */}
      {/* Product Section Start */}
      <section className="product-section pt-100 rpt-70 pb-130 rpb-100">
        <div className="container-fluid">
          <div className="section-title text-center mb-60">
            <span className="sub-title mb-20">
              Popular Medicine and Kit
            </span>
            <h2>Quality Product &amp; Medicine Kits</h2>
          </div>
          <Slider {...productActive} className="product-active">
            <div className="product-item wow fadeInUp delay-0-2s">
              <span className="offer">53 Off</span>
              <div className="image">
                <img src="assets/images/products/product1.png" alt="Product" />
              </div>
              <div className="content">
                <div className="ratting">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </div>
                <h5>
                  <Link href="/product-details">Acetaminophen</Link>
                </h5>
                {/* <span className="price">
                  <del>25</del>
                  <span>18</span>
                </span> */}
              </div>
            </div>
            <div className="product-item wow fadeInUp delay-0-3s">
              <div className="image">
                <img src="assets/images/products/product2.png" alt="Product" />
              </div>
              <div className="content">
                <div className="ratting">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </div>
                <h5>
                  <Link href="/product-details">Dupixent</Link>
                </h5>
                {/* <span className="price">
                  <span>49.58</span>
                </span> */}
              </div>
            </div>
            <div className="product-item wow fadeInUp delay-0-4s">
              <span className="offer bg-red">sale</span>
              <div className="image">
                <img src="assets/images/products/product3.png" alt="Product" />
              </div>
              <div className="content">
                <div className="ratting">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </div>
                <h5>
                  <Link href="/product-details">Lyrica</Link>
                </h5>
                {/* <span className="price">
                  <del>25</del>
                  <span>18</span>
                </span> */}
              </div>
            </div>
            <div className="product-item wow fadeInUp delay-0-5s">
              <span className="offer">20 Off</span>
              <div className="image">
                <img src="assets/images/products/product4.png" alt="Product" />
              </div>
              <div className="content">
                <div className="ratting">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </div>
                <h5>
                  <Link href="/product-details">Xanax</Link>
                </h5>
                {/* <span className="price">
                  <del>55</del>
                  <span>36</span>
                </span> */}
              </div>
            </div>
            <div className="product-item wow fadeInUp delay-0-6s">
              <div className="image">
                <img src="assets/images/products/product5.png" alt="Product" />
              </div>
              <div className="content">
                <div className="ratting">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </div>
                <h5>
                  <Link href="/product-details">Fresh Gooseberry</Link>
                </h5>
                <span className="price">
                  <span>205</span>
                </span>
              </div>
            </div>
            <div className="product-item wow fadeInUp delay-0-7s">
              <span className="offer">53 Off</span>
              <div className="image">
                <img src="assets/images/products/product6.png" alt="Product" />
              </div>
              <div className="content">
                <div className="ratting">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </div>
                <h5>
                  <Link href="/product-details">Fresh Croissants</Link>
                </h5>
                <span className="price">
                  <del>25</del>
                  <span>18</span>
                </span>
              </div>
            </div>
            <div className="product-item wow fadeInUp delay-0-8s">
              <span className="offer">25 Off</span>
              <div className="image">
                <img src="assets/images/products/product7.png" alt="Product" />
              </div>
              <div className="content">
                <div className="ratting">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </div>
                <h5>
                  <Link href="/product-details">Chiken Egg’s</Link>
                </h5>
                <span className="price">
                  <del>25</del>
                  <span>18</span>
                </span>
              </div>
            </div>
          </Slider>
        </div>
      </section>
      {/* Product Section End */}
      {/* Video Area Start */}
      {/* <div className="video-area">
        <div className="container">
          <div
            className="video-inner wow fadeInUp delay-0-2s"
            style={{ backgroundImage: "url(assets/images/video/video-bg.jpg)" }}
          >
            <i className="flaticon-leaf-1" />
            <span className="video-text">Watch Videos</span>
            <a
              href="https://www.youtube.com/watch?v=9Y7ma241N8k"
              className="mfp-iframe video-play"
            >
              <i className="fas fa-play" />
            </a>
          </div>
        </div>
      </div> */}
      {/* Video Area End */}
      {/* Special Offer Start */}
      {/* <section className="special-offer bg-lighter pt-250 pb-80">
        <div className="special-offer-content text-center py-130 rpy-100 wow fadeInUp delay-0-2s">
          <div className="section-title mb-30">
            <span className="sub-title mb-20">35% Off for Fruits</span>
            <h2>Special Deal Of This Week</h2>
          </div>
          <p>
            On the other hand we denounce with righteous indignation and dislike
            men who are beguiled and demoralized by the charms
          </p>
          <MunfimCountdown />
          <div className="count-down-btns mt-10">
            <Link href="/shop-grid">
              <a className="theme-btn">
                Shop Now <i className="fas fa-angle-double-right" />
              </a>
            </Link>
            <Link href="/about">
              <a className="theme-btn style-two">
                use code <i className="fas fa-angle-double-right" />
              </a>
            </Link>
          </div>
        </div>
        <img
          className="offer-bg"
          src="assets/images/offers/special-offer-bg.png"
          alt="Offer BG"
        />
        <img
          className="munakoiso"
          src="assets/images/shapes/munakoiso.png"
          alt="Munakoiso"
        />
        <img
          className="litchi"
          src="assets/images/shapes/litchi.png"
          alt="Litchi"
        />
        <img
          className="special-offer-left"
          src="assets/images/offers/offer-left.png"
          alt="Offer"
        />
        <img
          className="special-offer-right"
          src="assets/images/offers/offer-right.png"
          alt="Offer"
        />
      </section> */}
      {/* Special Offer End */}
      {/* Call To Action Area Start */}
      <section className="cta-area">
        <div className="container">
          <div
            className="cta-inner overlay text-white wow fadeInUp delay-0-2s"
            style={{
              backgroundImage: "url(assets/images/background/cta-bg.jpg)",
            }}
          >
            <div className="row align-items-center">
              <div className="col-lg-8">
                <div className="section-title mt-20 mb-15">
                  <span className="sub-title mb-15">Need Any Supports</span>
                  <h3>Get Our Quality Products</h3>
                </div>
              </div>
              <div className="col-lg-4 text-lg-right">
                <Link href="/contact">
                  <a className="theme-btn btn-white my-15">
                    Get In Touch <i className="fas fa-angle-double-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Call To Action Area End */}
      {/* Gallery Area Start */}
      <section className="gallery-area pt-130 rpt-100">
        {/* <PhotoGallery /> */}
      </section>
      {/* Gallery Area End */}
      {/* Feedback Section Start */}
      <section className="feedback-section pt-50 rpt-20">
        <div className="container">
          <div className="row large-gap">
            <div className="col-lg-6">
              <CustomerReviews />
            </div>
            <div className="col-lg-6">
              <div className="feedback-images wow fadeInRight delay-0-2s">
                <img
                  className="first-image"
                  src="assets/images/reviews/feedback-right.jpg"
                  alt="Feedback"
                />
                <img
                  className="last-image"
                  src="assets/images/reviews/feedback-right.png"
                  alt="Feedback"
                />
                <img
                  className="bg-image"
                  src="assets/images/shapes/feedback-bg.png"
                  alt="Feedback"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Feedback Section End */}
      {/* News Section Start */}
      {/* <section className="news-section pt-130 rpt-100 pb-70 rpb-40">
        <div className="container">
          <div className="section-title text-center mb-60">
            <span className="sub-title mb-20">Read Article Tips</span>
            <h2>Latest News &amp; Blog</h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-4 col-md-6">
              <div className="news-item wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="assets/images/news/news1.jpg" alt="News" />
                  <span className="date">
                    <b>25</b> July
                  </span>
                </div>
                <div className="content">
                  <span className="sub-title">Vegetable</span>
                  <h4>
                    <Link href="/blog-details">
                      Unicode UTF8 Character Sets They Sltimate Guide Systems
                    </Link>
                  </h4>
                  <Link href="/blog-details">
                    <a className="read-more">
                      Read More <i className="fas fa-angle-double-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="news-item wow fadeInUp delay-0-4s">
                <div className="image">
                  <img src="assets/images/news/news2.jpg" alt="News" />
                  <span className="date">
                    <b>25</b> July
                  </span>
                </div>
                <div className="content">
                  <span className="sub-title">Farming</span>
                  <h4>
                    <Link href="/blog-details">
                      Quality Foods Requirments For Every Human Body’s
                    </Link>
                  </h4>
                  <Link href="/blog-details">
                    <a className="read-more">
                      Read More <i className="fas fa-angle-double-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="news-item wow fadeInUp delay-0-6s">
                <div className="image">
                  <img src="assets/images/news/news3.jpg" alt="News" />
                  <span className="date">
                    <b>25</b> July
                  </span>
                </div>
                <div className="content">
                  <span className="sub-title">Organic Fruits</span>
                  <h4>
                    <Link href="/blog-details">
                      Choose Awesome Vegetables For Your Daily Life Routine
                    </Link>
                  </h4>
                  <Link href="/blog-details">
                    <a className="read-more">
                      Read More <i className="fas fa-angle-double-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="news-shapes">
          <img
            className="onion"
            src="assets/images/shapes/onion.png"
            alt="Onion"
          />
          <img
            className="two-leaf"
            src="assets/images/slider/two-lear.png"
            alt="Leaf"
          />
          <img
            className="half-leaf"
            src="assets/images/slider/half-leaf.png"
            alt="Leaf"
          />
          <img
            className="leaf-two"
            src="assets/images/shapes/leaf-three.png"
            alt="Leaf"
          />
          <img
            className="leaf-three"
            src="assets/images/shapes/leaf-four.png"
            alt="Leaf"
          />
        </div>
      </section> */}
      {/* News Section End */}
      {/* Client Logo Section Start */}
      <div className="client-logo-section text-center bg-light-green py-60">
        <div className="container">
          <ClientLogoSlider />
        </div>
        {/* <div className="client-logo-shapes">
          <img
            className="shape-one"
            src="assets/images/shapes/cl-shape1.png"
            alt="Shape"
          />
          <img
            className="shape-two"
            src="assets/images/shapes/cl-shape2.png"
            alt="Shape"
          />
          <img
            className="shape-three"
            src="assets/images/shapes/cl-shape3.png"
            alt="Shape"
          />
          <img
            className="shape-four"
            src="assets/images/shapes/cl-shape4.png"
            alt="Shape"
          />
          <img
            className="shape-five"
            src="assets/images/shapes/cl-shape5.png"
            alt="Shape"
          />
          <img
            className="shape-six"
            src="assets/images/shapes/cl-shape6.png"
            alt="Shape"
          />
        </div> */}
      </div>
    </Layout>
  );
};
export default Index;
