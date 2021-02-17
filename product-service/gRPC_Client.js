const PROTO_PATH = __dirname + "/proto/employee.proto";

const grpc = require("grpc");
const protoLoader = require("@grpc/proto-loader");
let resFromOrderService;

let packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});
let employee_proto = grpc.loadPackageDefinition(packageDefinition).employee;

module.exports.main = function (_productData) {
  let client = new employee_proto.Employee(
    "localhost:4500",
    grpc.credentials.createInsecure()
  );
  let productData = {
    id: _productData.id,
    title: _productData.title,
    type: _productData.type,
    description: _productData.description,
    price: _productData.price,
  };
  console.log(
    `Order sent from gRPC client from PRODUCT-SERVICE \/n ${JSON.stringify(
      productData,
      null,
      4
    )}`
  );
  client.getDetails(productData, function (err, response) {
    resFromOrderService = response.message;
  });

  return resFromOrderService;
};
