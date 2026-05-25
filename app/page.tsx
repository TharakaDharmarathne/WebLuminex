"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

import {
  ArrowRight,
  Code2,
  Globe,
  Server,
  ShoppingCart,
  Smartphone,
  Cloud,
  Users,
  Briefcase,
  Rocket,
  Star,
  Menu,
  X,
  Mail,
  Phone,
  MessageCircle,
  Send,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Business Websites",
    text: "Modern, responsive and SEO-friendly websites that represent your brand perfectly.",
  },
  {
    icon: Code2,
    title: "Web Applications",
    text: "Custom web applications tailored to streamline your business operations.",
  },
  {
    icon: Server,
    title: "ERP Systems",
    text: "Powerful ERP solutions to manage your business processes efficiently.",
  },
  {
    icon: ShoppingCart,
    title: "POS Systems",
    text: "Smart POS systems to simplify sales and inventory management.",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    text: "Innovative mobile apps for Android and iOS to grow your business.",
  },
  {
    icon: Cloud,
    title: "Hosting & Email",
    text: "Reliable hosting solutions with professional business email setup.",
  },
];

const projects = [
  {
    title: "Lanka UK Pathways",
    category: "Business Website",
    image: "/images/projects/lanka-uk-pathways.png",
  },
  {
    title: "Laksala Stock Counter",
    category: "Real-time Barcode Scan System",
    image: "/images/projects/laksala-stock-counter.png",
  },
  {
    title: "Agro Business",
    category: "UI/UX Design",
    image: "/images/projects/agro.png",
  },
  {
    title: "German Web",
    category: "UI/UX Design",
    image: "/images/projects/german.png",
  },
];

const navLinks = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Services", "#services"],
  ["Portfolio", "#portfolio"],
  ["Contact", "#contact"],
];

