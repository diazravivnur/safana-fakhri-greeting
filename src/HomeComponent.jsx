import React, { useState, useEffect, useRef } from "react";
import { database, ref, onValue } from "./firebase";
import "./style.css";
import "animate.css";
import "yet-another-react-lightbox/styles.css";

import { motion, useInView, useAnimation } from "framer-motion";

import gate from "./assets/gate_wd.png";
import montain from "./assets/mountain_wd.png";
import janur from "./assets/janur.png";
import bunga1 from "./assets/bunga_left.png";
import bunga2 from "./assets/pohon_left.png";
import bunga3 from "./assets/tanaman_left_bunga.png";
import bunga4 from "./assets/tanaman_left.png";

import bungapink_kanan from "./assets/bungapink_kanan.png";
import bungabawah_kanan from "./assets/bungabawah_kanan.png";
import tanaman_kanan from "./assets/tanaman_kanan.png";
import pohonijo_kanan from "./assets/pohonijo_kanan.png";
import padikapas_kanan from "./assets/padikapas_kanan.png";

import merak from "./assets/merak.png";
import kupu1 from "./assets/kupu1.png";
import kupu2 from "./assets/kupu2.png";
import logo from "./assets/Wulan_&_Diaz_logo.png";
import wulandiazopened from "./assets/wulandiazopenedimage.png";
import wulandiazopenedModal from "./assets/wulandiazopened.png";
import bungaataskiri from "./assets/page_sixth/bungataskiri.png";
import bungaataskanan from "./assets/page_sixth/bungataskanan.png";
//halo dunia

const fadeIn = (direction = "up", delay = 0) => {
  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 30 : direction === "down" ? -30 : 0,
      x: direction === "left" ? 30 : direction === "right" ? -30 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: { duration: 1, delay },
    },
  };
  return variants;
};

const floatAnimation = {
  rotate: [0, 1.5, 0, -1.5, 0],
  transition: { duration: 4, repeat: Infinity, repeatType: "mirror" },
};

const MotionImage = ({
  src,
  className,
  initial,
  whileInView,
  animationType = null,
  transition = { duration: 1 },
}) => {
  const ref = useRef();
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView && animationType) {
      if (animationType === "sway") {
        controls.start({
          rotate: [0, 2, 0, -2, 0],
          transition: {
            duration: 4,
            repeat: Infinity,
            repeatType: "mirror",
          },
        });
      } else if (animationType === "bounce") {
        controls.start({
          y: [0, -5, 0, 5, 0],
          transition: {
            duration: 6,
            repeat: Infinity,
            repeatType: "mirror",
          },
        });
      } else if (animationType === "fly") {
        controls.start({
          x: [0, 10, 0, -10, 0],
          y: [0, -5, 0, 5, 0],
          transition: {
            duration: 4,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          },
        });
      }
    }
  }, [isInView, animationType, controls]);

  return (
    <motion.img
      ref={ref}
      src={src}
      className={className}
      initial={initial}
      whileInView={whileInView}
      animate={controls}
      transition={transition}
    />
  );
};

function HomeComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const dataRef = ref(database, "/");
    onValue(
      dataRef,
      (snapshot) => {
        const fetched = snapshot.val();
        if (fetched) {
          setData({ name: fetched.name, vip: fetched.vip });
        } else {
          setData({ name: "Unknown", vip: false });
        }
      },
      {
        onlyOnce: false,
      }
    );
    return () => {};
  }, []);

  if (data === null) {
    return <p>Loading...</p>;
  }
  const bgColor = data.vip ? "#093FB4" : "#347433"; // green-ish if VIP, red-ish if not
  return (
    <div className="app-container">
      <div className="top-background animate__animated animate__fadeInDown animate__slower" />

      <MotionImage
        className="bungataskiri_head"
        src={bungaataskiri}
        animationType="sway"
      />
      <MotionImage
        className="bungaataskanan_head"
        src={bungaataskanan}
        animationType="sway"
      />

      <img
        src={gate}
        className="img_gate animate__animated animate__fadeInUp animate__delay-0.5s"
      />
      <img src={montain} className="img_mountain" />
      <motion.img
        className="img_janur"
        animate={{ rotate: [0, 1.5, 0, -1.5, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        src={janur}
      />
      <img
        src={logo}
        className="img_logo animate__animated animate__fadeInUp animate__delay-0.5s"
      />
      {/* left flowers */}
      <div className="bunga_kiri">
        <motion.img
          src={bunga1}
          className="img_bunga1"
          animate={{ rotate: [0, 1.5, 0, -1.5, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.img
          src={bunga2}
          className="img_bunga2"
          animate={{ rotate: [0, 2, 0, -2, 0] }}
          transition={{ duration: 7, repeat: Infinity }}
        />
        <motion.img
          src={bunga3}
          className="img_bunga3"
          animate={{ rotate: [0, 1, 0, -1, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        <motion.img
          src={bunga4}
          className="img_bunga4"
          animate={{ rotate: [0, 1.5, 0, -1.5, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
      </div>
      {/* right flowers */}
      <div className="bunga_kanan">
        <motion.img
          src={bungapink_kanan}
          className="img_bungapink_kanan"
          animate={{ rotate: [0, -1.5, 0, 1.5, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.img
          src={pohonijo_kanan}
          className="img_pohonijo_kanan"
          animate={{ rotate: [0, 2, 0, -2, 0] }}
          transition={{ duration: 7, repeat: Infinity }}
        />
        <motion.img
          src={padikapas_kanan}
          className="img_padikapas_kanan"
          animate={{ rotate: [0, 1, 0, -1, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        <motion.img
          src={tanaman_kanan}
          className="img_tanaman_kanan"
          animate={{ rotate: [0, 1.5, 0, -1.5, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.img
          src={bungabawah_kanan}
          className="img_bungabawah_kanan"
          animate={{ rotate: [0, 1, 0, -1, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
      </div>
      {/* animals */}
      <div className="binatang">
        <MotionImage
          src={kupu1}
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          animationType="fly"
          transition={{ duration: 1.2 }}
          className="img_kupu1"
        />
        <MotionImage
          src={kupu2}
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          animationType="fly"
          transition={{ duration: 1.2 }}
          className="img_kupu2"
        />
      </div>

      <>
        <h1 className="title-theweddingof-opened animate__animated animate__fadeInUp animate__delay-0.5s">
          The Wedding of
        </h1>
        <h1 className="title-opened animate__animated animate__fadeInUp animate__delay-0.5s">
          Wulan & Diaz
        </h1>

        <h1 className="title-welcome animate__animated animate__fadeInUp animate__delay-0.5s">
          Welcome,
        </h1>
        <h1 className="title-guest animate__animated animate__fadeInUp animate__delay-0.5s">
          {data.name}
        </h1>

        <h1 className="title-by animate__animated animate__fadeInUp animate__delay-0.5s">
          Powered By,
        </h1>
        <h1 className="title-doa animate__animated animate__fadeInUp animate__delay-0.5s">
          Doa Selamanya
        </h1>
        <h1 className="title-ig animate__animated animate__fadeInUp animate__delay-0.5s">
          @doa.selamanya
        </h1>
      </>

      <div className="invite-wrapper"></div>
    </div>
  );
}

export default HomeComponent;
