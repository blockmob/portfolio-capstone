import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import HomeIcon from "@mui/icons-material/Home";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Box, Typography } from "@mui/material";

const pages = ["Home", "About", "Ventures", "Recognitions", "Contact"];

export default function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [activePage, setActivePage] = useState("Home");

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handlePageClick = (page) => {
    setActivePage(page);
    handleMenuClose();
  };

  return (
    <AppBar
      position="static"
      sx={{
        bgcolor: "transparent",
        boxShadow: "none",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 0,
        margin: 0
      }}
    >
      <Toolbar
        disableGutters
        sx={{
          bgcolor: "#000",
          borderRadius: "50px",
          px: "4px",
          py: "2px",
          display: "flex",
          justifyContent: "center",
          gap: 1,
          minHeight: "40px",
        }}
      >
        {/* Desktop Menu */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            alignItems: "center",
            gap: 1,
          }}
        >
          {pages.map((page) => (
            <Box
              key={page}
              onClick={() => handlePageClick(page)}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 0.5,
                cursor: "pointer",
                px: "12px",
                py: "4px",
                borderRadius: "50px",
                bgcolor: activePage === page ? "#fff" : "transparent",
                color: activePage === page ? "#000" : "#fff",
                fontSize: "14px",
                transition: "0.3s",
              }}
            >
              {page === "Home" && <HomeIcon sx={{ fontSize: 18 }} />}
              <Typography fontSize="14px">{page}</Typography>
            </Box>
          ))}
        </Box>

        {/* Mobile Menu Button */}
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <IconButton onClick={handleMenuOpen} sx={{ color: "#fff", p: 0.5 }}>
            <MoreVertIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            {pages.map((page) => (
              <MenuItem
                key={page}
                selected={page === activePage}
                onClick={() => handlePageClick(page)}
              >
                {page === "Home" && <HomeIcon sx={{ fontSize: 18, mr: 1 }} />}
                {page}
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
