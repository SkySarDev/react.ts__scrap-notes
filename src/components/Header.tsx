import React, { FC } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Button,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";

import { AppRoutes } from "constants/AppRoutes";

interface IHeaderProps {
  user?: string;
  logout: () => void;
}

const Header: FC<IHeaderProps> = ({ user, logout }) => {
  return (
    <AppBar position={"static"}>
      <Container maxWidth={"md"}>
        <Toolbar disableGutters>
          <Typography variant={"h6"} sx={{ flexGrow: 1 }}>
            Scrap Notes
          </Typography>

          {user ? (
            <>
              <Typography sx={{ fontWeight: 500 }}>{user}</Typography>
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
