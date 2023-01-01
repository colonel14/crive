import {
  Hero,
  Services,
  Features,
  Works,
  Team,
  Testimonials,
  Contact,
} from "../sections";

export default function Home() {
  return (
    <div>
      <Hero />
      <Works />
      {/* <Features /> */}
      <Services />
      <Team />
      <Testimonials />
      <Contact />
    </div>
  );
}
