import {
  Image,
  Container,
  Title,
  Text,
} from "@mantine/core";
import honeyWithEyeglass from '@/assets/multipleBees.png'
import classes from "./styles.module.css";

export function AboutUS() {
  return (
    <div className={classes.container}>
      <Container size="md">
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              About <br />
              <span className={classes.hbii}>Huney Bii Coin</span>
            </Title>
            <Text c={"white"} mt="md" className={classes.desc}>
              Huney Bii isn't your average cryptocurrency —it's the bee's knees
              of the digital world! Picture a hive where bees are wearing
              sunglasses and doing the dab while trading digital honey. That's
              the vibe of Huney Bii!
            </Text>
          </div>
            <Image src={honeyWithEyeglass.src} className={classes.image} />
        </div>
      </Container>
    </div>
  );
}
