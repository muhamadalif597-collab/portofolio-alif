import { useState } from "react";
import { motion } from "framer-motion";
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
} from "react-icons/fa";

export default function App() {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [pesan, setPesan] = useState("");

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 },
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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="text-white min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#1a1446] to-[#090617] relative overflow-hidden"
    >
      {/* BACKGROUND */}
      <div className="absolute w-72 h-72 bg-violet-600/30 blur-3xl rounded-full top-10 left-10"></div>
      <div className="absolute w-72 h-72 bg-purple-500/20 blur-3xl rounded-full bottom-10 right-10"></div>

      {/* NAVBAR */}
      <nav className="flex justify-between px-8 py-4 bg-black/20 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
        <h2 className="font-bold text-xl">MY PORTOFOLIO</h2>
        <ul className="flex gap-6">
          <li><a href="#home">Home</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* HERO */}
      
      <section
        id="home"
        className="min-h-screen flex flex-col md:flex-row items-center justify-around px-6"
      >
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }}>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
            Hi Saya <br />
            <span className="bg-gradient-to-r from-violet-400 to-purple-600 bg-clip-text text-transparent">
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
            className="block mt-4 text-lg"
          />

          <div className="mt-6 flex gap-4 flex-wrap">
            <a
              href="https://wa.me/6285773431768"
              target="_blank"
              className="flex items-center gap-2 px-5 py-3 bg-green-500 hover:bg-green-600 rounded-full transition hover:scale-110 shadow-lg"
            >
              <FaWhatsapp /> WhatsApp
            </a>

            <a
              href="https://instagram.com/daippzz"
              target="_blank"
              className="flex items-center gap-2 px-5 py-3 bg-pink-500 hover:bg-pink-600 rounded-full transition hover:scale-110 shadow-lg"
            >
              <FaInstagram /> Instagram
            </a>

            <a
              href="https://tiktok.com/@alippalpale2"
              target="_blank"
              className="flex items-center gap-2 px-5 py-3 bg-black hover:bg-gray-800 rounded-full transition hover:scale-110 shadow-lg"
            >
              <FaTiktok /> TikTok
            </a>
          </div>
        </motion.div>

        <motion.img
          src="/profile.jpg"
          className="w-44 h-44 md:w-64 md:h-64 rounded-full border-4 border-violet-500 shadow-[0_0_40px_rgba(139,92,246,0.7)] object-cover mt-6"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
        />
      </section>

      {/* VALUE */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center py-16"
      >
        <h2 className="text-3xl font-bold mb-4">Apa yang bisa saya bantu?</h2>
        <p className="text-gray-400 leading-relaxed max-w-xl mx-auto">
          Saya membantu membuat website portfolio, landing page, dan sistem sederhana
          untuk kebutuhan bisnis atau personal branding.
        </p>
      </motion.section>

      {/* SKILLS */}
      <motion.section
        id="skills"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-20 text-center"
      >
        <h2 className="text-3xl mb-10">Skills</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-10">
          <div className="p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl hover:scale-105 hover:-translate-y-2 hover:shadow-2xl transition duration-300">
            <FaHtml5 size={40} />
            <p>HTML — Struktur</p>
          </div>

          <div className="p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl hover:scale-105 hover:-translate-y-2 hover:shadow-2xl transition duration-300">
            <FaCss3Alt size={40} />
            <p>CSS — Styling</p>
          </div>

          <div className="p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl hover:scale-105 hover:-translate-y-2 hover:shadow-2xl transition duration-300">
            <FaJs size={40} />
            <p>JavaScript — Interaksi</p>
          </div>

          <div className="p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl hover:scale-105 hover:-translate-y-2 hover:shadow-2xl transition duration-300">
            <FaPython size={40} />
            <p>Python — Backend</p>
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
        className="py-20 text-center"
      >
        <h2 className="text-3xl mb-10">My Projects</h2>

        <div className="grid md:grid-cols-3 gap-8 px-10">
          {projects.map((p, i) => (
            <div
              key={i}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden hover:scale-105 hover:-translate-y-2 hover:shadow-2xl transition duration-300"
            >
              <img
                src={p.img}
                className="w-full h-40 object-cover hover:scale-110 transition duration-500"
              />

              <div className="p-5 text-left">
                <h3 className="text-xl font-bold">{p.title}</h3>
                <p className="text-gray-400 text-sm mt-2">{p.desc}</p>

                <div className="flex gap-3 mt-4">
                  <a
                    href={p.demo}
                    target="_blank"
                    className="px-4 py-2 bg-violet-500 rounded hover:bg-violet-600 transition text-sm"
                  >
                    Live Demo
                  </a>

                  <a
                    href={p.github}
                    target="_blank"
                    className="px-4 py-2 border border-white/20 rounded hover:bg-white/10 transition text-sm"
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
        className="py-20 text-center"
      >
        <h2 className="text-3xl mb-4">Contact Me</h2>

        <p className="text-gray-400 mb-6">
          Punya ide project? Atau butuh website untuk bisnis?
          <br />
          Yuk ngobrol langsung lewat WhatsApp 🚀
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-80 mx-auto">
          <input
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            placeholder="Nama"
            className="p-3 rounded bg-white/10 outline-none"
          />

          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="p-3 rounded bg-white/10 outline-none"
          />

          <textarea
            value={pesan}
            onChange={(e) => setPesan(e.target.value)}
            placeholder="Pesan"
            className="p-3 rounded bg-white/10 outline-none"
          />

          <button className="bg-violet-500 p-3 rounded hover:bg-violet-600 transition">
            Kirim
          </button>
        </form>
      </motion.section>

      {/* FOOTER */}
      <footer className="text-center py-10 border-t border-white/10">
        <div className="flex justify-center gap-6 text-2xl">
          <a href="https://wa.me/6285773431768" target="_blank">
            <FaWhatsapp />
          </a>
          <a href="https://instagram.com/daippzz" target="_blank">
            <FaInstagram />
          </a>
          <a href="https://tiktok.com/@alippalpale2" target="_blank">
            <FaTiktok />
          </a>
          <a href="https://github.com/username" target="_blank">
            <FaGithub />
          </a>
        </div>
      </footer>

      {/* FLOATING WA */}
      <a
        href="https://wa.me/6285773431768"
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-500 p-4 rounded-full shadow-lg shadow-green-500/50 hover:scale-110 transition z-50"
      >
        <FaWhatsapp size={24} />
      </a>
    </motion.div>
  );
}