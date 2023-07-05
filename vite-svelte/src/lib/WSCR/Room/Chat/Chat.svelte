<script lang="ts">
  import { newMessageAlert } from "$stores";
  import Log from './Log/Log.svelte';
  import NewMessageAlert from "./NewMessageAlert/NewMessageAlert.svelte";
  import MessageBox from './MessageBox/MessageBox.svelte';
</script>

<div class="w-3/4 relative">
  <Log />
  {#if $newMessageAlert}
    <NewMessageAlert />
  {/if}
  <MessageBox />
</div>

