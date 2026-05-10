import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
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

export default function App() {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [pesan, setPesan] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);

  // Efek untuk menghilangkan layar Welcome setelah 2.5 detik
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
        ease: "easeInOut"
      }
    }
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
      {/* WELCOME SCREEN ANIMATION */}
      <AnimatePresence>
        {showWelcome && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-zinc-900"
          >
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 1.05, filter: "blur(4px)" }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-[0.2em] text-center px-6"
            >
              WELCOME TO MY PORTFOLIO
            </motion.h1>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 2.2 }} // Muncul sangat halus setelah welcome pudar
        className="text-gray-100 min-h-screen bg-gradient-to-br from-zinc-800 via-zinc-900 to-stone-900 relative overflow-hidden"
      >
        {/* BACKGROUND MOVING GOLD LIGHTS */}
        <motion.div
          animate={{
            x: [0, 80, -60, 0],
            y: [0, -80, 50, 0],
            scale: [1, 1.2, 0.9, 1]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute w-96 h-96 bg-amber-500/15 blur-[120px] rounded-full top-0 left-10 pointer-events-none"
        ></motion.div>

        <motion.div
          animate={{
            x: [0, -100, 80, 0],
            y: [0, 100, -70, 0],
            scale: [1, 1.3, 0.8, 1]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear", delay: 2 }}
          className="absolute w-[30rem] h-[30rem] bg-yellow-600/10 blur-[150px] rounded-full bottom-10 right-10 pointer-events-none"
        ></motion.div>

        {/* NAVBAR */}
        <nav className="flex justify-between items-center px-6 md:px-10 py-5 bg-zinc-900/40 backdrop-blur-md border-b border-white/5 sticky top-0 z-50">
          <h2 className="font-bold text-2xl tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-500">
            PORTOFOLIO.
          </h2>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8 font-medium">
            <li><a href="#home" className="hover:text-amber-400 transition">Home</a></li>
            <li><a href="#about" className="hover:text-amber-400 transition">About</a></li>
            <li><a href="#skills" className="hover:text-amber-400 transition">Skills</a></li>
            <li><a href="#projects" className="hover:text-amber-400 transition">Projects</a></li>
            <li><a href="#contact" className="hover:text-amber-400 transition">Contact</a></li>
          </ul>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-2xl text-white hover:text-amber-400 transition"
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
                className="absolute top-full left-0 w-full bg-zinc-900/95 backdrop-blur-xl border-b border-white/10 md:hidden flex flex-col items-center py-6 gap-6 shadow-2xl"
              >
                <a href="#home" onClick={() => setIsMenuOpen(false)} className="text-lg hover:text-amber-400 font-medium">Home</a>
                <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-lg hover:text-amber-400 font-medium">About</a>
                <a href="#skills" onClick={() => setIsMenuOpen(false)} className="text-lg hover:text-amber-400 font-medium">Skills</a>
                <a href="#projects" onClick={() => setIsMenuOpen(false)} className="text-lg hover:text-amber-400 font-medium">Projects</a>
                <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-lg hover:text-amber-400 font-medium">Contact</a>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>

        {/* HERO */}
        <section
          id="home"
          className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center md:justify-around px-6 py-20 md:py-0 gap-10 relative z-10"
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2.2 }}
            className="text-center md:text-left"
          >
            <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
              Hi Saya <br />
              <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent drop-shadow-sm">
                Muhammad Alif
              </span>
            </h1>

            <TypeAnimation
              sequence={[
                "Frontend Developer", 2000,
                "Backend Developer", 2000,
                "Fullstack Developer", 2000,
              ]}
              speed={50}
              repeat={Infinity}
              className="block mt-4 text-xl text-gray-400 font-medium tracking-wide"
            />

            <div className="mt-8 flex gap-4 flex-wrap justify-center md:justify-start">
              <a
                href="https://wa.me/6285773431768"
                target="_blank"
                className="flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-full transition hover:scale-105 shadow-lg shadow-green-500/20 font-medium"
              >
                <FaWhatsapp size={20} /> WhatsApp
              </a>

              <a
                href="https://instagram.com/daippzz"
                target="_blank"
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white rounded-full transition hover:scale-105 shadow-lg shadow-pink-500/20 font-medium"
              >
                <FaInstagram size={20} /> Instagram
              </a>

              <a
                href="https://tiktok.com/@alippalpale2"
                target="_blank"
                className="flex items-center gap-2 px-6 py-3 bg-zinc-800 hover:bg-zinc-700 text-white rounded-full transition hover:scale-105 shadow-lg shadow-black/20 border border-white/10 font-medium"
              >
                <FaTiktok size={20} /> TikTok
              </a>
            </div>
          </motion.div>

          {/* HERO IMAGE WITH LOOPING ANIMATION */}
          <motion.div
            variants={floatingAnim}
            animate="animate"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2.4, duration: 0.8 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-amber-500 rounded-full blur-2xl opacity-30 animate-pulse"></div>
              <img
                src="/profile.jpg"
                className="relative w-56 h-56 md:w-80 md:h-80 rounded-full border-4 border-amber-500/80 shadow-[0_0_40px_rgba(245,158,11,0.3)] object-cover"
              />
            </motion.div>
          </motion.div>
        </section>

        {/* ABOUT ME / STATS */}
        <motion.section
          id="about"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-24 px-6 max-w-5xl mx-auto text-center relative z-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 tracking-wide">About Me</h2>
          <p className="text-gray-300 leading-relaxed mb-14 max-w-3xl mx-auto text-lg">
            Saya adalah seorang developer yang bersemangat menciptakan website interaktif, modern, dan responsif.
            Saya selalu tertarik mempelajari teknologi baru untuk menghadirkan pengalaman pengguna yang luar biasa
            serta membantu memecahkan masalah melalui kode.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "Projects Completed", value: "10+" },
              { label: "Years Experience", value: "2+" },
              { label: "Happy Clients", value: "5+" },
              { label: "Technologies", value: "8+" }
            ].map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="p-8 bg-zinc-800/30 backdrop-blur-xl border border-white/5 rounded-3xl shadow-xl hover:border-amber-500/30 transition-colors"
              >
                <h3 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-amber-300 to-orange-500 mb-2">{stat.value}</h3>
                <p className="text-sm text-gray-400 font-medium tracking-wide uppercase">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* SKILLS WITH COLORED ICONS */}
        <motion.section
          id="skills"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-24 text-center relative z-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-14 tracking-wide">Skills & Tools</h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 px-6 md:px-10 max-w-5xl mx-auto">
            {[
              { icon: <FaHtml5 size={50} className="text-[#E34F26]" />, name: "HTML" },
              { icon: <FaCss3Alt size={50} className="text-[#1572B6]" />, name: "CSS" },
              { icon: <FaJs size={50} className="text-[#F7DF1E]" />, name: "JavaScript" },
              { icon: <FaReact size={50} className="text-[#61DAFB]" />, name: "React" },
              { icon: <FaVuejs size={50} className="text-[#4FC08D]" />, name: "Vue" },
              { icon: <SiTailwindcss size={50} className="text-[#38B2AC]" />, name: "Tailwind" },
              { icon: <FaPython size={50} className="text-[#3776AB]" />, name: "Python" },
              { icon: <FaGithub size={50} className="text-white" />, name: "GitHub" },
            ].map((skill, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.08, y: -5 }}
                className="p-8 bg-zinc-800/30 backdrop-blur-xl border border-white/5 rounded-3xl flex flex-col items-center gap-5 transition duration-300 shadow-xl hover:shadow-amber-500/10 hover:border-amber-500/30 cursor-pointer group"
              >
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.1, ease: "easeInOut" }}
                  className="group-hover:scale-110 transition-transform duration-300 drop-shadow-md"
                >
                  {skill.icon}
                </motion.div>
                <p className="font-semibold text-gray-300 tracking-wider uppercase text-sm">{skill.name}</p>
              </motion.div>
            ))}
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
          <h2 className="text-3xl md:text-4xl font-bold mb-14 tracking-wide">My Projects</h2>

          <div className="grid md:grid-cols-3 gap-10 px-6 md:px-10 max-w-6xl mx-auto">
            {projects.map((p, i) => (
              <div
                key={i}
                className="bg-zinc-800/30 backdrop-blur-xl border border-white/5 rounded-3xl overflow-hidden hover:scale-[1.03] hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(245,158,11,0.15)] hover:border-amber-500/20 transition-all duration-500 flex flex-col group"
              >
                <div className="overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent z-10 opacity-60"></div>
                  <img
                    src={p.img}
                    className="w-full h-56 object-cover group-hover:scale-110 transition duration-700"
                  />
                </div>

                <div className="p-8 text-left flex-1 flex flex-col justify-between relative z-20 -mt-8 bg-zinc-800/40 backdrop-blur-lg rounded-t-3xl border-t border-white/5">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">{p.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{p.desc}</p>
                  </div>

                  <div className="flex gap-4 mt-8">
                    <a
                      href={p.demo}
                      target="_blank"
                      className="flex-1 text-center py-3 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 rounded-xl transition text-white font-bold text-sm shadow-lg shadow-amber-500/20"
                    >
                      Live Demo
                    </a>
                    <a
                      href={p.github}
                      target="_blank"
                      className="flex-1 text-center py-3 border border-white/20 hover:border-white/60 hover:bg-white/5 rounded-xl transition font-bold text-sm text-gray-200"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-wide">Contact Me</h2>

          <p className="text-gray-400 mb-12 max-w-md mx-auto px-6 text-lg">
            Punya ide project? Atau butuh website untuk bisnis?
            Yuk ngobrol langsung lewat pesan di bawah atau WhatsApp 🚀
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full max-w-lg mx-auto px-6">
            <input
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              placeholder="Nama Lengkap"
              className="p-5 rounded-2xl bg-zinc-800/50 backdrop-blur-sm border border-white/10 outline-none focus:border-amber-500 focus:bg-zinc-800 transition text-white"
              required
            />

            <input
              value={email}
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              className="p-5 rounded-2xl bg-zinc-800/50 backdrop-blur-sm border border-white/10 outline-none focus:border-amber-500 focus:bg-zinc-800 transition text-white"
              required
            />

            <textarea
              value={pesan}
              onChange={(e) => setPesan(e.target.value)}
              placeholder="Pesan Anda..."
              rows="5"
              className="p-5 rounded-2xl bg-zinc-800/50 backdrop-blur-sm border border-white/10 outline-none focus:border-amber-500 focus:bg-zinc-800 transition resize-none text-white"
              required
            />

            <button type="submit" className="bg-gradient-to-r from-amber-500 to-orange-600 p-5 rounded-2xl font-extrabold text-lg hover:scale-[1.02] hover:shadow-xl hover:shadow-amber-500/20 transition active:scale-95 text-white tracking-wide">
              Kirim Pesan
            </button>
          </form>
        </motion.section>

        {/* FOOTER */}
        <footer className="text-center py-12 border-t border-white/10 bg-zinc-900/50 backdrop-blur-md relative z-10">
          <div className="flex justify-center gap-10 text-3xl mb-8">
            <a href="https://wa.me/6285773431768" target="_blank" className="text-gray-400 hover:text-green-500 hover:scale-125 transition-all">
              <FaWhatsapp />
            </a>
            <a href="https://instagram.com/daippzz" target="_blank" className="text-gray-400 hover:text-pink-500 hover:scale-125 transition-all">
              <FaInstagram />
            </a>
            <a href="https://tiktok.com/@alippalpale2" target="_blank" className="text-gray-400 hover:text-white hover:scale-125 transition-all">
              <FaTiktok />
            </a>
            <a href="https://github.com/username" target="_blank" className="text-gray-400 hover:text-white hover:scale-125 transition-all">
              <FaGithub />
            </a>
          </div>
          <p className="text-gray-500 text-sm font-medium tracking-wider">
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