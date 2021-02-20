const { Kafka } = require("kafkajs");

module.exports.create_kafka_topic = async function (topicName) {
  console.log("Connecting....");

  try {
    const kafka = new Kafka({
      clientId: "myapp",
      brokers: ["localhost:9092"],
    });
    const admin = kafka.admin();
    console.log("Connecting....");
    await admin.connect();
    console.log("Connected!");

    // check if topic already there
    listTopics = await admin.listTopics();
    let ifTopicExists = false;
    for (var i = 0; i < listTopics.length; i++) {
      if (listTopics[i] == topicName) {
        ifTopicExists = true;
        break;
      }
    }
    if (ifTopicExists) {
      console.log(`ORDER-SERVICE -> Topic: ${topicName} already exists`);
      return;
    }

    // create new topic
    result = await admin.createTopics({
      topics: [
        {
          topic: topicName,
          numPartitions: 2,
        },
      ],
    });
    console.log(`Created successfully: ${result}`);
    await admin.disconnect();
  } catch (error) {
    console.log(error);
  }
};
