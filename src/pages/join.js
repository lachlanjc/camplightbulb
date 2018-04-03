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

const title = 'Join Camp Lightbulb'
const description =
  'Work with the team at Camp Lightbulb organizing camps for LGBTQ+ youth across the country. We’re looking forward to your applicaiton.'

export default () => (
  <Fragment>
    <Helmet
      title={title}
      meta={[
        { name: 'twitter:title', content: title },
        { name: 'description', content: description },
        { name: 'twitter:description', content: description },
        { property: 'og:title', content: title },
        { property: 'og:description', content: description },
        { property: 'og:url', content: 'https://camplightbulb.org/start' }
      ]}
    />
    <Nav color="muted" />
    <Container maxWidth={48} px={3} mt={[4, 5]} py={[4, 5]}>
      <Heading.h1 {...theme.styles.headline}>
        Thanks for your interest in joining us.
      </Heading.h1>
      <Heading.h2 {...theme.styles.subhline} mt={3} mb={3}>
        We are currently recruiting counselors and volunteers for our upcoming
        Summer Camps.
      </Heading.h2>
      <Text {...theme.styles.subhline} my={3}>
        We believe in strength in diversity and encourage people from a variety
        of backgrounds to apply. Counselors and volunteers must be at least 21
        years of age.
      </Text>
      <Text {...theme.styles.subhline} my={3}>
        To apply please complete the form below and include a resumé and cover
        letter. We will get in touch early Spring to schedule initial phone
        interviews. We prefer candidates who are able to make the the follow up
        in person interview, but will consider highly qualified and motivated
        candidates.
      </Text>
      <Text {...theme.styles.subhline} my={3} color="info">
        We look forward to your application.
      </Text>
    </Container>
    <iframe
      id="JotFormIFrame-72657992184168"
      allowTransparency="true"
      src="https://form.jotform.com/72657992184168"
      frameBorder={0}
      style={{ width: '100%', minHeight: '80vh' }}
      scrolling="auto"
    />
    <Footer />
  </Fragment>
)
