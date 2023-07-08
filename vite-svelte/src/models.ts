export type Message = {
  type: "message",
  data: {
    name: string,
    message: string,
    time?: string,
    fromClient?: boolean,
  },
}

export type Announcement = {
  type: "announcement",
  data: {
    name?: string,
    message: string,
    type: "join" | "leave" | "cooldown" | "close",
  },
}