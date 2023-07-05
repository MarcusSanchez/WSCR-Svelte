import { type Writable, writable } from 'svelte/store';


export const name = writable('');
export const room = writable('');

export const isJoined = writable(false);

export const messages: Writable<object[]> = writable([]);
export const newMessageAlert = writable(false);
export const connection: Writable<WebSocket | null> = writable(null);
