import { useGSAP } from "@gsap/react";
import LocomotiveScroll from "locomotive-scroll";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const useLocomotive = (start) => {

    useGSAP(() => {
        if (!start) return;

        const scrollEl = document.querySelector("main");

        let locoScroll = new LocomotiveScroll({
            el: scrollEl,
            smooth: true,
            multiplier: 1
        });

        locoScroll.on("scroll", ScrollTrigger.update);

        ScrollTrigger.scrollerProxy(scrollEl, {
            scrollTop(value) {
                if (locoScroll) {
                    return arguments.length
                        ? locoScroll.scrollTo(value, { duration: 0, disableLerp: true })
                        : locoScroll.scroll.instance.scroll.y;
                }
                return null;
            },
            scrollLeft(value) {
                if (locoScroll) {
                    return arguments.length
                        ? locoScroll.scrollTo(value, { duration: 0, disableLerp: true })
                        : locoScroll.scroll.instance.scroll.x;
                }
                return null;
            },
            getBoundingClientRect() {
                return {
                    top: 0,
                    left: 0,
                    width: window.innerWidth,
                    height: window.innerHeight
                };
            },
            pinType: document.querySelector("main").style.transform
                ? "transform"
                : "fixed"
        });

        const lsUpdate = () => {
            if (locoScroll) {
                locoScroll.update();
            }
        };

        ScrollTrigger.defaults({ scroller: scrollEl });

        ScrollTrigger.defaults({
            scroller:
                document.documentElement.classList.contains("has-scroll-smooth") &&
                scrollEl
        });

        ScrollTrigger.addEventListener("refresh", lsUpdate);
        ScrollTrigger.refresh();

        console.log("GSAP and Loco-scroll initiated.");

        return () => {
            locoScroll.destroy();
            ScrollTrigger.removeEventListener("refresh", lsUpdate);
        };
    }, [start]);
};

export default useLocomotive;
