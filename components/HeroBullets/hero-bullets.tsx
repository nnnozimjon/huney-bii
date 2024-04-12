import {
  Image,
  Container,
  Title,
  Button,
  Group,
  Text,
  SimpleGrid,
} from "@mantine/core";
import image from "@/assets/HuneyIcon.png";
import classes from "./styles.module.css";
import { raydium_path, totalSupply } from "@/utils/paths";

export function HeroBullets() {
  return (
    <div className={classes.container}>
      <div className={classes.layerBlur1} />
      <div className={classes.layerBlur} />
      <Container size="md">
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              Your next lucky <br /> coin{" "}
              <span className={classes.hbii}>$HBii</span>
            </Title>
            <Text c="dimmed" mt="md">
              Huney Bii ($HBII) is a new cryptocurrency that brings a fun twist
              to the world of digital money.
            </Text>

            <Group mt={30}>
              <Button
                onClick={() => window.location.replace(raydium_path)}
                radius="xl"
                size="md"
                className={classes.control}
              >
                BUY NOW
              </Button>
            </Group>
          </div>
          <Image src={image.src} className={classes.image} />
        </div>
        <SimpleGrid
          cols={{ base: 1, sm: 2, lg: 3 }}
          spacing={{ base: 10, sm: "xl" }}
          verticalSpacing={{ base: "md", sm: "xl" }}
        >
          <div className={classes.conts}>
            <Text>
              0 TAX <br />
              BUY / SELL
            </Text>
          </div>
          <div className={classes.conts}>
            <Text>
              100% <br />
              LOCKED LIQUIDITY
            </Text>
          </div>
          <div className={classes.conts}>
            <Text>
              {Number(totalSupply).toLocaleString("en-US", {
                maximumFractionDigits: 2,
              })}{" "}
              <br />
              TOTAL SUPPLY
            </Text>
          </div>
        </SimpleGrid>
      </Container>
    </div>
  );
}
