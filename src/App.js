import React from "react";
import { Grid } from "@material-ui/core";

function App() {
  return (
    <Grid container direction="column">
      <Grid item>This is where header will be</Grid>
      <Grid item container>
        <Grid item xs={0} sm={2}></Grid>
        <Grid item xs={12} sm={8}>
          There will be contents There will be contents There will be contents
          There will be contents There will be contents There will be contents
          There will be contents There will be contents There will be contents
        </Grid>
        <Grid item xs={0} sm={2}></Grid>
      </Grid>
    </Grid>
  );
}

export default App;
