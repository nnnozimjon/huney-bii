import { Container, Flex, Image } from "@mantine/core";
import classes from "./styles.module.css";
import x from "@/assets/x.png";
import telegram from "@/assets/telegram.png";
import dex from "@/assets/dex.png";
import logo from "@/assets/logo.png";
import { dexscreener_path, telegram_path, x_path } from "@/utils/paths";

export function Header() {
  const cursorStyle = {
    cursor: "pointer",
  };
 
  return (
    <header className={classes.header}>
      <Container size="md">
        <div className={classes.inner}>
          <Image height={40} src={logo.src} alt="" />
          <Flex gap={"lg"}>
            <a href={x_path}>
              <Image style={cursorStyle} height={40} src={x.src} alt="" />
            </a>
            <a href={telegram_path}>
              <Image
                style={cursorStyle}
                height={40}
                src={telegram.src}
                alt=""
              />
            </a>
            <a href={dexscreener_path}>
              <Image
                style={cursorStyle}
                height={40}
                src={dex.src}
                alt=""
              />
            </a>
          </Flex>
        </div>
      </Container>
    </header>
  );
}
