import React, { useState } from "react";

import Radio from "@material-ui/core/Radio";

const Calification = () => {
  const [calification, setCalification] = useState(0);

  const getCalification = (myCalification) => {
    if (myCalification === calification) {
      setCalification(0);
    } else {
      setCalification(myCalification);
    }
  };

  return (
    <div>
      <Radio
        checked={
          calification === 5 ||
          calification === 4 ||
          calification === 3 ||
          calification === 2 ||
          calification === 1
        }
        // checkedIcon={useWings}
        // icon={useWings}
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
        // checkedIcon={useWings}
        // icon={useWings}
        onClick={() => getCalification(2)}
        name="calification"
        value={2}
        inputProps={{ "aria-label": "2" }}
      />
      <Radio
        checked={calification === 5 || calification === 4 || calification === 3}
        // checkedIcon={useWings}
        // icon={useWings}
        onClick={() => getCalification(3)}
        name="calification"
        value={3}
        inputProps={{ "aria-label": "3" }}
      />
      <Radio
        checked={calification === 5 || calification === 4}
        // checkedIcon={useWings}
        // icon={useWings}
        onClick={() => getCalification(4)}
        name="calification"
        value={4}
        inputProps={{ "aria-label": "4" }}
      />
      <Radio
        checked={calification === 5}
        // checkedIcon={useWings}
        // icon={useWings}
        onClick={() => getCalification(5)}
        name="calification"
        value={5}
        inputProps={{ "aria-label": "5" }}
      />
    </div>
  );
};

export default Calification;
