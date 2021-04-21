import React, { useState } from "react";
import StarIcon from "@material-ui/icons/Star";
import { styled } from "@material-ui/core/styles";
import { compose, spacing, palette } from "@material-ui/system";

import Radio from "@material-ui/core/Radio";

import useStyles from "./css/Calification";

const Box = styled("div")(compose(spacing, palette));

const Calification = ({ SearchCalification }) => {
  const classes = useStyles();

  const [calification, setCalification] = useState(0);

  const getCalification = (myCalification) => {
    if (myCalification === calification) {
      setCalification(0);
    } else {
      setCalification(myCalification);
      SearchCalification(myCalification);
    }
  };

  return (
    <Box className={classes.root} color="white"  p={2}>
      <h3>Filter by average: </h3>
      <Radio
        checked={
          calification === 5 ||
          calification === 4 ||
          calification === 3 ||
          calification === 2 ||
          calification === 1
        }
        checkedIcon={<StarIcon />}
        icon={<StarIcon />}
        onClick={() => getCalification(1)}
        name="calification"
        value={1}
        inputProps={{ "aria-label": "1" }}
      />
      <Radio
        checked={
          calification === 5 ||
          calification === 4 ||
          calification === 3 ||
          calification === 2
        }
        checkedIcon={<StarIcon />}
        icon={<StarIcon />}
        onClick={() => getCalification(2)}
        name="calification"
        value={2}
        inputProps={{ "aria-label": "2" }}
      />
      <Radio
        checked={calification === 5 || calification === 4 || calification === 3}
        checkedIcon={<StarIcon />}
        icon={<StarIcon />}
        onClick={() => getCalification(3)}
        name="calification"
        value={3}
        inputProps={{ "aria-label": "3" }}
      />
      <Radio
        checked={calification === 5 || calification === 4}
        checkedIcon={<StarIcon />}
        icon={<StarIcon />}
        onClick={() => getCalification(4)}
        name="calification"
        value={4}
        inputProps={{ "aria-label": "4" }}
      />
      <Radio
        checked={calification === 5}
        checkedIcon={<StarIcon />}
        icon={<StarIcon />}
        onClick={() => getCalification(5)}
        name="calification"
        value={5}
        inputProps={{ "aria-label": "5" }}
      />
    </Box>
  );
};

export default Calification;
