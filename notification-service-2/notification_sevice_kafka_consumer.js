const { Kafka } = require("kafkajs");
const topicName = "product";
async function notification_sevice_kafka_consumer() {
  try {
    const kafka = new Kafka({
      clientId: "myapp",
      brokers: ["localhost:9094"],
    });
    const consumer = kafka.consumer({
      groupId: topicName,
    });
    console.log("Connecting....");
    await consumer.connect();
    console.log("Connected!");

    consumer.subscribe({
      topic: topicName,
      fromBeginning: true,
    });

    await consumer.run({
      eachMessage: async (result) => {
        console.log(
          `NOTIFICATION-SERVICE-1 -> Received msg ${result.message.value} on partition${result.partition}`
        );
      },
    });
  } catch (error) {
    console.log(error);
    console.log("Not able to find broker hence exiting");
    process.exit(0);
  }
}

notification_sevice_kafka_consumer();
