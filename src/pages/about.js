import React, { Fragment } from 'react'
import {
  Container,
  Flex,
  Heading,
  LargeButton,
  Section,
  Text
} from '@hackclub/design-system'
import { theme } from 'theme'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import Nav from 'components/Nav'
import Bio from 'components/Bio'
import Footer from 'components/Footer'

const Header = Section.extend`
  background: linear-gradient(
    64deg,
    ${props => props.theme.colors.orange[5]},
    ${props => props.theme.colors.red[5]}
  );
`

LargeButton.link = LargeButton.withComponent(Link)

const title = 'About Camp Lightbulb'
const description =
  'Meet the team running Camp Lightbulb and read about our mission to bring amazing camps to LGBTQ+ youth.'

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
        { property: 'og:url', content: 'https://camplightbulb.org/team' }
      ]}
    />
    <Nav />
    <Header align="center">
      <Container {...theme.styles.content} pt={[4, 5]} pb={[3, 4]}>
        <Text {...theme.styles.subtext} color="white" f={[3, 4]} regular>
          Camp Lightbulb campers discover a bright picture of queer life and can
          express themselves without hesitation in a fun, carefree environment,
          inspiring them to build community with their peers and flourish among
          all others.
        </Text>
      </Container>
    </Header>
    <Container maxWidth={42} mx="auto">
      <Heading.h1 {...theme.styles.headline} mt={5}>
        About
      </Heading.h1>
      <Text f={[3, 4]} my={3}>
        Our mission is to provide a camp experience that promotes the dignity
        and self-worth of our campers. We encourage them to thrive as healthy,
        equal, happy and complete members of society—and value respect,
        inclusiveness, innovation, and integrity all the time.
      </Text>
      <Text f={3} my={3}>
        Camp Lightbulb was founded in 2011 and we launched our first Summer Camp
        in Provincetown, MA in August 2012 and have returned every summer since.
        We expanded to a Winter Camp in December 2015 and we plan to expand with
        camps throughout the year, starting with our first Spring Break in 2018.
      </Text>
      <Text f={3} my={3}>
        Our campers come from across the US and identify along the full LGBTQ+
        spectrum. Camp Lightbulb is committed to providing the camp experience
        to all and roughly 40% of our campers receive full or partial
        camperships.
      </Text>
      <Text f={3} my={3}>
        We work with partners including the Ali Forney Center, a center for LGBT
        homeless youth in New York City; Waltham House / The Home for Little
        Wanderers, a residential program for LGBT youth in Waltham, MA; and
        Boston’s GLASS, a program for LGBT youth.
      </Text>
      <Heading.h1 {...theme.styles.headline} mt={5} mb={2}>
        Team
      </Heading.h1>
      <Text f={[3, 4]} mb={4}>
        Camp Lightbulb is managed by Puck Markham, and supported by a stellar
        freelance team of project managers, seasonal counselors, volunteers and
        a Board of Directors.
      </Text>
      <Bio
        name="Puck Markham"
        role="Executive Director"
        text="Camp Lightbulb is a labor of love for Founding Director Puck Markham, who developed the project for two years before its launch. Puck is Dutch-American and attended the University of Amsterdam and UCLA. Formerly with PaineWebber and Barclays Bank, Puck lived in Los Angeles and London, and before Camp Lightbulb, he founded Community Money, an UK based social enterprise, which provided financial education to low-income families. Since moving from financial services, Puck has focused professionally on creating value-driven organizations and is thrilled to be managing the growth and development of Camp Lightbulb."
        bg="pink"
      />
      <Heading.h2 f={[4, 5]} mt={5} mb={2}>
        Board of Directors
      </Heading.h2>
      <Text f={3}>
        Camp Lightbulb is excited to start off 2017 with a newly expanded board.
        The board provides guidance, governance and support to the organization.
        In addition to Puck, the members are: Gina Bettinsoli, Richard Klein and
        Linda Rohler.
      </Text>
      <Bio
        name="Gina Bettinsoli"
        role="Board Member"
        text="Gina is a parent of a 4-time returning camper and has experience working with the LGBTQ community as a former mental health consultant at the Minority Aids Project in Los Angeles. She holds a leadership position on the board of Sisters of Sojourn, a group that funds long-term housing for survivors of domestic violence. Gina earned a B.A. in Psychology from San Diego State University and a Master of Social Work from USC. She resides with her husband Andrew Woo, and their sons in Pacific Palisades, CA."
        bg="orange"
      />
      <Bio
        name="Linda Rohler"
        role="Board Member"
        text="Linda is a retired teacher of thirty years, who has worked with grades 4 through 12 in a variety of metropolitan and suburban settings in Cleveland, OH. She lives in Provincetown, Mass. with her spouse Jane, and is the proud mother of two daughters and grandmother to five grandchildren."
        bg="cyan"
      />
      <Bio
        name="Richard Klein"
        role="Board Member"
        text="Bio coming soon."
        bg="blue"
      />
      <Heading.h2 f={[4, 5]} mt={5} mb={2}>
        Want to join us?
      </Heading.h2>
      <LargeButton.link to="/join" bg="info" mb={5}>
        Apply to volunteer »
      </LargeButton.link>
    </Container>
    <Footer />
  </Fragment>
)
