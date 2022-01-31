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
//shared
import "./components/shared/ImageAnimation.svelte";
import "./components/shared/VideoPlay.svelte";

//others
import "./components/LogoAnimation/LogoAnimation.svelte";
import "./components/PinnedSection/PinnedSection.svelte";
