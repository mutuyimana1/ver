import Logo from "../images/images/logo.png"
import HomeImage from "../images/images/IMG-20221114-WA0011.jpg"
const HomePage=()=>{
    return(
        <>
     <div>
  <meta charSet="utf-8" />
  <meta content="width=device-width, initial-scale=1.0" name="viewport" />
  <title>Vie et Environnement Rwanda</title>
  <meta content name="description" />
  <meta content name="keywords" />
  {/* Favicons */}
  <link href="assets/img/favicon.png" rel="icon" />
  <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon" />
  {/* Google Fonts */}
  <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Jost:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet" />
  {/* Vendor CSS Files */}
  <link href="assets/vendor/aos/aos.css" rel="stylesheet" />
  <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
  <link href="assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet" />
  <link href="assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet" />
  <link href="assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet" />
  <link href="assets/vendor/remixicon/remixicon.css" rel="stylesheet" />
  <link href="assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet" />
  {/* Template Main CSS File */}
  <link href="assets/css/style.css" rel="stylesheet" />
  {/* =======================================================
  * Template Name: Arsha
  * Updated: Jan 09 2024 with Bootstrap v5.3.2
  * Template URL: https://bootstrapmade.com/arsha-free-bootstrap-html-template-corporate/
  * Author: BootstrapMade.com
  * License: https://bootstrapmade.com/license/
  ======================================================== */}
</div>

  {/* ======= Header ======= */}
<header id="header" className="fixed-top ">
  <div className="container d-flex align-items-center">
    {/* Uncomment below if you prefer to use an image logo */}
    <a href="index.html" class="logo me-auto"><img src={Logo} alt="" class="img-fluid" /></a>
    <nav id="navbar" className="navbar">
      <ul>
        <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
        <li><a className="nav-link scrollto" href="#about">About</a></li>
        <li><a className="nav-link scrollto" href="#services">Contact</a></li>
        <li><a className="nav-link   scrollto" href="#portfolio">Gallery</a></li>
        <li><a className="nav-link scrollto" href="#team">Team</a></li>
        <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
        <li><a className="getstarted scrollto" href="#about">Donate</a></li>
      </ul>
      <i className="bi bi-list mobile-nav-toggle" />
    </nav>{/* .navbar */}
  </div>
</header>{/* End Header */}
<section id="hero" className="d-flex align-items-center">
  <div className="container">
    <div className="row">
      <div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1">
        <h1>Vie et Environnement Rwanda</h1>
        <h2>“Working towards prosperous communities that conserve their environment”..</h2>
        <div className="d-flex justify-content-center justify-content-lg-start">
          <a href="#about" className="btn-get-started scrollto">Get Started</a>
          <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" className="glightbox btn-watch-video"><i className="bi bi-play-circle" /><span>Watch Video</span></a>
        </div>
      </div>
      <div className="col-lg-6 order-1 order-lg-2 hero-img" >
        <img src={HomeImage} className="img-fluid animated" alt />
      </div>
    </div>
  </div>
</section>{/* End Hero */}
<main id="main">
{/* ======= Clients Section ======= */}
<section id="clients" className="clients section-bg">
  <div className="container">
    {/* <div className="row" data-aos="zoom-in"> */}
    <div className="row">
      <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
        <img src="assets/img/clients/client-1.png" className="img-fluid" alt />
      </div>
      <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
        <img src="assets/img/clients/client-2.png" className="img-fluid" alt />
      </div>
      <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
        <img src="assets/img/clients/client-3.png" className="img-fluid" alt />
      </div>
      <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
        <img src="assets/img/clients/client-4.png" className="img-fluid" alt />
      </div>
      <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
        <img src="assets/img/clients/client-5.png" className="img-fluid" alt />
      </div>
      <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
        <img src="assets/img/clients/client-6.png" className="img-fluid" alt />
      </div>
    </div>
  </div>
</section>{/* End Cliens Section */}
{/* ======= About Us Section ======= */}
<section id="about" className="about">
  <div className="container">
  {/* <div className="container" > */}
    <div className="section-title">
      <h2>About Us</h2>
    </div>
    <div className="row content">
      <div className="col-lg-6">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </p>
        <ul>
          <li><i className="ri-check-double-line" /> Ullamco laboris nisi ut aliquip ex ea commodo consequat</li>
          <li><i className="ri-check-double-line" /> Duis aute irure dolor in reprehenderit in voluptate velit</li>
          <li><i className="ri-check-double-line" /> Ullamco laboris nisi ut aliquip ex ea commodo consequat</li>
        </ul>
      </div>
      <div className="col-lg-6 pt-4 pt-lg-0">
        <p>
          Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <a href="#" className="btn-learn-more">Learn More</a>
      </div>
    </div>
  </div>
</section>{/* End About Us Section */}
{/* ======= Why Us Section ======= */}
<section id="why-us" className="why-us section-bg">
  <div className="container-fluid" >
  {/* <div className="container-fluid" > */}
    <div className="row">
      <div className="col-lg-7 d-flex flex-column justify-content-center align-items-stretch  order-2 order-lg-1">
        <div className="content">
          <h3>Eum ipsam laborum deleniti <strong>velit pariatur architecto aut nihil</strong></h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit
          </p>
        </div>
        <div className="accordion-list">
          <ul>
            <li>
              <a data-bs-toggle="collapse" className="collapse" data-bs-target="#accordion-list-1"><span>01</span> Non consectetur a erat nam at lectus urna duis? <i className="bx bx-chevron-down icon-show" /><i className="bx bx-chevron-up icon-close" /></a>
              <div id="accordion-list-1" className="collapse show" data-bs-parent=".accordion-list">
                <p>
                  Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.
                </p>
              </div>
            </li>
            <li>
              <a data-bs-toggle="collapse" data-bs-target="#accordion-list-2" className="collapsed"><span>02</span> Feugiat scelerisque varius morbi enim nunc? <i className="bx bx-chevron-down icon-show" /><i className="bx bx-chevron-up icon-close" /></a>
              <div id="accordion-list-2" className="collapse" data-bs-parent=".accordion-list">
                <p>
                  Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
                </p>
              </div>
            </li>
            <li>
              <a data-bs-toggle="collapse" data-bs-target="#accordion-list-3" className="collapsed"><span>03</span> Dolor sit amet consectetur adipiscing elit? <i className="bx bx-chevron-down icon-show" /><i className="bx bx-chevron-up icon-close" /></a>
              <div id="accordion-list-3" className="collapse" data-bs-parent=".accordion-list">
                <p>
                  Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-lg-5 align-items-stretch order-1 order-lg-2 img" style={{backgroundImage: 'url("assets/img/why-us.png")'}} >&nbsp;</div>
      {/* <div className="col-lg-5 align-items-stretch order-1 order-lg-2 img" style={{backgroundImage: 'url("assets/img/why-us.png")'}} data-aos="zoom-in" data-aos-delay={150}>&nbsp;</div> */}
    </div>
  </div>
</section>{/* End Why Us Section */}
<div>
  {/* ======= Skills Section ======= */}
  <section id="skills" className="skills">
    <div className="container">
    {/* <div className="container" > */}
      <div className="row">
        <div className="col-lg-6 d-flex align-items-center">
        {/* <div className="col-lg-6 d-flex align-items-center" data-aos="fade-right"> */}
          <img src="assets/img/skills.png" className="img-fluid" alt />
        </div>
        <div className="col-lg-6 pt-4 pt-lg-0 content" >
        {/* <div className="col-lg-6 pt-4 pt-lg-0 content" data-aos="fade-left"> */}
          <h3>Voluptatem dignissimos provident quasi corporis voluptates</h3>
          <p className="fst-italic">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua.
          </p>
          <div className="skills-content">
            <div className="progress">
              <span className="skill">HTML <i className="val">100%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} />
              </div>
            </div>
            <div className="progress">
              <span className="skill">CSS <i className="val">90%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} />
              </div>
            </div>
            <div className="progress">
              <span className="skill">JavaScript <i className="val">75%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
              </div>
            </div>
            <div className="progress">
              <span className="skill">Photoshop <i className="val">55%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow={55} aria-valuemin={0} aria-valuemax={100} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>{/* End Skills Section */}
  {/* ======= Services Section ======= */}
  <section id="services" className="services section-bg">
    <div className="container" >
    {/* <div className="container" > */}
      <div className="section-title">
        <h2>Services</h2>
        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
      </div>
      <div className="row">
        <div className="col-xl-3 col-md-6 d-flex align-items-stretch" >
        {/* <div className="col-xl-3 col-md-6 d-flex align-items-stretch" data-aos="zoom-in"> */}
          <div className="icon-box">
            <div className="icon"><i className="bx bxl-dribbble" /></div>
            <h4><a href>Lorem Ipsum</a></h4>
            <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
          </div>
        </div>
        <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" >
        {/* <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" > */}
          <div className="icon-box">
            <div className="icon"><i className="bx bx-file" /></div>
            <h4><a href>Sed ut perspici</a></h4>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
          </div>
        </div>
        <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" >
        {/* <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" > */}
          <div className="icon-box">
            <div className="icon"><i className="bx bx-tachometer" /></div>
            <h4><a href>Magni Dolores</a></h4>
            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
          </div>
        </div>
        <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" >
        {/* <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in"> */}
          <div className="icon-box">
            <div className="icon"><i className="bx bx-layer" /></div>
            <h4><a href>Nemo Enim</a></h4>
            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
          </div>
        </div>
      </div>
    </div>
  </section>{/* End Services Section */}
  {/* ======= Cta Section ======= */}
  <section id="cta" className="cta">
    <div className="container">
    {/* <div className="container" data-aos="zoom-in"> */}
      <div className="row">
        <div className="col-lg-9 text-center text-lg-start">
          <h3>Call To Action</h3>
          <p> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div className="col-lg-3 cta-btn-container text-center">
          <a className="cta-btn align-middle" href="#">Call To Action</a>
        </div>
      </div>
    </div>
  </section>{/* End Cta Section */}
  {/* ======= Portfolio Section ======= */}
  <section id="portfolio" className="portfolio">
    <div className="container">
    {/* <div className="container" > */}
      <div className="section-title">
        <h2>Portfolio</h2>
        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
      </div>
      <ul id="portfolio-flters" className="d-flex justify-content-center" >
      {/* <ul id="portfolio-flters" className="d-flex justify-content-center" > */}
        <li data-filter="*" className="filter-active">All</li>
        <li data-filter=".filter-app">App</li>
        <li data-filter=".filter-card">Card</li>
        <li data-filter=".filter-web">Web</li>
      </ul>
      <div className="row portfolio-container">
      {/* <div className="row portfolio-container"  > */}
        <div className="col-lg-4 col-md-6 portfolio-item filter-app">
          <div className="portfolio-img"><img src="assets/img/portfolio/portfolio-1.jpg" className="img-fluid" alt /></div>
          <div className="portfolio-info">
            <h4>App 1</h4>
            <p>App</p>
            <a href="assets/img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="App 1"><i className="bx bx-plus" /></a>
            <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link" /></a>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 portfolio-item filter-web">
          <div className="portfolio-img"><img src="assets/img/portfolio/portfolio-2.jpg" className="img-fluid" alt /></div>
          <div className="portfolio-info">
            <h4>Web 3</h4>
            <p>Web</p>
            <a href="assets/img/portfolio/portfolio-2.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Web 3"><i className="bx bx-plus" /></a>
            <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link" /></a>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 portfolio-item filter-app">
          <div className="portfolio-img"><img src="assets/img/portfolio/portfolio-3.jpg" className="img-fluid" alt /></div>
          <div className="portfolio-info">
            <h4>App 2</h4>
            <p>App</p>
            <a href="assets/img/portfolio/portfolio-3.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="App 2"><i className="bx bx-plus" /></a>
            <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link" /></a>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 portfolio-item filter-card">
          <div className="portfolio-img"><img src="assets/img/portfolio/portfolio-4.jpg" className="img-fluid" alt /></div>
          <div className="portfolio-info">
            <h4>Card 2</h4>
            <p>Card</p>
            <a href="assets/img/portfolio/portfolio-4.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Card 2"><i className="bx bx-plus" /></a>
            <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link" /></a>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 portfolio-item filter-web">
          <div className="portfolio-img"><img src="assets/img/portfolio/portfolio-5.jpg" className="img-fluid" alt /></div>
          <div className="portfolio-info">
            <h4>Web 2</h4>
            <p>Web</p>
            <a href="assets/img/portfolio/portfolio-5.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Web 2"><i className="bx bx-plus" /></a>
            <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link" /></a>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 portfolio-item filter-app">
          <div className="portfolio-img"><img src="assets/img/portfolio/portfolio-6.jpg" className="img-fluid" alt /></div>
          <div className="portfolio-info">
            <h4>App 3</h4>
            <p>App</p>
            <a href="assets/img/portfolio/portfolio-6.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="App 3"><i className="bx bx-plus" /></a>
            <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link" /></a>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 portfolio-item filter-card">
          <div className="portfolio-img"><img src="assets/img/portfolio/portfolio-7.jpg" className="img-fluid" alt /></div>
          <div className="portfolio-info">
            <h4>Card 1</h4>
            <p>Card</p>
            <a href="assets/img/portfolio/portfolio-7.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Card 1"><i className="bx bx-plus" /></a>
            <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link" /></a>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 portfolio-item filter-card">
          <div className="portfolio-img"><img src="assets/img/portfolio/portfolio-8.jpg" className="img-fluid" alt /></div>
          <div className="portfolio-info">
            <h4>Card 3</h4>
            <p>Card</p>
            <a href="assets/img/portfolio/portfolio-8.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Card 3"><i className="bx bx-plus" /></a>
            <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link" /></a>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 portfolio-item filter-web">
          <div className="portfolio-img"><img src="assets/img/portfolio/portfolio-9.jpg" className="img-fluid" alt /></div>
          <div className="portfolio-info">
            <h4>Web 3</h4>
            <p>Web</p>
            <a href="assets/img/portfolio/portfolio-9.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Web 3"><i className="bx bx-plus" /></a>
            <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link" /></a>
          </div>
        </div>
      </div>
    </div>
  </section>{/* End Portfolio Section */}
  {/* ======= Team Section ======= */}
  <section id="team" className="team section-bg">
    <div className="container">
    {/* <div className="container" > */}
      <div className="section-title">
        <h2>Team</h2>
        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
      </div>
      <div className="row">
        <div className="col-lg-6">
        {/* <div className="col-lg-6" data-aos="zoom-in"> */}
          <div className="member d-flex align-items-start">
            <div className="pic"><img src="assets/img/team/team-1.jpg" className="img-fluid" alt /></div>
            <div className="member-info">
              <h4>Walter White</h4>
              <span>Chief Executive Officer</span>
              <p>Explicabo voluptatem mollitia et repellat qui dolorum quasi</p>
              <div className="social">
                <a href><i className="ri-twitter-fill" /></a>
                <a href><i className="ri-facebook-fill" /></a>
                <a href><i className="ri-instagram-fill" /></a>
                <a href> <i className="ri-linkedin-box-fill" /> </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 mt-4 mt-lg-0">
        {/* <div className="col-lg-6 mt-4 mt-lg-0" data-aos="zoom-in" > */}
          <div className="member d-flex align-items-start">
            <div className="pic"><img src="assets/img/team/team-2.jpg" className="img-fluid" alt /></div>
            <div className="member-info">
              <h4>Sarah Jhonson</h4>
              <span>Product Manager</span>
              <p>Aut maiores voluptates amet et quis praesentium qui senda para</p>
              <div className="social">
                <a href><i className="ri-twitter-fill" /></a>
                <a href><i className="ri-facebook-fill" /></a>
                <a href><i className="ri-instagram-fill" /></a>
                <a href> <i className="ri-linkedin-box-fill" /> </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 mt-4">
        {/* <div className="col-lg-6 mt-4" data-aos="zoom-in" > */}
          <div className="member d-flex align-items-start">
            <div className="pic"><img src="assets/img/team/team-3.jpg" className="img-fluid" alt /></div>
            <div className="member-info">
              <h4>William Anderson</h4>
              <span>CTO</span>
              <p>Quisquam facilis cum velit laborum corrupti fuga rerum quia</p>
              <div className="social">
                <a href><i className="ri-twitter-fill" /></a>
                <a href><i className="ri-facebook-fill" /></a>
                <a href><i className="ri-instagram-fill" /></a>
                <a href> <i className="ri-linkedin-box-fill" /> </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 mt-4" >
        {/* <div className="col-lg-6 mt-4" data-aos="zoom-in"> */}
          <div className="member d-flex align-items-start">
            <div className="pic"><img src="assets/img/team/team-4.jpg" className="img-fluid" alt /></div>
            <div className="member-info">
              <h4>Amanda Jepson</h4>
              <span>Accountant</span>
              <p>Dolorum tempora officiis odit laborum officiis et et accusamus</p>
              <div className="social">
                <a href><i className="ri-twitter-fill" /></a>
                <a href><i className="ri-facebook-fill" /></a>
                <a href><i className="ri-instagram-fill" /></a>
                <a href> <i className="ri-linkedin-box-fill" /> </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>{/* End Team Section */}
  {/* ======= Pricing Section ======= */}
  <section id="pricing" className="pricing">
    <div className="container" >
      <div className="section-title">
        <h2>Pricing</h2>
        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
      </div>
      <div className="row">
        <div className="col-lg-4" >
          <div className="box">
            <h3>Free Plan</h3>
            <h4><sup>$</sup>0<span>per month</span></h4>
            <ul>
              <li><i className="bx bx-check" /> Quam adipiscing vitae proin</li>
              <li><i className="bx bx-check" /> Nec feugiat nisl pretium</li>
              <li><i className="bx bx-check" /> Nulla at volutpat diam uteera</li>
              <li className="na"><i className="bx bx-x" /> <span>Pharetra massa massa ultricies</span></li>
              <li className="na"><i className="bx bx-x" /> <span>Massa ultricies mi quis hendrerit</span></li>
            </ul>
            <a href="#" className="buy-btn">Get Started</a>
          </div>
        </div>
        <div className="col-lg-4 mt-4 mt-lg-0"  >
          <div className="box featured">
            <h3>Business Plan</h3>
            <h4><sup>$</sup>29<span>per month</span></h4>
            <ul>
              <li><i className="bx bx-check" /> Quam adipiscing vitae proin</li>
              <li><i className="bx bx-check" /> Nec feugiat nisl pretium</li>
              <li><i className="bx bx-check" /> Nulla at volutpat diam uteera</li>
              <li><i className="bx bx-check" /> Pharetra massa massa ultricies</li>
              <li><i className="bx bx-check" /> Massa ultricies mi quis hendrerit</li>
            </ul>
            <a href="#" className="buy-btn">Get Started</a>
          </div>
        </div>
        <div className="col-lg-4 mt-4 mt-lg-0"  >
          <div className="box">
            <h3>Developer Plan</h3>
            <h4><sup>$</sup>49<span>per month</span></h4>
            <ul>
              <li><i className="bx bx-check" /> Quam adipiscing vitae proin</li>
              <li><i className="bx bx-check" /> Nec feugiat nisl pretium</li>
              <li><i className="bx bx-check" /> Nulla at volutpat diam uteera</li>
              <li><i className="bx bx-check" /> Pharetra massa massa ultricies</li>
              <li><i className="bx bx-check" /> Massa ultricies mi quis hendrerit</li>
            </ul>
            <a href="#" className="buy-btn">Get Started</a>
          </div>
        </div>
      </div>
    </div>
  </section>{/* End Pricing Section */}
  {/* ======= Frequently Asked Questions Section ======= */}
  <section id="faq" className="faq section-bg">
    <div className="container" >
      <div className="section-title">
        <h2>Frequently Asked Questions</h2>
        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
      </div>
      <div className="faq-list">
        <ul>
          <li >
            <i className="bx bx-help-circle icon-help" /> <a data-bs-toggle="collapse" className="collapse" data-bs-target="#faq-list-1">Non consectetur a erat nam at lectus urna duis? <i className="bx bx-chevron-down icon-show" /><i className="bx bx-chevron-up icon-close" /></a>
            <div id="faq-list-1" className="collapse show" data-bs-parent=".faq-list">
              <p>
                Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.
              </p>
            </div>
          </li>
          <li  >
            <i className="bx bx-help-circle icon-help" /> <a data-bs-toggle="collapse" data-bs-target="#faq-list-2" className="collapsed">Feugiat scelerisque varius morbi enim nunc? <i className="bx bx-chevron-down icon-show" /><i className="bx bx-chevron-up icon-close" /></a>
            <div id="faq-list-2" className="collapse" data-bs-parent=".faq-list">
              <p>
                Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
              </p>
            </div>
          </li>
          <li  >
            <i className="bx bx-help-circle icon-help" /> <a data-bs-toggle="collapse" data-bs-target="#faq-list-3" className="collapsed">Dolor sit amet consectetur adipiscing elit? <i className="bx bx-chevron-down icon-show" /><i className="bx bx-chevron-up icon-close" /></a>
            <div id="faq-list-3" className="collapse" data-bs-parent=".faq-list">
              <p>
                Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis
              </p>
            </div>
          </li>
          <li >
            <i className="bx bx-help-circle icon-help" /> <a data-bs-toggle="collapse" data-bs-target="#faq-list-4" className="collapsed">Tempus quam pellentesque nec nam aliquam sem et tortor consequat? <i className="bx bx-chevron-down icon-show" /><i className="bx bx-chevron-up icon-close" /></a>
            <div id="faq-list-4" className="collapse" data-bs-parent=".faq-list">
              <p>
                Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in.
              </p>
            </div>
          </li>
          <li >
            <i className="bx bx-help-circle icon-help" /> <a data-bs-toggle="collapse" data-bs-target="#faq-list-5" className="collapsed">Tortor vitae purus faucibus ornare. Varius vel pharetra vel turpis nunc eget lorem dolor? <i className="bx bx-chevron-down icon-show" /><i className="bx bx-chevron-up icon-close" /></a>
            <div id="faq-list-5" className="collapse" data-bs-parent=".faq-list">
              <p>
                Laoreet sit amet cursus sit amet dictum sit amet justo. Mauris vitae ultricies leo integer malesuada nunc vel. Tincidunt eget nullam non nisi est sit amet. Turpis nunc eget lorem dolor sed. Ut venenatis tellus in metus vulputate eu scelerisque.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>{/* End Frequently Asked Questions Section */}
  {/* ======= Contact Section ======= */}
  <section id="contact" className="contact">
    <div className="container" >
      <div className="section-title">
        <h2>Contact</h2>
        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
      </div>
      <div className="row">
        <div className="col-lg-5 d-flex align-items-stretch">
          <div className="info">
            <div className="address">
              <i className="bi bi-geo-alt" />
              <h4>Location:</h4>
              <p>A108 Adam Street, New York, NY 535022</p>
            </div>
            <div className="email">
              <i className="bi bi-envelope" />
              <h4>Email:</h4>
              <p>info@example.com</p>
            </div>
            <div className="phone">
              <i className="bi bi-phone" />
              <h4>Call:</h4>
              <p>+1 5589 55488 55s</p>
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameBorder={0} style={{border: 0, width: '100%', height: 290}} allowFullScreen />
          </div>
        </div>
        <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
          <form action="forms/contact.php" method="post" role="form" className="php-email-form">
            <div className="row">
              <div className="form-group col-md-6">
                <label htmlFor="name">Your Name</label>
                <input type="text" name="name" className="form-control" id="name" required />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="name">Your Email</label>
                <input type="email" className="form-control" name="email" id="email" required />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="name">Subject</label>
              <input type="text" className="form-control" name="subject" id="subject" required />
            </div>
            <div className="form-group">
              <label htmlFor="name">Message</label>
              <textarea className="form-control" name="message" rows={10} required defaultValue={""} />
            </div>
            <div className="my-3">
              <div className="loading">Loading</div>
              <div className="error-message" />
              <div className="sent-message">Your message has been sent. Thank you!</div>
            </div>
            <div className="text-center"><button type="submit">Send Message</button></div>
          </form>
        </div>
      </div>
    </div>
  </section>{/* End Contact Section */}
