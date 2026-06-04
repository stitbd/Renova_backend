"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// test-socket.ts
const socket_io_client_1 = require("socket.io-client");
const socket = (0, socket_io_client_1.io)("http://127.0.0.1:5001", {
    auth: {
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4YzZiOWZiLTJjODgtNDgyYS04ZWQ0LTY1NjJhNjZlNmIzZiIsInBob25lIjoiMDE3MTIzNDU1NDg1NTU2NzU3NzgiLCJ1c2VyVHlwZSI6IkRPQ1RPUiIsInJvbGVzIjpbXSwicGVybWlzc2lvbnMiOltdLCJvdXRsZXRJZCI6bnVsbCwiaWF0IjoxNzgwNDY4MDQ4LCJleHAiOjE3ODEwNzI4NDh9.Cf6IBY5wPlM2EnhAq57o9etfKQZsa7rOKWT5oLp1ers",
    },
    transports: ["websocket"],
});
socket.on("connect", () => {
    console.log("Connected:", socket.id);
});
socket.on("incoming_call", (data) => {
    console.log("Incoming call:", data);
});
socket.on("connect_error", (error) => {
    console.log("Connection error:", error.message);
});
