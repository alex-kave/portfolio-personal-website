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
import "./components/shared/ImageAnimation.wc.svelte";
import "./components/shared/VideoPlay.wc.svelte";
import "./components/shared/FeatherIcon.wc.svelte";

//others
import "./components/LogoAnimation/LogoAnimation.wc.svelte";
import "./components/PinnedSection/PinnedSection.wc.svelte";
import "./components/ImageToCursor/ImageToCursor.wc.svelte";
import "./components/BackTop/BackTop.wc.svelte";
