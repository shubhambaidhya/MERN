import React from "react";
import Card from "@mui/material/Card";
import { Button, CardActions } from "@mui/material";

const fontStyle = {
  fontFamily: "times new roman",
  fontSize: 30,
};
const CustomCard = () => {
  return (
    <div>
      <section>
        <Card variant="outlined" style={{ width: 500 }}>
          <img
            style={{ width: "100%" }}
            src="https://mui.com/static/images/cards/contemplative-reptile.jpg"
            alt="lizard"
          />
          <h2 style={fontStyle}>Lizard</h2>
          <p
            style={{
              fontFamily: "times new roman",
              fontSize: 21,
              padding: "1rem",
            }}
          >
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </p>
          <CardActions>
            <Button size="small">SHARE</Button>
            <Button size="small">LEARN MORE</Button>
          </CardActions>
        </Card>
      </section>
    </div>
  );
};

export default CustomCard;
