const amqplib = require("amqplib");
var amqp_url = process.env.CLOUDAMQP_URL || "amqp://localhost:5672";

module.exports.order_service_rabbitMQ_producer = async function (product) {
  try {
    console.log(
      `ORDER-SERVICE -> Message sent via RabbitMQ to NOTIFICATION-SERVICE-1: ${product.title}`
    );
    var conn = await amqplib.connect(amqp_url, "heartbeat=60");
    var ch = await conn.createChannel();
    var exch = "test_exchange";
    var q = "product";
    var rkey = "test_route";
    let _product = JSON.stringify(product);
    var msg = _product;
    await ch
      .assertExchange(exch, "direct", { durable: true })
      .catch(console.error);
    await ch.assertQueue(q, { durable: true });
    await ch.bindQueue(q, exch, rkey);
    await ch.publish(exch, rkey, Buffer.from(msg));
    setTimeout(function () {
      ch.close();
      conn.close();
    }, 500);
  } catch (error) {
    console.log(
      "Unable to send message to NOTIFICATION-SERVICE-1 through RabbitMQ"
    );
  }
};
