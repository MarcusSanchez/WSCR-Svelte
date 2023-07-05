<script lang="ts">
  import { log, newMessageAlert } from "$stores";

  function scrollToBottom(): void {
    $log.scrollTo(0, $log.scrollHeight);
    $newMessageAlert = false;
  }
</script>

<div on:scroll={scrollToBottom} on:click={scrollToBottom} class="NMA hover:cursor-pointer">
  <b class="Alert">New Message...</b>
</div>

<style>
    .NMA {
        position: absolute;
        margin-top: -25px;
        left: 50%;
        transform: translateY(-50%);
    }

    .Alert {
        padding: 0 5px;
        border-radius: 5px;
        background-color: #a1d29d;
        border: 1px black solid;
    }
</style>