const path = require("path");
const PROTO_PATH = path.join(__dirname, "../proto/product.proto");
const grpc = require("grpc");
const protoLoader = require("@grpc/proto-loader");
const axios = require("axios");

let packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});

let product_proto = grpc.loadPackageDefinition(packageDefinition).product;

const main = function () {
  let server = new grpc.Server();
  server.addService(product_proto.Product.service, {
    getDetails: getDetails,
  });
  server.bind("0.0.0.0:4500", grpc.ServerCredentials.createInsecure());
  server.start();
};

function getDetails(call, callback) {
  console.log(
    `Order received on gRPC Server on ORDER-SERVICE  ${call.request.title}`
  );
  //send messgae to notification services
  responseFromNotificationServices = sendMessageToNotificationService(
    call.request
  );
  //validating if message sent to NOTIFICATION-SERVICES
  if (responseFromNotificationServices) {
    console.log(
      `Message sent to one or more NOTIFICATION-SERVICES for -> ${call.request.title}`
    );
  }
  //return to gRPC Client
  callback(null, {
    message: `${call.request.title} -> buy request received on ORDER-SERVICE`,
    responseFromNotificationServices: responseFromNotificationServices,
  });
}

async function sendMessageToNotificationService(product) {
  try {
    // console.log(req.body);
    await axios.post("http://localhost:5002/", product);
    await axios.post("http://localhost:5003/", product);
    // to check success
    return true;
  } catch (err) {
    console.log(
      `Could not send message to one or more NOTIFICATION-SERVICES for -> ${call.request.title}, error -> ${err.message}`
    );
    return false;
  }
}

main();
