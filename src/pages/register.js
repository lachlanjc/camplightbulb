import React, { Fragment } from 'react'
import {
  Heading,
  Card,
  Container,
  Flex,
  Box,
  Text,
  Button,
  LargeButton,
  Section,
  Link as A,
  Icon,
  Avatar,
  Module
} from '@hackclub/design-system'
import { theme } from 'theme'
import { lowerCase } from 'lodash'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import Nav from 'components/Nav'
import Footer from 'components/Footer'

const Header = Section.extend`
  padding: 0 !important;
  position: relative;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75)),
    url('/register.jpg');
  background-size: cover;
  background-position: center 25%;
  clip-path: polygon(0% 0%, 100% 0, 100% 95%, 0 100%);
  ${props => props.theme.mediaQueries.md} {
    clip-path: polygon(0% 0%, 100% 0, 100% 88%, 0 100%);
  }
  h1,
  h2 {
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.75);
  }
`

const CTA = LargeButton.extend`
  position: relative;
  top: 200%;
  transition: transform 0.125s ease-out;
  will-change: transform;
  &:hover,
  &:focus {
    transform: scale(1.06);
  }
  @media (prefers-reduced-motion: reduce) {
    transform: none !important;
  }
`

const Row = Container.extend.attrs({ px: 3, py: [4, 5] })`
  display: grid;
  grid-gap: ${props => props.theme.space[3]}px;
  text-align: left;
  ${props => props.theme.mediaQueries.md} {
    grid-template-columns: ${props => props.cols || '1fr 1fr'};
  }
`

const Modules = Container.extend`
  display: grid;
  grid-gap: ${props => props.theme.space[3]}px;
  ${props => props.theme.mediaQueries.md} {
    grid-template-columns: repeat(2, 1fr);
  }
  div {
    align-items: flex-start;
    padding: 0;
    text-align: left;
    width: 100% !important;
  }
  svg {
    margin-left: -${props => props.theme.space[1]}px;
  }
`

const Features = Box.extend`
  text-align: left;
  display: grid;
  grid-gap: ${props => props.theme.space[3]}px;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));

  div {
    position: relative;
  }
  svg {
    position: absolute;
    top: -${props => props.theme.space[3]}px;
    right: ${props => props.theme.space[1]}px;
    z-index: 1;
  }
  span {
    display: block;
    z-index: 2;
  }
`
const Feature = ({ bg, icon, children, ...props }) => (
  <Flex align="center" p={[2, 3]} bg={`${bg}.0`} {...props}>
    <Icon name={icon} color={`${bg}.3`} size={48} />
    <Text.span f={3} color={`${bg}.7`}>
      {children}
    </Text.span>
  </Flex>
)

const QuoteBox = Box.extend`
  position: relative;
  span {
    position: absolute;
    left: -${props => props.theme.space[3]}px;
    top: 0;
    font-family: ${props => props.theme.font};
    font-size: ${props => props.theme.fontSizes[6]}px;
    font-weight: bold;
  }
`
const Quote = ({ bg, avatar, by, children, ...props }) => (
  <QuoteBox p={[3, 4]} mb={[2, 3]} bg={`${bg}.0`} color={`${bg}.7`} {...props}>
    <span>“</span>
    <Text f={3} mb={2} children={children} />
    <Text f={2} bold caps children={`—${by}`} />
  </QuoteBox>
)

const Counselors = Box.extend`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: ${props => props.theme.space[2]}px;
`
const Counselor = ({ name, ...props }) => (
  <Box align="center">
    <Avatar
      src={`/team/${lowerCase(name.split(' ')[0])
        .split(' ')
        .join('')}.jpg`}
      size={128}
    />
    <Text f={3} bold {...theme.styles.sans} children={name} />
  </Box>
)
const NewCounselorAvatar = Flex.extend`
  width: 128px;
  height: 128px;
  border-radius: 64px;
  margin: auto;
`
A.link = A.withComponent(Link)
const NewCounselor = ({ name, ...props }) => (
  <A.link to="/join" color="black" align="center">
    <NewCounselorAvatar bg="blue.2" align="center" justify="center">
      <Icon color="blue.4" name="person_add" size={72} />
    </NewCounselorAvatar>
    <Text
      f={3}
      mt={1}
      color="blue.4"
      bold
      {...theme.styles.sans}
      children="Become a Counselor »"
    />
  </A.link>
)

