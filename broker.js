//MQTT Broker

const mosca = require('mosca');
const settings = {
  port: 1883
}
const broker = new mosca.Server(settings);

broker.on('ready', () => {
  console.log('Broker is ready!');
})

broker.on('published', (packet) => {
  console.log(packet.payload.toString())
})

broker.on('published', (packet)=>{
  message = packet.payload.toString()
  console.log(message)
})