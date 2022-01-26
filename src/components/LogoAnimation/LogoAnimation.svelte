<script lang="ts">
/*--------------------------------------------------------------
# Imports
--------------------------------------------------------------*/
import lottie from 'lottie-web'
import { onMount } from "svelte/internal";
/* --------------------------------------------------------------
# Vars
-------------------------------------------------------------- */
let logoAnimation:HTMLElement;
export let animationdata:string;
let animation;

/* --------------------------------------------------------------
# Methods
-------------------------------------------------------------- */
const startAnimation = () =>{
        animation.goToAndPlay(0, true)
    }

onMount(()=>{
    animation = lottie.loadAnimation({
        container: logoAnimation, 
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: animationdata,
    });   
    startAnimation();
    animation.addEventListener('complete', () =>{
        setTimeout(()=>{
            animation.setDirection(animation.playDirection * -1)
            animation.play()
        }, 1000)
    })
})





</script>
<svelte:options tag="logo-animation" />
<div class="logo-animation" bind:this={logoAnimation}>
</div>
<style lang="scss">
</style>