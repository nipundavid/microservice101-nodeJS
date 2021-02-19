const amqplib = require("amqplib");

var amqp_url = process.env.CLOUDAMQP_URL || "amqp://localhost:5672";

async function do_consume() {
  var conn = await amqplib.connect(amqp_url, "heartbeat=60");
  var ch = await conn.createChannel();
  var q = "product";
  await conn.createChannel();
  await ch.assertQueue(q, { durable: true });
  await ch.consume(
    q,
    function (msg) {
      let msgDump = JSON.parse(msg.content.toString());
      console.log(
        `NOTIFICATION-SERVICE-1 -> Order received on RabbitMQ CONSUMER: ${msgDump.title}`
      );
      ch.ack(msg);
      ch.cancel("myconsumer");
    },
    { consumerTag: "myconsumer" }
  );
  setTimeout(function () {
    ch.close();
    conn.close();
  }, 500);
}

function myFunction() {
  setInterval(tickerConsumer, 3000);
}

function tickerConsumer() {
  do_consume();
}

myFunction();
