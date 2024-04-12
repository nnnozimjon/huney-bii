import { Flex, Text } from '@mantine/core'
import React from 'react'
import classes from './styles.module.css'

export const Footer = () => {
  return (
    <Flex className={classes.container} align={'center'} justify={'center'}>
        <Text>2024 - All Rights Reserved</Text>
    </Flex>
  )
}
