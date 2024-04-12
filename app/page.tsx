"use client";

import {
  AboutUS,
  Faq,
  Footer,
  Header,
  HeroBullets,
  JoinUs,
  OurStory,
} from "@/components";
import "./styles.css";
import { Container, Text } from "@mantine/core";

export default function HomePage() {
  return (
    <div>
      <Header />
      <HeroBullets />
      <Container>
        <Text style={{
          fontWeight: 500,
          color: '#6BDFDA'
        }}>CA: contract address</Text>
      </Container>
      <br/>
      <AboutUS />
      <OurStory />
      <Faq />
      <JoinUs />
      <Footer />
    </div>
  );
}
