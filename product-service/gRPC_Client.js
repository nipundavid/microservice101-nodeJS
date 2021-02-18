const path = require("path");
const grpc = require("grpc");
const protoLoader = require("@grpc/proto-loader");
const PROTO_PATH = path.join(__dirname, "../proto/product.proto");
let resFromOrderService;

let packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});
let product_proto = grpc.loadPackageDefinition(packageDefinition).product;

module.exports.main = function (_productData) {
  let client = new product_proto.Product(
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
    `Order sent from gRPC client from PRODUCT-SERVICE to ORDER-SERVICE ->  ${productData.title}`
  );
  client.getDetails(productData, function (err, response) {
    resFromOrderService = response.message;
  });

  return resFromOrderService;
};
