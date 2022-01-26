<script lang="ts">
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { onMount } from "svelte/internal";
gsap.registerPlugin(ScrollTrigger);
/* --------------------------------------------------------------
# Vars
-------------------------------------------------------------- */
export let imagesrc: string
export let imagealt: string
export let type:string = ''

let imageWrap:HTMLElement;
let imageElement:HTMLElement;
/* --------------------------------------------------------------
# Methods
-------------------------------------------------------------- */
const initAnimation = () =>{
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: imageWrap,
      markers: false,
      scrub: 0.5,
      start: "top 80%",
      end: "50% center",
    }
  })
  
  if(type === 'dropshadow'){
    tl.to(imageElement,{
      duration: 1,
      y: "-1rem",
      x:"-1rem",
    })
  }
  if(type === 'tech-logo'){
    gsap.set(imageElement, {opacity: 0, scale: 0, x: 100, rotate: 30});
    tl.to(imageElement,{
      duration: 1,
      scale: 1.2,
      opacity: 1,
      x: 0,
      rotate: 0,
    })
  }
}

onMount(() => {
  initAnimation();
})

</script>
<svelte:options tag="image-animation" />
<div class="image" class:image--tech-logos={type ==='tech-logo'} class:image--dropshadow={type === 'dropshadow'} bind:this={imageWrap}>
    <img src={imagesrc} alt={imagealt} bind:this={imageElement}/>
</div>

<style lang="scss">
.image {
  position: relative;

  img {
    width: 100%;
    position: relative;
    z-index: 2;
  }

  &--dropshadow {
    @include mobile {
      transform: translateX(0.5rem);
    }

    &::before {
      background-color: $secondary;
      content: "";
      display: block;
      height: 100%;
      left: 0;
      position: absolute;
      top: 0;
      width: 100%;
      z-index: 1;
    }
  }
}

</style>