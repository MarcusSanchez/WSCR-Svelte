import { writable } from 'svelte/store';

export const name = writable('');
export const room = writable('');
export const isJoined = writable(false);