import Head from "next/head";
import Image from "next/image";
import {
  Billing,
  Business,
  Button,
  CTA,
  CardDeal,
  Clients,
  FeedbackCard,
  Footer,
  GetStarted,
  Hero,
  Navbar,
  Stats,
  Testimonials,
} from "../components";

export default function Home() {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`paddingX flexCenter`}>
        <div className={`boxWidth`}>
          <Navbar />
        </div>
      </div>
      <div className={`bg-primary flexStart`}>
        <div className={`boxWidth`}>
          <Hero />
        </div>
      </div>
      <div className={`bg-primary paddingX flexStart`}>
        <div className={`boxWidth`}>
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Clients />
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  );
}
