import { BrowserRouter, Routes, Route } from "react-router-dom"; //Routing component

import Home from "./pages/Home";
import Films from "./pages/Film";
import Details from "./pages/Details"; //page imports

import { NavBar } from "./components/NavBar";
import Aside from "./components/Aside"; //component imports

import { Grid, GridItem, Show } from "@chakra-ui/react";
import "./App.css"; // styles import

function App() {
  return (
    <div className="App">
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav""aside main"`,
        }}
        gridTemplateRows={"13vh 1fr 30px"}
        gridTemplateColumns={[
          "100vw 1fr",
          "100vw 1fr",
          "100vw 1fr",
          "20vw 1fr",
          "20vw 1fr",
        ]}
        h="100vh"
        w="100vw"
      >
        <GridItem area="nav" bg="#03123D" h="0vh" mb="0px">
          <NavBar />
        </GridItem>

        <Show above="lg">
          <GridItem area="aside" bg="#03123B" w="20vw">
            <Aside />
          </GridItem>
        </Show>

        <GridItem area="main" bg="#03123D" color="white" pb={20}>
          <BrowserRouter>
            <Routes>
              <Route index element={<Films />} />
              <Route path="/film" element={<Films />} />
              <Route path="/home" element={<Home />} />
              <Route path="/details" element={<Details />}></Route>
            </Routes>
          </BrowserRouter>
        </GridItem>
      </Grid>
    </div>
  );
}

export default App;
