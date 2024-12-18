"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold mb-6 text-center"
      >
        About Us
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Image
            src="/images/about-hero.jpg"
            alt="Home Services"
            width={500}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="mb-4">
            Welcome to our home services platform! We are dedicated to
            connecting you with the best service providers in Kenya.
          </p>
          <p className="mb-4">
            Our mission is to make it easy for you to find reliable, skilled
            professionals for all your home service needs. Whether you're
            looking for cleaning, repairs, or specialized services, we've got
            you covered.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="bg-gray-100 p-8 rounded-lg shadow-inner mb-12"
      >
        <h2 className="text-2xl font-semibold mb-4 text-center">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <Image
              src="/images/quality.svg"
              alt="Quality"
              width={80}
              height={80}
              className="mx-auto mb-4"
            />
            <h3 className="font-semibold mb-2">Quality Service</h3>
            <p>
              We ensure all our providers meet high standards of excellence.
            </p>
          </div>
          <div className="text-center">
            <Image
              src="/images/reliability.svg"
              alt="Reliability"
              width={80}
              height={80}
              className="mx-auto mb-4"
            />
            <h3 className="font-semibold mb-2">Reliability</h3>
            <p>Count on us for timely and dependable service every time.</p>
          </div>
          <div className="text-center">
            <Image
              src="/images/customer-focus.svg"
              alt="Customer Focus"
              width={80}
              height={80}
              className="mx-auto mb-4"
            />
            <h3 className="font-semibold mb-2">Customer Focus</h3>
            <p>Your satisfaction is our top priority in everything we do.</p>
          </div>
        </div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="text-center text-lg"
      >
        Thank you for choosing our platform. We look forward to helping you make
        your home the best it can be!
      </motion.p>
    </div>
  );
}
