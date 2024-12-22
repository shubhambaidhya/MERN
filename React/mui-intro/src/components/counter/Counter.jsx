import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";

// hooks => react functions which has specific task
// example => useState, useEffect, useRef, useCallback, useMemo
// third-party hooks => redux => useSelector, useDispatch
// router => useNavigate

// ? event
// ? onClick, onChange, onKeyPress, onSubmit, onScroll

const Counter = () => {
  //   let count = 1;
  const [count, setCount] = useState(1);

  const increaseCount = () => {
    let newCount = count + 1;
    setCount(newCount);
  };

  const decreaseCount = () => {
    let newCount = count - 1;
    setCount(newCount);
  };
  return (
    <Box>
      <Typography variant="h3" gutterBottom>
        This is a counter app
      </Typography>
      <Typography variant="h4">Count:{count}</Typography>
      <Button
        disableRipple
        variant="contained"
        color="success"
        onClick={increaseCount}
      >
        Increase count
      </Button>
      <Button
        style={{ margin: "1rem" }}
        disableRipple
        variant="contained"
        color="error"
        onClick={decreaseCount}
      >
        Decrease count
      </Button>
      <Button
        disableRipple
        variant="contained"
        color="warning"
        onClick={() => {
          setCount(0);
        }}
      >
        Reset Count
      </Button>
    </Box>
  );
};

export default Counter;
