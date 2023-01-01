import React from "react";
import { motion } from "framer-motion";
import { teams } from "../constants";
import styles from "../styles";
function Team() {
  return (
    <section className="bg-black z-1 px-[100px] py-28 text-white">
      <h2 className={`${styles.sectionHeading}`}>
        Meet our <br />
        Team
      </h2>

      <motion.div className="flex flex-nowrap gap-x-[15px]">
        {teams.map((team, index) => (
          <div key={index} className="relative z-1 text-black w-[332px]">
            <div className="w-[332px] h-[332px] bg-[#222222] rounded-[10px]"></div>
            <div>
              <h4 className="text-silver-light font-medium text-[24px] mt-[20px] -tracking-[16]">
                {team.name}
              </h4>
              <p className="text-silver-light leading-4 text-[16px] font-light">
                {team.job}
              </p>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}

export default Team;
