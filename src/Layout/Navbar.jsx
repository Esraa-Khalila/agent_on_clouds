import React, { useState} from "react";

import swal from "sweetalert";
function Navbar() {
  const [islogged, setIslogged] = useState(localStorage.getItem("token"));
  // logout
  function logout() {
    swal({
      title: "logging out!",
      text: "Are you sure you want to log out!",
      icon: "warning",
      button: "sure!",
    }).then(function () {
      localStorage.setItem("token", '');
      setIslogged(null);
      window.location.href = "/";
    });
  }

  return (
    <div>
      {" "}
      {/* <!-- Main Header--> */}
      <header class="main-header">
        {/* <!-- Menu Wave --> */}
        <div class="menu_wave"></div>

        {/* <!-- Main box --> */}
        <div class="main-box">
          <div class="menu-box">
            <div class="logo">
              <a href="index.html">
                <img src="images/logo.png" alt="" title="" />
              </a>
            </div>

            {/* <!--Nav Box--> */}
            <div class="nav-outer clearfix">
              {/* <!-- Main Menu --> */}
              <nav class="main-menu navbar-expand-md navbar-light">
                <div
                  class="collapse navbar-collapse clearfix"
                  id="navbarSupportedContent"
                >
                  <ul class="navigation menu-left clearfix">
                    <li class="current dropdown">
                      <a href="/">Home</a>
                    </li>
                    <li class="dropdown">
                      <a href="about">About</a>
                    </li>
                  </ul>

                  <ul class="navigation menu-right clearfix">
                    <li class="">
                      <a href="contact">Contact</a>
                      <ul></ul>
                    </li>
                    <li class="nav-item dropdown">
                      <a
                        class="nav-link active dropdown-toggle"
                        href="#"
                        data-toggle="dropdown"
                      >
                        {" "}
                        Account{" "}
                      </a>
                      <ul class="dropdown-menu dropdown-menu-left animate fade-up">
                        {!islogged ? (
                          <>
                            <li>
                              <a class="dropdown-item" href="/login">
                                Login
                              </a>
                            </li>
                            <li>
                              <a class="dropdown-item" href="/register">
                                Register
                              </a>
                            </li>
                          </>
                        ) : null}

                        {islogged ? (
                          <>
                            <li>
                              <a
                                class="dropdown-item"
                                href="/#"
                                onClick={logout}
                              >
                                Logout
                              </a>
                            </li>
                          </>
                        ) : null}
                      </ul>
                    </li>
                  </ul>
                  {/* <li class="dropdown">
                        
                        <a href="shop.html">Shop</a>
                        <ul>
                          <li>
                            <a href="shop.html">Shop</a>
                          </li>
                          <li>
                            <a href="shopping-cart.html">Cart</a>
                          </li>
                          <li>
                            <a href="checkout.html">Checkout</a>
                          </li>
                          <li>
                            <a href="login.html">log out</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="contact.html">Contacts</a>
                      </li>
                    </ul> */}
                </div>
              </nav>
              {/* <!-- Main Menu End--> */}

              <div class="outer-box clearfix">
                {/* <!-- Shoppping Car --> */}
                <div class="cart-btn">
                  <a href="shopping-cart.html">
                    <i class="icon flaticon-commerce"></i>{" "}
                    <span class="count">2</span>
                  </a>

                  <div class="shopping-cart">
                    <ul class="shopping-cart-items">
                      <li class="cart-item">
                        <img
                          src="images/resource/products/prod-thumb-1.jpg"
                          alt="#"
                          class="thumb"
                        />
                        <span class="item-name">Birthday Cake</span>
                        <span class="item-quantity">
                          1 x <span class="item-amount">$84.00</span>
                        </span>
                        <a href="shop-single.html" class="product-detail"></a>
                        <button class="remove-item">
                          <span class="fa fa-times"></span>
                        </button>
                      </li>

                      <li class="cart-item">
                        <img
                          src="images/resource/products/prod-thumb-2.jpg"
                          alt="#"
                          class="thumb"
                        />
                        <span class="item-name">French Macaroon</span>
                        <span class="item-quantity">
                          1 x <span class="item-amount">$13.00</span>
                        </span>
                        <a href="shop-single.html" class="product-detail"></a>
                        <button class="remove-item">
                          <span class="fa fa-times"></span>
                        </button>
                      </li>
                    </ul>

                    <div class="cart-footer">
                      <div class="shopping-cart-total">
                        <strong>Subtotal:</strong> $97.00
                      </div>
                      <a href="cart.html" class="theme-btn">
                        View Cart
                      </a>
                      <a href="checkout.html" class="theme-btn">
                        Checkout
                      </a>
                    </div>
                  </div>
                  {/* <!--end shopping-cart --> */}
                </div>

                {/* <!-- Search Btn --> */}
                <div class="search-box">
                  <button class="search-btn">
                    <i class="fa fa-search"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Sticky Header  --> */}
        <div class="sticky-header">
          <div class="auto-container clearfix">
            {/* <!--Logo--> */}
            <div class="logo">
              <a href="#" title="Sticky Logo">
                <img src="images/logo-small.png" alt="Sticky Logo" />
              </a>
            </div>

            {/* <!--Nav Outer--> */}
            <div class="nav-outer">
              {/* <!-- Main Menu --> */}
              <nav class="main-menu">
                {/* <!--Keep This Empty / Menu will come through Javascript--> */}
              </nav>
              {/* <!-- Main Menu End--> */}
            </div>
          </div>
        </div>
        {/* <!-- End Sticky Menu --> */}

        {/* <!-- Mobile Header --> */}
        <div class="mobile-header">
          <div class="logo">
            <a href="index.html">
              <img src="images/logo-small.png" alt="" title="" />
            </a>
          </div>

          {/* <!--Nav Box--> */}
          <div class="nav-outer clearfix">
            {/* <!--Keep This Empty / Menu will come through Javascript--> */}
          </div>
        </div>

        {/* <!-- Mobile Menu  --> */}
        <div class="mobile-menu">
          <nav class="menu-box">
            <div class="nav-logo">
              <a href="index.html">
                <img src="images/logo-small.png" alt="" title="" />
              </a>
            </div>
            {/* <!--Here Menu Will Come Automatically Via Javascript / Same Menu as in Header--> */}
          </nav>
        </div>
        {/* <!-- End Mobile Menu --> */}

        {/* <!-- Header Search --> */}
        <div class="search-popup">
          <span class="search-back-drop"></span>

          <div class="search-inner">
            <button class="close-search">
              <span class="fa fa-times"></span>
            </button>
            <form
              method="post"
              action="https://html.cwsthemes.com/bellaria/blog-showcase.html"
            >
              <div class="form-group">
                <input
                  type="search"
                  name="search-field"
                  value=""
                  placeholder="Search..."
                  required=""
                />
                <button type="submit">
                  <i class="fa fa-search"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
        {/* <!-- End Header Search --> */}
      </header>
      {/* <!--End Main Header -->
       */}
      {/* <!--End Main Slider-->
    <!-- Services Section --> */}
    </div>
  );
}

export default Navbar;
