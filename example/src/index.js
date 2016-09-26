import React from "react";

import {
  Appear, BlockQuote, Cite, CodePane, Deck, Fill,
  Heading, Image, Layout, Link, ListItem, List, Markdown, Quote, Slide, Spectacle,
  TableHeaderItem, TableItem, TableRow, Table, Text
} from "../../src";

import preloader from "../../src/utils/preloader";

import createTheme from "../../src/themes/default";

import Interactive from "../assets/interactive";

require("normalize.css");
require("../../src/themes/default/index.css");

const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png")
};

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "#266092",
  tertiary: "#C3D600",
  quartenary: " #3DB0D6",
  black: "#666666"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>
          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="secondary">
              Picture of malta
            </Heading>
          </Slide>
          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="secondary">
              React
            </Heading>
            <Heading size={1} fit caps>
              A Quick journey
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="black" notes="You can even put notes on your slide. How awesome is that?">
            <Heading size={2} caps fit textColor="primary" textFont="primary">
              What is a SPA ?
            </Heading>
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <List>
              <Appear><ListItem>Simple scripting</ListItem></Appear>
              <Appear><ListItem>Jquery mess</ListItem></Appear>
              <Appear><ListItem>More developpers take interest in JS</ListItem></Appear>
              <Appear><ListItem>First frameworks (backbone, ember)</ListItem></Appear>
              <Appear><ListItem>New generation (Angular)</ListItem></Appear>
              <Appear><ListItem>React (not a framework)</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Layout>
              <Fill>
                <Interactive/>
              </Fill>
              <Fill>
                <CodePane lang="jsx" source={require("raw!../assets/react.example")} margin="20px"/>
              </Fill>
            </Layout>
          </Slide>
          <Slide transition={["slide"]} bgColor="black" notes="You can even put notes on your slide. How awesome is that?">
            <Heading size={2} caps fit textColor="primary" textFont="primary">
              React is a library managing components
            </Heading>
            <List textColor="primary">
              <Appear><ListItem>Not a framework</ListItem></Appear>
              <Appear><ListItem>No dependency injection</ListItem></Appear>
              <Appear><ListItem>No "Ajax" handling</ListItem></Appear>
              <Appear><ListItem>No premade super components</ListItem></Appear>
              <Appear><ListItem>Not a template engine</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="secondary">
              React benefits
            </Heading>
          </Slide>
          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="secondary">
              Hidding dom manipulation
            </Heading>
          </Slide>
          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="secondary">
              JSX a simple abstraction
            </Heading>
          </Slide>
          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="secondary">
              Virtual DOM
            </Heading>
          </Slide>
          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="secondary">
              React App Data flow
            </Heading>
          </Slide>
          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="secondary">
              Predictability
            </Heading>
          </Slide>
          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="secondary">
              Developper experience
            </Heading>
          </Slide>
          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="secondary">
              React is not only for HTML
            </Heading>
          </Slide>
          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="secondary">
              React native, learn once apply everywhere
            </Heading>
          </Slide>
          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="secondary">
              React is not only for UI
            </Heading>
          </Slide>
          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="secondary">
              Questions ?
            </Heading>
          </Slide>

          

          
          <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
            <CodePane
              lang="jsx"
              source={require("raw!../assets/deck.example")}
              margin="20px auto"
            />
          </Slide>
          <Slide transition={["slide"]} bgImage={images.city.replace("/", "")} bgDarken={0.75}>
            <Appear fid="1">
              <Heading size={1} caps fit textColor="primary">
                Full Width
              </Heading>
            </Appear>
            <Appear fid="2">
              <Heading size={1} caps fit textColor="tertiary">
                Adjustable Darkness
              </Heading>
            </Appear>
            <Appear fid="3">
              <Heading size={1} caps fit textColor="primary">
                Background Imagery
              </Heading>
            </Appear>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Heading caps fit>Flexible Layouts</Heading>
            <Layout>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  Left
                </Heading>
              </Fill>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  Right
                </Heading>
              </Fill>
            </Layout>
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
            <BlockQuote>
              <Quote>Wonderfully formatted quotes</Quote>
              <Cite>Ken Wheeler</Cite>
            </BlockQuote>
          </Slide>
          <Slide transition={["spin", "zoom"]} bgColor="tertiary">
            <Heading caps fit size={1} textColor="primary">
              Inline Markdown
            </Heading>
            <Markdown>
              {`
![Markdown Logo](${images.markdown.replace("/", "")})

You can write inline images, [Markdown Links](http://commonmark.org), paragraph text and most other markdown syntax
* Lists too!
* With ~~strikethrough~~ and _italic_
* And let's not forget **bold**
              `}
            </Markdown>
          </Slide>
          <Slide transition={["slide", "spin"]} bgColor="primary">
            <Heading caps fit size={1} textColor="tertiary">
              Smooth
            </Heading>
            <Heading caps fit size={1} textColor="secondary">
              Combinable Transitions
            </Heading>
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <List>
              <Appear><ListItem>Inline style based theme system</ListItem></Appear>
              <Appear><ListItem>Autofit text</ListItem></Appear>
              <Appear><ListItem>Flexbox layout system</ListItem></Appear>
              <Appear><ListItem>PDF export</ListItem></Appear>
              <Appear><ListItem>And...</ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={["slide"]} bgColor="primary"
            notes="Hard to find cities without any pizza"
          >
            <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
              Pizza Toppings
            </Heading>
            <Layout>
              <Table>
                <thead>
                  <TableRow>
                    <TableHeaderItem/>
                    <TableHeaderItem>2011</TableHeaderItem>
                    <TableHeaderItem>2013</TableHeaderItem>
                    <TableHeaderItem>2015</TableHeaderItem>
                  </TableRow>
                </thead>
                <tbody>
                  <TableRow>
                    <TableItem>None</TableItem>
                    <TableItem>61.8%</TableItem>
                    <TableItem>39.6%</TableItem>
                    <TableItem>35.0%</TableItem>
                  </TableRow>
                  <TableRow>
                    <TableItem>Pineapple</TableItem>
                    <TableItem>28.3%</TableItem>
                    <TableItem>54.5%</TableItem>
                    <TableItem>61.5%</TableItem>
                  </TableRow>
                  <TableRow>
                    <TableItem>Pepperoni</TableItem>
                    <TableItem/>
                    <TableItem>50.2%</TableItem>
                    <TableItem>77.2%</TableItem>
                  </TableRow>
                  <TableRow>
                    <TableItem>Olives</TableItem>
                    <TableItem/>
                    <TableItem>24.9%</TableItem>
                    <TableItem>55.9%</TableItem>
                  </TableRow>
                </tbody>
              </Table>
            </Layout>
          </Slide>
          <Slide transition={["spin", "slide"]} bgColor="tertiary">
            <Heading size={1} caps fit lineHeight={1.5} textColor="primary">
              Made with love in Seattle by
            </Heading>
            <Link href="http://www.formidable.com"><Image width="100%" src={images.logo}/></Link>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
