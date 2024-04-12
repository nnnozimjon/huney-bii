import { Container, Flex, Image, Title } from "@mantine/core";
import classes from "./styles.module.css";
import x from "@/assets/x.png";
import telegram from "@/assets/telegram.png";
import { x_path, telegram_path } from "@/utils/paths";

export function JoinUs() {
  const cursorStyle = {
    cursor: "pointer",
  };
  return (
    <Container size="sm" className={classes.wrapper}>
      <Title ta="center" className={classes.title}>
        JOIN OUR COMMUNITY
      </Title>

      <Flex
        gap={"lg"}
        align={"center"}
        justify={"center"}
        className={classes.container}
      >
        <a href={x_path}>
          <Image
            style={cursorStyle}
            className={classes.image}
            src={x.src}
            alt="x"
          />
        </a>
        <a href={telegram_path}>
          <Image
            style={cursorStyle}
            className={classes.image}
            src={telegram.src}
            alt="telegram"
          />
        </a>
      </Flex>
    </Container>
  );
}
