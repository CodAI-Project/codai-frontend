'use client'
import 'react-toastify/dist/ReactToastify.css';


import Feature from "./components/Feature";
import Pricing from "./components/Pricing";
import Hero from "./components/Hero";
import Layout from "./components/Layout/Layout";
import SeoHead from "./components/SeoHead";

import { ToastContainer } from 'react-toastify';

export default function App() {

  return (
    <div>
      <SeoHead title='CodAI' />
      <Layout>
        <Hero />
        <Feature />
        {/* <Pricing /> */}
      </Layout>
      <ToastContainer />
    </div>
  );
}
