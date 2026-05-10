import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import TiltModule from "react-parallax-tilt";
import MarqueeModule from "react-fast-marquee";

const Tilt = TiltModule.default || TiltModule;
const Marquee = MarqueeModule.default || MarqueeModule;
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPython,
  FaWhatsapp,
  FaInstagram,
  FaTiktok,
  FaGithub,
  FaReact,
  FaVuejs,
  FaBars,
  FaTimes
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show custom cursor on non-touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;
    setIsVisible(true);

    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      if (
        e.target?.tagName?.toLowerCase() === "a" ||
        e.target?.tagName?.toLowerCase() === "button" ||
        e.target?.closest?.("a") ||
        e.target?.closest?.("button")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-12 h-12 pointer-events-none z-[9999] flex items-center justify-center mix-blend-screen"
        animate={{
          x: mousePosition.x - 24,
          y: mousePosition.y - 24,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.5 }}
      >
        <motion.div
          className="w-full h-full border-2 border-fuchsia-500/50 absolute"
          animate={{
            rotate: 360,
            borderRadius: isHovering ? ["50%", "50%"] : ["30%", "50%", "30%"],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="w-full h-full border border-cyan-400/50 absolute"
          animate={{
            rotate: -360,
            borderRadius: isHovering ? ["50%", "50%"] : ["50%", "30%", "50%"],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[9999]"
        animate={{ x: mousePosition.x - 4, y: mousePosition.y - 4 }}
        transition={{ type: "tween", duration: 0 }}
      />
    </>
  );
}

export default function App() {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [pesan, setPesan] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);

  // Scroll Progress logic
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 },
  };

  const floatingAnim = {
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const projects = [
    {
      title: "Website Portfolio",
      desc: "Website portfolio modern menggunakan React dan Tailwind CSS.",
      img: "https://via.placeholder.com/400x250",
      demo: "#",
      github: "#",
    },
    {
      title: "Landing Page Bisnis",
      desc: "Landing page modern untuk branding dan penjualan bisnis.",
      img: "https://via.placeholder.com/400x250",
      demo: "#",
      github: "#",
    },
    {
      title: "Aplikasi Python",
      desc: "Program sistem sederhana berbasis Python.",
      img: "https://via.placeholder.com/400x250",
      demo: "#",
      github: "#",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Pesan terkirim (demo)");
  };

  return (
    <>
      <CustomCursor />

      {/* 3. SCROLL PROGRESS BAR */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-500 origin-left z-[99999]"
        style={{ scaleX }}
      />

      {/* WELCOME SCREEN ANIMATION */}
      <AnimatePresence>
        {showWelcome && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#09090b]"
          >
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 1.05, filter: "blur(4px)" }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white tracking-[0.2em] text-center px-6"
            >
              WELCOME TO MY PORTOFOLIO
            
            </motion.h1>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 2.2 }}
        className="text-gray-100 min-h-screen bg-[#09090b] relative overflow-hidden selection:bg-fuchsia-500/30"
      >
        {/* GEN-Z NEON AURORA BACKGROUND */}
        <motion.div
          animate={{
            x: [0, 80, -60, 0],
            y: [0, -80, 50, 0],
            scale: [1, 1.2, 0.9, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute w-96 h-96 bg-fuchsia-600/20 blur-[120px] rounded-full top-0 left-10 pointer-events-none"
        ></motion.div>

        <motion.div
          animate={{
            x: [0, -100, 80, 0],
            y: [0, 100, -70, 0],
            scale: [1, 1.3, 0.8, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
            delay: 2,
          }}
          className="absolute w-[30rem] h-[30rem] bg-cyan-600/20 blur-[150px] rounded-full bottom-10 right-10 pointer-events-none"
        ></motion.div>

        {/* NAVBAR */}
        <nav className="flex justify-between items-center px-6 md:px-12 py-6 bg-[#09090b]/40 backdrop-blur-md border-b border-white/5 sticky top-0 z-50">
          <h2 className="font-black text-2xl tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-cyan-400">
            PORTOFOLIO
          </h2>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-10 font-semibold text-sm tracking-wide uppercase">
            <li>
              <a href="#home" className="hover:text-fuchsia-400 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-fuchsia-400 transition">
                About
              </a>
            </li>
            <li>
              <a href="#experience" className="hover:text-fuchsia-400 transition">
                Experience
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-fuchsia-400 transition">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-fuchsia-400 transition">
                Contact
              </a>
            </li>
          </ul>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-2xl text-white hover:text-fuchsia-400 transition"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* Mobile Dropdown */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="absolute top-full left-0 w-full bg-[#09090b]/95 backdrop-blur-xl border-b border-white/10 md:hidden flex flex-col items-center py-8 gap-8 shadow-2xl font-bold tracking-widest uppercase"
              >
                <a href="#home" onClick={() => setIsMenuOpen(false)} className="text-lg hover:text-fuchsia-400">Home</a>
                <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-lg hover:text-fuchsia-400">About</a>
                <a href="#experience" onClick={() => setIsMenuOpen(false)} className="text-lg hover:text-fuchsia-400">Experience</a>
                <a href="#projects" onClick={() => setIsMenuOpen(false)} className="text-lg hover:text-fuchsia-400">Projects</a>
                <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-lg hover:text-fuchsia-400">Contact</a>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>

        {/* HERO */}
        <section
          id="home"
          className="min-h-[90vh] flex flex-col-reverse md:flex-row items-center justify-center md:justify-around px-6 py-20 md:py-0 gap-10 relative z-10"
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2.2 }}
            className="text-center md:text-left max-w-2xl"
          >
            <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tighter mb-4">
              Hi Saya <br />
              <span className="bg-gradient-to-r from-fuchsia-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-sm">
                Muhammad Alif
              </span>
            </h1>

            <TypeAnimation
              sequence={[
                "Frontend Developer",
                2000,
                "Backend Developer",
                2000,
                "Fullstack Developer",
                2000,
              ]}
              speed={50}
              repeat={Infinity}
              className="block text-xl md:text-2xl text-gray-400 font-bold tracking-wide mb-10"
            />

            <div className="flex gap-4 flex-wrap justify-center md:justify-start">
              <a
                href="https://wa.me/6285773431768"
                target="_blank"
                className="flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full transition hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.2)] font-bold tracking-wide"
              >
                <FaWhatsapp size={20} /> Let's Talk
              </a>

              <a
                href="https://github.com/muhamadalif597-collab"
                target="_blank"
                className="flex items-center gap-3 px-8 py-4 bg-white/5 hover:bg-white/10 text-white rounded-full transition hover:scale-105 border border-white/10 font-bold tracking-wide backdrop-blur-md"
              >
                <FaGithub size={20} /> GitHub
              </a>
            </div>
          </motion.div>

          {/* HERO IMAGE WITH LOOPING ANIMATION */}
          <motion.div variants={floatingAnim} animate="animate">
            <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} scale={1.05} transitionSpeed={2000}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2.4, duration: 0.8 }}
                className="relative group cursor-pointer"
              >
                <div className="absolute inset-0 bg-fuchsia-500 rounded-full blur-3xl opacity-40 group-hover:opacity-60 transition duration-500"></div>
                <img
                  src="/profile.jpg"
                  className="relative w-64 h-64 md:w-96 md:h-96 rounded-full border-4 border-white/10 shadow-[0_0_40px_rgba(217,70,239,0.3)] object-cover filter grayscale hover:grayscale-0 transition duration-500"
                />
              </motion.div>
            </Tilt>
          </motion.div>
        </section>

        {/* 2. RUNNING TEXT / MARQUEE BAR */}
        <div className="py-6 bg-fuchsia-600/10 border-y border-white/5 relative z-10 rotate-[-1.5deg] scale-105 my-16 shadow-2xl backdrop-blur-sm">
          <Marquee speed={60} gradient={false} autoFill={true}>
            <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-cyan-400 mx-8 uppercase tracking-widest drop-shadow-md">
              Frontend Developer • Backend Developer • UI/UX Designer • Creative Coder •
            </span>
          </Marquee>
        </div>

        {/* BENTO GRID (ABOUT & SKILLS) */}
        <motion.section
          id="about"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-16 px-6 max-w-7xl mx-auto relative z-10"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* 1. Large About Card with Tilt */}
            <div className="md:col-span-2 relative">
              <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.01} transitionSpeed={2000} className="h-full">
                <div className="h-full p-10 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] shadow-xl relative overflow-hidden group cursor-pointer">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-fuchsia-500/10 blur-[80px] rounded-full group-hover:bg-fuchsia-500/20 transition duration-500"></div>
                  <h2 className="text-3xl font-black mb-6 tracking-wide text-white uppercase">
                    About Me
                  </h2>
                  <p className="text-gray-300 leading-relaxed text-lg relative z-10 font-medium">
                    Saya adalah seorang developer yang bersemangat menciptakan website
                    interaktif, modern, dan responsif. Berfokus pada pengembangan
                    antarmuka visual yang berani dipadukan dengan performa yang
                    cepat dan bersih.
                  </p>
                </div>
              </Tilt>
            </div>

            {/* Small Stats Cards with Tilt */}
            <div className="grid grid-rows-2 gap-6">
              <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.03} transitionSpeed={2000} className="h-full">
                <div className="h-full p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] shadow-xl flex flex-col justify-center items-center group relative overflow-hidden cursor-pointer">
                  <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
                  <h3 className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-fuchsia-400 to-cyan-400">
                    10+
                  </h3>
                  <p className="text-sm text-gray-400 font-bold tracking-widest uppercase mt-2">
                    Projects
                  </p>
                </div>
              </Tilt>

              <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.03} transitionSpeed={2000} className="h-full">
                <div className="h-full p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] shadow-xl flex flex-col justify-center items-center group relative overflow-hidden cursor-pointer">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
                  <h3 className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 to-fuchsia-400">
                    2+
                  </h3>
                  <p className="text-sm text-gray-400 font-bold tracking-widest uppercase mt-2">
                    Years Exp
                  </p>
                </div>
              </Tilt>
            </div>

            {/* Skills Card with Tilt */}
            <div className="md:col-span-3">
              <Tilt tiltMaxAngleX={2} tiltMaxAngleY={2} scale={1.01} transitionSpeed={2000}>
                <div className="p-10 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] shadow-xl cursor-pointer">
                  <h2 className="text-2xl font-black mb-10 text-white uppercase tracking-widest text-center">
                    Tech Stack
                  </h2>
                  <div className="flex flex-wrap gap-8 justify-center">
                    {[
                      { icon: <FaHtml5 size={40} className="text-[#E34F26]" />, name: "HTML" },
                      { icon: <FaCss3Alt size={40} className="text-[#1572B6]" />, name: "CSS" },
                      { icon: <FaJs size={40} className="text-[#F7DF1E]" />, name: "JavaScript" },
                      { icon: <FaReact size={40} className="text-[#61DAFB]" />, name: "React" },
                      { icon: <FaVuejs size={40} className="text-[#4FC08D]" />, name: "Vue" },
                      { icon: <SiTailwindcss size={40} className="text-[#38B2AC]" />, name: "Tailwind" },
                      { icon: <FaPython size={40} className="text-[#3776AB]" />, name: "Python" },
                      { icon: <FaGithub size={40} className="text-white" />, name: "GitHub" },
                    ].map((skill, i) => (
                      <div
                        key={i}
                        className="flex flex-col items-center gap-4 w-24 group cursor-pointer"
                      >
                        <motion.div
                          animate={{ y: [0, -8, 0] }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: i * 0.1,
                            ease: "easeInOut",
                          }}
                          className="p-5 bg-white/5 border border-white/10 rounded-[1.5rem] group-hover:bg-white/10 group-hover:scale-110 transition duration-300"
                        >
                          {skill.icon}
                        </motion.div>
                        <p className="text-xs font-bold text-gray-500 tracking-wider uppercase group-hover:text-white transition">
                          {skill.name}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </Tilt>
            </div>
          </div>
        </motion.section>

        {/* 5. EXPERIENCE TIMELINE */}
        <motion.section
          id="experience"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-24 px-6 max-w-4xl mx-auto relative z-10"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-16 tracking-wider uppercase text-center">
            Journey & Experience
          </h2>

          <div className="relative border-l-2 border-fuchsia-500/30 ml-4 md:ml-0 md:mx-auto md:w-[600px] flex flex-col gap-12">

            {/* Timeline Item 1 */}
            <div className="relative pl-8 md:pl-10 group">
              <div className="absolute left-[-9px] top-1 w-4 h-4 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.8)] group-hover:scale-150 transition duration-300"></div>
              <h3 className="text-2xl font-bold text-white tracking-wide group-hover:text-cyan-400 transition">Freelance Web Developer</h3>
              <p className="text-cyan-400 text-sm font-bold tracking-widest mb-4 mt-1">2024 - Present</p>
              <p className="text-gray-400 font-medium leading-relaxed bg-white/5 p-6 rounded-2xl border border-white/5 group-hover:border-cyan-500/30 transition">
                Membangun berbagai website portofolio, landing page interaktif, dan sistem web kustom untuk klien lokal. Menggunakan React, Tailwind CSS, dan animasi Framer Motion.
              </p>
            </div>

            {/* Timeline Item 2 */}
            <div className="relative pl-8 md:pl-10 group">
              <div className="absolute left-[-9px] top-1 w-4 h-4 rounded-full bg-fuchsia-500 shadow-[0_0_15px_rgba(217,70,239,0.8)] group-hover:scale-150 transition duration-300"></div>
              <h3 className="text-2xl font-bold text-white tracking-wide group-hover:text-fuchsia-400 transition">Frontend Developer Intern</h3>
              <p className="text-fuchsia-400 text-sm font-bold tracking-widest mb-4 mt-1">2023 - 2024</p>
              <p className="text-gray-400 font-medium leading-relaxed bg-white/5 p-6 rounded-2xl border border-white/5 group-hover:border-fuchsia-500/30 transition">
                Berkolaborasi dengan tim UI/UX untuk mengimplementasikan desain Figma yang rumit ke dalam antarmuka yang nyata, mulus, dan responsif sepenuhnya.
              </p>
            </div>

            {/* Timeline Item 3 */}
            <div className="relative pl-8 md:pl-10 group">
              <div className="absolute left-[-9px] top-1 w-4 h-4 rounded-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.6)] group-hover:scale-150 transition duration-300"></div>
              <h3 className="text-2xl font-bold text-white tracking-wide">Belajar & Eksplorasi</h3>
              <p className="text-gray-300 text-sm font-bold tracking-widest mb-4 mt-1">2022 - 2023</p>
              <p className="text-gray-400 font-medium leading-relaxed bg-white/5 p-6 rounded-2xl border border-white/5 hover:border-white/20 transition">
                Memulai perjalanan pengembangan perangkat lunak dengan mendalami dasar-dasar pemrograman, algoritma, serta membangun proyek pribadi untuk mengasah logika.
              </p>
            </div>

          </div>
        </motion.section>

        {/* PROJECTS */}
        <motion.section
          id="projects"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-24 text-center relative z-10"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-16 tracking-wider uppercase">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-3 gap-10 px-6 md:px-10 max-w-7xl mx-auto">
            {projects.map((p, i) => (
              <Tilt key={i} tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.03} transitionSpeed={2000}>
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] overflow-hidden hover:shadow-[0_15px_40px_rgba(217,70,239,0.15)] hover:border-fuchsia-500/30 transition-all duration-500 flex flex-col group cursor-pointer h-full text-left">
                  <div className="overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] to-transparent z-10 opacity-80"></div>
                    <img
                      src={p.img}
                      className="w-full h-64 object-cover group-hover:scale-110 transition duration-700"
                    />
                  </div>

                  <div className="p-8 flex-1 flex flex-col justify-between relative z-20 -mt-12 bg-white/5 backdrop-blur-2xl rounded-t-[2rem] border-t border-white/10">
                    <div>
                      <h3 className="text-2xl font-black text-white mb-3 tracking-wide">
                        {p.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed font-medium">
                        {p.desc}
                      </p>
                    </div>

                    <div className="flex gap-4 mt-8">
                      <a
                        href={p.demo}
                        target="_blank"
                        className="flex-1 text-center py-4 bg-white text-black hover:bg-gray-200 rounded-xl transition font-black tracking-wider text-xs uppercase shadow-lg"
                      >
                        Live Demo
                      </a>
                      <a
                        href={p.github}
                        target="_blank"
                        className="flex-1 text-center py-4 border border-white/20 hover:border-white/60 hover:bg-white/10 rounded-xl transition font-black tracking-wider text-xs uppercase text-white"
                      >
                        Source Code
                      </a>
                    </div>
                  </div>
                </div>
              </Tilt>
            ))}
          </div>
        </motion.section>

        {/* CONTACT */}
        <motion.section
          id="contact"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-24 text-center relative z-10"
        >
          <div className="max-w-2xl mx-auto px-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[3rem] p-12 shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-wide uppercase">
              Get in Touch
            </h2>

            <p className="text-gray-400 mb-10 text-lg font-medium">
              Punya ide project? Mari berkolaborasi dan ciptakan karya luar
              biasa bersama-sama.
            </p>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 w-full"
            >
              <input
                value={nama}
                onChange={(e) => setNama(e.target.value)}
                placeholder="NAMA LENGKAP"
                className="p-5 rounded-2xl bg-black/40 border border-white/10 outline-none focus:border-fuchsia-500 focus:bg-black/60 transition text-white font-bold tracking-widest text-xs"
                required
              />

              <input
                value={email}
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="EMAIL ADDRESS"
                className="p-5 rounded-2xl bg-black/40 border border-white/10 outline-none focus:border-fuchsia-500 focus:bg-black/60 transition text-white font-bold tracking-widest text-xs"
                required
              />

              <textarea
                value={pesan}
                onChange={(e) => setPesan(e.target.value)}
                placeholder="PESAN ANDA..."
                rows="5"
                className="p-5 rounded-2xl bg-black/40 border border-white/10 outline-none focus:border-fuchsia-500 focus:bg-black/60 transition resize-none text-white font-bold tracking-widest text-xs"
                required
              />

              <button
                type="submit"
                className="bg-gradient-to-r from-fuchsia-600 to-cyan-600 p-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:scale-[1.02] hover:shadow-xl hover:shadow-fuchsia-500/20 transition active:scale-95 text-white"
              >
                Send Message
              </button>
            </form>
          </div>
        </motion.section>

        {/* FOOTER */}
        <footer className="text-center py-12 border-t border-white/10 bg-[#09090b]/80 backdrop-blur-xl relative z-10">
          <div className="flex justify-center gap-10 text-2xl mb-8">
            <a
              href="https://wa.me/6285773431768"
              target="_blank"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-fuchsia-500 hover:border-fuchsia-500 transition-all duration-300"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://instagram.com/daippzz"
              target="_blank"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-fuchsia-500 hover:border-fuchsia-500 transition-all duration-300"
            >
              <FaInstagram />
            </a>
            <a
              href="https://tiktok.com/@alippalpale2"
              target="_blank"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-fuchsia-500 hover:border-fuchsia-500 transition-all duration-300"
            >
              <FaTiktok />
            </a>
            <a
              href="https://github.com/username"
              target="_blank"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-fuchsia-500 hover:border-fuchsia-500 transition-all duration-300"
            >
              <FaGithub />
            </a>
          </div>
          <p className="text-gray-500 text-xs font-bold tracking-widest uppercase">
            © {new Date().getFullYear()} Muhammad Alif. All rights reserved.
          </p>
        </footer>

        {/* FLOATING WA (WITH ACTIVE LOOPING ANIMATION) */}
        <motion.a
          variants={floatingAnim}
          animate="animate"
          href="https://wa.me/6285773431768"
          target="_blank"
          className="fixed bottom-8 right-8 bg-gradient-to-r from-green-400 to-green-600 p-4 rounded-full shadow-xl shadow-green-500/30 hover:scale-110 transition z-50 flex items-center justify-center text-white"
        >
          <FaWhatsapp size={32} />
        </motion.a>
      </motion.div>
    </>
  );
}