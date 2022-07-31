import React from "react";
import Paper from "@mui/material/Paper";
import { experimentalStyled as styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import Grid from "@mui/material/Grid";
import SendIcon from "@mui/icons-material/Send";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Button from "@mui/material/Button";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

export default function BetCard() {
  return (
    <Item>
      <Grid container spacing={2}>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                Standard license
              </Typography>
              <Typography variant="body2" gutterBottom>
                Full resolution 1920x1080 • JPEG
              </Typography>
              <Typography variant="body2" color="text.secondary">
                ID: 1030114
              </Typography>
            </Grid>
            <Grid item>
              <Typography sx={{ cursor: "pointer" }} variant="body2">
                Remove
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" component="div">
              $19.00
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        color="red"
        style={{
          // display: "flex",
          // justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Button
          variant="contained"
          size="large"
          style={{ marginRight: 6, marginLeft: 6, paddingRight: 4, width: "30%" }}
          endIcon={<ArrowDropUpIcon fontSize="large" />}
        >
          UP
        </Button>
        <Button
          variant="contained"
          size="large"
          style={{ marginRight: 6, marginLeft: 6, paddingLeft: 4, width: "30%" }}
          startIcon={<ArrowDropDownIcon fontSize="large" />}
        >
          Down
        </Button>
      </Grid>
    </Item>
  );
}
