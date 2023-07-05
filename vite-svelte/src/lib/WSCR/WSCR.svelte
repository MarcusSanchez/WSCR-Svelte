<script lang="ts">
  import { isJoined } from "$stores";
  import Joiner from "./Joiner/Joiner.svelte";
  import Room from "./Room/Room.svelte";
</script>

{#if !$isJoined}
  <Joiner />
{:else}
  <Room />
{/if}