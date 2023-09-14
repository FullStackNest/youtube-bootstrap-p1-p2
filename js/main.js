const NAV = `
<nav class="navbar navbar-expand-lg navbar-light bg-primary">
            <div class="container-fluid">
                <a class="navbar-brand text-light" href="#">
                    <i class="bi bi-suit-club-fill brand-logo"></i>&nbsp;TravelEra
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active text-light" aria-current="page" href="index.html">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-light" href="aboutus.html">About Us</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle text-light" href="#" id="navbarDropdown" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Follow
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item text-primary" target="_blank"
                                        href="https://www.facebook.com/"><i
                                            class="bi bi-facebook"></i>&nbsp;Facebook</a>
                                </li>
                                <li>
                                    <hr class="dropdown-divider">
                                </li>
                                <li><a class="dropdown-item text-primary" target="_blank"
                                        href="https://www.instagram.com/"><i
                                            class="bi bi-instagram text-danger"></i>&nbsp;Instagram</a></li>
                                <li>
                                    <hr class="dropdown-divider">
                                </li>
                                <li><a class="dropdown-item text-primary" target="_blank" href="https://twitter.com/"><i
                                            class="bi bi-twitter"></i>&nbsp;Twitter</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-light" href="contact.html" tabindex="-1">Contact</a>
                        </li>
                    </ul>
                    <form class="d-flex">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                        <button class="btn  btn-outline-light" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
`

const navHeader = document.getElementById('navHeader');


navHeader.innerHTML = NAV;




const FOOTER_HTML = `
        <div class="d-flex flex-column flex-md-row align-items-center justify-content-center pt-4">
            <img class="image-rounded" src="imgs/logo-icon.png" alt="">
            <p class="text-light px-3 footer-heading">Travel Era | Your true holiday partner</p>
            <button class="btn btn-outline-light">Book your vacation now!</button>
        </div>
        <div class="container-fluid my-4">
            <div id="footer-text-links" class="row">
                <div class="col-md-4 col-xl-3 d-flex align-items-center justify-content-center">
                    <img class="brand-image-footer"
                        src="https://images.pexels.com/photos/5269625/pexels-photo-5269625.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt="Brand Promotion" />
                </div>
                <div class="col-6 col-md-3 col-xl-2 d-flex flex-column">
                    <a href="#">About Us</a>
                    <a href="#">Teams & Careers</a>
                    <a href="#">Blogs</a>
                    <a href="#">Support</a>
                </div>
                <div class="col-6 col-md-3 col-xl-2 d-flex flex-column">
                    <a href="#">Official Notes</a>
                    <a href="#">Investor Relations</a>
                    <a href="#">TravelEra Circle</a>
                    <a href="#">Travel Era Frames</a>
                </div>
                <!-- used for border -->
                <div class="col-12 divider my-4 mx-4"></div>
                <!-- 2nd row  -->
                <div class="col-12">
                    <p class="text-light px-3 footer-heading">Travel Era | Your Nearby</p>
                </div>
                <div class="col-6 col-md-4 col-lg-2 d-flex flex-column">
                    <a href="#">Mumbai</a>
                    <a href="#">Delhi</a>
                    <a href="#">Chennai</a>
                    <a href="#">Kolkata</a>
                    <a href="#">Bangalore</a>
                </div>
                <div class="col-6 col-md-4 col-lg-2 d-flex flex-column">
                    <a href="#">Srinagar</a>
                    <a href="#">Jammu</a>
                    <a href="#">Hyderabad</a>
                    <a href="#">Vizag</a>
                    <a href="#">Vapi</a>
                </div>
                <div class="col-6 col-md-4 col-lg-2 d-flex flex-column">
                    <a href="#">Ahmedabad</a>
                    <a href="#">Surat</a>
                    <a href="#">Vadodara</a>
                    <a href="#">Rajkot</a>
                    <a href="#">Bhuj</a>
                </div>
                <div class="col-6 col-md-4 col-lg-2 d-flex flex-column">
                    <a href="#">Varanai</a>
                    <a href="#">Haridwar</a>
                    <a href="#">Tirupati</a>
                    <a href="#">Lucknow</a>
                    <a href="#">Noida</a>
                </div>
                <div class="col-6 col-md-4 col-lg-2 d-flex flex-column">
                    <a href="#">Guwahati</a>
                    <a href="#">Nainital</a>
                    <a href="#">Ooty</a>
                    <a href="#">Shimla</a>
                    <a href="#">Dehradun</a>
                </div>
                <div class="col-6 col-md-4 col-lg-2 d-flex flex-column">
                    <a href="#">Puri</a>
                    <a href="#">Bhubaneshwar</a>
                    <a href="#">Mysore</a>
                    <a href="#">Raipur</a>
                    <a href="#">Jaipur</a>
                </div>

                <!-- used for border -->
                <div class="col-12 divider my-4 mx-4"></div>

                <div class="col-12">
                    <p class="text-light text-center px-3">&copy;Travel Era | 2010 - 2023</p>
                </div>

            </div>
        </div>

`

const footer = document.getElementById('footer');
footer.innerHTML = FOOTER_HTML;





