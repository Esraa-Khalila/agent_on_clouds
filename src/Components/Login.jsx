import React from "react";
import axios from "axios";
import { useState } from "react";
import swal from "sweetalert";
function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [logErr, setlogErr] = useState("");
  const handel = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    setlogErr(false);
  };

  const api = "http://127.0.0.1:3003/login";
  const login = () => {
    let data = {
      email: user.email,
      bodyPassword: user.password,
    };
    console.log(data.bodyPassword);
    axios
      .post(api, data)
      .then((response) => {
        if (response.status == 200) {
          const token = response.data;
          localStorage.setItem("token", token);
          swal({
            title: "login success!",
            icon: "warning",
            button: "sure!",
          }).then(function () {
            window.location.href = "/";
          });
        }
      })
      .catch((err) => {
        throw err;
      });
  };
  return (
    <div>
      <div class="page-wrapper">
        {/* <!-- Preloader --> */}

        <section
          class="recipes-section"
          style={{ backgroundImage: `url('images/background/4.jpg')` }}
        >
          <div class="auto-container">
            <div class="sec-title text-center">
              <div class="divider">
                <img src="images/icons/divider_1.png" alt="" />
              </div>
              <h2>Recipes For You</h2>
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
            <div class="sec-title light text-center">
              <h2>Clients Say</h2>
            </div>

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

        <section class="login-section">
          <div class="auto-container">
            <div class="login-form">
              <h2>Login</h2>
              <h5>
                {logErr ? (
                  <span style={{ color: "red" }}>
                    Invalid Email or password..
                  </span>
                ) : (
                  ""
                )}
              </h5>
              {/* <form method="post" action="contact.html"> */}
              <div class="form-group">
                <label> Email *</label>
                <input type="email" onChange={handel} name="email" required />
              </div>

              <div class="form-group">
                <label>Password *</label>
                <input
                  type="password"
                  onChange={handel}
                  name="password"
                  minLength={8}
                  required
                />
              </div>

              <div class="form-group">
                <input
                  class="theme-btn"
                  type="submit"
                  name="submit-form"
                  value="Log in"
                  onClick={login}
                />
              </div>

              <div class="form-group pass">
                <a href="/register" class="psw">
                  New Account
                </a>
              </div>
              {/* </form> */}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Login;
