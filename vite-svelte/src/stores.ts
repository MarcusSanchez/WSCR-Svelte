import { type Writable, writable } from 'svelte/store';
import type { Announcement, Message } from "@/models";

export const name = writable('');
export const room = writable('');

export const isJoined = writable(false);

export const messages: Writable<(Message | Announcement)[]> = writable([]);
export const newMessageAlert = writable(false);
export const connection: Writable<WebSocket | null> = writable(null);

export const log: Writable<HTMLDivElement | null> = writable(null);