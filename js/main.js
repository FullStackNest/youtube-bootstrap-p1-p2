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