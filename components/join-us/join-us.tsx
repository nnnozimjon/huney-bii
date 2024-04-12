import { Container, Flex, Image, Title  } from '@mantine/core';
import classes from './styles.module.css';
import x from '@/assets/x.png'
import telegram from '@/assets/telegram.png'

export function JoinUs() {
  return (
    <Container size="sm" className={classes.wrapper}>
      <Title ta="center" className={classes.title}>
        JOIN OUR COMMUNITY
      </Title>

      <Flex gap={'lg'} align={'center'} justify={'center'} className={classes.container}>
        <Image className={classes.image} src={x.src}  alt='x'/>
        <Image className={classes.image} src={telegram.src} alt='telegram' />
      </Flex>
    </Container>
  );
}