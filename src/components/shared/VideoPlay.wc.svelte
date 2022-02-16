<script lang="ts">
import { onMount } from "svelte";

/*--------------------------------------------------------------
# Vars
--------------------------------------------------------------*/
export let videosrc:string;
export let videotype: string;
export let videofigcaption: string;
let component:HTMLVideoElement;
let isMuted:Boolean = true;

/*--------------------------------------------------------------
# Methods
--------------------------------------------------------------*/

const playVideo = () => {
    component.play()
    isMuted = !isMuted;
}

const pauseVideo = () =>{
    component.pause()
}



</script>
<svelte:options tag="video-play"/>
<figure>
    <video on:touchstart={playVideo} on:touchend={pauseVideo} on:mouseenter={playVideo} on:mouseleave={pauseVideo} bind:this={component} type={videotype} muted={isMuted}>
        <source src={videosrc}>
        <track kind="captions">
    </video>
    {#if videofigcaption}
        <figcaption>{videofigcaption}</figcaption>
    {/if}
</figure>
<style lang="scss">
    figure{
        box-shadow: $box-shadow;
        position: relative;
        width: 100%;
        margin: 0;
        height: 100%;
        object-fit: cover;
        video{
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        figcaption {
            font-family: $family-primary;
            font-weight: $weight-bold;
            left: 0;
            margin-top: 0.5rem;
            position: absolute;
            transform-origin: 0 0;
            @include desktop {
                left: -8%;
                padding: 0 1rem;
                transform: rotate(-90deg);
            }
        }
    }
</style>