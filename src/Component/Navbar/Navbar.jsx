import React, { useState, useRef, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import "./Navbar.css";
import MenuIcon from "@mui/icons-material/Menu";

const pages = ["Home", "About", "Ventures", "Recognitions", "Contact"];

const pageIcons = {
  Home: "/Images/Hero/Home.svg",
  About: "/Images/Hero/Home.svg",
  Ventures: "/Images/Hero/Home.svg",
  Recognitions: "/Images/Hero/Home.svg",
  Contact: "/Images/Hero/Home.svg",
};

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activePage, setActivePage] = useState("Home");
  const [highlightStyle, setHighlightStyle] = useState({});
  const [isMobile, setIsMobile] = useState(window.innerWidth < 900);
  const itemRefs = useRef({});

  const handleScrollToSection = (page) => {
    const targetId = page;
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

  const handlePageClick = (page) => {
    setActivePage(page);
    setDrawerOpen(false);
    handleScrollToSection(page);
  };

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
      position={window.innerWidth > 900 ? "fixed" : "relative"}
      sx={{
        bgcolor: "transparent",
        boxShadow: "none",
        display: "flex",
        justifyContent: "center",
        alignItems: isMobile ? "end" : "center",
        top: window.innerWidth < 500 ? "20px" : window.innerWidth > 1600 ? "36px" : "32px",
        left: 0,
        width: "100%",
        zIndex: 1100,
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
            backgroundColor: isMobile ? "transparent" : "#FFFFFF",
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

        {/* Mobile Drawer Button */}
        <div
          style={{
            display: isMobile ? "flex" : "none",
            alignItems: "center",
            justifyContent: "flex-start",
            width: "100%",
            backgroundColor: "transparent",
          }}
        >
          <IconButton
            onClick={() => setDrawerOpen(true)}
            sx={{
              backgroundColor: "transparent",
              color: "#000",
              padding: 0,
              "&:hover": { backgroundColor: "transparent" },
            }}
          >
            <MenuIcon />
          </IconButton>

          {/* Right Drawer */}
          <Drawer
            anchor="right"
            open={drawerOpen}
            onClose={() => setDrawerOpen(false)}
            PaperProps={{
              sx: {
                bgcolor: "#0F0F0F",
                width: "250px",
                paddingTop: "30px",

              },
            }}
          >
            <List>
              {pages.map((page) => (
                <ListItem key={page} disablePadding>
                  <ListItemButton
                    onClick={() => handlePageClick(page)}
                    sx={{
                      gap: 1,
                      margin: "8px 0 !important",
                      bgcolor: page === activePage ? "#fff" : "transparent",
                      color: page === activePage ? "#0F0F0F" : "#fff",
                      "&:hover": {
                        bgcolor: page === activePage ? "#fff" : "#1a1a1a",
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
                    <ListItemText primary={page} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Drawer>
        </div>
      </div>
    </AppBar>
  );
}
