import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import City from "../images/city.png";
import Q1 from "../images/1.jpg";
import Q2 from "../images/2.jpg";
import Q3 from "../images/3.jpg";
import Q4 from "../images/4.jpg";
import Q5 from "../images/5.jpg";

function QuoteSection() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex items-center flex-wrap mx-auto w-[80%]">
        <motion.div
          initial={{ opacity: 0, y: -40, x: -40 }}
          whileInView={{ opacity: 1, y: 0, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="fle flex-co items-cnter"
        >
          <div className="flex flex-row mr-auto">
            <Image src={Q1} className="w-48 rounded"/>
            <Image src={Q2} className="w-48 rounded"/>
            <Image src={Q3} className="w-48 rounded"/>
            <Image src={Q4} className="w-48 rounded"/>
            <Image src={Q5} className="w-48 rounded"/>
          </div>

          <div className="mt-20">
            <Image src={City} />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40, x: 40 }}
          whileInView={{ opacity: 1, y: 0, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex items-center flex-col ml-auto"
        >
          <p className="text-[#008036] text-[15px] lg:text-[20px] my-10 max-w-lg">
            “The future is green energy, sustainability, renewable energy.”
          </p>
          <p className="mr-auto text-[15px] lg:text-[20px]">Arnold Schwarzenegger</p>
        </motion.div>
      </div>
    </div>
  );
}

export default QuoteSection;
