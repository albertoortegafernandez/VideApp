import { Box, AppBar, Toolbar, Typography } from "@mui/material";

export const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 2 }}>
      <AppBar>
        <Toolbar className="dark">
          <Typography
            component="a"
            href="/VideoApp/"
            variant="h3"
            align="center"
            sx={{ flexGrow: 1, color: "inherit", textDecoration: "none" }}
          >
            Video App
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
