<script lang="ts">
  export let
      name: string,
      message: string,
      time: string,
      fromClient: boolean
  ;
</script>

{#if fromClient}
  <div class="flex flex-col justify-between items-end">
    <div class="w-1/2 m-4 RightMessage text-opacity-100">
      <div class="flex justify-between w-full">
        <b>{name}</b>
        <span class="ToGrey">{time}</span>
      </div>
      <span class="FmtWord">{message}</span>
    </div>
  </div>
{:else}
  <div class="flex flex-col justify-between item-start">
    <div class="w-1/2 m-4 LeftMessage text-opacity-100">
      <div class="flex justify-between w-full">
        <b>{name}</b>
        <span class="ToGrey">{time}</span>
      </div>
      <span class="FmtWord">{message}</span>
    </div>
  </div>
{/if}

<style>
    .RightMessage {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        background-color: #f6afaf;
        border-radius: 10px;
        padding: 10px;
        margin: 10px;
        max-width: 50%;
        border: 1px black solid;
    }

    .LeftMessage {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        background-color: #b3e6ff;
        border-radius: 10px;
        padding: 10px;
        margin: 10px;
        max-width: 50%;
        border: 1px black solid;
    }

    .ToGrey {
        color: #656565;
    }

    .FmtWord {
        word-break: break-all;
        word-wrap: break-word;
        hyphens: auto;
    }
</style>