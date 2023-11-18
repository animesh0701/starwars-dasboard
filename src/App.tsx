import { Grid, GridItem, Show } from "@chakra-ui/react";
import { NavBar } from "./components/NavBar";
import Aside from "./components/Aside";
import Films from "./components/Films";

function App() {
  return (
    <div className="App">
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav""aside main"`,
        }}
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
          <Films />
        </GridItem>
      </Grid>
    </div>
  );
}

export default App;
