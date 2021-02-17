const PROTO_PATH = __dirname + "/proto/employee.proto";

const grpc = require("grpc");
const protoLoader = require("@grpc/proto-loader");

let packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});

let employee_proto = grpc.loadPackageDefinition(packageDefinition).employee;

const main = function () {
  let server = new grpc.Server();
  server.addService(employee_proto.Employee.service, {
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
  callback(null, {
    message: `${call.request.title} -> buy request received on ORDER-SERVICE`,
  });
}

main();
