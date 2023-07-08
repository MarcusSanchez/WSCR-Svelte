<script lang="ts">
  import { connection, log, messages, name } from '$stores';
  import { Announcement, Message } from "@/models";

  let messageCount = 0;
  let textAreaText = '';

  function sendMessage(): boolean {
    if (!$connection || textAreaText.replace(/^]s+/, '').length === 0 || messageCount >= 3) {
      if (messageCount >= 3) {
        let announcement: Announcement = {
          type: "announcement",
          data: {
            name: "server",
            type: "cooldown",
            message: "You are on cooldown try again in 5 seconds."
          }
        }
        $messages = [...$messages, announcement];
        setTimeout(() => {
          $log.scrollTo(0, $log.scrollHeight)
        }, 0);
      }
      return false;
    }

    messageCount++;
    setTimeout(() => {
      messageCount--;
    }, 5000);
    $connection.send(textAreaText);
    let time = new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
    let message: Message = {
      type: "message",
      data: {
        name: $name,
        time: time,
        message: textAreaText,
        fromClient: true
      }
    };
    $messages = [...$messages, message];
    textAreaText = '';
    setTimeout(() => {
      $log.scrollTo(0, $log.scrollHeight)
    }, 0);
    return true;
  }

  function handleEnter(e: KeyboardEvent): void {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  }
</script>

<div class="ChatContainer">
  <div class="MessageBox">
    <textarea bind:value={textAreaText} on:keydown={handleEnter} class="TextArea"
              rows="1" placeholder="Type a message..." autofocus></textarea>
    <button on:click={sendMessage} class="Button">Send</button>
  </div>
</div>

<style>
    .ChatContainer {
        background-color: #e0e0e0;
        border-radius: 0 0 0 30px;
        border: 2px black solid;
        height: 125px;
        margin-top: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .MessageBox {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        width: 953px;
        margin-left: 10px;
    }

    .TextArea {
        flex-grow: 1;
        resize: none;
        padding: 10px;
        font-size: 15px;
        line-height: 1.5;
        transition: height 0.2s;
        overflow-y: auto;
        width: auto;
        border-radius: 10px;
        border: 1px solid #000;
        height: 100px;
    }

    .Button {
        margin-left: 20px;
        margin-right: 16px;
        padding: 10px 15px;
        height: 100px;
        width: 100px;
        border-radius: 10px;
        background-color: #f6afaf;
        border: 1px solid #000;
        color: #000;
        cursor: pointer;
    }
</style>
