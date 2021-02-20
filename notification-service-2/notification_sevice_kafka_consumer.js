const { Kafka } = require("kafkajs");
const topicName = "product";
async function notification_sevice_kafka_consumer() {
  try {
    const kafka = new Kafka({
      clientId: "myapp",
      brokers: ["localhost:9092"],
    });
    const consumer = kafka.consumer({
      groupId: "product",
    });
    console.log("Connecting....");
    await consumer.connect();
    console.log("Connected!");

    consumer.subscribe({
      topic: topicName,
      fromBeginning: false,
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
  }
}

notification_sevice_kafka_consumer();
