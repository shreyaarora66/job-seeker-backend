import React, { useContext } from "react";
import { Context } from "../../main";
import { Link } from "react-router-dom";
import { FaYoutube, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
    const { isAuthorized } = useContext(Context);
    return (
        <footer className={isAuthorized ? "footerShow" : "footerHide"}>
            <div>&copy; All Rights Reserved By Priyanka.</div>
            <div>
                <Link to={"https://www.youtube.com/channel/UCO3BHiiMb7bbX4gIh7sL9Qg"} target="_blank">
                    <FaYoutube />
                </Link>
                <Link to={"https://www.linkedin.com/in/priyanka--garg/"} target="_blank">
                    <FaLinkedin />
                </Link>
                <Link to={"https://www.instagram.com/priyanka.garg.10/"} target="_blank">
                    <RiInstagramFill />
                </Link>
            </div>
        </footer>
    );
};

export default Footer;