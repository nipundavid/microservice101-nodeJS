const { Kafka } = require("kafkajs");

module.exports.order_service_kafka_producer = async function (msg) {
  try {
    const kafka = new Kafka({
      clientId: "myapp",
      brokers: ["localhost:9094"],
    });
    const producer = kafka.producer();
    console.log("Connecting....");
    await producer.connect();
    console.log("Connected!");

    const partition = Math.floor(Math.random() * 100) % 2 == 0 ? 0 : 1;
    // const partition = 1;
    const result = await producer.send({
      topic: "product",
      messages: [
        {
          value: msg,
          partition: partition,
        },
      ],
    });

    console.log(`Send successfully: ${JSON.stringify(result)}`);
    await producer.disconnect();
  } catch (error) {
    console.log(error);
  }
};
