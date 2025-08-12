import React, { useState, useRef, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import "./Navbar.css";
import MenuIcon from "@mui/icons-material/Menu";


const pages = ["Home", "About", "Ventures", "Recognitions", "Contact"];

// Map each page to its icon path
const pageIcons = {
  Home: "/Images/Hero/Home.svg",
  About: "/Images/Hero/Home.svg",
  Ventures: "/Images/Hero/Home.svg",
  Recognitions: "/Images/Hero/Home.svg",
  Contact: "/Images/Hero/Home.svg",
};

export default function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [activePage, setActivePage] = useState("Home");
  const [highlightStyle, setHighlightStyle] = useState({});
  const [isMobile, setIsMobile] = useState(window.innerWidth < 900);
  const itemRefs = useRef({});

  const handleScrollToSection = (page) => {


    const targetId =
      page === "Home"
        ? "Home"
        : page === "About"
          ? "About"
          : page === "Ventures"
            ? "Ventures"
            : page === "Recognitions"
              ? "Recognitions"
              : null;

    if (targetId) {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };



  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 900);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handlePageClick = (page) => {
    setActivePage(page);
    handleMenuClose();
    handleScrollToSection(page);
  };

  // Update highlight position whenever activePage changes
  useEffect(() => {
    const el = itemRefs.current[activePage];
    if (el) {
      const { offsetLeft, offsetWidth } = el;
      setHighlightStyle({
        width: `${offsetWidth}px`,
        transform: `translateX(${offsetLeft}px) translateY(-50%)`,
        top: "50%",
        height: "80%",
      });
    }
  }, [activePage]);

  return (
    <AppBar
      position="fixed" // changed from static
      sx={{
        bgcolor: "transparent",
        boxShadow: "none",
        display: "flex",
        justifyContent: "center",
        alignItems: isMobile ? "end" : "center",
        p: 0,
        m: 0,
        top: 15, // ensure it's stuck to the top
        left: 0,
        width: "100%", // span full width
        zIndex: 1100, // stay above other elements
      }}
    >
      <div
        style={{
          backgroundColor: isMobile ? "transparent" : "#0F0F0F",
          borderRadius: "100px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "4px",
          padding: "4px",
          position: "relative",
          overflow: "hidden",
        }}
        className="slidingdivtop"
      >
        {/* Sliding Highlight */}
        <div
          style={{
            position: "absolute",
            left: "4px",
            backgroundColor: "#fff",
            borderRadius: "100px",
            transition: "transform 0.3s ease, width 0.3s ease",
            ...highlightStyle,
          }}
          className="slidingdiv"
        ></div>

        {/* Desktop Menu */}
        <div
          style={{
            display: isMobile ? "none" : "flex",
            alignItems: "center",
            gap: "4px",
            position: "relative",
          }}
        >
          {pages.map((page) => (
            <div
              key={page}
              ref={(el) => (itemRefs.current[page] = el)}
              onClick={() => handlePageClick(page)}
              style={{
                padding: "8px 20px",
                display: "flex",
                alignItems: "center",
                borderRadius: "100px",
                color: activePage === page ? "#0F0F0F" : "#fff",
                cursor: "pointer",
                transition: "color 0.3s ease",
                zIndex: 1,
              }}
              className="buttonnavbar"
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                {/* Only show icon if page is active */}
                {activePage === page && (
                  <img src={pageIcons[page]} alt={`${page} icon`} className="iconpage" />
                )}

                <p
                  className={`FOntofnavbar ${activePage === page ? "active" : ""}`}
                  style={{
                    color: activePage === page ? "#0F0F0F" : "#fff",
                  }}
                >
                  {page}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div
          style={{
            display: isMobile ? "flex" : "none",
            alignItems: "center",
            justifyContent: "flex-start", // align left
            width: "100%",
            backgroundColor: "transparent",
          }}
        >
          <IconButton
            onClick={handleMenuOpen}
            sx={{
              backgroundColor: "transparent",
              color: "#000", // black icon
              padding: 0,
              "&:hover": { backgroundColor: "transparent" },
            }}
          >
            <MenuIcon />
          </IconButton>

          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            PaperProps={{
              sx: {
                bgcolor: "#0F0F0F",
                width: "100%",

              },
            }}
          >
            {pages.map((page) => (
              <MenuItem
                key={page}
                selected={page === activePage}
                onClick={() => handlePageClick(page)}
                sx={{
gap: 1,
                  bgcolor: page === activePage ? "#fff" : "transparent",
                  color: page === activePage ? "#0F0F0F" : "#fff",
                  "&.Mui-selected": {
                    bgcolor: "#fff",
                    color: "#0F0F0F",
                  },
                  "&.Mui-selected:hover": {
                    bgcolor: "#fff",
                  },
                }}
              >
                {activePage === page && (
                  <img
                    src={pageIcons[page]}
                    alt={`${page} icon`}
                    style={{ width: 18, marginRight: 8 }}
                  />
                )}
                {page}
              </MenuItem>
            ))}
          </Menu>

        </div>
      </div>
    </AppBar>
  );
}