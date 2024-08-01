import React, { Fragment, useEffect } from "react";
import { CgMouse } from "react-icons/cg";
import "./Home.css";
//import Products from "./component/Product/Products";
//import ProductCard from "./ProductCard.js";
import MetaData from "../layout/MetaData";
import { clearErrors, getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../Loader/Loader";
import { useAlert } from "react-alert";
import Product from "./ProductCard";
import videoBg from "../../images/Back_Grocify.mp4"

const Home = () => {
    const alert = useAlert();
    const dispatch = useDispatch();
    const { error, products } = useSelector(state => state.products);

    useEffect(() => {
        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }
        dispatch(getProduct());
    }, [dispatch, error, alert]);

    return (
        <Fragment>
            {/* <MetaData title="GO GROCERY"></MetaData> */}
        <div className="main">
          <video src={videoBg} preload = "auto" autoPlay loop playsInline/>
          <div className="content">
             <h1>Grocify</h1>
            {/* <a href="#container">
                    <button>
                        View <CgMouse />
                    </button>
                </a>
             */}
            </div>
         
            
        </div>
        
            <div className="firstHomePage">
                <p>Welcome to <span>GROCIFY</span></p> 
                <h1>Order groceries for delivery or curbside pickup near you. Come into your local supermarket or shop online for bakery, deli, meat, seafood, etc...</h1>

                 <a href="#container">
                    <button>
                        VIEW <CgMouse />
                    </button>
                </a>
            </div>

            <h2 className="productHead">Our Products</h2>

            <div className="container" id="container">

                {products && products.map(product => (
                    <Product key={product._id} product={product} />
                ))}
            </div>
        </Fragment>
    );
};

export default Home;

