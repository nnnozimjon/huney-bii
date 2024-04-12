import { Container, Title, Accordion } from '@mantine/core';
import classes from './styles.module.css';
import icon from '@/assets/honey_icon.png'

const placeholder =
  'It can’t help but hear a pin drop from over half a mile away, so it lives deep in the mountains where there aren’t many people or Pokémon.It was born from sludge on the ocean floor. In a sterile environment, the germs within its body can’t multiply, and it dies.It has no eyeballs, so it can’t see. It checks its surroundings via the ultrasonic waves it emits from its mouth.';

export function Faq() {
  return (
    <Container size="sm" className={classes.wrapper}>
      <Title ta="center" className={classes.title}>
        Frequently Asked Questions
      </Title>

      <Accordion variant="separated">
        <Accordion.Item className={classes.item} value="reset-password" classNames={{item: classes.panel}}>
          <Accordion.Control classNames={{control: classes.panel}} icon={<img width={72} src={icon.src} />}>What is Huney Bii?</Accordion.Control>
          <Accordion.Panel classNames={{content: classes.panel}}>{placeholder}</Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="another-account" classNames={{item: classes.panel}}>
          <Accordion.Control  classNames={{control: classes.panel}} icon={<img width={72} src={icon.src} />} > How do I buy Huney Bii?</Accordion.Control>
          <Accordion.Panel classNames={{content: classes.panel}}> {placeholder}</Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="newsletter" classNames={{item: classes.panel}}>
          <Accordion.Control classNames={{control: classes.panel}} icon={<img width={72} src={icon.src} />}>Is Huney Bii secure?</Accordion.Control>
          <Accordion.Panel classNames={{content: classes.panel}}>{placeholder}</Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="credit-card" classNames={{item: classes.panel}}>
          <Accordion.Control classNames={{control: classes.panel}} icon={<img width={72} src={icon.src} />}>How can I become part of Community?</Accordion.Control>
          <Accordion.Panel classNames={{content: classes.panel}}>{placeholder}</Accordion.Panel>
        </Accordion.Item>

      </Accordion>
    </Container>
  );
}