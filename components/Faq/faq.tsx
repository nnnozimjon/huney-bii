import { Container, Title, Accordion } from '@mantine/core';
import classes from './styles.module.css';
import icon from '@/assets/honey_icon.png'

const whatIsHuney =
  `Huney Bii isn't your average cryptocurrency—it's the bee's knees of the digital world! Picture a hive where bees are wearing sunglasses and doing the dab while trading digital honey. That's the vibe of Huney Bii!`;

  const howIBuy =`
  Connect your Solana wallet to Raydium.
  Search for HBii using its Solana token address.
  Swap SOL for HBii tokens on Raydium.
  Confirm the transaction.
  You're now a proud owner of HBii!`

const isSecure = 'Yeah, Huney Bii (HBii) is secure. The liquidity pool (LP) is locked, and no more coins can be minted. '
const join = `You can join our community on Telegram or Twitter using the links below: 
We look forward to welcoming you to the Huney Bii community! 🍯🐝
`

export function Faq() {
  return (
    <Container size="sm" className={classes.wrapper}>
      <Title ta="center" className={classes.title}>
        Frequently Asked Questions
      </Title>

      <Accordion variant="separated">
        <Accordion.Item className={classes.item} value="reset-password" classNames={{item: classes.panel}}>
          <Accordion.Control classNames={{control: classes.panel}} icon={<img width={72} src={icon.src} />}>What is Huney Bii?</Accordion.Control>
          <Accordion.Panel classNames={{content: classes.panel}}>{whatIsHuney}</Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="another-account" classNames={{item: classes.panel}}>
          <Accordion.Control  classNames={{control: classes.panel}} icon={<img width={72} src={icon.src} />} > How do I buy Huney Bii?</Accordion.Control>
          <Accordion.Panel classNames={{content: classes.panel}}> {howIBuy}</Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="newsletter" classNames={{item: classes.panel}}>
          <Accordion.Control classNames={{control: classes.panel}} icon={<img width={72} src={icon.src} />}>Is Huney Bii secure?</Accordion.Control>
          <Accordion.Panel classNames={{content: classes.panel}}>{isSecure}</Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="credit-card" classNames={{item: classes.panel}}>
          <Accordion.Control classNames={{control: classes.panel}} icon={<img width={72} src={icon.src} />}>How can I become part of Community?</Accordion.Control>
          <Accordion.Panel classNames={{content: classes.panel}}>{join}</Accordion.Panel>
        </Accordion.Item>

      </Accordion>
    </Container>
  );
}