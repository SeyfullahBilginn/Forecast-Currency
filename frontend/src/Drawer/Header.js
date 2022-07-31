import { Grid, Ite, Typography } from "@mui/material";
import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import "./Header.css";

import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import btcIcon from "../assets/bitcoin.png";
import ethIcon from "../assets/etherium.png";
import auIcon from "../assets/gold.png";
import allIcon from "../assets/money.png";
// import { gold } from "react-icons/fa"

function Header() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const [currencies, setCurrencies] = useState([
    {
      title: "Bitcoin",
      symbol: "BTC",
      href: "#bitcoin",
      icon: btcIcon,
    },
    {
      title: "Ethereum",
      symbol: "ETH",
      href: "#ethereum",
      icon: ethIcon,
    },
    {
      title: "Gold",
      symbol: "XAU",
      href: "#gold",
      icon: auIcon,
    },
  ]);

  return (
    <div className="scroll__container">
      <div className="skin__option">
        {currencies.map((item, index) => (
          <Link
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            to={`/home/${item.href}`}
            style={{ textDecoration: "none" }}
          >
            <Button
              variant="contained"
              className="intro"
              style={{
                marginRight: 20,
                paddingLeft: 20,
                paddingRight: 20,
                backgroundColor: "#7A86B6",
              }}
            >
              <img className="img" alt={item.name} src={item.icon} width="40px" />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  marginLeft: 10,
                  padding: 0,
                }}
              >
                <div
                  style={{
                    fontWeight: "bolder",
                    float: "right",
                    fontSize: "1em",
                    // fontSize: index === activePageIndex ? "1em" : "0.9em",
                  }}
                >
                  {item.symbol}
                </div>
                <div
                  style={{
                    fontWeight: "normal",
                    // fontSize: "0.9em",
                    // width: "40%",
                    // fontSize: index === activePageIndex ? "0.9em" : "0.8em",
                  }}
                >
                  cur
                </div>
              </div>
            </Button>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Header;
