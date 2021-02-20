
## Microservice101 (gRPC +RabbitMQ + Kafka)

In this release, product-service sends messages to order-service via gRPC and from there order-service sends the message on RabbitMQ from where notification-service-1 dequeue it and publishes in the console. 

Also in this release order-service sends the message to notification-service-1 via Kafka.

(Please refer to sequence diagram for more clarity)

## To set up RabbitMQ

- [Download and install Erlan as **admin**](http://erlang.org/download/otp_win64_23.2.exe "Download and install Erlan as admin")
- [Download and install RabitMQ as **admin**](https://github.com/rabbitmq/rabbitmq-server/releases/download/v3.8.12/rabbitmq-server-3.8.12.exe "Download and install RabitMQ as admin")

- Open an elevated command line (**Run as Administrator**)
- Navigate to the sbin directory of the RabbitMQ Server installation directory.

    `C:\Program Files (x86)\RabbitMQ Server\rabbitmq_server***\sbin`

- Run the following command to enable the plugin
`rabbitmq-plugins.bat enable rabbitmq_management`

- The RabbitMQ service starts automatically. You can stop/reinstall/start the RabbitMQ service from the Start Menu

- Once all done open : http://localhost:15672/ for opening the rabbitmq management.

## To set up Kafka (on windows machine, without docker) -

- Download the [kafka (tgz) file](https://kafka.apache.org/downloads "here"), then unzip it and place the contents in a folder named kafka
- To manage broker instances of kafka we need [zookeper](https://zookeeper.apache.org/releases.html), download and unzip it and place the contents in the same folder as above
- Here comes the tricky part, please read each step twice and implement :-
 
  - **Zookeeper Setup** -
    - Create a empty folder and name it data in the zookeeper extract
   
    - Go in `.\zookeeper\conf` and update the file name `zoo_sample.cfg` to `zoo.cfg`
   
    - Open this file in any text editior and add the path of the data folder created above to `daraDir`  i.e. `dataDir=D:\\Kafka\\zookeeper\\data`
   
    - To run zookeper instance go to `zookeeper\bin` and run `zkServer.cmd` this should start zookper instance if all steps above done correctly
 
  -  **Kafka Setup** -
     - Go in `kafka\config` and open the `server.properties` here you can see the `broker.id = 0`, leave it as it is and search for `log.dirs` in the same file
     - Create a new empty folder in your kafka extract, name it data and add it's path next to log.dirs such i.e. `log.dirs=D:\\Kafka\\kafka\\data`

     - To start broker instance use go into you kafka extract and open terminal `run broker
.\bin\windows\kafka-server-start.bat .\config\server.properties
`

## How to run

- Clone repo
- Start nodejs services in four terminals :

`cd .\product-service\`
`npm install`
`npm run server`

`cd .\order-service\ `
`npm install`
`npm run server`

`cd .\notification-service-1\`
`npm install`
`npm run server`

`cd .\notification-service-2\`
`npm install`
`npm run server`
- Start reactJS app :
`cd .\front-end\   `
`npm install`
`npm start`

-  Open http://localhost:3000/ and click on any button to see this in action

## How to test
Assuming that all the services are running as mentioned above, see logs on console

## Sequence diagram


[![](https://mermaid.ink/img/eyJjb2RlIjoic2VxdWVuY2VEaWFncmFtXG4gICAgXG4gICAgXG4gICAgICAgIFJlYWN0QXBwLT4-K1Byb2R1Y3RTZXJ2aWNlOiBSZXF1ZXN0IFByb2R1Y3RzKEdFVClcbiAgICAgICAgUHJvZHVjdFNlcnZpY2UtLT4-LVJlYWN0QXBwOiBQcm9kdWN0cyBKU09OKHJlcylcbiAgICAgICAgUmVhY3RBcHAtPj4rUHJvZHVjdFNlcnZpY2U6IEJ1eSBQcm9kdWN0KFBPU1QpXG4gICAgICAgIFByb2R1Y3RTZXJ2aWNlLS0-PitPcmRlclNlcnZpY2U6IEJ1eSBQcm9kdWN0KGdSUEMpXG4gICAgICAgIE9yZGVyU2VydmljZS0tPj5Ob3RvZmljYXRpb25TZXJ2aWNlLTE6IFNlbmQgTm90aWZpY2F0aW9uKFJhYmJpdE1RKVxuICAgICAgICBPcmRlclNlcnZpY2UtLT4-LU5vdG9maWNhdGlvblNlcnZpY2UtMjogU2VuZCBOb3RpZmljYXRpb24oS2Fma2EpXG4gICAgIiwibWVybWFpZCI6e30sInVwZGF0ZUVkaXRvciI6ZmFsc2V9)](https://mermaid-js.github.io/mermaid-live-editor/#/edit/eyJjb2RlIjoic2VxdWVuY2VEaWFncmFtXG4gICAgXG4gICAgXG4gICAgICAgIFJlYWN0QXBwLT4-K1Byb2R1Y3RTZXJ2aWNlOiBSZXF1ZXN0IFByb2R1Y3RzKEdFVClcbiAgICAgICAgUHJvZHVjdFNlcnZpY2UtLT4-LVJlYWN0QXBwOiBQcm9kdWN0cyBKU09OKHJlcylcbiAgICAgICAgUmVhY3RBcHAtPj4rUHJvZHVjdFNlcnZpY2U6IEJ1eSBQcm9kdWN0KFBPU1QpXG4gICAgICAgIFByb2R1Y3RTZXJ2aWNlLS0-PitPcmRlclNlcnZpY2U6IEJ1eSBQcm9kdWN0KGdSUEMpXG4gICAgICAgIE9yZGVyU2VydmljZS0tPj5Ob3RvZmljYXRpb25TZXJ2aWNlLTE6IFNlbmQgTm90aWZpY2F0aW9uKFJhYmJpdE1RKVxuICAgICAgICBPcmRlclNlcnZpY2UtLT4-LU5vdG9maWNhdGlvblNlcnZpY2UtMjogU2VuZCBOb3RpZmljYXRpb24oS2Fma2EpXG4gICAgIiwibWVybWFpZCI6e30sInVwZGF0ZUVkaXRvciI6ZmFsc2V9)

    
        ReactApp->>+ProductService: Request Products(GET)
        ProductService-->>-ReactApp: Products JSON(res)
        ReactApp->>+ProductService: Buy Product(POST)
        ProductService-->>+OrderService: Buy Product(gRPC)
        OrderService-->>NotoficationService-1: Send Notification(RabbitMQ)
        OrderService-->>-NotoficationService-2: Send Notification(Kafka)

using [Mermaid](https://mermaid-js.github.io/mermaid-live-editor)



