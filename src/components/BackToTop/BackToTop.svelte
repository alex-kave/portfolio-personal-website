<script lang="ts">
/*--------------------------------------------------------------
# Import
--------------------------------------------------------------*/
/*--------------------------------------------------------------
# Vars
--------------------------------------------------------------*/
let component: HTMLElement
$: windowY = 0
/*--------------------------------------------------------------
# Methods
--------------------------------------------------------------*/
const scrollTop = () =>{
    windowY = 0;
}

</script>
<svelte:window bind:scrollY={windowY} />
<svelte:options tag="back-to-top"/>
<div on:click={scrollTop} class="backtotop" class:backtotop--visible={windowY > 600} bind:this={component}>
    <feather-icon icon="chevron-up" width="200"></feather-icon>
</div>
<style lang="scss">
    .backtotop{
        position: fixed;
        bottom: 2rem;
        left: 2rem;
        opacity: 0;
        &--visible {
            opacity: 1;
            transition: opacity 0.2s ease-in;
            &:hover{
                cursor: pointer;
            }
        }
    }
</style>