</div>


</main>
{/* ======= Footer ======= */}
<footer id="footer">
  <div className="footer-newsletter">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <h4>Join Our Newsletter</h4>
          <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
          <form action method="post">
            <input type="email" name="email" /><input type="submit" defaultValue="Subscribe" />
          </form>
        </div>
      </div>
    </div>
  </div>
  <div className="footer-top">
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-6 footer-contact">
          <h3>Arsha</h3>
          <p>
            A108 Adam Street <br />
            New York, NY 535022<br />
            United States <br /><br />
            <strong>Phone:</strong> +1 5589 55488 55<br />
            <strong>Email:</strong> info@example.com<br />
          </p>
        </div>
        <div className="col-lg-3 col-md-6 footer-links">
          <h4>Useful Links</h4>
          <ul>
            <li><i className="bx bx-chevron-right" /> <a href="#">Home</a></li>
            <li><i className="bx bx-chevron-right" /> <a href="#">About us</a></li>
            <li><i className="bx bx-chevron-right" /> <a href="#">Services</a></li>
            <li><i className="bx bx-chevron-right" /> <a href="#">Terms of service</a></li>
            <li><i className="bx bx-chevron-right" /> <a href="#">Privacy policy</a></li>
          </ul>
        </div>
        <div className="col-lg-3 col-md-6 footer-links">
          <h4>Our Services</h4>
          <ul>
            <li><i className="bx bx-chevron-right" /> <a href="#">Web Design</a></li>
            <li><i className="bx bx-chevron-right" /> <a href="#">Web Development</a></li>
            <li><i className="bx bx-chevron-right" /> <a href="#">Product Management</a></li>
            <li><i className="bx bx-chevron-right" /> <a href="#">Marketing</a></li>
            <li><i className="bx bx-chevron-right" /> <a href="#">Graphic Design</a></li>
          </ul>
        </div>
        <div className="col-lg-3 col-md-6 footer-links">
          <h4>Our Social Networks</h4>
          <p>Cras fermentum odio eu feugiat lide par naso tierra videa magna derita valies</p>
          <div className="social-links mt-3">
            <a href="#" className="twitter"><i className="bx bxl-twitter" /></a>
            <a href="#" className="facebook"><i className="bx bxl-facebook" /></a>
            <a href="#" className="instagram"><i className="bx bxl-instagram" /></a>
            <a href="#" className="google-plus"><i className="bx bxl-skype" /></a>
            <a href="#" className="linkedin"><i className="bx bxl-linkedin" /></a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="container footer-bottom clearfix">
    <div className="copyright">
      © Copyright <strong><span>Arsha</span></strong>. All Rights Reserved
    </div>
    <div className="credits">
      {/* All the links in the footer should remain intact. */}
      {/* You can delete the links only if you purchased the pro version. */}
      {/* Licensing information: https://bootstrapmade.com/license/ */}
      {/* Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/arsha-free-bootstrap-html-template-corporate/ */}
      Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
    </div>
  </div>
</footer>{/* End Footer */}

        </>
    )
}
export default HomePage