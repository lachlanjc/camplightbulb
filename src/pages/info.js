import React, { Fragment } from 'react'
import {
  Heading,
  Container,
  Box,
  Text,
  Section,
  LargeButton
} from '@hackclub/design-system'
import { theme } from 'theme'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import Nav from 'components/Nav'
import Footer from 'components/Footer'

const Header = Section.withComponent('header').extend`
  padding: 0 !important;
  background-image: linear-gradient(
    32deg,
    ${props => props.theme.colors.cyan[5]} 0%,
    ${props => props.theme.colors.blue[5]} 64%,
    ${props => props.theme.colors.blue[6]} 100%
  );
`

const Row = Container.extend.attrs({ px: 3, py: 4, maxWidth: 56 })`
  display: grid;
  grid-gap: ${props => props.theme.space[3]}px;
  text-align: left;
  h2 {
    line-height: 1;
  }
  ${props => props.theme.mediaQueries.md} {
    grid-template-columns: 2fr 4fr;
  }
`

const title = 'Information About Camp Lightbulb'
const desc =
  'Get more information about the camps for gay/bi/trans/LGBTQ+ teens run by Camp Lightbulb.'

export default () => (
  <Fragment>
    <Helmet
      title={title}
      meta={[
        { name: 'twitter:title', content: title },
        { name: 'description', content: desc },
        { name: 'twitter:description', content: desc },
        { property: 'og:title', content: title },
        { property: 'og:description', content: desc },
        { property: 'og:url', content: 'https://camplightbulb.org/info' }
      ]}
    />
    <Nav />
    <Header mb={4}>
      <Container
        {...theme.styles.content}
        pt={[5, 6]}
        pb={[3, 4]}
        align={['left', 'center']}
      >
        <Heading.h1 f={[6, 7]}>We’re here to help.</Heading.h1>
      </Container>
    </Header>
    <Row>
      <Heading.h2 f={[5, 6]} color="cyan.5">
        Fees
      </Heading.h2>
      <Text f={3}>
        Fees are fully inclusive—and include accommodation, all meals and
        activities, except for travel and pocket money. Fees are fully
        refundable up to a month before camp. If cancellation is made after,
        payment can be used towards a future session of Camp.
      </Text>
    </Row>
    <Row>
      <Heading.h2 f={[5, 6]} color="blue.5">
        Financial assistance
      </Heading.h2>
      <Text f={3}>
        Camp Lightbulb is available to everyone, so we offer a sliding scale fee
        structure and we can also set up a payment plan to spread payments. Up
        to 40% of our campers receive partial or full assistance. If you require
        financial assistance, please get in touch. We do not cover travel
        expenses or pocket money.
      </Text>
    </Row>
    <Row>
      <Heading.h2 f={[5, 6]} color="indigo.5">
        Registering
      </Heading.h2>
      <Text f={3}>
        Once the fee is received, we confirm your registration and email
        registration forms and schedule a telephone call to get to know you and
        answer any questions or concerns.
      </Text>
    </Row>
    <Row mb={4}>
      <Heading.h2 f={[5, 6]} color="violet.5">
        Anything else?
      </Heading.h2>
      <Box>
        <Text f={3} mb={4}>
          It’s an awesome responsibility for Camp Lightbulb to have the
          responsibility for young people for a whole week and we take this very
          seriously. We check in with campers and families before camp, give an
          update during camp, and check in with campers and families after camp.
          If you would like to speak to someone in person, get in touch and we
          will schedule a call with one of our team members or camper parents.
        </Text>
        <LargeButton href="mailto:camplightbulb@gmail.com" bg="info">
          Email us
        </LargeButton>
      </Box>
    </Row>
    <Footer />
  </Fragment>
)
