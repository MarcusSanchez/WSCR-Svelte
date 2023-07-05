<script lang="ts">
  import { onMount } from "svelte";
  import { isJoined, name, room } from '$stores';
  import { joinButtonFormatter, validateName, validateRoom } from './helpers.ts';

  let queryParams = new URLSearchParams(window.location.search);
  let queriedRoom = queryParams.get('room');

  let roomNumber = '';
  let username = '';
  let joinButtonText = 'Join Room';
  let button: HTMLTextAreaElement;

  onMount(() => {
    if (queriedRoom !== null && validateRoom(queriedRoom)) {
      roomNumber = queriedRoom;
      joinButtonText = joinButtonFormatter(roomNumber, username);
      button.disabled = true;
    }
  });

  function generateRoom(): void {
    fetch(window.location.origin + "/generateRoom")
      .then(response => response.text())
      .then(text => {
        roomNumber = text;
        joinButtonText = joinButtonFormatter(text, username);
        button.disabled = true;
      })
  }

  function handleFormChange(e: Event): void {
    let eventTarget = e.target as HTMLInputElement;

    if (eventTarget.id === 'name') {
      username = eventTarget.value.replace(/[^a-zA-Z0-9]/g, '').substring(0, 13);
    } else if (eventTarget.id === 'room') {
      roomNumber = eventTarget.value.replace(/\D/g, '').substring(0, 4);
    }
    joinButtonText = joinButtonFormatter(roomNumber, username);
  }

  function handleSubmit(): boolean {
    if (!username && !roomNumber) {
      alert('Please enter a name and room number.');
      return false;
    } else if (!username) {
      alert('Please enter a name.');
      return false;
    } else if (!roomNumber) {
      alert('Please enter a room number.');
      return false;
    }

    if (!validateName(username)) {
      alert('Name must be 3-16 characters long and may only consist of letters and numbers.');
      return false;
    } else if (!validateRoom(roomNumber)) {
      alert('Room must be a 4 digit number 0000-9999');
      return false;
    }

    $name = username;
    $room = roomNumber;
    $isJoined = true;
    return true;
  }
</script>

<div id="joiner">
  <form id="roomForm" on:submit|preventDefault={handleSubmit} class="form-signin">
    <h1 id="header" class="mb-3">Join or Create a Room</h1>
    <input bind:value={username} on:input={handleFormChange} class="form-control bottom" type="text" id="name" size="64" autofocus autocomplete="off" placeholder="Name" />
    <div id="wrapper">
      <input bind:value={roomNumber} on:input={handleFormChange} class="form-control bottom" type="text" id="room" size="64" autocomplete="off" placeholder="Room" />
      <button on:click={generateRoom} bind:this={button} type="button" class="btn btn-lg btn-outline top-btn" id="generateRoom">Generate New Room</button>
    </div>
    <input bind:value={joinButtonText} class="btn btn-lg btn-outline btm-btn form-control" type="submit" id="joinRoom" />
  </form>
</div>

<style>
  #joiner {
    margin-top: 100px;
  }

  .form-signin {
    width: 450px;
    padding: 25px;
    margin: auto;
    text-align: center;
    border: solid black 2px;
    border-radius: 20px;
    background-color: #e0e0e0;
  }

  .form-signin .form-control {
    position: relative;
    box-sizing: border-box;
    height: auto;
    padding: 10px;
    font-size: 24px;
    border: 2px solid black;
  }

  .form-signin .form-control:focus {
    z-index: 2;
  }

  .form-signin .btn {
    position: relative;
    margin: 0 auto;
  }

  #wrapper {
    display: flex;
    align-items: center;
  }

  #wrapper .btn-lg {
    font-size: 25px;
    border: 2px solid black;
  }

  #name {
    width: 396px;
    margin-top: 4px;
    border-radius: .375rem;
    transition: all ease-in-out 0.2s;
  }

  #name::placeholder, #room::placeholder {
    color: #5e5e5e;
  }

  #name:focus, #room:focus {
    outline: none;
    box-shadow: 0 0 0 4px #93c4e0;
    transition: all ease-in-out 0.2s;
  }


  #room {
    flex: 1;
    margin-right: 10px;
    max-width: 120px;
    border-radius: .375rem;
    transition: all ease-in-out 0.2s;
  }

  #generateRoom {
    margin: 16px 0;
    font-size: 18px;
    color: black;
    padding: 8px;
    min-width: 266px;
    min-height: 60px;
    border-radius: .375rem;
  }

  #header {
    position: relative;
    border: 2px solid black;
    border-radius: 20px;
    background-color: #b3e6ff;
    padding: 20px;
    font-size: 2.5rem;
    line-height: 1.2;
  }

  .top-btn {
    background-color: #f6afaf;
    transition: all ease-in-out 0.2s;
  }

  .top-btn:hover, .top-btn:focus {
    background-color: #9a9a9a;
    transition: all ease-in-out 0.2s;
    outline: none;
  }

  .btm-btn {
    background-color: #b3e6ff;
    transition: all ease-in-out 0.2s;
  }

  .btm-btn:hover, .btm-btn:focus {
    background-color: #9a9a9a;
    transition: all ease-in-out 0.2s;
    outline: none;
  }

  .btm-btn:hover {
    cursor: pointer;
  }

  #generateRoom:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    background-color: #9a9a9a;
  }

  #joinRoom {
    width: 395px;
    border-radius: .375rem;
  }
</style>