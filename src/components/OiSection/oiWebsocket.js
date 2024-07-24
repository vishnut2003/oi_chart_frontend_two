'use client';

import { wsServerName } from '@/serverName'

const wsServer = wsServerName()
let ws;

const connectWebSocket = (formData, callback, lineData) => {
    ws = new WebSocket(wsServer);
    return new Promise((resolve, reject) => {
        ws.onopen = () => {
            const fullInfo = {
                currentOiData: lineData,
                formData: formData
            }
            ws.send(JSON.stringify(fullInfo))
        }

        ws.onmessage = (res) => {
            const liveOi = JSON.parse(res.data)
            callback(liveOi)
        }

        ws.onclose = () => {
            resolve()
        }
    })
}

const closeWebSocket = () => {
    if(ws) {
        ws.close()
    }
}

export { connectWebSocket, closeWebSocket }