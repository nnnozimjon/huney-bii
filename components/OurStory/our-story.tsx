import { Image, Container, Title, Text } from "@mantine/core";
import honeyWithEyeglass from "@/assets/redBeeStory.png";
import classes from "./styles.module.css";

export function OurStory() {
  return (
    <div className={classes.container}>
      <Container size="lg">
        <div className={classes.inner}>
          <Image src={honeyWithEyeglass.src} className={classes.image} />
          <div className={classes.content}>
            <Title className={classes.title}>Our story</Title>
            <Text c={"white"} mt="md" className={classes.desc}>
              Once upon a time, in a digital forest far, far away, there was a
              mischievous bee named Buzzy. Buzzy stumbled upon a jar of magical
              honey, guarded by BitWise, a wise old owl. BitWise shared the
              honey's secret—it was the essence of creativity, community, and
              laughter. Thus, Huney Bii was born—a digital hive where bees
              traded honey, memes, and joy. Led by Buzzy, the hive flourished,
              supporting bee conservation and spreading love across the
              blockchain. Join us on our quest to make the world a little
              sweeter, one meme at a time. Welcome to Huney Bii.
            </Text>
          </div>
        </div>
      </Container>
    </div>
  );
}
