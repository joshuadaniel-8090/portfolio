import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Designed a Website",
    title1: "For Bonjour Canada",
    img: "./public/canadaflag.png",
    desc: "Developed a professional website for a client, demonstrating my ability to create visually stunning, responsive, and user-friendly designs. Passionate about transforming ideas into engaging digital experiences that drive results.",
    webpage: "https://bonjourcanada.com"
  },
  {
    id: 2,
    title: "A Lyric Webpage",
    title1: "For Holy Trinity Church",
    img: "./public/lyric.png",
    desc: "Developed a user-friendly lyrics webpage for our church, making it easy for everyone to access and follow along with songs. This project showcases my skills in creating practical and engaging digital solutions.",
    webpage: "https://tamil-christmas.surge.sh"
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <h3>{item.title1}</h3>
            <p>{item.desc}</p>
            <button><a href={item.webpage} rel="noopener" target="_blank">Visit Site</a></button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
  ``
const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