export default function Home() {

  const [formData, setFormData] = useState({
  name: "",
  email: "",
  phone: "",
  service: "",
  budget: "",
  message: "",
});

const [isSubmitting, setIsSubmitting] = useState(false);
const [submitMessage, setSubmitMessage] = useState("");

const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setIsSubmitting(true);
  setSubmitMessage("");

  try {
    const response = await fetch("/api/quotation", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (!response.ok) {
        setSubmitMessage(
          typeof result.error === "string"
            ? result.error
            : result.error?.message || "Something went wrong."
        );
        return;
      }

    setSubmitMessage("Quotation request sent successfully!");
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      budget: "",
      message: "",
    });
  } catch {
    setSubmitMessage("Failed to send request. Please try again.");
  } finally {
    setIsSubmitting(false);
  }
};

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="min-h-screen overflow-hidden bg-[#020b16] text-white">
      {/* ================= NAVBAR ================= */}

      <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#020b16]/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="#home" className="flex items-center gap-3">
            <Image
              src="/images/navlogo.png"
              alt="WebLuminex Logo"
              width={50}
              height={50}
              priority
              className="h-auto w-auto object-contain"
            />

            <div>
              <h1 className="text-xl font-bold">WebLuminex</h1>

              <p className="text-xs text-gray-400">
                Illuminating Digital Solutions
              </p>
            </div>
          </a>

          <div className="hidden items-center gap-8 text-lg md:flex">
            {navLinks.map(([item, link]) => (
              <a
                key={item}
                href={link}
                className="transition hover:text-cyan-400"
              >
                {item}
              </a>
            ))}
          </div>

          <a
            href="#quotation"
            className="hidden items-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-orange-500 px-5 py-3 text-sm font-semibold transition hover:scale-105 md:flex"
          >
            Get a Quotation <ArrowRight size={16} />
          </a>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="rounded-xl border border-white/15 p-3 md:hidden"
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* MOBILE MENU */}

        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            className="border-t border-white/10 bg-[#020b16] px-6 py-5 md:hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map(([item, link]) => (
                <a
                  key={item}
                  href={link}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-sm text-gray-300 transition hover:text-cyan-400"
                >
                  {item}
                </a>
              ))}

              <a
                href="#quotation"
                onClick={() => setIsMenuOpen(false)}
                className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-orange-500 px-5 py-3 text-sm font-semibold"
              >
                Get a Quotation <ArrowRight size={16} />
              </a>
            </div>
          </motion.div>
        )}
      </nav>

      {/* ================= HERO SECTION ================= */}

      <section
        id="home"
        className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 py-20 lg:grid-cols-2"
      >
        <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl"></div>

        {/* LEFT CONTENT */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >

          <h2 className="text-5xl font-extrabold leading-tight md:text-6xl">
            Build Smart <br />

            <span className="bg-gradient-to-r from-cyan-400 to-orange-400 bg-clip-text text-transparent">
              Digital Solutions
            </span>

            <br />
            with WebLuminex
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-300">
            We Design and Develop Modern Websites, Web Applications, ERP systems, POS systems, UI/UX Design, 
            and Mobile Solutions for growing businesses.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#quotation"
              className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-orange-500 px-6 py-4 font-semibold transition hover:scale-105"
            >
              Get a Quotation <ArrowRight size={18} />
            </a>

            <a
              href="#services"
              className="flex items-center gap-2 rounded-xl border border-cyan-400 px-6 py-4 font-semibold transition hover:bg-cyan-400/10"
            >
              View Our Services <ArrowRight size={18} />
            </a>
          </div>

          <p className="mt-8 text-sm text-gray-300">
            🚀 Let&apos;s build something amazing together!
          </p>
        </motion.div>

        {/* RIGHT HERO IMAGE */}

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative flex justify-center lg:justify-end"
        >

          <Image
            src="/images/logo.png"
            alt="WebLuminex futuristic hero"
            width={600}
            height={600}
            priority
          />
        </motion.div>
      </section>

      {/* ================= ABOUT ================= */}

      <section id="about" className="mx-auto max-w-7xl px-6 py-12">
        <div className="rounded-3xl border border-white/15 bg-white/5 p-8 backdrop-blur-md md:p-10">
          <p className="text-sm font-semibold text-cyan-400">
            ABOUT WEBLUMINEX
          </p>

          <h3 className="mt-3 text-3xl font-bold">
            We Build Future-Ready Digital Products
          </h3>

          <p className="mt-4 max-w-4xl leading-8 text-gray-400">
            WebLuminex is a modern IT solutions company dedicated to helping businesses grow through innovative digital technologies and smart software solutions. 
            We specialize in designing and developing modern Business Websites, Custom Web Applications, ERP Systems, POS Systems, Mobile Applications, 
            UI/UX Designs, and Professional Business Email solutions tailored for startups, small businesses, and growing enterprises.
          </p>
        </div>
      </section>

      {/* ================= SERVICES ================= */}

      <section id="services" className="mx-auto max-w-7xl px-6 py-12">
        <p className="text-sm font-semibold text-cyan-400">
          OUR SERVICES
        </p>

        <h3 className="mt-3 text-3xl font-bold">
          Solutions That Drive Your Business Forward
        </h3>

        <p className="mt-3 max-w-2xl text-gray-400">
          We provide end-to-end digital solutions to help your business
          grow, automate and scale efficiently.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-white/15 bg-white/5 p-5 transition hover:border-cyan-400/60 hover:bg-white/10"
              >
                <Icon
                  className={`mb-6 ${
                    service.title === "ERP Systems" ||
                    service.title === "POS Systems"
                      ? "text-orange-400"
                      : "text-cyan-400"
                  }`}
                  size={38}
                />

                <h4 className="text-lg font-bold">
                  {service.title}
                </h4>

                <p className="mt-4 text-sm leading-6 text-gray-400">
                  {service.text}
                </p>

                <button
                  className={`mt-5 flex items-center gap-2 text-sm ${
                    service.title === "ERP Systems" ||
                    service.title === "POS Systems"
                      ? "text-orange-400"
                      : "text-cyan-400"
                  }`}
                >
                  Learn More <ArrowRight size={15} />
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* STATS */}

        <div className="mt-8 grid grid-cols-2 gap-4 rounded-2xl border border-white/15 bg-white/5 p-8 md:grid-cols-4">
          {[
            [Users, "15+", "Happy Clients"],
            [Briefcase, "20+", "Projects Completed"],
            [Rocket, "3+", "Years Experience"],
            [Star, "99%", "Client Satisfaction"],
          ].map(([Icon, number, label]: any, index) => (
            <div key={index} className="flex items-center gap-4">
              <Icon
                className={
                  label === "Happy Clients"
                    ? "text-cyan-400"
                    : "text-orange-400"
                }
                size={36}
              />

              <div>
                <h4 className="text-3xl font-bold">
                  {number}
                </h4>

                <p className="text-sm text-gray-400">
                  {label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= PORTFOLIO ================= */}

      <section id="portfolio" className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-sm font-semibold text-cyan-400">
              OUR WORK
            </p>

            <h3 className="mt-3 text-3xl font-bold">
              Recent Projects
            </h3>

            <p className="mt-3 text-gray-400">
              Here are some of the interesting projects we have worked on.
            </p>
          </div>

          <button className="hidden items-center gap-2 rounded-xl border border-cyan-400 px-5 py-3 text-sm font-semibold transition hover:bg-cyan-400/10 md:flex">
            View All Projects <ArrowRight size={16} />
          </button>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-2xl border border-white/15 bg-white/5 transition hover:border-orange-400/60 hover:-translate-y-2"
            >
              <div className="h-[220px] w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="block h-full w-full object-cover transition duration-500 hover:scale-110"
                />
              </div>

              <div className="p-5">
                <h4 className="font-semibold">{project.title}</h4>
                <p className="mt-2 text-sm text-cyan-400">{project.category}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex flex-col items-start justify-between gap-8 rounded-3xl bg-gradient-to-r from-blue-600 via-slate-800 to-orange-500 p-10 md:flex-row md:items-center md:p-14">
          <div>
            <p className="text-sm font-semibold text-cyan-100">
              READY TO GET STARTED?
            </p>

            <h3 className="mt-3 text-3xl font-bold">
              Let&apos;s Build Something Amazing Together
            </h3>

            <p className="mt-3 text-gray-100">
              Have a project in mind? We are here to help you turn your
              ideas into reality.
            </p>
          </div>

          <a
            href="#quotation"
            className="flex items-center gap-2 rounded-xl bg-white px-6 py-4 font-bold text-orange-600 transition hover:scale-105"
          >
            Get a Free Quotation <ArrowRight size={18} />
          </a>
        </div>
      </section>

            {/* ================= QUOTATION FORM ================= */}

      <section id="quotation" className="mx-auto max-w-7xl px-6 py-16">
        <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-white/5 p-8 backdrop-blur-md md:p-10">
          <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl"></div>
          <div className="absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl"></div>

          <div className="relative grid grid-cols-1 gap-10 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold text-cyan-400">
                GET A QUOTATION
              </p>

              <h3 className="mt-3 text-3xl font-bold">
                Tell Us About Your Project
              </h3>

              <p className="mt-4 leading-8 text-gray-400">
                Share your project idea with WebLuminex. We will review your
                requirements and contact you with the best digital solution.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <Mail className="text-cyan-400" size={24} />
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="font-semibold">webluminex@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <Phone className="text-orange-400" size={24} />
                  <div>
                    <p className="text-sm text-gray-400">Phone / WhatsApp</p>
                    <p className="font-semibold">+94 76 267 9122</p>
                  </div>
                </div>

                <a
                  href="https://wa.me/94762679122"
                  target="_blank"
                  className="inline-flex items-center gap-2 rounded-xl border border-green-400/50 bg-green-500/10 px-5 py-3 font-semibold text-green-400 transition hover:bg-green-500/20"
                >
                  <MessageCircle size={18} />
                  Chat on WhatsApp
                </a>
              </div>
            </div>

                        <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-white/15 bg-[#06111f]/80 p-6 shadow-2xl backdrop-blur-xl"
            >
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  type="text"
                  placeholder="Your Name"
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-4 text-sm outline-none placeholder:text-gray-500 focus:border-cyan-400"
                />

                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="Email Address"
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-4 text-sm outline-none placeholder:text-gray-500 focus:border-cyan-400"
                />

                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  type="text"
                  placeholder="Phone Number"
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-4 text-sm outline-none placeholder:text-gray-500 focus:border-cyan-400"
                />

                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="rounded-xl border border-white/10 bg-[#06111f] px-4 py-4 text-sm text-gray-400 outline-none focus:border-cyan-400"
                >
                  <option value="">Select Service</option>
                  <option value="Business Website">Business Website</option>
                  <option value="Web Application">Web Application</option>
                  <option value="ERP System">ERP System</option>
                  <option value="POS System">POS System</option>
                  <option value="Mobile App">Mobile App</option>
                  <option value="Hosting & Business Email">
                    Hosting & Business Email
                  </option>
                </select>

                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="rounded-xl border border-white/10 bg-[#06111f] px-4 py-4 text-sm text-gray-400 outline-none focus:border-cyan-400 md:col-span-2"
                >
                  <option value="">Estimated Budget</option>
                  <option value="Below LKR 25,000">Below LKR 25,000</option>
                  <option value="LKR 25,000 - 50,000">
                    LKR 25,000 - 50,000
                  </option>
                  <option value="LKR 50,000 - 100,000">
                    LKR 50,000 - 100,000
                  </option>
                  <option value="Above LKR 100,000">
                    Above LKR 100,000
                  </option>
                </select>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  rows={5}
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-4 text-sm outline-none placeholder:text-gray-500 focus:border-cyan-400 md:col-span-2"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-orange-500 px-6 py-4 font-semibold transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? "Sending..." : "Send Quotation Request"}
                <Send size={18} />
              </button>

              {submitMessage && (
                <p className="mt-4 text-center text-sm text-cyan-400">
                  {submitMessage}
                </p>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer
        id="contact"
        className="relative overflow-hidden border-t border-white/10 bg-[#020b16]"
      >
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl"></div>
        <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl"></div>

        <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-14 md:grid-cols-2 lg:grid-cols-4">
          {/* BRAND */}
          <div>
            <h3 className="bg-gradient-to-r from-cyan-400 to-cyan-200 bg-clip-text text-4xl font-bold text-transparent">
              WebLuminex
            </h3>
            <p className="mt-6 max-w-sm text-lg leading-9 text-gray-400">
              Illuminating Digital Solutions for modern businesses.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <a
                href="#"
                className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-gray-300 transition hover:border-cyan-400 hover:text-cyan-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M8.051 0C3.602 0 0 3.602 0 8.051c0 4.017 2.926 7.35 6.75 7.95v-5.625H4.718V8.051H6.75V6.275c0-2.017 1.2-3.125 3.037-3.125.881 0 1.8.157 1.8.157v1.98h-1.014c-1 0-1.312.62-1.312 1.256v1.508h2.233l-.357 2.325H9.262V16c3.824-.6 6.75-3.933 6.75-7.95C16.102 3.602 12.5 0 8.051 0z" />
                </svg>
              </a>
              {/* <a
                href="#"
                className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-gray-300 transition hover:border-cyan-400 hover:text-cyan-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C5.826 0 5.555.01 4.703.048 3.85.087 3.269.222 2.76.42a5.44 5.44 0 0 0-1.97 1.28A5.44 5.44 0 0 0 .42 2.76C.222 3.269.087 3.85.048 4.703.01 5.555 0 5.826 0 8c0 2.174.01 2.445.048 3.297.039.853.174 1.434.372 1.943a5.44 5.44 0 0 0 1.28 1.97 5.44 5.44 0 0 0 1.97 1.28c.509.198 1.09.333 1.943.372C5.555 15.99 5.826 16 8 16c2.174 0 2.445-.01 3.297-.048.853-.039 1.434-.174 1.943-.372a5.44 5.44 0 0 0 1.97-1.28 5.44 5.44 0 0 0 1.28-1.97c.198-.509.333-1.09.372-1.943C15.99 10.445 16 10.174 16 8c0-2.174-.01-2.445-.048-3.297-.039-.853-.174-1.434-.372-1.943a5.44 5.44 0 0 0-1.28-1.97A5.44 5.44 0 0 0 13.24.42c-.509-.198-1.09-.333-1.943-.372C10.445.01 10.174 0 8 0zm0 3.892A4.108 4.108 0 1 1 3.892 8 4.108 4.108 0 0 1 8 3.892zm0 1.441A2.667 2.667 0 1 0 10.667 8 2.667 2.667 0 0 0 8 5.333zm4.271-1.845a.96.96 0 1 1-.96.96.96.96 0 0 1 .96-.96z" />
                </svg>
              </a> */}
              <a
                href="#"
                className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-gray-300 transition hover:border-cyan-400 hover:text-cyan-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.21c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.358.54-1.358 1.248 0 .694.52 1.248 1.327 1.248h.015zm4.908 8.21V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.632v3.867h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169H8.651c.03.678 0 7.225 0 7.225h2.4z" />
                </svg>
              </a>

              <a
                href="https://www.tiktok.com/@yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-gray-300 transition hover:border-cyan-400 hover:text-cyan-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.115V2h-3.193v13.766c0 1.554-1.26 2.814-2.814 2.814s-2.814-1.26-2.814-2.814 1.26-2.814 2.814-2.814c.288 0 .566.043.828.123V9.83a6.008 6.008 0 0 0-.828-.057A6.008 6.008 0 0 0 3.8 15.78a6.008 6.008 0 0 0 6.008 6.008 6.008 6.008 0 0 0 6.008-6.008V9.509a7.956 7.956 0 0 0 4.773 1.584V7.9a4.785 4.785 0 0 1-1-.214z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* NAVIGATION */}
          <div>
            <h4 className="text-2xl font-semibold text-white">Navigation</h4>
            <div className="mt-8 flex flex-col gap-5 text-lg text-gray-400">
              <a href="#home" className="transition hover:text-cyan-400">
                Home
              </a>
              <a href="#about" className="transition hover:text-cyan-400">
                About
              </a>
              <a href="#services" className="transition hover:text-cyan-400">
                Services
              </a>
              <a href="#portfolio" className="transition hover:text-cyan-400">
                Portfolio
              </a>
              <a href="#quotation" className="transition hover:text-cyan-400">
                Get Quotation
              </a>
            </div>
          </div>

          {/* CONTACT INFO */}
          <div>
            <h4 className="text-2xl font-semibold text-white">Contact</h4>
            <div className="mt-8 space-y-8 text-gray-400">
              <div>
                <p className="text-sm uppercase tracking-widest text-gray-500">
                  Email
                </p>
                <p className="mt-2 text-xl break-all">webluminex@gmail.com</p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-widest text-gray-500">
                  Location
                </p>
                <p className="mt-2 text-xl leading-9">
                  Temple Junction, Kimbulapitiya Road, Negombo
                </p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-widest text-gray-500">
                  Phone
                </p>
                <p className="mt-2 text-xl">+94 76 267 9122</p>
              </div>
            </div>
          </div>

          {/* NEWSLETTER / CTA */}
          <div>
            <h4 className="text-2xl font-semibold text-white">Stay Updated</h4>
            <p className="mt-4 text-gray-400">
              Subscribe to get the latest news and offers.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none placeholder:text-gray-500 focus:border-cyan-400"
              />
              <button className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-orange-500 px-4 py-3 text-sm font-semibold transition hover:scale-[1.02]">
                Subscribe <Send size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-5 text-sm text-gray-500 md:flex-row">
            <p>© 2026 WebLuminex. All rights reserved.</p>
            <p>
              Designed & Developed by{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-orange-400 bg-clip-text font-semibold text-transparent">
                WebLuminex
              </span>
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}