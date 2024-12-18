import React,{ useRef } from "react";
import "./home.css";
import { motion, transform, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AboutUs = () => {
  const { ref: headerRef, inView: headerInView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress}=useScroll({
    target:targetRef,
    offset:["end end", "end start"]
  });

  const opacity = useTransform(scrollYProgress,[0,0.5],[1,0]);
  // const scale = useTransform(scrollYProgress)
  return (
    <div className="relative about_us" id="aboutus" 
    ref={headerRef}
    >
      <div className="absolute top-[40%] left-[50%] tranform translatex-[50%] w-72 h-72 
      bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 
      animate-blob"></div>
       <div className="absolute top-[40%] left-[60%] w-72 h-72 
      bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 
       animate-blob animation-delay-2000"></div>
       <div className="absolute top-[40%] left-[70%] w-72 h-72 
      bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 
       animate-blob animation-delay-4000"></div>
      <motion.p id="head_of_about_us" className="appearanimation" ref={headerRef}
    initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: headerInView ? 1 : 0, x: headerInView ? 0 : 50 }}
    transition={{ duration: 0.5 }}
    >About us</motion.p>
      <div className="content_about_us appearanimation">
        <motion.div className="content_about_us_left appearanimation"
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: headerInView ? 1 : 0, x: headerInView ? 0 : -100 }}
        transition={{ duration: 0.5 }}
        >
          TCET ACM SIGAI is a professional body that was established in January
          2023. It aims to bring together and inculcate research ideologies in
          people from all over India with a passion in the field of Artificial
          Intelligence and Machine Learning by means of conducting seminars,
          debates, Kaggle competitions, etc.
        </motion.div>
        <div className="content_about_us_right appearanimation">
          <motion.div style={{ display: "flex", alignItems:'center' }}
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: headerInView ? 1 : 0, x: headerInView ? 0 : 100 }}
          transition={{ duration: 0.5 }}>
            <p className="content_about_us_right_h1">50+</p>
            <p className="aboutusrighttext">Number of events</p>
          </motion.div>
          <hr style={{ border: "1px solid #232270", marginTop: "0" }} />
          <motion.div style={{ display: "flex", alignItems:'center' }}
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: headerInView ? 1 : 0, x: headerInView ? 0 : 100 }}
          transition={{ duration: 0.5, delay:0.2 }}>
            <p className="content_about_us_right_h1">100+</p>
            <p className="aboutusrighttext">Members</p>
          </motion.div>
          <hr style={{ border: "1px solid #232270", marginTop: "0" }} />
          <motion.div style={{ display: "flex", alignItems:'center' }}
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: headerInView ? 1 : 0, x: headerInView ? 0 : 100 }}
          transition={{ duration: 0.5,delay:0.4 }}>
            <p className="content_about_us_right_h1">30%</p>
            <p className="aboutusrighttext">Growth per year</p>
          </motion.div>
          <hr style={{ border: "1px solid #232270", marginTop: "0" }} />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
