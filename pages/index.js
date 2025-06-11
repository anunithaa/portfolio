import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Navbar from "../components/navbar";
import ProjectCard from "../components/project-card";
import Timeline from "../components/timeline";
import FlipCard from "../components/flipcard";
import Footer from "../components/footer";
import { motion } from "framer-motion";
import {
  FaReact,
  FaJava,
  FaCss3,
  FaPython,
  FaNodeJs,
  FaHtml5,
} from "react-icons/fa";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdMail, IoLogoJavascript } from "react-icons/io";
import {
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiArduino,
  SiCplusplus,
} from "react-icons/si";

const timelineData = [
  {
    title: "Virtual Waksman Institute Summer Experience",
    job: "Scholar",
    date: "Aug 2022 - Aug 2022",
    description: [
      "An intensive two-week program focusing on bioinformatics and genetic sequencing, primarily learning about protein sequences and their functions in cellular stability",
      "Learned about experimental design and the procedures behind analyzing and creating clones from vectors with inserts",
      "Completed assignments and assessments in relation to bioinformatics (91.88% average grade)",
      "Submitted two verified DNA sequences to NCBI (National Center for Biotechnology Information)",
    ],
    links: [
      {
        url: "https://www.ncbi.nlm.nih.gov/nuccore/2314672845",
        text: "Sequence 1",
      },
      {
        url: "https://www.ncbi.nlm.nih.gov/nuccore/2309320176",
        text: "Sequence 2",
      },
    ],
  },
  {
    title: "Code 4 Tomorrow",
    job: "Partnerships Member",
    date: "Sep 2022 - May 2023",
    description: [
      "Maintained existing partnerships and reached out to create new partnerships",
      "Sent emails to 600+ recipients for updates on events and classes.",
      "Utilized mass emailing software (sender.net)",
      "Created graphics and posts via Canva",
    ],
    links: [
      {
        url: "https://www.code4tomorrow.org/about.camp",
        text: "Links",
      },
    ],
  },
  {
    title: "Code 4 Tomorrow",
    job: "President",
    date: "May 2023 - Aug 2024",
    description: [
      "Hosted summer classes with 160+ student sign-ups across three different continents",
      "Hosted Hack4Tomorrow hackathon that partnered with AI Entrepreneurs at Berkley and received sponsorships from Desmos",
      "Managed Internal Affairs, Outreach, and Classes departments within the organization",
      "Hosted weekly meetings for all 4 departments within the organization• Hosted summer classes with 160+ student sign-ups across three different continents • Hosted Hack4Tomorrow hackathon that partnered with AI Entrepreneurs at Berkley and received sponsorships from Desmos • Managed Internal Affairs, Outreach, and Classes departments within the organization • Hosted weekly meetings for all 4 departments within the organization",
    ],
    links: [
      {
        url: "https://www.code4tomorrow.org/about.camp",
        text: "Links",
      },
    ],
  },
  {
    title: "Bitcamp",
    job: "Hackathon Organizer",
    date: "Oct 2024 - Present",
    description: [
      "Oversaw partnerships and events with machine learning campus organizations (BigTh!nkAI, AI/ML)",
      "Responsible for promotional events, hackathon workshops, and event scheduling",
      "Weekly meetings with partner organizations as well as organizing team ",
      "Hosted Bitcamp Bootcamp with 50 sign-ups and introduced new hackers to Bitcamp and its tracks",
    ],
    links: [
      {
        url: "https://bit.camp", // Replace with actual Bitcamp URL
        text: "Links",
      },
    ],
  },
];

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Anunithaa | Portfolio</title>
        <link
          rel="icon"
          href="/logo.png"
          alt="Logo"
          style={{ width: "120px", height: "120px" }}
        />
      </Head>
      <Navbar />
      <main>
        <motion.section
          id="home"
          className={styles.section}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <section id="home" className={styles.section}>
            <h1 className={styles.title}>
              Hello, <Link href="#about">I'm Anunithaa!</Link>
            </h1>

            <p className={styles.description}>welcome to my portfolio :) </p>

            <div className={styles.socialIcons}>
              <a
                href="https://github.com/anunithaa"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/anunithaa-rajakumaresan-180261238"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
              <a
                href="mailto:anunithaa.rajakumaresan@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IoMdMail />
              </a>
            </div>
          </section>
        </motion.section>
        <motion.section
          id="about"
          className={styles.section}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <section id="about" className={styles.section}>
            <div className="sectionTitleWrapper">
              <img
                src="/images/flowericon.png"
                alt="Flower"
                className={styles.sectionIcon}
              />
              <h2 className={styles.sectionTitle}>About Me ✧˖°</h2>
            </div>
            <div className={styles.aboutContent}>
              <div className={styles.aboutText}>
                <p className={styles.leftText}>
                  Hey! I'm Anunithaa and I'm a sophomore at the University of
                  Maryland pursuing a Bachelor's in Computer Engineering. I plan
                  on minoring in quantum computing and have experience in both
                  hardware and software.
                </p>
                <p className={styles.leftText}>
                  As of right now, I'm specifically working with Arduino to code
                  physical robots as well as learning Next.js and CSS for
                  upcoming hackathon projects.
                </p>
              </div>
              <img
                src="/images/profile.jpg"
                alt="Anunithaa"
                className={styles.aboutImage}
              />
            </div>
          </section>
        </motion.section>
        <motion.section
          id="projects"
          className={styles.section}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <section id="projects" className={styles.section}>
            <div className="sectionTitleWrapper">
              <h2 className={styles.sectionTitle}>✧˖° Projects</h2>
              <img
                src="/images/blueberries.svg"
                alt="Flower"
                className={styles.sectionIcon}
                style={{ marginLeft: "1.2rem" }}
              />
            </div>
            <div className={styles.projectGrid}>
              <ProjectCard
                title="HydroQuack"
                description="Designed an Over-Terrain-Vehicle for ENES100 to traverse obstacles, collect 20 mL water samples, detect pollutants, and measure water height. We programmed an Arduino to control a mechanical arm, 2-wheel drive, and ultrasonic distance sensors for navigation and depth measurement. Afterwards, we trained an ESP32 machine learning camera with 200+ images via reinforcement learning to identify pollutants. During the trial the system autonomously navigated using obstacle detection from distance sensors while recording water depth for analysis."
                date="December 2024"
                tags={["College", "Autodesk Fusion", "Arduino", "C++"]}
                github="/HydroQuack - Final Design Briefs.pdf"
              />
              <ProjectCard
                title="Next Stop"
                description="Next Stop is a web app that helps travelers track train delays and suggests nearby activities based on delay duration and user interests. It generates personalized itineraries using the Amtrak API for real-time train data, Google Places API for location discovery, and Gemini API for smart recommendations. The React/Tailwind CSS frontend delivers a clean UI, while an Express backend manages API calls. The app simplifies trip planning by accounting for delays, optimizing free time, and offering users several different schedule options."
                date="March 2024"
                tags={[
                  "Hackathon",
                  "ReactJS",
                  "TailwindCSS",
                  "ExpressJS",
                  "JavaScript",
                  "CSS",
                  "HTML",
                ]}
                github="https://github.com/eshavignesh123/next-stop"
              />
            </div>
          </section>
        </motion.section>

        <motion.section
          id="experience"
          className={styles.section}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <section id="experience" className={styles.section}>
            <div className="sectionTitleWrapper">
              <img
                src="/images/peach.svg"
                alt="Flower"
                className={styles.sectionIcon}
              />
              <h2 className={styles.sectionTitle}>Activities ✧˖°</h2>
            </div>
            <Timeline items={timelineData} />
          </section>
        </motion.section>

        <motion.section
          id="skills"
          className={styles.section}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <section id="skills" className={styles.section}>
            <div className="sectionTitleWrapper">
              <h2 className={styles.sectionTitle}>✧˖° Skills</h2>
              <img
                src="/images/strawberry.svg"
                alt="Blueberry"
                className={styles.sectionIcon}
                style={{ marginLeft: "1.2rem" }}
              />
            </div>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              <FlipCard
                frontText="CSS"
                years="1 year"
                type="language"
                icon={<FaCss3 />}
                listOne="Experience with it in hackathon projects"
                listTwo="Working with it for personal projects"
                listThree="Still learning the language"
              />
              <FlipCard
                frontText="JavaScript"
                years="2 years"
                type="language"
                icon={<IoLogoJavascript />}
                listOne="Experience with it in hackathon projects"
                listTwo="Working with it for personal projects"
                listThree="Still learning the language"
              />
              <FlipCard
                frontText="TypeScript"
                years="2 years"
                type="language"
                icon={<SiTypescript />}
                listOne="Experience with it for hackathons"
                listTwo="Working with it for personal projects"
                listThree="Still learning the language"
              />
              <FlipCard
                frontText="Java"
                years="5 years"
                type="language"
                icon={<FaJava />}
                listOne="Experience with it for academic projects"
                listTwo="Working with it for technical projects"
                listThree="Fairly confident with the language"
              />
              <FlipCard
                frontText="Python"
                years="5 years"
                type="language"
                icon={<FaPython />}
                listOne="Experience with it for academic projects"
                listTwo="Working with it for machine learning"
                listThree="Fairly confident with the language"
              />
              <FlipCard
                frontText="HTML"
                years="1 year"
                type="language"
                icon={<FaHtml5 />}
                listOne="Experience with it for hackathons"
                listTwo="Working with it for personal projects"
                listThree="Still learning language"
              />
              <FlipCard
                frontText="C++"
                years="1 year"
                type="language"
                icon={<SiCplusplus />}
                listOne="Experience with it for school projects"
                listTwo="Worked with it to build a robot"
                listThree="Still learning language"
              />
              <FlipCard
                frontText="ReactJS"
                years="2 years"
                type="framework"
                icon={<FaReact />}
                listOne="Experience with it in hackathon projects"
                listTwo="Working with it for personal projects"
                listThree="Still learning the framework"
              />
              <FlipCard
                frontText="NodeJS"
                years="1 year"
                type="framework"
                icon={<FaNodeJs />}
                listOne="Experience with it in hackathon projects"
                listTwo="Working with it for personal projects"
                listThree="Still learning the framework"
              />
              <FlipCard
                frontText="TailwindCSS"
                years="1 year"
                type="framework"
                icon={<SiTailwindcss />}
                listOne="Experience with it in hackathon projects"
                listTwo="Working with it for personal projects"
                listThree="Still learning the framework"
              />
              <FlipCard
                frontText="ExpressJS"
                years="1 year"
                type="framework"
                icon={<SiExpress />}
                listOne="Experience with it in hackathon projects"
                listTwo="Working with it for personal projects"
                listThree="Still learning the framework"
              />
              <FlipCard
                frontText="Arduino"
                years="1 year"
                type="framework"
                icon={<SiArduino />}
                listOne="Experience with it in school projects"
                listTwo="Built a functional robot"
                listThree="Still learning the framework"
              />
            </div>
          </section>
        </motion.section>
      </main>
      <Footer />
    </div>
  );
}
