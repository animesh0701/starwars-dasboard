import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Films from "./pages/Film";
import Details from "./pages/Details";
import {
  Grid,
  GridItem,
  Show,
  Box,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import "./App.css";
import { NavBar } from "./components/NavBar";
import Aside from "./components/Aside";

function App() {
  return (
    <div className="App">
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav""aside main"`,
        }}
        h={"100vh"}
      >
        <GridItem area="nav" bg="#03123D">
          <NavBar />
        </GridItem>

        <Show above="lg">
          <GridItem area="aside" bg="#03123B">
            <Aside />
          </GridItem>
        </Show>

        <GridItem area="main" bg="#03123D" color="white">
          <BrowserRouter>
            <Routes>
              <Route index element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/film" element={<Films />} />
              <Route path="/details" element={<Details />}></Route>
            </Routes>
          </BrowserRouter>
        </GridItem>
      </Grid>
    </div>
  );
}

export default App;
