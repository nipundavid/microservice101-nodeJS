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
    `Order received on gRPC Server on ORDER-SERVICE \/n ${JSON.stringify(
      call.request,
      null,
      4
    )}`
  );
  // await sendMessageToNotificationService(call.request);
  callback(null, {
    message: `${call.request.title} -> buy request received on ORDER-SERVICE`,
  });
}

async function sendMessageToNotificationService(product) {
  try {
    // console.log(req.body);
    resFromNotificationService1 = await axios.post(
      "http://localhost:5002/",
      product
    );
    resFromNotificationService2 = await axios.post(
      "http://localhost:5003/",
      product
    );
  } catch (err) {
    console.log(err.message);
    return res.status(500).send("server error");
  }
}

main();
