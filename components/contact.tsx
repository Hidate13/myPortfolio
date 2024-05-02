"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="pt-24 mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>

      <p className="text-gray-700 -mt-6 dark:text-white/80 text-left ml-40">
        For direct connections or further inquiries, please contact me through these channels:
        <ul className="list-disc list-inside align-text-left">
          <li>Full Name: WAHYU HIDAYAT</li>
          <li>🙎‍♂️ Email Address: <a className="underline" href="mailto:wahyu.hidate.hidayat@gmail.com">wahyu.hidate.hidayat@gmail.com</a></li>
          <li>📞 WA Number: <a className="underline" href="https://wa.me/6283111188502">+6283111188502</a></li>
          <li>🤝 LinkedIn Profile: <a className="underline" href="https://www.linkedin.com/in/wahyu-hidayat-1a7258274/">Wahyu Hidayat in LinkedIn</a></li>
          <li>🗺 Location:  Surabaya City, Indonesia</li>
        </ul >
        <br></br>
        Feel free to drop me a message below! Let's connect and make things happen!
      </p>

      <form
        className="mt-10 flex flex-col dark:text-black"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email sent successfully!");
        }}
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
