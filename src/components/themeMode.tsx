import { useState, useEffect } from "react";
import { Helmet } from 'react-helmet';

export default function ThemeMode() {
    localStorage.setItem("themeMode", "dark");
    localStorage.setItem("favicon", "icon-st-b.svg");
//  
  const themeModeStorage = localStorage.getItem("themeMode");
  const faviconModeStorage = localStorage.getItem("favicon");
//
  const [themeMode, setThemeMode] = useState(`${themeModeStorage}`);
  const [favicon, setFavicon] = useState(`${faviconModeStorage}`);
//
//
  useEffect(() => {
    localStorage.setItem("themeMode", `${themeMode}`);
    localStorage.setItem("favicon", `${favicon}`);
    document.querySelector("html")?.setAttribute("data-theme", `${themeMode}`);
  }, [themeMode, favicon]);
//
//
  const ThemeModeToggle = () => {
    const themeModeStorage = localStorage.getItem("themeMode");
    if (themeModeStorage === "dark") {
      setFavicon("icon-st-w.svg");
      setThemeMode(`light`);
      
    } else {
      setFavicon("icon-st-b.svg");
      setThemeMode(`dark`);   
    }
  };
//
//
  return (
    <>
    <Helmet>
    <link rel="icon" type="image/svg+xml" href={`./src/assets/${favicon}`} />
    </Helmet>
      <button 
      type="button" 
      className={`theme ${themeMode}`} 
      onClick={ThemeModeToggle} 
      />
    </>
  );
}