<script lang="ts">
/*--------------------------------------------------------------
# Imports
--------------------------------------------------------------*/
import { fade } from 'svelte/transition';
/* --------------------------------------------------------------
# Vars
-------------------------------------------------------------- */
export let headline:string
export let content:string

export let imgsrc:string
export let imgalt:string
export let caselink:string

let imgElement:HTMLElement
let imgIsVisible:Boolean = false
/* --------------------------------------------------------------
# Methods
-------------------------------------------------------------- */
const handleMousemove = (e) =>{
    imgElement.style.left = `${e.clientX * 0.5}px`
    imgElement.style.top = `${e.clientY * 0.5}px`
}

const toggleImageVisible = () =>{
    imgIsVisible = !imgIsVisible
}

</script>
<svelte:options tag="image-to-cursor"/>
<a href={caselink} target="_blank">
    <div class="case-wrap" on:mousemove={handleMousemove} on:mouseenter={toggleImageVisible} on:mouseleave={toggleImageVisible}>
        <hr class="has-background-primary">
        <h2>
            {headline}
        </h2>
        {#if content}
        <p>
            {content}
        </p>
        {/if}
        {#if imgIsVisible}
            <img transition:fade src={imgsrc} alt={imgalt} bind:this={imgElement}>
        {/if}
    </div>
</a>
<style lang="scss">
    a{
        color: $primary;
        text-decoration: none;
        .case-wrap{
        height: 80vh;
        position: relative;
        &:hover{
            cursor: pointer;
            h2{
                transition: color 0.2s ease;
                color: $tertiary;
            }
        }
            h2{
                font-family: $family-secondary;
                font-size: 8rem;
                position: relative;
                z-index: 2;
            }
            p{
                font-size: 2rem;
                position: relative;
                z-index: 2;
                width: 50%;
            }
            img{
                position: absolute;
                top: 0;
                left: 0;
                transform-origin: center center;
                max-width: 800px;
                z-index: 1;
            }
        }
    }
</style>