import './App.css'
import {useState} from "react";
import { HiChevronDown } from "react-icons/hi2";
import logo from "./assets/logos.svg"
import { HiMagnifyingGlass } from "react-icons/hi2";
import twit from "./assets//twit.svg"
import instagram from "./assets/inst.svg"
import face from "./assets/face.svg"
import code from "./assets/code.svg"
import { FiList } from "react-icons/fi";
import { FiX } from "react-icons/fi";
export default function head() {
    const[isOpen, setIsOpen] = useState(false);
    const[isOpenBurger, setIsOpenBurger] = useState(false);
    const toggleDropdown = () => {
        setIsOpen((prevState) => !prevState);
    };
    const OpenBurger = () => {
        setIsOpenBurger((prevState) => !prevState);
    }
    return (
        <>
            <div className="Header">
                <div className="container1">
                    <img src={logo} alt=""/>
                    <p>antools.</p>
                </div>
                <div className="container2">
                    <a href="">Home</a>
                    <button className="btn" onClick={toggleDropdown}>
                        Categories
                        <HiChevronDown/>
                    </button>
                    {isOpen && (
                        <div className="dropdown">
                            <button className="btn1">Владимир</button>
                            <div className="dropdown-content">
                                <button>ВОВААааа</button>
                                <button>заебался</button>
                            </div>


                        </div>
                    )}

                    <a href="">My Collections</a>
                    <a href="">Blog</a>
                </div>
                <div className="container3">
                    <a href="">Login</a>
                    <a href="" className="sign">Sign Up</a>
                </div>
                <button className="OpenBurger" onClick={OpenBurger}>
                    <FiList size={30} color="#fff"/>
                </button>
            </div>

            {isOpenBurger && (
                <div className="burger">
                    <button
                        className="close"
                    onClick={() => {setIsOpenBurger((prevState) => !prevState);}}>
                        <FiX size={30} color="#fff" className="icon_close"/>
                    </button>
                    <a href="">Home</a>
                    <select name="" id="" className="select">
                        <option value="">блять</option>
                        <option value="">я</option>
                        <option value="">устал</option>
                        <option value="">сука</option>
                    </select>

                    <a href="">My Collections</a>
                    <a href="">Blog</a>
                    <a href="">Login</a>
                    <a href="" className="sign">Sign Up</a>
                </div>
            )}

            <div className="head_bot">
                <div className="head_bot2">
                <div className="block">
                        <h1>Awesome tools for
                            Designer & Developer.</h1>
                        <p>Antool is a web collection of information on paid or free Design and Development tools</p>
                    </div>
                    <div className="search">
                        <HiMagnifyingGlass className="icon" color="rgba(255, 255, 255, 0.6)" size={25}/>
                        <input type="text" placeholder="find more than 430+ tools..."/>
                        <button>Search</button>
                    </div>
                    <div className="social">
                        <img src={face} alt=""/>
                        <img src={instagram} alt=""/>
                        <img src={twit} alt=""/>
                    </div>

                </div>
                <img className="main_pic" src={code} alt=""/>
            </div>
        </>
    )
}