import React, { Fragment } from 'react'
import {
  Heading,
  Container,
  Card,
  Flex,
  Box,
  Text,
  LargeButton,
  Icon,
  Section,
  Link as A
} from '@hackclub/design-system'
import { theme } from 'theme'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import Nav from 'components/Nav'
import Footer from 'components/Footer'

const corporate =
  "American Express, Black & White Party, BMW, BNY Mellon, City Sports, Enterprise Car Rental, Fidelity Investments, FMC Ice Sports, Pfizer, Planet Fitness, Salt House Hotels, Seamen's Bank, Standard Hotels, Stop And Shop, Tiedemann Wealth Management"

const grants =
  'Bennett Foundation, Brookline Community Foundation, Cape Cod Five Foundation, Coil Foundation, FLAG Flag Football, Forrest Foundation, Gale Fund, Liberty Hill Foundation, National Gay Pilots Association, Our Fund, The Palette Fund, Pathways for Change, Provincetown United Methodist Church, Rebecca Pomroy Foundation, Stonewall Community Foundation'

const guiding =
  'Dina Bettinsoli, David Bowd & Kevin O‘Shea, Jeep Bryant, Lisa Drapkin, Jack Hornor, Hans Eijmbrechts & Wiebe Tinga, Robert Ketterer, Scott McCoy, Terrence Meck & Breton Alberti, Linda Rohler, Rob Saltzman, Craig Smith & Ian Bruce, Juno Spira, Heather Ward, Andrew Woo'

const donors =
  "John Abodeely, Harmony Abrams, Jessica Lynch Alfaro, Scott Allegretti, Susan B, Mitchell Baker & Thom Egan, Bernta Bechler, Bridget Bettigole, Julie Blazar, Ezra Block & James Hung, Alan Bloom, Joe Bolduc, Marcus Boyd, Justin Breton, James Bruno, Jerrell Campbell, Christopher Carson, Bonnie Catena, Kate Clinton, Alice Cohen, Catherine Colinvaux, Bruno Confalone, Steve Corkin, John Curtin, Denise Daley, Lindsey Daman, Sarah Dean, Bill Docker & Tom Stearns, Rick Erickson & Neil Korpinen, Stan Everett, Danielle Fairlee, Ray Faulkner, Christopher Ferguson, Michelle Fisher, Ian Ford, Andrew Fornarola, Dirk Fuhrmann, Andrew Fullem, Elizabeth Galalis, Carolyn Gilbert, Leah Gordon, Stevenson Greene, Brandi Griffith, Will Hackner, Gail Hardenbergh, Skylar Hellyer, Christine Horovitz, Dianne Hunt-Mason, Elise Hurwitz, Daniel Klipper, Marcy Kolchinsky, Ron Kollen, Kara Konken, David LaLiberte, Tamar London, Family & Friends of Patti Hughes Lonergan, John & Juliet Marrkand, Laura McDonnell, Matt Medaglia, Andrea Morgan, Bernard Morrissey, Sean Morrow, Chris Nagle, Steven Nix, Hilary North, Niall O'Brien, Melissa Packer, Tim Palazzola, Tajamika Paxton, Linda Peters, April Rauch, Aileen Reilly, Lewis Rieley, Maureen Rogers, Trevor Rosenthal, Abram Sands, Ben Sands, Jacob Sands, G. Scott Shatzer, Zachary Soreff, Martyn Swinkels, Scott Taber, Peter Tenggren, Carlos Terra, Ryan Tofil, Vaughn Waters, Martha Ann Weaver, Marc Weinman, Barbara Williams, Jay Zimmerman"

const community = {
  la: 'Perkowski Legal, The Trevor Project, Varsity Gay League',
  ptown:
    'Anchor Inn, Canteen, Cape Air, Center for Coastal Studies, Daddy’s Burritos, Fine Arts Work Center, Mailspot Express, Marc Cortale Productions, Ross Grill, Street Eatz'
}

