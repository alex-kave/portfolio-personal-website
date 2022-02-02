<script lang="ts">
let windowY = 0;

const scrollTop = () =>{
    window.scrollTo(0,0)
}
</script>
<svelte:window bind:scrollY={windowY} />
<svelte:options tag="back-top" />
<div class="backtop" class:backtop--visible={windowY > 600} on:click={scrollTop}>
    <feather-icon icon="chevron-up" svgwidth="60" svgheight="60"></feather-icon>
</div>
<style lang="scss">
    .backtop{
        position: fixed;
        background-color: $secondary;
        left: 4rem;
        bottom: 4rem;
        opacity: 0;
        &:hover{
            background-color: darken($secondary, 10%);
        }
        &--visible{
            opacity: 1;
            transition: opacity 0.2s ease-in;
            &:hover{
                cursor: pointer;
            }
        }
    }
</style>