import { Container, Grid } from "@mui/material";
import Curve from "../Curve/Curve";

export default function Body() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <Container className="custom-graph">
          <Curve/>
        </Container>
      </Grid>
      <Grid item xs={6}>
        <Container>
          Description of Graph.
        </Container>
      </Grid>
    </Grid>
  );
}