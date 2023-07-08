<script lang="ts">
  import { log, newMessageAlert } from "$stores";

  function scrollToBottom(): void {
    $log.scrollTo(0, $log.scrollHeight);
    $newMessageAlert = false;
  }
</script>

<div on:scroll={scrollToBottom} class="flex justify-center mt-[-40px]">
  <b on:click={scrollToBottom} class="Alert hover:cursor-pointer">New Message...</b>
</div>

<style>
    .Alert {
        padding: 0 5px;
        border-radius: 5px;
        background-color: #a1d29d;
        border: 1px black solid;
    }
</style>