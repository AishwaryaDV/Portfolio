import './App.css';
import {GoogleGeminiEffect} from "./components/ui/GoogleGeminiEffect";
import { useRef } from 'react';
import { useScroll, useTransform } from "framer-motion";
import {LampContainer} from "./components/ui/Lamp"
import { motion } from "framer-motion";
  

function App() {

  return (
  <>
    <div>Hey navbar</div>
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
        >
          Aishwarya DV <br /> Frontend developer
        </motion.h1>
      </LampContainer>
  </>
  )
}

export default App
