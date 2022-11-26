const WebSocket = require("ws")
const express = require("express")
const http = require("http")

const port = 8000

const server = http.createServer(express)
const websocketserver = new WebSocket.Server({server})

