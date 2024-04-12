import { Container, Flex, Image } from '@mantine/core';
import classes from './styles.module.css';
import x from '@/assets/x.png'
import telegram from '@/assets/telegram.png'
import dex from '@/assets/dex.png'
import logo from '@/assets/logo.png'

export function Header() {


  return (
    <header className={classes.header}>
      <Container size="md">
        <div className={classes.inner}>
            <Image height={40} src={logo.src} alt='' />
          <Flex gap={'lg'} >
            <Image height={40} src={x.src} alt='' />
            <Image height={40} src={telegram.src} alt='' />
            <Image height={40} src={dex.src} alt='' />
          </Flex>
        </div>
      </Container>
    </header>
  );
}