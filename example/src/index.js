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
  city: require("../assets/malta.png"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/talend.png"),
  markdown: require("../assets/markdown.png"),
  acateland: require("../assets/acateland.png"),
  jsomsanith: require("../assets/jsomsanith.png")
};

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "#266092",
  tertiary: "#C3D600",
  quartenary: " #3DB0D6",
  black: "#666666"
});

const coverStyle = {
  title: {
    background: 'rgba(0, 0, 0, 0.2)',
    position: 'absolute',
    top: -180,
    left: 0,
    width: '80%',
    textAlign: 'left',
    paddingLeft: 30,
  },
  logo: {
    position: 'absolute',
    top: -280,
    right: 10,
  }
};

const avatarStyle = {
  margin: '0 50px',
  borderRadius: '50%',
  border: '1px SOLID black'
};

export default class Presentation extends React.Component {
  render() {
    return (
        <Spectacle theme={theme}>
          <Deck transition={["zoom", "slide"]} transitionDuration={500}>
            <Slide bgImage={images.city.replace("/", "")} transition={["zoom"]} bgColor="primary">
              <Heading size={1} caps lineHeight={1} textColor="primary" style={coverStyle.title}>
                React
              </Heading>
              <Image src={images.logo} width="300px" style={coverStyle.logo} />
            </Slide>

            <Slide transition={["zoom"]} bgColor="primary">
              <Layout>
                <Fill>
                  <Image src={images.acateland} width="300px" style={avatarStyle} />
                  <Image src={images.jsomsanith} width="300px" style={avatarStyle} />
                </Fill>
              </Layout>
            </Slide>

            <Slide transition={["slide"]} bgColor="black" notes="Explanation on next slides">
              <Heading size={2} caps fit textColor="primary" textFont="primary">
                What is a SPA ?
              </Heading>
            </Slide>

            <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
              <List>
                <Appear><ListItem>Plain html</ListItem></Appear>
                <Appear><ListItem>Simple scripting</ListItem></Appear>
                <Appear><ListItem>Jquery mess</ListItem></Appear>
                <Appear><ListItem>First frameworks (backbone, ember)</ListItem></Appear>
                <Appear><ListItem>New generation (Angular)</ListItem></Appear>
                <Appear><ListItem>React (not a framework)</ListItem></Appear>
              </List>
            </Slide>

            <Slide transition={["slide"]} bgColor="primary" notes="click 5 times">
              <Layout>
                <Fill>
                  <Interactive/>
                </Fill>
                <Fill>
                  <CodePane lang="jsx" source={require("raw!../assets/react.example")} margin="20px"/>
                </Fill>
              </Layout>
            </Slide>

            <Slide transition={["slide"]} bgColor="secondary" notes="Build your own stack ?">
              <Heading size={2} caps fit textColor="primary" textFont="primary">
                React is a library managing components
              </Heading>
              <List textColor="primary">
                <Appear><ListItem>Not a framework</ListItem></Appear>
                <Appear><ListItem>No dependency injection</ListItem></Appear>
                <Appear><ListItem>No "Ajax" handling</ListItem></Appear>
                <Appear><ListItem>No pre-made super components</ListItem></Appear>
                <Appear><ListItem>Not a template engine</ListItem></Appear>
              </List>
            </Slide>

            <Slide transition={["zoom"]} bgColor="primary" notes="Explained it the few next slides">
              <Heading size={1} fit caps lineHeight={1} textColor="secondary">
                React benefits
              </Heading>
            </Slide>

            <Slide transition={["zoom"]} bgColor="primary" notes="No ghost node with event handler attached etc">
              <Heading size={1} fit caps lineHeight={1} textColor="secondary">
                Hiding dom manipulation
              </Heading>
              <Appear>
                <CodePane lang="js" source={require("raw!../assets/vanilla.example")} margin="20px"/>
              </Appear>
            </Slide>

            <Slide transition={["zoom"]} bgColor="primary" notes="everything is a component, tag are easy to read and to nest, business logic next to representation is good, if component to complex split ">
              <Heading size={1} fit caps lineHeight={1} textColor="secondary">
                JSX a simple abstraction
              </Heading>
              <Appear>
                <CodePane lang="jsx" source={require("raw!../assets/jsx.example")} margin="20px"/>
              </Appear>
            </Slide>

            <Slide transition={["zoom"]} bgColor="primary" notes="Dom is slow, cause layout reflow, repaint etc, virtual dom = performances by default batch and change detection !">
              <Heading size={1} fit caps lineHeight={1} textColor="secondary">
                Virtual DOM
              </Heading>
              <Appear>
                <Text>DOM transformation are slow</Text>
              </Appear>
              <List textColor="secondary">
                <Appear><ListItem>Trigger layout reflow </ListItem></Appear>
                <Appear><ListItem>Trigger repaint</ListItem></Appear>
              </List>
              <Appear>
                <Text>Virtual DOM fast by default</Text>
              </Appear>
              <List textColor="secondary">
                <Appear><ListItem>Virtual representation of the DOM</ListItem></Appear>
                <Appear><ListItem>Batch transformation</ListItem></Appear>
                <Appear><ListItem>Virtual DOM diffing</ListItem></Appear>
              </List>
            </Slide>

            <Slide transition={["zoom"]} bgColor="primary">
              <Heading size={1} fit caps lineHeight={1} textColor="secondary">
                React App Data flow
              </Heading>
              <Heading>
                Need a Schema
              </Heading>
            </Slide>

            <Slide transition={["zoom"]} bgColor="primary">
              <Heading size={1} fit caps lineHeight={1} textColor="secondary">
                Predictability
              </Heading>
            </Slide>

            <Slide transition={["zoom"]} bgColor="primary" notes="show the chrome debug pannel">
              <Heading size={1} fit caps lineHeight={1} textColor="secondary">
                Developer experience
              </Heading>
              <List textColor="secondary">
                <Appear><ListItem>Great tools integrated into the browser</ListItem></Appear>
                <Appear><ListItem>Clear error messages</ListItem></Appear>
                <Appear><ListItem>Api deprecation</ListItem></Appear>
                <Appear><ListItem>Code mods</ListItem></Appear>
              </List>
            </Slide>

            <Slide transition={["zoom"]} bgColor="primary">
              <Heading size={1} fit caps lineHeight={1} textColor="secondary">
                React is not only for HTML
              </Heading>
            </Slide>

            <Slide transition={["zoom"]} bgColor="primary" notes="launch xcode ! its for discord to !">
              <Heading size={1} fit caps lineHeight={1} textColor="secondary">
                React native, learn once apply everywhere
              </Heading>
            </Slide>

            <Slide transition={["zoom"]} bgColor="primary">
              <Heading size={1} fit caps lineHeight={1} textColor="secondary">
                React is not only for UI
              </Heading>
              <Link>https://github.com/FormidableLabs/react-music</Link>
            </Slide>

            <Slide transition={["zoom"]} bgColor="primary">
              <Heading size={1} fit caps lineHeight={1} textColor="secondary">
                Questions ?
              </Heading>
            </Slide>
          </Deck>
        </Spectacle>
    );
  }
}
