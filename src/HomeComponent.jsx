import React, { useState, useEffect, useRef } from "react";
import { ref, onValue } from "firebase/database";
import { database } from "./firebase";
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
import logo from "./assets/logo.png";
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
    const attendanceRef = ref(database, "attendance");
    const unsubscribe = onValue(attendanceRef, (snapshot) => {
      const attendanceData = snapshot.val();
      console.log(123, attendanceData);

      if (!attendanceData) {
        setData({
          name: "Tamu",
          groupName: "-",
          vip: false,
        });
        return;
      }

      // Ambil key terakhir (misalnya SF-472)
      const keys = Object.keys(attendanceData);
      console.log(222, keys);
      const latestKey = keys[keys.length - 1];
      const latest = attendanceData[latestKey];

      setData({
        name: latest.guest_name || "Tamu",
        groupName: latest.group_name || "-",
        vip: latest.origin === "vip" || false,
      });

      // Optional popup
      const popup = document.createElement("div");
      popup.innerText = `🎉 ${latest.guest_name || "Tamu"} telah hadir!`;
      popup.className = "popup-alert";
      document.body.appendChild(popup);
      setTimeout(() => popup.remove(), 5000);
    });

    return () => unsubscribe();
  }, []);

  if (data === null) {
    return <p>Loading...</p>;
  }
  const bgColor = data.vip ? "#093FB4" : "#347433"; // green-ish if VIP, red-ish if not
  return (
    <div className="app-container">
      <div className="top-background animate__animated animate__fadeInDown animate__slower" />
      <img
        src={logo}
        className="img_logo animate__animated animate__fadeInUp animate__delay-0.5s"
      />
      <>
        <h1 className="title-theweddingof-opened animate__animated animate__fadeInUp animate__delay-0.5s">
          The Wedding of
        </h1>
        <h1 className="title-opened animate__animated animate__fadeInUp animate__delay-0.5s">
          Safana & Fakhri
        </h1>

        <h1 className="title-welcome animate__animated animate__fadeInUp animate__delay-0.5s">
          Welcome,
        </h1>
        <h1 className="title-guest animate__animated animate__fadeInUp animate__delay-0.5s">
          {data.name}
        </h1>
        <h1 className="title-group animate__animated animate__fadeInUp animate__delay-0.5s">
          {data.groupName}
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
