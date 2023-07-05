<script lang="ts">

  import Chat from "./Chat/Chat.svelte";
  import SidePanel from "./SidePanel/SidePanel.svelte";
  import { connection, messages, name, newMessageAlert, room } from "$stores";
  import { onMount } from "svelte";

  function start(): void {
    if (window["WebSocket"]) {
      connection.set(new WebSocket(`wss://${window.location.host}/ws/${$name}/${$room}`));
      $connection.onmessage = function (e) {
        let newMessage = JSON.parse(e.data);
        if (newMessage.type === "message") {
          newMessage.data.time = new Date().toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: '2-digit',
            hour12: true
          });
          newMessage.data.fromClient = false;
        }
        let log = document.getElementById("message-log") as HTMLDivElement;
        let isAtBottom = log.scrollHeight === log.scrollTop + log.clientHeight;
        messages.set([...$messages, newMessage]);
        setTimeout(() => {
          if (isAtBottom) {
            log.scrollTo(0, log.scrollHeight);
          } else {
            console.log("we made it here");
            newMessageAlert.set(true);
          }
        }, 0);
      };
      $connection.onclose = function () {
        let announcement = { type: "announcement", data: { type: "close", message: "Connection closed" } };
        messages.set([...$messages, announcement]);
        connection.set(null);
      };
    } else {
      let announcement = {
        type: "announcement",
        data: { type: "close", message: "Your browser does not support WebSockets." }
      };
      messages.set([...$messages, announcement]);
    }
  }

  onMount(() => {
    start();
  });

</script>

<div class="flex gap-4 Room">
  <Chat />
  <SidePanel />
</div>

<style>
  .Room {
    padding: 4% 7% 2%;
    margin-bottom: 50px;
  }
</style>
