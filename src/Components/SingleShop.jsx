import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function SingleShop() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  useEffect(() => {
    axios.get(`http://127.0.0.1:3003/item/${id}`).then((res) => {
      setProduct(res.data[0]);
    });
    console.log(product);
  }, []);
  return (
    <div class="page-wrapper">
      {/* <!--Page Title--> */}
      <section
        class="page-title"
        style={{
          backgroundImage: `url("https://preppykitchen.com/wp-content/uploads/2018/04/Funfetti-cake-recipe-new.jpg")`,
        }}
      >
        <div class="auto-container">
          <h1>Birthday Cake</h1>
          <ul class="page-breadcrumb">
            <li>
              <a href="index.html">home</a>
            </li>
            <li>
              <a href="shop.html">Products</a>
            </li>
            <li>Birthday Cake</li>
          </ul>
        </div>
      </section>
      {/* <!--End Page Title--> */}

      {/* <!--Sidebar Page Container--> */}
      <div class="sidebar-page-container">
        <div class="auto-container">
          <div class="row clearfix">
            {/* <!--Content Side--> */}
            <div class="content-side col-lg-9 col-md-12 col-sm-12">
              <div class="shop-single">
                {/* <!-- Product Detail --> */}
                <div class="product-details">
                  {/* <!--Basic Details--> */}
                  <div class="basic-details">
                    <div class="row clearfix">
                      <div class="image-column col-md-6 col-sm-12">
                        <figure class="image">
                          <a
                            href="https://preppykitchen.com/wp-content/uploads/2018/04/Funfetti-cake-recipe-new.jpg"
                            class="lightbox-image"
                            title="Image Caption Here"
                          >
                            <img
                              src="https://preppykitchen.com/wp-content/uploads/2018/04/Funfetti-cake-recipe-new.jpg"
                              alt=""
                            />
                            <span class="icon fa fa-search"></span>
                          </a>
                        </figure>
                      </div>
                      <div class="info-column col-md-6 col-sm-12 p-5">
                        <div class="details-header">
                          <h4 className="p-3">title : {product.title}</h4>

                          <h5 className="p-3">location : {product.location}</h5>

                          <div class="item-price p-3" >
                            {" "}
                            price :{product.price}
                          </div>
                          <div class="text fs-6" className="p-3">
                            {" "}
                            description :{product.description}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- End Footer --> */}
      </div>
      {/* <!-- End Page Wrapper --> */}
    </div>
  );
}

export default SingleShop;
