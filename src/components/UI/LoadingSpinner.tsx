import React, { FC, ReactElement } from "react";
import { Box, CircularProgress } from "@mui/material";

const LoadingSpinner: FC = (): ReactElement => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", pt: 10, pb: 10 }}>
      <CircularProgress />
    </Box>
  );
};

export default LoadingSpinner;
