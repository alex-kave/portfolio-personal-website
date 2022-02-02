<script lang="ts">
/*--------------------------------------------------------------
# Import
--------------------------------------------------------------*/
import feather from "feather-icons"

/*--------------------------------------------------------------
# Vars
--------------------------------------------------------------*/
export let icon:string;
export let attrs;
let svg;
$: svg = icon ? feather.icons[icon].toSvg(attrs) : '';
</script>
<svelte:options tag="feather-icon" />
<span>{@html svg}</span>