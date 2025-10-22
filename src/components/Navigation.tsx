import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import LightModeIcon from "@mui/icons-material/LightMode";
import List from "@mui/material/List";
import ListIcon from "@mui/icons-material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";

const drawerWidth = 240;
const navItems: [string, string][] = [
  ["About Me", "about"],
  ["Resume", "expertise"],
  ["Porfolios", "projects"],
  ["Contact", "contact"],
];

type Props = {
  parentToChild: { mode: "light" | "dark"; showThemeToggle?: boolean };
  modeChange?: () => void;
};

function Navigation({ parentToChild, modeChange }: Props) {
  const { mode, showThemeToggle = true } = parentToChild;

  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("navigation");
      if (navbar) {
        const didScroll = window.scrollY > navbar.clientHeight;
        setScrolled(didScroll);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (section: string) => {
    const el = document.getElementById(section);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    else console.error(`Element with id "${section}" not found`);
  };

  const drawer = (
    <Box
      className="navigation-bar-responsive"
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center" }}
    >
      <p className="mobile-menu-top">
        <ListIcon />
        Menu
      </p>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item[0]} disablePadding>
            <ListItemButton
              sx={{ textAlign: "center" }}
              onClick={() => scrollToSection(item[1])}
            >
              <ListItemText primary={item[0]} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        id="navigation"
        className={`navbar-fixed-top${scrolled ? " scrolled" : ""}`}
      >
        <Toolbar className="navigation-bar" sx={{ gap: 1 }}>
          {/* Mobile hamburger (left) */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 1, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          {/* OPTIONAL: theme toggle — set showThemeToggle to false to hide */}
          {showThemeToggle && (
            <IconButton
              aria-label="theme-toggle"
              onClick={modeChange}
              sx={{ color: "inherit", display: { xs: "none", sm: "inline-flex" } }}
            >
              {mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
          )}

          {/* LINKS — this Box is pushed to the RIGHT with ml:auto */}
          <Box sx={{ ml: "auto", display: { xs: "none", sm: "flex" }, gap: 1 }}>
            {navItems.map((item) => (
              <Button
                key={item[0]}
                onClick={() => scrollToSection(item[1])}
                sx={{
                  color: "#000", // black text
                  textTransform: "none",
                  fontWeight: 600,
                }}
              >
                {item[0]}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile drawer */}
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

export default Navigation;
