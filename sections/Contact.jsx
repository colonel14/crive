import Image from "next/image";
import React, { useState } from "react";
import styles from "../styles";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(name, email, message);
  };
  return (
    <section className=" px-[20px] ">
      <div className="flex bg-silver-light rounded-[20px] pt-[88px] pb-[110px] px-[80px] overflow-hidden">
        <div className="flex-1">
          <h2 className={`${styles.sectionHeading} mb-0`}>
            Feel free to <br /> contact us
          </h2>
          <p className={`${styles.text}`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          </p>
          <form className="w-full mt-12" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Full Name"
              className={`${styles.contactInputs}`}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              className={`${styles.contactInputs}`}
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              placeholder="Message"
              className={`${styles.contactInputs}`}
              rows={8}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <button
              type="submit"
              className="bg-secondary text-white font-bold w-[245px] h-[80px]"
            >
              Let’s Talk!
            </button>
          </form>
        </div>
        <div className="flex-1 relative">
          <Image
            src="/envelope.png"
            width={911}
            height={926}
            alt="envelope"
            objectFit="cover"
            className="absolute top-0 -right-60"
          />
        </div>
      </div>
    </section>
  );
}

export default Contact;
