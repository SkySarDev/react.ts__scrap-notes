import React, { FC } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Button,
  CircularProgress,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";

import { AppRoutes } from "constants/AppRoutes";

interface IHeaderProps {
  user?: string;
  isLoading: boolean;
  logout: () => void;
}

const Header: FC<IHeaderProps> = ({ user, isLoading, logout }) => {
  return (
    <AppBar position={"static"}>
      <Container maxWidth={"md"}>
        <Toolbar disableGutters>
          <Typography
            variant={"h6"}
            sx={{
              flexGrow: 1,
              "&& a": { color: "rgb(255, 255, 255)", textDecoration: "none" },
            }}
          >
            <Link to={AppRoutes.NOTES}>Scrap Notes</Link>
          </Typography>

          {isLoading ? (
            <CircularProgress color="inherit" size={30} />
          ) : user ? (
            <>
              <Typography variant={"subtitle1"} marginRight={1}>
                {user}
              </Typography>
              <IconButton color={"inherit"} size={"small"} onClick={logout}>
                <LogoutIcon />
              </IconButton>
            </>
          ) : (
            <>
              <Button color={"inherit"} component={Link} to={AppRoutes.LOGIN}>
                Логин
              </Button>
              <Button
                color={"inherit"}
                component={Link}
                to={AppRoutes.REGISTRATION}
              >
                Регистрация
              </Button>
            </>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
