/* eslint-disable react/no-array-index-key */
import Drawer from "Drawer/Drawer";
import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import BetCard from "./BetCard";

export default function Home() {
  return (
    <Drawer>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {Array.from(Array(48)).map((_, index) => (
            <Grid item xs={4} sm={4} md={4} key={index}>
              <BetCard />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Drawer>
  );
}
