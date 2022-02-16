<script lang="ts">
/*--------------------------------------------------------------
# Imports
--------------------------------------------------------------*/
import { fade } from 'svelte/transition';
import { spring } from 'svelte/motion';

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
let coords = spring({ x: 0, y: 0 }, {
		stiffness: 0.1,
		damping: 1
	});
/* --------------------------------------------------------------
# Methods
-------------------------------------------------------------- */
const handleMousemove = (e) =>{
    coords.set({x: e.clientX/2, y: e.clientY/2})
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
        {#if imgIsVisible || window.innerWidth < 769}
            <img style={`left:${$coords.x}px; top:${$coords.y}px`} transition:fade src={imgsrc} alt={imgalt} bind:this={imgElement}>
        {/if}
    </div>
</a>
<style lang="scss">
    a{
        color: $primary;
        text-decoration: none;
        .case-wrap{
        position: relative;
        padding: 2rem 0;
        @include desktop{
            padding: 0;
            height: 80vh;
        }
        &:hover{
            cursor: pointer;
            h2{
                transition: color 0.2s ease;
                color: $tertiary;
            }
        }
            h2{
                font-family: $family-secondary;
                font-size: 2rem;
                position: relative;
                z-index: 2;
                text-align: center;

                @include tablet{
                    text-align: left;
                }
                @include desktop{
                    font-size: 8rem;
                }
            }
            p{
                font-size: 1rem;
                position: relative;
                z-index: 2;
                width: 100%;
                padding: 2rem;
                @include desktop{
                    font-size: 2rem;
                    width: 60%;
                }
            }
            img{
                position: relative;
                width: 100%;
                box-shadow: $box-shadow;
                @include desktop{
                    position: absolute;
                    top: 0;
                    left: 0;
                    transform-origin: top left;
                    width: 800px;
                    z-index: 1;
                }
            }
        }
    }
</style>