import { useState, useEffect, useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import Layout from "../components/constants/Layout";
import Productions from "../components/productions/Productions";
import {
  TextReveal,
  TextRevealPinned,
} from "../components/animations/TextReveal";
import { Parallax, ParallaxOverflow } from "../components/animations/Parallax";
import { FadeIn, FadeInStagger } from "../components/animations/FadeIn";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import ReelModal from "../components/modal/ReelModal";

gsap.registerPlugin(ScrollTrigger);
export default function Home() {
  useEffect(() => {
    let video = document.querySelector("video");
    window.addEventListener("scroll", function () {
      let value = 0.7 + window.scrollY / -1000;
      video.style.opacity = value;
    });
  }, []);

  const [open, setOpen] = useState(false);

  const plus = useRef();
  const overlay = useRef();
  useEffect(() => {
    gsap.to(plus.current, {
      scale: 100,
      //force3D: false,
      scrollTrigger: {
        trigger: overlay.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: true,
      },
    });
  }, []);

  return (
    <Layout>
      <section className="landing full-bleed">
        <video
          className="video-full-screen"
          poster="/images/showreel.png"
          src="/images/showreel.m4v"
          muted
          playsInline
          autoPlay
          loop
        />

        <div className="linear-gradient-div"></div>

        <div className="landing-content">
          <h1 className="landing-content-title">
            <span className="wrapper-span">
              <span>D</span>
              <span>O</span>
              <span>N</span>
              <span>A</span>
              <span>T</span>
              <span>e</span>
            </span>
          </h1>
          <h1 className="landing-content-title">
            <span className="wrapper-span">
              <span>B</span>
              <span>L</span>
              <span>O</span>
              <span>o</span>
              <span>D</span>
            </span>
          </h1>
          <ReelModal />
          <a
            href="http://www.benhviendanang.com/"
            className="watch-showreel-btn"
          >
            Nhấn vào đây
          </a>
        </div>
      </section>

      <section className="self-intro">
        <TextReveal>
          <p>
            Hiến máu cứu người <br />– Giữ nhịp đập trái tim.
          </p>
          <p>
            Mỗi trái tim <br />
            Một ngọn lửa anh hùng
          </p>
          <p>
            Giọt máu
            <br />
            Kho báu tình người
          </p>
        </TextReveal>
      </section>

      <section className="skills">
        <TextRevealPinned>
          <h3>Hiến máu cứu người</h3>
          <h3>Một nghĩa cử cao đẹp</h3>
          <h3>Trao đời sự sống</h3>
          <h3>Sức khỏe ngày mai</h3>
          <h3>Một cuộc đời ở lại</h3>
        </TextRevealPinned>
        <Parallax>
          <div id="img-wrapper_1-1" className="image-wrapper" data-speed="0.2">
            <ParallaxOverflow>
              <Image
                src="/images/skills/1-1.webp"
                objectFit="contain"
                width="1366"
                height="570"
                loading="eager"
              />
            </ParallaxOverflow>
          </div>
          <div id="img-wrapper_1-2" className="image-wrapper" data-speed="0.2">
            <ParallaxOverflow>
              <Image
                src="/images/skills/1-2.webp"
                objectFit="contain"
                width="640"
                height="360"
                loading="eager"
              />
            </ParallaxOverflow>
          </div>
          <div id="img-wrapper_1-3" className="image-wrapper" data-speed="0.2">
            <ParallaxOverflow>
              <Image
                src="/images/skills/1-3.webp"
                objectFit="contain"
                width="519"
                height="369"
                loading="eager"
              />
            </ParallaxOverflow>
          </div>
          <div id="img-wrapper_1-4" className="image-wrapper" data-speed="0.9">
            <ParallaxOverflow>
              <Image
                src="/images/skills/1-4.webp"
                objectFit="contain"
                width="750"
                height="336"
                loading="eager"
              />
            </ParallaxOverflow>
          </div>
          <div id="img-wrapper_2-1" className="image-wrapper" data-speed="0.7">
            <ParallaxOverflow>
              <Image
                src="/images/skills/2-1.webp"
                objectFit="contain"
                width="1080"
                height="1350"
                loading="eager"
              />
            </ParallaxOverflow>
          </div>
          <div id="img-wrapper_2-2" className="image-wrapper" data-speed="0.6">
            <ParallaxOverflow>
              <Image
                src="/images/skills/2-2.webp"
                objectFit="contain"
                width="640"
                height="800"
                loading="eager"
              />
            </ParallaxOverflow>
          </div>
          <div id="img-wrapper_2-3" className="image-wrapper" data-speed="0.5">
            <ParallaxOverflow>
              <Image
                src="/images/skills/2-3.webp"
                objectFit="contain"
                width="750"
                height="938"
                loading="eager"
              />
            </ParallaxOverflow>
          </div>
          <div id="img-wrapper_2-4" className="image-wrapper" data-speed="1.2">
            <ParallaxOverflow>
              <Image
                src="/images/skills/2-4.webp"
                objectFit="contain"
                width="640"
                height="729"
                loading="eager"
              />
            </ParallaxOverflow>
          </div>
          <div id="img-wrapper_3-1" className="image-wrapper" data-speed="0.8">
            <ParallaxOverflow>
              <Image
                src="/images/skills/3-1.webp"
                objectFit="contain"
                width="480"
                height="853"
                loading="eager"
              />
            </ParallaxOverflow>
          </div>
          <div id="img-wrapper_3-2" className="image-wrapper" data-speed="1.2">
            <ParallaxOverflow>
              <Image
                src="/images/skills/3-2.webp"
                objectFit="contain"
                width="640"
                height="1138"
                loading="eager"
              />
            </ParallaxOverflow>
          </div>
          <div id="img-wrapper_3-3" className="image-wrapper" data-speed="1.1">
            <ParallaxOverflow>
              <Image
                src="/images/skills/3-3.webp"
                objectFit="contain"
                width="320"
                height="569"
                loading="eager"
              />
            </ParallaxOverflow>
          </div>
        </Parallax>
      </section>

      <section className="brands">
        <FadeIn>
          <p>Hiến máu thường xuyên vì một thế giới khoẻ mạnh hơn</p>
        </FadeIn>
        {/* <FadeInStagger>
          <img src="/images/brands/samsung.png" alt="Samsung" />
          <img src="/images/brands/trt.png" alt="TRT" />
          <img src="/images/brands/altinpusula.png" alt="Altın Pusula" />
          <img src="/images/brands/aydindogan.png" alt="Aydın Doğan Vakfı" />
          <img src="/images/brands/yildizholding.png" alt="Yıldız Holding" />
        </FadeInStagger> */}
      </section>

      <section className="featured-productions full-bleed">
        <div className="overlay" ref={overlay}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 4519 3213"
            preserveAspectRatio="xMidYMid slice"
            className="plus"
            ref={plus}
          >
            <path
              fill="black"
              d="M4519,0 L4519,3213 L0,3213 L0,0 L4519,0 Z M2322,1587.74993 L2278.24999,1587.74999 L2278.25006,1544 L2240.75003,1544 L2240.74994,1587.75003 L2197,1587.75011 L2197,1625.24989 L2240.74991,1625.25007 L2240.75008,1669 L2278.24992,1669 L2278.24996,1625.25003 L2322,1625.24999 L2322,1587.74993 Z"
              fillRule="evenodd"
            ></path>
          </svg>
        </div>
        <Productions />
      </section>
    </Layout>
  );
}