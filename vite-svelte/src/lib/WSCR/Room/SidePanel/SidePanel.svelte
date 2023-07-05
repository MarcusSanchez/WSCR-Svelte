<script lang="ts">
  import { messages, room } from "$stores";

  let roomCount = 0;
  let participants: string[] = [];

  let clipboardClasses: string = "fa-regular fa-clipboard Clipboard"
  let copiedClasses: string = 'hidden';
  let inviteLink: string = window.location.host + `/?room=${$room}`;

  function fetchRoomInfo() {
    fetch(`http://localhost:3000/info/${$room}`)
      .then(response => response.json())
      .then(data => {
        if (data['error'] === "true") {
          console.log(data['errorMessage']);
          return;
        }
        roomCount = data['roomCount'];
        participants = data['participants'];
      })
      .catch(error => console.log(error));
  }

  $: {
    if ($messages.length === 1 && $messages[$messages.length - 1].data === "join") {
      fetchRoomInfo();
    }
    let lastMessage = $messages[$messages.length - 1];
    if (lastMessage !== undefined && lastMessage.type === "announcement") {
      if (lastMessage.data.type === "join") {
        roomCount += 1;
        participants = [...participants, lastMessage.data.name];
      } else if (lastMessage.data.type === "leave") {
        roomCount -= 1;
        const index = participants.indexOf(lastMessage.data.name);
        participants = participants.splice(index, 1);
      }
    }
  }

  function handleCopyToClipboard(): void {
    navigator.clipboard.writeText(window.location.origin + "/?room=" + $room)
      .then(() => {
        clipboardClasses = 'fa-solid fa-check Clipboard';
        copiedClasses = 'ps-2';
        setTimeout(() => {
          clipboardClasses = 'fa-regular fa-clipboard Clipboard';
          copiedClasses = 'hidden';
        }, 1000);
      })
      .catch();
  }
</script>

<div class="w-1/4 SidePanel">
  <h3 class="text-center font-semibold text-3xl my-4">Room Information</h3>
  <hr class="mb-4 border-gray-400" />
  <p><b>Room Number: </b>{$room}</p>
  <p><b>Room Count: </b>{roomCount}</p>
  <p><b>Room Participants: </b></p>
  <div class="Participants">
    {#each participants as participant}
      <p class="Participant">
        {participant}
      </p>
    {/each}
  </div>
  <p class="mt-3 mb-1"><b>Invite Link:</b></p>
  <p on:click={handleCopyToClipboard} class="mb-0 Link">
    {inviteLink}
    <i class="{clipboardClasses}"></i>
  </p>
  <b class="{copiedClasses}">Copied</b>
</div>

<style>
    .SidePanel {
        background-color: #e0e0e0;
        border-radius: 0 30px 30px 0;
        border: 2px black solid;
        height: 550px;
        padding: 0 16px;
    }

    P {
        margin-bottom: 10px;
    }

    .Participants {
        background-color: #fff;
        border: 2px black solid;
        height: 150px;
        width: 100%;
        overflow-y: scroll;
    }

    .Participant {
        padding-left: 10px;
        margin: 0;
        border-bottom: 1px darkgray solid;
        width: 100%;
    }

    .Link {
        background-color: #b4b4b4;
        border: 2px black solid;
        display: inline-block;
        padding: 5px;
        border-radius: 5px;
        word-wrap: normal;
    }

    .Clipboard {
        display: inline-block;
        padding-left: 5px;
        cursor: pointer;
    }
</style>