<script lang="ts">
import { onMount } from "svelte";



export let videosrc:string;
export let videoalt: string;
export let videotype: string;
export let videofigcaption: string;
let component:HTMLVideoElement;
let isMuted:Boolean = true;

const playVideo = () => {
    console.log('Hallo')
    component.play()
    isMuted = !isMuted;
}

const pauseVideo = () =>{
    console.log('Bye')
    component.pause()
}



</script>
<svelte:options tag="video-play"/>
<figure>
    <video alt={videoalt} on:mouseenter={playVideo} on:mouseleave={pauseVideo} bind:this={component} type={videotype} muted={isMuted}>
        <source src={videosrc}>
        <track kind="captions">
    </video>
    {#if videofigcaption}
        <figcaption>{videofigcaption}</figcaption>
    {/if}
</figure>
<style lang="scss">
    figure{
        width: 100%;
        margin: 0;
        height: 100%;
        object-fit: cover;
        video{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
</style>