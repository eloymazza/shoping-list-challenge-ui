import { CircularProgress, styled } from "@mui/material";

const Spinner = () => {
  return (
    <StyledSpinnerContainer>
      <CircularProgress size={"75px"} thickness={1.2} color="primary" />
    </StyledSpinnerContainer>
  );
};

const StyledSpinnerContainer = styled("div")(() => ({
  display: "flex",
  width: "100%",
  height: "100%",
  justifyContent: "center",
  alignItems: "start",
  paddingTop: "10%",
}));

export default Spinner;
