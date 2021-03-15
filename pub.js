//MQTT Publisher

const mqtt = require('mqtt')
const client = mqtt.connect('mqtt://localhost:1883')
const topic = 'CarDetected'
const message = 'Hello World!'

client.on('connect', () => {
    setInterval(() => {
        client.publish(topic, message)
        console.log('Message sent!', message)
    }, 5000)
})