<script lang="ts">
  import Message from './Message/Message.svelte';
  import Announcement from './Announcement/Announcement.svelte';
  import { messages, newMessageAlert, log } from "$stores";

  function handleScroll(): void {
    let isAtBottom = $log.scrollTop >= $log.scrollHeight - $log.clientHeight - 10;
    if ($newMessageAlert && isAtBottom) {
      $newMessageAlert = false;
    }
  }
</script>

<div on:scroll={handleScroll} class="p-3 Log" bind:this={$log} id="message-log">
  {#each $messages as message}
    {#if message.type === 'message'}
      <Message {...message.data} />
    {:else}
      <Announcement message={message.data.message} />
    {/if}
  {/each}
</div>

<style>

    .Log {
        background-color: #e0e0e0;
        border-radius: 30px 0 0 0;
        border: 2px black solid;
        height: 400px;
        overflow-y: scroll;
    }

</style>