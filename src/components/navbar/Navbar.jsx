import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Company */}
        </motion.span>
        <div className="social">
          <a href="https://www.github.com/joshuadaniel-8090" rel="noopener" target="_blank">
            <img src="/github.png" alt="" />
          </a>
          <a href="https://www.instagram.com/joshua___daniel/" rel="noopener" target="_blank">
            <img src="/instagram.png" alt="" />
          </a>
          <a href="https://www.linkedin.com/in/joshuadaniel8090" rel="noopener" target="_blank">
            <img src="/linkedin.png" alt="" />
          </a>
          {/* <a href="#">
            <img src="/dribbble.png" alt="" />
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
