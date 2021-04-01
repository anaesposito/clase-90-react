import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCartOutlined";
import "./NavBar.scss";

const NavBar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <nav>
      <div className="header-nav">
        <div className="sections-container">
          <Button
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            <MenuIcon className="menu-icon" />
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
          <h2>HOME</h2>
          <h2>SHOP</h2>
          <h2>MAGAZINE</h2>
        </div>

        <div className="login-container-nav">
          <ShoppingCartIcon className="cart-icon" />
          <h2>LOGIN</h2>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
