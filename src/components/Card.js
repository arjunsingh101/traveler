import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { TbPlaneDeparture } from "react-icons/tb";
const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const data = [
  {
    Airport: "Bengaluru (BLR)",
    AirportName: "kempegowda international airport",
    country: "IN",
    flagIcon: "india",
  },
  {
    Airport: "Rio de Janeiro (RIO)",
    AirportName: "Rio de Janeiro/Galeão International Airport",
    country: "BR",
    flagIcon: "brazil",
  },
  {
    Airport: "Sydney (SYD)",
    AirportName: "Sydney Kingsford Smith International Airport",
    country: "AU",
    flagIcon: "australia",
  },
  {
    Airport: "Toronto(YYZ)",
    AirportName: "Lester B. Pearson International Airport",
    country: "CA",
    flagIcon: "canada",
  },
  {
    Airport: "New Delhi (DEL)",
    AirportName: "Indira Gandhi International Airport",
    country: "IN",
    flagIcon: "india",
  },
];

const card = (
  <React.Fragment
    style={{
      boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25)",
      backdropFilter: "blur(5px)",
      borderRadius: "10px",
    }}
  >
    <CardContent>
      <div style={{}}>
        {data.map((p, i) => (
          <div
            style={{
              justifyContent: "space-between",
              flexDirection: "row",
              display: "flex",
              marginTop: 8
            }}
            key={i}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <div style={{ marginRight: 15, alignSelf: "center" }}>
                <TbPlaneDeparture size={25} />
              </div>
              <div style={{}}>
                <div style={{ fontSize: 20, fontWeight: 600 }}>{p.Airport}</div>
                <div style={{ marginTop: 5 }}>{p.AirportName}</div>
              </div>
            </div>
            <div
              style={{
                justifyContent: "center",
                alignSelf: "center",
                flexDirection: "row",
                display: "flex",
              }}
            >
              <div>{p.country}</div>
              <div style={{ marginLeft: 10 }}>
                <img src={require(`../asset/${p.flagIcon}.png`)} width={20} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </CardContent>
  </React.Fragment>
);

export default function OutlinedCard() {
  return (
    <Box sx={{ Width: "50px", height: "50px" }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}
