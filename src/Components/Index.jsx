import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import swal from "sweetalert";

function Index() {
  // get product

  const [items, setItems] = useState([]);
  useEffect(() => {
    axios.get("http://127.0.0.1:3003/item").then((res) => {
      setItems(res.data);
    });
  }, []);

  //delete producr from user
  const deleteRequestHandler = (id, user_id ,post_id) => {
    console.log(id);
    console.log(user_id);
    if (id != user_id) return
    const response = axios.delete(`http://127.0.0.1:3003/delete/${post_id}`);
    setItems(items.filter((user) => user.id !== post_id));
  };

  //add product
  const token = localStorage.getItem("token") || null;
  let jwt=''
  console.log(token);
  if (token) {
   jwt=  jwt_decode(token);
    // valid token format
  } else {
    console.log("a");
  }

  const [item, setItem] = useState({
    title: "",
    description: "",
    price: "",
    location: "",
    user_id: jwt?.id,
  });
 

  const handel = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };

  const api = "http://127.0.0.1:3003/addItem";
  const addItem = (e) => {
    e.preventDefault();

    if (!token) {
      window.location.href = "/login";
      return
    }
    let data = {
      title: item.title,
      description: item.description,
      user_id: item.user_id,
      price: item.price,
      location: item.location,
    };
    axios.post(api, data).then((result) => {
      const newItems = [...items, data]
      setItems(newItems)
      swal({
        title: "Added success!",
        icon: "warning",
        button: "sure!",
      }).then(function () {});
    }).catch = () => {
      swal({
        title: "something wrong!",
        icon: "warning",
        button: "sure!",
      }).then(function () {});
    };
  };
  return (
    <div>
      <div class="page-wrapper">
        {/* <!-- Preloader --> */}

        <section
          class="services-section"
          style={{ backgroundImage: `url('images/background/1.jpg')` }}
        >
          <div class="auto-container">
            <div class="sec-title text-center">
              <div class="divider">
                <img src="images/icons/divider_1.png" alt="" />
              </div>
              <h2>Cake Bellania</h2>
            </div>
          </div>
        </section>
        {/* <!--End Services Section -->

    <!-- Call to Action --> */}
        <section class="call-to-action">
          <div class="shape_wrapper shape_one">
            <div
              class="shape_inner shape_two"
              style={{ backgroundImage: ` url('images/background/2.jpg')` }}
            >
              <div class="overlay"></div>
            </div>
          </div>

          <div class="auto-container">
            <div class="content-box">
              <div class="icon-box">
                <div class="icon-frame">
                  <svg x="0px" y="0px" viewBox="0 0 500 500">
                    {" "}
                    <path d="M488.5,274.5L488.5,274.5l1.8-0.5l-2,0.5c-2.4-8.7-4.5-16.9-4.5-24.5c0-8,2.3-16.5,4.7-25.5 c3.5-13,7.1-26.5,3.7-39.5c-3.6-13.2-13.5-23.1-23.1-32.7c-6.5-6.5-12.6-12.6-16.6-19.4c-3.9-6.8-6.1-15.2-8.5-24.1 c-3.5-13.1-7.1-26.7-16.7-36.3c-9.5-9.5-22.9-13.1-35.9-16.6c-9-2.4-17.5-4.6-24.4-8.7c-6.5-3.8-12.5-9.8-18.9-16.2 c-9.7-9.8-19.6-19.8-33.2-23.4c-13.5-3.7-27.3,0.1-40.4,3.7c-8.7,2.4-16.9,4.6-24.5,4.6c-8,0-16.5-2.3-25.5-4.7 c-9.3-2.5-18.8-5-28.1-5c-3.8,0-7.6,0.4-11.3,1.4C172,11.1,162,21.1,152.4,30.7c-6.5,6.5-12.6,12.6-19.4,16.6 c-6.8,3.9-15.2,6.1-24.1,8.5c-13.1,3.5-26.7,7.1-36.3,16.7c-9.5,9.5-13.1,23-16.6,36c-2.4,9-4.6,17.5-8.7,24.4 c-3.8,6.5-9.8,12.5-16.2,18.9c-9.8,9.7-19.7,19.6-23.4,33.2c-3.7,13.5,0.1,27.3,3.7,40.5c2.4,8.7,4.6,16.9,4.6,24.5 c0,8-2.3,16.5-4.6,25.5c-3.5,13-7.1,26.6-3.7,39.5c3.6,13.2,13.5,23.1,23.1,32.7c6.5,6.5,12.6,12.6,16.6,19.4 c3.9,6.8,6.1,15.1,8.5,24c3.5,13.1,7.1,26.8,16.7,36.4c9.5,9.5,23,13.1,35.9,16.6c9,2.4,17.5,4.6,24.4,8.7 c6.5,3.8,12.5,9.8,18.9,16.2c9.7,9.8,19.6,19.8,33.2,23.5c3.8,1,7.6,1.5,11.8,1.5c9.6,0,19.3-2.7,28.5-5.1c8.8-2.4,17-4.6,24.5-4.6 c8,0,16.5,2.3,25.5,4.6c13,3.6,26.6,7.1,39.5,3.7c13.2-3.6,23.1-13.5,32.7-23.1c6.5-6.5,12.6-12.6,19.4-16.6 c6.7-3.9,15.1-6.1,24-8.5c13.1-3.5,26.8-7.1,36.4-16.8c9.5-9.5,13.1-23,16.6-36c2.4-9,4.6-17.5,8.7-24.4c3.8-6.5,9.8-12.5,16.2-18.9 c9.8-9.7,19.9-19.7,23.6-33.3C495.7,301.4,494.4,287.7,488.5,274.5z"></path>
                  </svg>
                </div>
                {/* <!-- cake img --> */}
                <div class="icon icon_heart"></div>
              </div>
              <h1>Magic Processing</h1>
              <p>
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia Curae; Praesent molestie eu turpis nec
                <br /> molestie. Nam auctor magna mauris, non lacinia felis
                mattis nec.
              </p>
              <div class="btn-box">
                <a href="#" class="theme-btn btn-style-one large">
                  <span></span>Discover More<span></span>
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* <!--End Call to Action -->

    <!-- Portfolio Sections --> */}

        {/* <!-- Pricing Section --> */}
        <section class="pricing-section">
          <div class="auto-container">
            <div class="sec-title text-center">
              <div class="divider">
                <img src="images/icons/divider_1.png" alt="" />
              </div>
              <h2>Cake</h2>
            </div>

            <div class="row">
              {/* <!-- Pricing Table --> */}
              {items.map((x) => (
                <div class="pricing-table col-xl-3 col-lg-3 col-md-6 col-sm-12  ">
                  <div class="inner-box " style={{ height: "610px" }}>
                    <div class="image-box">
                      <figure class="image">
                        <img src="images/resource/pr-table1.png" alt="" />
                      </figure>
                    </div>
                    <div class="pricing-svg">
                      <svg viewBox="0 0 1000 690">
                        <path
                          class="st0"
                          d="M1503-747c-669.3,0-1338.7,0-2008,0c0.3,425,0.7,850,1,1275c0,7.7,0,15.3,0,23c168.3,0.1,336.7,0.3,505,0.4 c18.1-10.6,32.9-15.9,58.4-10.8c80.7,16.2,160.7,100.3,240.4,93.8c93-7.5,184.6-116.6,284.6-96c88.9,18.3,101.9,175.6,227.2,147.5 c79.9-17.9,68.2-118.2,149.1-138.7c12.8-3.3,20.2-4.2,38.4-3.4c167.7,0.7,335.3,1.5,503,2.2c0.3-6,0.7-12,1-18 C1503,103,1503-322,1503-747z"
                        ></path>
                      </svg>
                    </div>
                    <div class="title-box ">
                      <h4> {x.title}</h4>
                    </div>
                    <div class="price-box">
                      <div class="price">
                        {x.price}
                        <sup>JD</sup>
                      </div>
                      <span class="title"> {x.description}</span>
                    </div>
                    <div class="table-content">
                      <ul>
                        <li>
                          <span>location :{x.location}</span>
                        </li>
                      </ul>
                    </div>

                    <button
                      class=" theme-btn btn-style-two regular"
                      onClick={() => deleteRequestHandler(jwt?.id, x.user_id,x.id)}
                    >
                      Delete
                    </button>
                    <div class="">
                      <Link
                        to={x.user_id == jwt?.id ? "item/" + x.id : "#"}
                        class="theme-btn btn-style-two regular"
                      >
                        edit
                      </Link>
                    </div>
                    <div class="">
                      <Link
                        to={"single-shop/" + x.id}
                        class="theme-btn btn-style-two regular"
                      >
                        show
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
              {items.length == 0 && (
                <tr>
                  <p>No data found to display.</p>
                </tr>
              )}
            </div>
          </div>
        </section>
        <section class="login-section" style={{ padding: "50px 5px" }}>
          <div class="auto-container">
            <div class="login-form p-4" style={{ border: "1px solid black" }}>
              <h2>add item</h2>

              <form onSubmit={addItem}>
                <div class="form-group">
                  <label>Product</label>
                  <input
                    type="text"
                    onChange={handel}
                    name="title"
                    required
                    minLength={3}
                  />
                </div>

                <div class="form-group">
                  <label>description *</label>
                  <input
                    type="text"
                    onChange={handel}
                    name="description"
                    required
                    minLength={8}
                  />
                </div>
                <div class="form-group">
                  <label>price *</label>
                  <input type="text" onChange={handel} name="price" required />
                </div>

                <div class="form-group">
                  <label>location *</label>
                  <input
                    type="text"
                    onChange={handel}
                    name="location"
                    required
                  />
                </div>

                <div class="form-group">
                  <input
                    class="theme-btn"
                    type="submit"
                    name="submit-form"
                    value="Add"
                    // onClick={(e)=>addItem(e)}
                  />
                </div>
              </form>
            </div>
          </div>
        </section>
        <div class="features-section">
          <div class="shape_wrapper shape_one">
            <div
              class="shape_inner shape_two"
              style={{ backgroundImage: `url('images/background/3.jpg')` }}
            >
              <div class="overlay"></div>
            </div>
          </div>

          <div class="auto-container">
            <div class="row">
              {/* <!-- Feature Block --> */}
              <div class="feature-block col-lg-3 col-md-6 col-sm-12">
                <div class="inner-box">
                  <div class="icon-box">
                    <div class="icon-frame">
                      <svg x="0px" y="0px" viewBox="0 0 500 500">
                        {" "}
                        <path d="M488.5,274.5L488.5,274.5l1.8-0.5l-2,0.5c-2.4-8.7-4.5-16.9-4.5-24.5c0-8,2.3-16.5,4.7-25.5 c3.5-13,7.1-26.5,3.7-39.5c-3.6-13.2-13.5-23.1-23.1-32.7c-6.5-6.5-12.6-12.6-16.6-19.4c-3.9-6.8-6.1-15.2-8.5-24.1 c-3.5-13.1-7.1-26.7-16.7-36.3c-9.5-9.5-22.9-13.1-35.9-16.6c-9-2.4-17.5-4.6-24.4-8.7c-6.5-3.8-12.5-9.8-18.9-16.2 c-9.7-9.8-19.6-19.8-33.2-23.4c-13.5-3.7-27.3,0.1-40.4,3.7c-8.7,2.4-16.9,4.6-24.5,4.6c-8,0-16.5-2.3-25.5-4.7 c-9.3-2.5-18.8-5-28.1-5c-3.8,0-7.6,0.4-11.3,1.4C172,11.1,162,21.1,152.4,30.7c-6.5,6.5-12.6,12.6-19.4,16.6 c-6.8,3.9-15.2,6.1-24.1,8.5c-13.1,3.5-26.7,7.1-36.3,16.7c-9.5,9.5-13.1,23-16.6,36c-2.4,9-4.6,17.5-8.7,24.4 c-3.8,6.5-9.8,12.5-16.2,18.9c-9.8,9.7-19.7,19.6-23.4,33.2c-3.7,13.5,0.1,27.3,3.7,40.5c2.4,8.7,4.6,16.9,4.6,24.5 c0,8-2.3,16.5-4.6,25.5c-3.5,13-7.1,26.6-3.7,39.5c3.6,13.2,13.5,23.1,23.1,32.7c6.5,6.5,12.6,12.6,16.6,19.4 c3.9,6.8,6.1,15.1,8.5,24c3.5,13.1,7.1,26.8,16.7,36.4c9.5,9.5,23,13.1,35.9,16.6c9,2.4,17.5,4.6,24.4,8.7 c6.5,3.8,12.5,9.8,18.9,16.2c9.7,9.8,19.6,19.8,33.2,23.5c3.8,1,7.6,1.5,11.8,1.5c9.6,0,19.3-2.7,28.5-5.1c8.8-2.4,17-4.6,24.5-4.6 c8,0,16.5,2.3,25.5,4.6c13,3.6,26.6,7.1,39.5,3.7c13.2-3.6,23.1-13.5,32.7-23.1c6.5-6.5,12.6-12.6,19.4-16.6 c6.7-3.9,15.1-6.1,24-8.5c13.1-3.5,26.8-7.1,36.4-16.8c9.5-9.5,13.1-23,16.6-36c2.4-9,4.6-17.5,8.7-24.4c3.8-6.5,9.8-12.5,16.2-18.9 c9.8-9.7,19.9-19.7,23.6-33.3C495.7,301.4,494.4,287.7,488.5,274.5z"></path>
                      </svg>
                    </div>

                    {/* <!-- cake img --> */}
                    <div class="icon flaticon-technology"></div>
                  </div>
                  <h3>Tradition</h3>
                  <p>
                    Lorem ipsum dolor amet, consectetur adipiscing elit. Nam
                    consectetur facilisis aliquet.
                  </p>
                </div>
              </div>

              {/* <!-- Feature Block --> */}
              <div class="feature-block col-lg-3 col-md-6 col-sm-12">
                <div class="inner-box">
                  <div class="icon-box">
                    <div class="icon-frame">
                      <svg x="0px" y="0px" viewBox="0 0 500 500">
                        {" "}
                        <path d="M488.5,274.5L488.5,274.5l1.8-0.5l-2,0.5c-2.4-8.7-4.5-16.9-4.5-24.5c0-8,2.3-16.5,4.7-25.5 c3.5-13,7.1-26.5,3.7-39.5c-3.6-13.2-13.5-23.1-23.1-32.7c-6.5-6.5-12.6-12.6-16.6-19.4c-3.9-6.8-6.1-15.2-8.5-24.1 c-3.5-13.1-7.1-26.7-16.7-36.3c-9.5-9.5-22.9-13.1-35.9-16.6c-9-2.4-17.5-4.6-24.4-8.7c-6.5-3.8-12.5-9.8-18.9-16.2 c-9.7-9.8-19.6-19.8-33.2-23.4c-13.5-3.7-27.3,0.1-40.4,3.7c-8.7,2.4-16.9,4.6-24.5,4.6c-8,0-16.5-2.3-25.5-4.7 c-9.3-2.5-18.8-5-28.1-5c-3.8,0-7.6,0.4-11.3,1.4C172,11.1,162,21.1,152.4,30.7c-6.5,6.5-12.6,12.6-19.4,16.6 c-6.8,3.9-15.2,6.1-24.1,8.5c-13.1,3.5-26.7,7.1-36.3,16.7c-9.5,9.5-13.1,23-16.6,36c-2.4,9-4.6,17.5-8.7,24.4 c-3.8,6.5-9.8,12.5-16.2,18.9c-9.8,9.7-19.7,19.6-23.4,33.2c-3.7,13.5,0.1,27.3,3.7,40.5c2.4,8.7,4.6,16.9,4.6,24.5 c0,8-2.3,16.5-4.6,25.5c-3.5,13-7.1,26.6-3.7,39.5c3.6,13.2,13.5,23.1,23.1,32.7c6.5,6.5,12.6,12.6,16.6,19.4 c3.9,6.8,6.1,15.1,8.5,24c3.5,13.1,7.1,26.8,16.7,36.4c9.5,9.5,23,13.1,35.9,16.6c9,2.4,17.5,4.6,24.4,8.7 c6.5,3.8,12.5,9.8,18.9,16.2c9.7,9.8,19.6,19.8,33.2,23.5c3.8,1,7.6,1.5,11.8,1.5c9.6,0,19.3-2.7,28.5-5.1c8.8-2.4,17-4.6,24.5-4.6 c8,0,16.5,2.3,25.5,4.6c13,3.6,26.6,7.1,39.5,3.7c13.2-3.6,23.1-13.5,32.7-23.1c6.5-6.5,12.6-12.6,19.4-16.6 c6.7-3.9,15.1-6.1,24-8.5c13.1-3.5,26.8-7.1,36.4-16.8c9.5-9.5,13.1-23,16.6-36c2.4-9,4.6-17.5,8.7-24.4c3.8-6.5,9.8-12.5,16.2-18.9 c9.8-9.7,19.9-19.7,23.6-33.3C495.7,301.4,494.4,287.7,488.5,274.5z"></path>
                      </svg>
                    </div>

                    {/* <!-- cake img --> */}
                    <div class="icon flaticon-food-7"></div>
                  </div>
                  <h3>Quality</h3>
                  <p>
                    Amet interdum, diam molestie fusce natoque, nascetur laoreet
                    mattis cras hendrerit.
                  </p>
                </div>
              </div>

              {/* <!-- Feature Block --> */}
              <div class="feature-block col-lg-3 col-md-6 col-sm-12">
                <div class="inner-box">
                  <div class="icon-box">
                    <div class="icon-frame">
                      <svg x="0px" y="0px" viewBox="0 0 500 500">
                        {" "}
                        <path d="M488.5,274.5L488.5,274.5l1.8-0.5l-2,0.5c-2.4-8.7-4.5-16.9-4.5-24.5c0-8,2.3-16.5,4.7-25.5 c3.5-13,7.1-26.5,3.7-39.5c-3.6-13.2-13.5-23.1-23.1-32.7c-6.5-6.5-12.6-12.6-16.6-19.4c-3.9-6.8-6.1-15.2-8.5-24.1 c-3.5-13.1-7.1-26.7-16.7-36.3c-9.5-9.5-22.9-13.1-35.9-16.6c-9-2.4-17.5-4.6-24.4-8.7c-6.5-3.8-12.5-9.8-18.9-16.2 c-9.7-9.8-19.6-19.8-33.2-23.4c-13.5-3.7-27.3,0.1-40.4,3.7c-8.7,2.4-16.9,4.6-24.5,4.6c-8,0-16.5-2.3-25.5-4.7 c-9.3-2.5-18.8-5-28.1-5c-3.8,0-7.6,0.4-11.3,1.4C172,11.1,162,21.1,152.4,30.7c-6.5,6.5-12.6,12.6-19.4,16.6 c-6.8,3.9-15.2,6.1-24.1,8.5c-13.1,3.5-26.7,7.1-36.3,16.7c-9.5,9.5-13.1,23-16.6,36c-2.4,9-4.6,17.5-8.7,24.4 c-3.8,6.5-9.8,12.5-16.2,18.9c-9.8,9.7-19.7,19.6-23.4,33.2c-3.7,13.5,0.1,27.3,3.7,40.5c2.4,8.7,4.6,16.9,4.6,24.5 c0,8-2.3,16.5-4.6,25.5c-3.5,13-7.1,26.6-3.7,39.5c3.6,13.2,13.5,23.1,23.1,32.7c6.5,6.5,12.6,12.6,16.6,19.4 c3.9,6.8,6.1,15.1,8.5,24c3.5,13.1,7.1,26.8,16.7,36.4c9.5,9.5,23,13.1,35.9,16.6c9,2.4,17.5,4.6,24.4,8.7 c6.5,3.8,12.5,9.8,18.9,16.2c9.7,9.8,19.6,19.8,33.2,23.5c3.8,1,7.6,1.5,11.8,1.5c9.6,0,19.3-2.7,28.5-5.1c8.8-2.4,17-4.6,24.5-4.6 c8,0,16.5,2.3,25.5,4.6c13,3.6,26.6,7.1,39.5,3.7c13.2-3.6,23.1-13.5,32.7-23.1c6.5-6.5,12.6-12.6,19.4-16.6 c6.7-3.9,15.1-6.1,24-8.5c13.1-3.5,26.8-7.1,36.4-16.8c9.5-9.5,13.1-23,16.6-36c2.4-9,4.6-17.5,8.7-24.4c3.8-6.5,9.8-12.5,16.2-18.9 c9.8-9.7,19.9-19.7,23.6-33.3C495.7,301.4,494.4,287.7,488.5,274.5z"></path>
                      </svg>
                    </div>

                    {/* <!-- cake img --> */}
                    <div class="icon flaticon-strawberry"></div>
                  </div>
                  <h3>Creatuvity</h3>
                  <p>
                    Ullamcorper phasellus per vestibulum, lacus curabitur,
                    rutrum mi fringilla.
                  </p>
                </div>
              </div>

              {/* <!-- Feature Block --> */}
              <div class="feature-block col-lg-3 col-md-6 col-sm-12">
                <div class="inner-box">
                  <div class="icon-box">
                    <div class="icon-frame">
                      <svg x="0px" y="0px" viewBox="0 0 500 500">
                        {" "}
                        <path d="M488.5,274.5L488.5,274.5l1.8-0.5l-2,0.5c-2.4-8.7-4.5-16.9-4.5-24.5c0-8,2.3-16.5,4.7-25.5 c3.5-13,7.1-26.5,3.7-39.5c-3.6-13.2-13.5-23.1-23.1-32.7c-6.5-6.5-12.6-12.6-16.6-19.4c-3.9-6.8-6.1-15.2-8.5-24.1 c-3.5-13.1-7.1-26.7-16.7-36.3c-9.5-9.5-22.9-13.1-35.9-16.6c-9-2.4-17.5-4.6-24.4-8.7c-6.5-3.8-12.5-9.8-18.9-16.2 c-9.7-9.8-19.6-19.8-33.2-23.4c-13.5-3.7-27.3,0.1-40.4,3.7c-8.7,2.4-16.9,4.6-24.5,4.6c-8,0-16.5-2.3-25.5-4.7 c-9.3-2.5-18.8-5-28.1-5c-3.8,0-7.6,0.4-11.3,1.4C172,11.1,162,21.1,152.4,30.7c-6.5,6.5-12.6,12.6-19.4,16.6 c-6.8,3.9-15.2,6.1-24.1,8.5c-13.1,3.5-26.7,7.1-36.3,16.7c-9.5,9.5-13.1,23-16.6,36c-2.4,9-4.6,17.5-8.7,24.4 c-3.8,6.5-9.8,12.5-16.2,18.9c-9.8,9.7-19.7,19.6-23.4,33.2c-3.7,13.5,0.1,27.3,3.7,40.5c2.4,8.7,4.6,16.9,4.6,24.5 c0,8-2.3,16.5-4.6,25.5c-3.5,13-7.1,26.6-3.7,39.5c3.6,13.2,13.5,23.1,23.1,32.7c6.5,6.5,12.6,12.6,16.6,19.4 c3.9,6.8,6.1,15.1,8.5,24c3.5,13.1,7.1,26.8,16.7,36.4c9.5,9.5,23,13.1,35.9,16.6c9,2.4,17.5,4.6,24.4,8.7 c6.5,3.8,12.5,9.8,18.9,16.2c9.7,9.8,19.6,19.8,33.2,23.5c3.8,1,7.6,1.5,11.8,1.5c9.6,0,19.3-2.7,28.5-5.1c8.8-2.4,17-4.6,24.5-4.6 c8,0,16.5,2.3,25.5,4.6c13,3.6,26.6,7.1,39.5,3.7c13.2-3.6,23.1-13.5,32.7-23.1c6.5-6.5,12.6-12.6,19.4-16.6 c6.7-3.9,15.1-6.1,24-8.5c13.1-3.5,26.8-7.1,36.4-16.8c9.5-9.5,13.1-23,16.6-36c2.4-9,4.6-17.5,8.7-24.4c3.8-6.5,9.8-12.5,16.2-18.9 c9.8-9.7,19.9-19.7,23.6-33.3C495.7,301.4,494.4,287.7,488.5,274.5z"></path>
                      </svg>
                    </div>

                    {/* <!-- cake img --> */}
                    <div class="icon flaticon-food-1"></div>
                  </div>
                  <h3>Passion</h3>
                  <p>
                    Leo sem, justo hymenaeos torquent tristique aliquam et id,
                    ante eu nascetur dis sit enim.
                  </p>
                </div>
              </div>
            </div>

            <div class="btn-box">
              <a href="#" class="theme-btn btn-style-two large">
                <span></span>Know Us Better<span></span>
              </a>
            </div>
          </div>
        </div>
        {/* <!-- End Features Section -->

    <!-- Recipes Section  --> */}
        <section
          class="recipes-section"
          style={{ backgroundImage: `url('images/background/4.jpg')` }}
        >
          <div class="auto-container">
            <div class="sec-title text-center">
              <div class="divider">
                <img src="images/icons/divider_1.png" alt="" />
              </div>
              <h2>Cake for everyone</h2>
            </div>

            {/* <!-- Recipes Carousel --> */}
            <div class="recipes-carousel owl-carousel owl-theme">
              {/* <!-- Recipe Block --> */}
              <div class="recipe-block">
                <figure class="recipe-image">
                  <img src="images/resource/desk_01.png" alt="" />
                </figure>
              </div>

              {/* <!-- Recipe Block --> */}
              <div class="recipe-block">
                <figure class="recipe-image">
                  <img src="images/resource/desk_02.png" alt="" />
                </figure>
              </div>

              {/* <!-- Recipe Block --> */}
              <div class="recipe-block">
                <figure class="recipe-image">
                  <img src="images/resource/desk_03.png" alt="" />
                </figure>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End Recipes Section  -->

    <!-- Testimonial Section --> */}
        <section class="testimonial-section">
          <div class="shape_wrapper shape_one">
            <div class="shape_inner shape_two">
              <div class="overlay"></div>
            </div>
          </div>

          <div class="auto-container">
            <div class="sec-title light text-center"></div>

            {/* <!-- Testimonial Carousel --> */}
            <div class="testimonial-carousel owl-carousel owl-theme">
              {/* <!-- Testimonial Block --> */}
              <div class="testimonial-block">
                <div class="inner-box">
                  <div class="testimonial_img">
                    <svg class="div_left" fill="#ffffff" viewBox="0 0 25 8">
                      <path d="M1.7,5.2C2,5.4,2.1,5.7,1.9,6C1.8,6.2,1.7,6.3,1.5,6.3c-0.4,0.1-1-0.4-0.7,0.4c0.1,0.4,0.6,0.4,0.9,0.5 c1.8,0.2,3.6-1.2,5.1-1.9c-0.9-0.5-2-1.1-2.3-2.1c-0.2-0.8,0-1.8,0.6-2.4C5.7,0,6.8-0.2,7.7,0.3C8,0.6,8.2,1.2,8.1,1.6 C7.9,2.3,7.6,2.5,7,2.5C7,2.1,7.2,1.3,6.8,1C6.5,0.8,6,0.9,5.7,1.2C4.8,1.9,5.2,3.1,6,3.7C6.5,4,6.9,4.2,7.4,4.4 c0.6,0.2,0.9,0,1.5-0.2c1.3-0.6,2.6-1,3.9-1.4c1.4-0.4,2.8-0.5,4.2-0.4c1.1,0.1,2.2,0.5,3.2,1.1c1,0.6,2.1,0.9,3.2,0.9 c0.4,0,1.6,0,1.6,0.4c0,0.4-1.5,0.1-1.7,0.5c0.2,0.1,0.9,0.3,0.7,0.7c-0.2,0.4-0.9,0-1-0.2c-0.4-0.4-1-0.7-1.6-0.6 c-1,0.1-2.1,0.3-3.1,0.4c-1,0.1-1.8,0.1-2.7,0.2C13.7,6.1,11.7,6.2,9.8,6C9.1,5.7,8.2,5.8,7.5,6.1C6.7,6.5,6,7,5.2,7.3 C4,7.9,1.7,8.4,0.5,7.4S0.5,4.3,1.7,5.2z M20.3,4.2c-1.3-1-3-1.4-4.6-1.1c-0.9,0.2-1.9,0.5-2.8,0.7c-0.5,0.1-1,0.3-1.6,0.5 S10.3,4.5,10.4,5L20.3,4.2z"></path>
                    </svg>

                    {/* <!-- Thumb Box --> */}
                    <figure class="thumb-box">
                      <img src="images/resource/thumb-1.jpg" alt="" />
                    </figure>

                    <svg class="div_right" fill="#ffffff" viewBox="0 0 25 8">
                      <path d="M23.31,5.22a.59.59,0,0,0,.22,1.1c.36.08,1-.38.75.38-.13.4-.57.43-.93.46-1.77.17-3.6-1.21-5.11-1.95.87-.51,2-1.09,2.33-2.1A2.43,2.43,0,0,0,19.94.73,2,2,0,0,0,17.36.34a1.25,1.25,0,0,0-.43,1.29c.17.67.5.84,1.13.88-.05-.42-.28-1.17.12-1.49a1,1,0,0,1,1.17.15c.91.76.42,1.94-.38,2.54a4.91,4.91,0,0,1-1.37.66c-.64.22-.89,0-1.51-.22a25.55,25.55,0,0,0-3.94-1.39,13.51,13.51,0,0,0-4.2-.44A7.77,7.77,0,0,0,4.77,3.43a6.29,6.29,0,0,1-3.21.87c-.37,0-1.59,0-1.56.43s1.48.08,1.74.54c-.24.07-.89.29-.66.71s.86,0,1-.18a1.85,1.85,0,0,1,1.58-.6c1,.06,2.06.33,3.09.44s1.81.11,2.72.19a21.75,21.75,0,0,0,5.7.13,3.18,3.18,0,0,1,2.39.15c.76.37,1.47.84,2.23,1.2,1.25.6,3.56,1.12,4.74.13S24.51,4.34,23.31,5.22Zm-18.64-1a6.16,6.16,0,0,1,4.58-1.1c.93.19,1.86.45,2.78.69.52.14,1,.28,1.55.46s1.14.21,1.08.75Z"></path>
                    </svg>
                  </div>
                  <div class="text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer vel sem imperdiet, venenatis eros ac,mattis mauris.
                    Nam ac purus justo. Vivamus non hendrerit velit.
                  </div>
                  <div class="name">Maria Doe</div>
                </div>
              </div>

              {/* <!-- Testimonial Block --> */}
              <div class="testimonial-block">
                <div class="inner-box">
                  <div class="testimonial_img">
                    <svg class="div_left" fill="#ffffff" viewBox="0 0 25 8">
                      <path d="M1.7,5.2C2,5.4,2.1,5.7,1.9,6C1.8,6.2,1.7,6.3,1.5,6.3c-0.4,0.1-1-0.4-0.7,0.4c0.1,0.4,0.6,0.4,0.9,0.5 c1.8,0.2,3.6-1.2,5.1-1.9c-0.9-0.5-2-1.1-2.3-2.1c-0.2-0.8,0-1.8,0.6-2.4C5.7,0,6.8-0.2,7.7,0.3C8,0.6,8.2,1.2,8.1,1.6 C7.9,2.3,7.6,2.5,7,2.5C7,2.1,7.2,1.3,6.8,1C6.5,0.8,6,0.9,5.7,1.2C4.8,1.9,5.2,3.1,6,3.7C6.5,4,6.9,4.2,7.4,4.4 c0.6,0.2,0.9,0,1.5-0.2c1.3-0.6,2.6-1,3.9-1.4c1.4-0.4,2.8-0.5,4.2-0.4c1.1,0.1,2.2,0.5,3.2,1.1c1,0.6,2.1,0.9,3.2,0.9 c0.4,0,1.6,0,1.6,0.4c0,0.4-1.5,0.1-1.7,0.5c0.2,0.1,0.9,0.3,0.7,0.7c-0.2,0.4-0.9,0-1-0.2c-0.4-0.4-1-0.7-1.6-0.6 c-1,0.1-2.1,0.3-3.1,0.4c-1,0.1-1.8,0.1-2.7,0.2C13.7,6.1,11.7,6.2,9.8,6C9.1,5.7,8.2,5.8,7.5,6.1C6.7,6.5,6,7,5.2,7.3 C4,7.9,1.7,8.4,0.5,7.4S0.5,4.3,1.7,5.2z M20.3,4.2c-1.3-1-3-1.4-4.6-1.1c-0.9,0.2-1.9,0.5-2.8,0.7c-0.5,0.1-1,0.3-1.6,0.5 S10.3,4.5,10.4,5L20.3,4.2z"></path>
                    </svg>

                    {/* <!-- Thumb Box --> */}
                    <figure class="thumb-box">
                      <img src="images/resource/thumb-1.jpg" alt="" />
                    </figure>

                    <svg class="div_right" fill="#ffffff" viewBox="0 0 25 8">
                      <path d="M23.31,5.22a.59.59,0,0,0,.22,1.1c.36.08,1-.38.75.38-.13.4-.57.43-.93.46-1.77.17-3.6-1.21-5.11-1.95.87-.51,2-1.09,2.33-2.1A2.43,2.43,0,0,0,19.94.73,2,2,0,0,0,17.36.34a1.25,1.25,0,0,0-.43,1.29c.17.67.5.84,1.13.88-.05-.42-.28-1.17.12-1.49a1,1,0,0,1,1.17.15c.91.76.42,1.94-.38,2.54a4.91,4.91,0,0,1-1.37.66c-.64.22-.89,0-1.51-.22a25.55,25.55,0,0,0-3.94-1.39,13.51,13.51,0,0,0-4.2-.44A7.77,7.77,0,0,0,4.77,3.43a6.29,6.29,0,0,1-3.21.87c-.37,0-1.59,0-1.56.43s1.48.08,1.74.54c-.24.07-.89.29-.66.71s.86,0,1-.18a1.85,1.85,0,0,1,1.58-.6c1,.06,2.06.33,3.09.44s1.81.11,2.72.19a21.75,21.75,0,0,0,5.7.13,3.18,3.18,0,0,1,2.39.15c.76.37,1.47.84,2.23,1.2,1.25.6,3.56,1.12,4.74.13S24.51,4.34,23.31,5.22Zm-18.64-1a6.16,6.16,0,0,1,4.58-1.1c.93.19,1.86.45,2.78.69.52.14,1,.28,1.55.46s1.14.21,1.08.75Z"></path>
                    </svg>
                  </div>
                  <div class="text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer vel sem imperdiet, venenatis eros ac,mattis mauris.
                    Nam ac purus justo. Vivamus non hendrerit velit.
                  </div>
                  <div class="name">Maria Doe</div>
                </div>
              </div>

              {/* <!-- Testimonial Block --> */}
              <div class="testimonial-block">
                <div class="inner-box">
                  <div class="testimonial_img">
                    <svg class="div_left" fill="#ffffff" viewBox="0 0 25 8">
                      <path d="M1.7,5.2C2,5.4,2.1,5.7,1.9,6C1.8,6.2,1.7,6.3,1.5,6.3c-0.4,0.1-1-0.4-0.7,0.4c0.1,0.4,0.6,0.4,0.9,0.5 c1.8,0.2,3.6-1.2,5.1-1.9c-0.9-0.5-2-1.1-2.3-2.1c-0.2-0.8,0-1.8,0.6-2.4C5.7,0,6.8-0.2,7.7,0.3C8,0.6,8.2,1.2,8.1,1.6 C7.9,2.3,7.6,2.5,7,2.5C7,2.1,7.2,1.3,6.8,1C6.5,0.8,6,0.9,5.7,1.2C4.8,1.9,5.2,3.1,6,3.7C6.5,4,6.9,4.2,7.4,4.4 c0.6,0.2,0.9,0,1.5-0.2c1.3-0.6,2.6-1,3.9-1.4c1.4-0.4,2.8-0.5,4.2-0.4c1.1,0.1,2.2,0.5,3.2,1.1c1,0.6,2.1,0.9,3.2,0.9 c0.4,0,1.6,0,1.6,0.4c0,0.4-1.5,0.1-1.7,0.5c0.2,0.1,0.9,0.3,0.7,0.7c-0.2,0.4-0.9,0-1-0.2c-0.4-0.4-1-0.7-1.6-0.6 c-1,0.1-2.1,0.3-3.1,0.4c-1,0.1-1.8,0.1-2.7,0.2C13.7,6.1,11.7,6.2,9.8,6C9.1,5.7,8.2,5.8,7.5,6.1C6.7,6.5,6,7,5.2,7.3 C4,7.9,1.7,8.4,0.5,7.4S0.5,4.3,1.7,5.2z M20.3,4.2c-1.3-1-3-1.4-4.6-1.1c-0.9,0.2-1.9,0.5-2.8,0.7c-0.5,0.1-1,0.3-1.6,0.5 S10.3,4.5,10.4,5L20.3,4.2z"></path>
                    </svg>

                    {/* <!-- Thumb Box --> */}
                    <figure class="thumb-box">
                      <img src="images/resource/thumb-1.jpg" alt="" />
                    </figure>

                    <svg class="div_right" fill="#ffffff" viewBox="0 0 25 8">
                      <path d="M23.31,5.22a.59.59,0,0,0,.22,1.1c.36.08,1-.38.75.38-.13.4-.57.43-.93.46-1.77.17-3.6-1.21-5.11-1.95.87-.51,2-1.09,2.33-2.1A2.43,2.43,0,0,0,19.94.73,2,2,0,0,0,17.36.34a1.25,1.25,0,0,0-.43,1.29c.17.67.5.84,1.13.88-.05-.42-.28-1.17.12-1.49a1,1,0,0,1,1.17.15c.91.76.42,1.94-.38,2.54a4.91,4.91,0,0,1-1.37.66c-.64.22-.89,0-1.51-.22a25.55,25.55,0,0,0-3.94-1.39,13.51,13.51,0,0,0-4.2-.44A7.77,7.77,0,0,0,4.77,3.43a6.29,6.29,0,0,1-3.21.87c-.37,0-1.59,0-1.56.43s1.48.08,1.74.54c-.24.07-.89.29-.66.71s.86,0,1-.18a1.85,1.85,0,0,1,1.58-.6c1,.06,2.06.33,3.09.44s1.81.11,2.72.19a21.75,21.75,0,0,0,5.7.13,3.18,3.18,0,0,1,2.39.15c.76.37,1.47.84,2.23,1.2,1.25.6,3.56,1.12,4.74.13S24.51,4.34,23.31,5.22Zm-18.64-1a6.16,6.16,0,0,1,4.58-1.1c.93.19,1.86.45,2.78.69.52.14,1,.28,1.55.46s1.14.21,1.08.75Z"></path>
                    </svg>
                  </div>
                  <div class="text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer vel sem imperdiet, venenatis eros ac,mattis mauris.
                    Nam ac purus justo. Vivamus non hendrerit velit.
                  </div>
                  <div class="name">Maria Doe</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!--End Testimonial Section --> */}
      </div>
      {/* <!-- End Page Wrapper --> */}
    </div>
  );
}

export default Index;
