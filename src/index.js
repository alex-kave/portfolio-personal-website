/*--------------------------------------------------------------
# Global Styles
--------------------------------------------------------------*/
import "./index.scss";

/*--------------------------------------------------------------
# Feather Icons
--------------------------------------------------------------*/
import feather from "feather-icons";
document.addEventListener("DOMContentLoaded", () => {
  feather.replace();
});

/*--------------------------------------------------------------
# Components
--------------------------------------------------------------*/
import "./components/shared/ImageAnimation.svelte";
import "./components/LogoAnimation/LogoAnimation.svelte";
