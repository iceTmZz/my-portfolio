import Head from "next/head";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/hero";
import Portfolio from "../components/portfolio";
import Skill from "../components/skill";

export default function Home() {
  return (
    <div className=" h-screen snap-y snap-mandatory overflow-scroll overflow-x-hidden scroll-smooth">
      <Head>
        <title>Aayush | Web Developer</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main>
        <section className="snap-start ">
          <Header />

          <Hero />
        </section>
        <section className="snap-start">
          <Skill />
        </section>
        <section className="snap-start">
          <Portfolio />
        </section>
        <section className="snap-start">
          <Contact />
        </section>
      </main>
      <footer className="snap-start">
        <Footer />
      </footer>
    </div>
  );
}
