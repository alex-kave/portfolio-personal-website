<script lang="ts">
/*--------------------------------------------------------------
# Imports
--------------------------------------------------------------*/
  import { onMount } from "svelte";
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  gsap.registerPlugin(ScrollTrigger);

/* --------------------------------------------------------------
# Vars
-------------------------------------------------------------- */
export let headline:string;
export let animduration:number
let component:HTMLElement;
$:isFixed = false;
/* --------------------------------------------------------------
# Methods
-------------------------------------------------------------- */
onMount(()=>{
  if(window.innerWidth >= 769){
    const tl = gsap.timeline({
      scrollTrigger: {
        scrub: 0.5,
        trigger: component,
        start: "center center",
        end: `+=${animduration} center`,
        pin: true,
        markers: false,
        pinSpacing: false,
        onUpdate: (self) =>{
          if(self.progress > 0 ){
            isFixed = true;
          }
          if(self.progress === 0){
            isFixed = false;
          }
        },
      }
    });
  }
})


</script>
<svelte:options tag="pinned-section" />
<section class="section section--title-sticky" bind:this={component} class:is-fixed={isFixed}>
    <h2>
        {headline}
    </h2>
</section>

<style lang="scss">
.section--title-sticky {
    align-items: center;
    display: flex;
    justify-content: center;

    h2 {
        font-family: $family-secondary;
        font-size: 2.5rem;
        transform: scale(1);
        @include tablet{
          font-size: 6rem;
        }
        @include desktop{
          font-size: 10rem;
        }
    }
    &.is-fixed{
      h2{
        transform: scale(0.9);
        color: $white;
        transition: transform 0.3s ease-in;
      }
    }
  }
</style>