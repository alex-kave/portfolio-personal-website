<script lang="ts">
/*--------------------------------------------------------------
# Import
--------------------------------------------------------------*/
import feather from "feather-icons"
import { onMount } from "svelte";

/*--------------------------------------------------------------
# Vars
--------------------------------------------------------------*/
export let icon:string;
export let svgwidth:string;
export let svgheight:string;

let svg;

onMount(()=>{
    svg = icon ? feather.icons[icon].toSvg({"width": svgwidth, "height": svgheight}) : '';
})

</script>
<svelte:options tag="feather-icon" />
<span>{@html svg}</span>