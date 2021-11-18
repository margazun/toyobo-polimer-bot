import { Context } from "telegraf";

export interface SessionData {
    route?: string,
    reason?: string,
    userId: number
    date?: string
}

export interface MyContext extends Context {
    session?: SessionData
}