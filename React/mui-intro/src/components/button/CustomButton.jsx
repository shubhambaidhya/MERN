import { Button, IconButton } from "@mui/material";
import React from "react";
import "./button.style.css";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
const CustomButton = () => {
  return (
    <div>
      <section id="variant-section" className="button-section">
        <h1>Button Variants</h1>
        <Button variant="text">Text</Button>
        <Button variant="contained">Click me</Button>
        <Button variant="outlined">Send message</Button>
      </section>

      <section id="color-variant" className="button-section">
        <h1>Color Variant</h1>
        <Button color="primary" variant="contained">
          Primary
        </Button>
        <Button color="secondary" variant="contained">
          Secondary
        </Button>
        <Button color="success" variant="contained">
          Success
        </Button>
        <Button color="error" variant="contained">
          Error
        </Button>
        <Button color="info" variant="contained">
          Info
        </Button>
        <Button sx={{ background: "#873e23", color: "white" }}>
          Random Color
        </Button>
      </section>
      <section id="size-variant" className="button-section">
        <h1>Button Size</h1>
        <Button size="small" variant="contained">
          small
        </Button>
        <Button variant="contained">medium</Button>
        <Button size="large" variant="contained">
          large
        </Button>
      </section>
      <section id="icon-variant" className="button-section">
        <h1>Icon Button / button with icon</h1>
        <Button variant="outlined" endIcon={<EditOutlinedIcon />}>
          Edit Product
        </Button>
        <Button
          variant="outlined"
          startIcon={<DeleteOutlineOutlinedIcon />}
          onClick={() => {
            console.log("Deleted");
            alert("Deleted");
          }}
        >
          Delete Product
        </Button>
      </section>

      <section className="button-section">
        <h1>Icon Button</h1>
        <IconButton color="error">
          <DeleteOutlineOutlinedIcon />
        </IconButton>
      </section>
    </div>
  );
};

export default CustomButton;
