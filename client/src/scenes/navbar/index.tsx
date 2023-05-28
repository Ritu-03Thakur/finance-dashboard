import { useState } from "react";
import { Box, Typography } from "@mui/material";
import PixIcon from "@mui/icons-material/Pix";
import FlexBetween from "@/components/FlexBetween";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [selected, setSelected] = useState("dashboard");
  return (
    <>
      <FlexBetween mb="0.25rem" p="10px 10px">
        <FlexBetween gap="0.75rem">
          <PixIcon />
          <Typography>Finanseer</Typography>
        </FlexBetween>

        <FlexBetween gap="2rem">
          <Box>
            <Link
              to={"/"}
              onClick={() => setSelected("dashboard")}
              style={{
                color: selected === "dashboard" ? "#e1c122" : "inherit",
                textDecoration: "inherit",
              }}
            >
              DASHBOARD
            </Link>
          </Box>
          <Box>
            <Link
              to={"/predictions"}
              onClick={() => setSelected("predictions")}
              style={{
                color: selected === "predictions" ? "#e1c122" : "inherit",
                textDecoration: "inherit",
              }}
            >
              PREDICTIONS
            </Link>
          </Box>
        </FlexBetween>
      </FlexBetween>
    </>
  );
};
export default Navbar;
