import dynamic from "next/dynamic";
import Head from "next/head";
import About from "../src/components/About"; 
import Home from "../src/components/Home";
import News from "../src/components/News";
import Process from "../src/components/Process";
import Service from "../src/components/Service";
import Skills from "../src/components/Skills";
import Testimonial from "../src/components/Testimonial";
import Layout from "../src/layout/Layout"; 
 

const Index = () => {
  return (
    <Layout>
      <Head>
        <title>Tanvi Khandelwal</title>
      </Head>
      <Home />
      {/* HERO */}
      {/* PROCESS */}
      <Process />
      {/* /PROCESS */}
      {/* ABOUT */}
      <About />
      {/* /ABOUT */}
      {/* PORTFOLIO */}
      {/* <Portfolio /> */}
      {/* /PORTFOLIO */}
      {/* SKILLS */}
      <Skills />
      {/* /SKILLS */}
      {/* SERVICES */}
      <Service />
      {/* /SERVICES */}
      {/* TESTIMONIALS */}
      <Testimonial />
      {/* /TESTIMONIALS */}
      {/* PARTNERS */}
      {/* <Partners /> */}
      {/* /PARTNERS */}
      {/* NEWS */}
      <News /> 
    </Layout>
  );
};
export default Index;