const title = 'Register for Camp Lightbulb'
const desc =
  'Join us for an upcoming camp for LGBTQ+ youth in Provincetown, Los Angeles, New York City, or DC.'

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
        { property: 'og:url', content: 'https://camplightbulb.org/register' }
      ]}
    />
    <Nav />
    <Header>
      <Container {...theme.styles.content} px={3} pt={[5, 6]} pb={[4, 5, 6]}>
        <Heading.h1 {...theme.styles.headline} color="white" my={[3, 4]}>
          Register for Camp Lightbulb
        </Heading.h1>
        <CTA
          href="https://www.eventbrite.com/e/camp-lightbulb-2018-summer-camp-provincetown-tickets-36372584379"
          target="_blank"
          inverted
          f={[3, 4]}
        >
          Join Summer Camp
        </CTA>
      </Container>
    </Header>
    <Row>
      <Box>
        <Heading.h2 {...theme.styles.headline}>
          Coast-to-coast fun—from MA to LA.
        </Heading.h2>
        <Heading.h3 {...theme.styles.subhline} my={2}>
          Our camps take place in the heart of our communities, from bohemian
          Provincetown to cosmopolitan Los Angeles & New York City.
        </Heading.h3>
      </Box>
      <Modules>
        <Module
          icon="cake"
          heading="Provincetown"
          body="The annual Summer Camp is in Provincetown, MA."
          color="violet.6"
        />
        <Module
          icon="beach_access"
          heading="Los Angeles"
          body="Our first Winter Camp was in LA (near Santa Monica)."
          color="pink.6"
        />
        <Module
          icon="location_city"
          heading="New York"
          body="Our recent weekend Spring Camp explored NYC."
          color="blue.6"
        />
        <Module
          icon="star"
          heading="DC"
          body="Come to our nation’s capital for our upcoming June camp."
          color="orange.6"
        />
      </Modules>
    </Row>
    <Row>
      <Box>
        <Heading.h2 {...theme.styles.headline}>A camp with heart.</Heading.h2>
        <Heading.h3 {...theme.styles.subhline} my={2}>
          Every camp brings something new, but at our core we’re about bringing
          an amazing community to life. Here’s what we focus on at our camps.
        </Heading.h3>
      </Box>
      <Features>
        <Feature bg="pink" icon="tag_faces">
          Camp fun
        </Feature>
        <Feature bg="violet" icon="group_work">
          Community
        </Feature>
        <Feature bg="orange" icon="flare">
          Art
        </Feature>
        <Feature bg="blue" icon="spa">
          Well-being
        </Feature>
        <Feature bg="lime" icon="local_florist">
          Outdoors
        </Feature>
        <Feature bg="cyan" icon="public">
          Service
        </Feature>
      </Features>
    </Row>
    <Row>
      <Box>
        <Heading.h2 {...theme.styles.headline}>
          You’ll have the time of your life.
        </Heading.h2>
        <Heading.h3 {...theme.styles.subhline} my={2}>
          Between the unparalleled activities, amazing community, and ridiculous
          fun, everyone gets an amazing experience.
        </Heading.h3>
      </Box>
      <Box>
        <Quote bg="cyan" by="Lachlan Campbell, 16">
          I had hands-down the best weekend of my life at Spring Camp. It was
          beyond fun and I made new friends I’ll know forever.
        </Quote>
        <Quote bg="orange" by="Diana, 16">
          I’ll get a real quote here soon.
        </Quote>
      </Box>
    </Row>
    <Row>
      <Box>
        <Heading.h2 {...theme.styles.headline}>
          Organized and run by some fabulous counselors.
        </Heading.h2>
        <Heading.h3 {...theme.styles.subhline} my={2}>
          Our counselors plan and run our clubs. They reflect our community and
          are fully-trained and subject to extensive reference and background
          checks.
        </Heading.h3>
      </Box>
      <Counselors>
        <Counselor name="Joshua Kelley" />
        <Counselor name="McKenna Palmer" />
        <Counselor name="Sarah" />
        <NewCounselor />
      </Counselors>
    </Row>
    <Container {...theme.styles.contentContainer} pt={[3, 4]}>
      <Text align="center" {...theme.styles.subtext} f={[4, 5]}>
        There’s nothing like Camp Lightbulb. Join a group of other LGBTQ+
        teenagers for a camp you’ll remember forever.
      </Text>
    </Container>
    <Box align="center" pt={4} pb={[5, 6]}>
      <LargeButton
        href="https://www.eventbrite.com/e/camp-lightbulb-2018-summer-camp-provincetown-tickets-36372584379"
        target="_blank"
        f={[3, 4]}
      >
        Register for Summer Camp
      </LargeButton>
    </Box>
    <Footer />
  </Fragment>
)