const Row = Box.extend`
  display: grid;
  grid-gap: ${props => props.theme.space[3]}px;
  text-align: left;
  ${props => props.theme.mediaQueries.md} {
    grid-template-columns: 2fr 3fr;
  }
`

const Split = Box.extend`
  display: grid;
  grid-gap: ${props => props.theme.space[4]}px;
  ${props => props.theme.mediaQueries.md} {
    grid-template-columns: 1fr 1fr;
  }
`

const Grid = Box.extend`
  display: grid;
  grid-gap: ${props => props.theme.space[3]}px;
  padding-left: 0;
  list-style: none;
  ${props => props.theme.mediaQueries.md} {
    grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  }
  li {
    background-color: ${props => props.theme.colors.snow};
    padding: ${props => props.theme.space[2]}px;
    display: flex;
    align-items: center;
  }
`
const GridOf = ({ data, ...props }) => (
  <Grid {...props}>
    {data
      .split(', ')
      .map((item, i) => <li key={`${item}-${i}`} children={item} />)}
  </Grid>
)

const Contibutors = ({ name, list, ...props }) => (
  <Container {...theme.styles.contentContainer} py={[3, 4]}>
    <Heading.h2
      f={[4, 5]}
      mb={3}
      color="black"
      align="center"
      children={name}
    />
    <GridOf data={list} />
  </Container>
)

A.link = A.withComponent(Link)
const Submit = LargeButton.withComponent('input')

const title = 'Donate to Camp Lightbulb'
const description =
  'Contribute today to empower the next generation of LGBTQ+ youth with nation-wide camps.'

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
        { property: 'og:url', content: 'https://camplightbulb.org/donate' }
      ]}
    />
    <Nav color="muted" />
    <Section.header align="center" py={4}>
      <Container maxWidth={48} mt={[4, 5, 6]}>
        <Heading.h1 color="primary" f={[3, 4]} caps>
          Donate to Camp Lightbulb
        </Heading.h1>
        <Heading.h2 my={3} {...theme.styles.headline} {...theme.styles.sans}>
          We rely on patrons like you for our camps for LGBTQ+ youth.
        </Heading.h2>
        <Text {...theme.styles.subhline} mb={4}>
          Contribute today to empower the next generation of LGBTQ+ teens with
          the community they need.
        </Text>
        <form
          action="https://www.paypal.com/cgi-bin/webscr"
          method="post"
          target="_top"
        >
          <input type="hidden" name="cmd" value="_s-xclick" />
          <input type="hidden" name="hosted_button_id" value="2RGGTPEPGPEPJ" />
          <Submit bg="info" type="submit" value="Donate on PayPal »" />
          <img
            alt=""
            border={0}
            src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif"
            width={1}
            height={1}
          />
        </form>
        <Text mt={3} f={2} color="muted">
          Your contribution is tax-deductible.<br />
          Camp Lightbulb’s nonprofit EIN is 81-2908499.
        </Text>
        <Text {...theme.styles.subtext} f={[4, 5]} mt={6}>
          Camp Lightbulb is also grateful for the crucial support from corporate
          sponsors, grant makers, individual donors and the local community.
        </Text>
      </Container>
    </Section.header>
    <Contibutors name="Corporate Support" list={corporate} />
    <Contibutors name="Grant Support" list={grants} />
    <Contibutors name="Guiding Light Donors ($1000+)" list={guiding} />
    <Contibutors name="Donors" list={donors} />
    <Container {...theme.styles.contentContainer} py={[3, 4]} mb={4}>
      <Heading.h2
        f={[4, 5]}
        mb={3}
        color="black"
        align="center"
        children="Community Supporters"
      />
      <Split>
        <Box>
          <Heading.h3 {...theme.styles.subhline} mb={2} align="center">
            Provincetown
          </Heading.h3>
          <GridOf data={community.ptown} />
        </Box>
        <Box>
          <Heading.h3 {...theme.styles.subhline} mb={2} align="center">
            Los Angeles
          </Heading.h3>
          <GridOf data={community.la} />
        </Box>
      </Split>
    </Container>
    <Footer />
  </Fragment>
)
