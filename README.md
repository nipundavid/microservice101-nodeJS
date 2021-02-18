
# Microservices 101

Hi! this is microservice getting started template using NodeJS, which can be used to as a base app for any web-app

**Note - Use the latest builds form the [tagged builds](https://github.com/nipundavid/microservice101-nodeJS/releases) as per your requirements**

# Tech Stack

1. *NodeJS+ExpressJS*
2. *ReactJS+Bootstrap*

## How to run

-  Clone repo
-  Fire up five terminals - four for our microservices and one for front app application:
-  Termial 1: `cd .\product-service\` `npm run server`
-  Termial 2: `cd .\order-service\` `npm run server`
-  Termial 3: `cd .\notification-service-1\` `npm run server`
-  Termial 4: `cd .\notification-service-2\` `npm run server`
-  Termial 5: `cd .\front-end\` `npm start`
-  Open http://localhost:3000/ and click on any **BUY** button to see this in action

## Sequence diagram


[![](https://mermaid.ink/img/eyJjb2RlIjoic2VxdWVuY2VEaWFncmFtXG5SZWFjdC1BcHAtPj4rUHJvZHVjdFNlcnZpY2U6IFJlcXVlc3QgUHJvZHVjdHNcblByb2R1Y3RTZXJ2aWNlLS0-Pi1SZWFjdC1BcHA6IFByb2R1Y3RzIEpTT05cblJlYWN0LUFwcC0-PlByb2R1Y3RTZXJ2aWNlOiBCdXkgUHJvZHVjdFxuUHJvZHVjdFNlcnZpY2UtLT4-K09yZGVyLVNlcnZpY2U6IFByb2R1Y3RzIEpTT05cbk9yZGVyLVNlcnZpY2UtLT4-Tm90aWZpY2F0aW9uLVNlcnZpY2UtMTogU2VuZHMgTm90aWZpY2F0aW9uXG5PcmRlci1TZXJ2aWNlLS0-Pi1Ob3RpZmljYXRpb24tU2VydmljZS0yOiBTZW5kcyBOb3RpZmljYXRpb24iLCJtZXJtYWlkIjp7InRoZW1lIjoiZGVmYXVsdCJ9LCJ1cGRhdGVFZGl0b3IiOmZhbHNlfQ)](https://mermaid-js.github.io/mermaid-live-editor/#/edit/eyJjb2RlIjoic2VxdWVuY2VEaWFncmFtXG5SZWFjdC1BcHAtPj4rUHJvZHVjdFNlcnZpY2U6IFJlcXVlc3QgUHJvZHVjdHNcblByb2R1Y3RTZXJ2aWNlLS0-Pi1SZWFjdC1BcHA6IFByb2R1Y3RzIEpTT05cblJlYWN0LUFwcC0-PlByb2R1Y3RTZXJ2aWNlOiBCdXkgUHJvZHVjdFxuUHJvZHVjdFNlcnZpY2UtLT4-K09yZGVyLVNlcnZpY2U6IFByb2R1Y3RzIEpTT05cbk9yZGVyLVNlcnZpY2UtLT4-Tm90aWZpY2F0aW9uLVNlcnZpY2UtMTogU2VuZHMgTm90aWZpY2F0aW9uXG5PcmRlci1TZXJ2aWNlLS0-Pi1Ob3RpZmljYXRpb24tU2VydmljZS0yOiBTZW5kcyBOb3RpZmljYXRpb24iLCJtZXJtYWlkIjp7InRoZW1lIjoiZGVmYXVsdCJ9LCJ1cGRhdGVFZGl0b3IiOmZhbHNlfQ)

    
        ReactApp->>+ProductService: Request Products
        ProductService-->>-ReactApp: Products JSON
        ReactApp->>+ProductService: Buy Product
        ProductService-->>+OrderService: Buy Product
        OrderService-->>NotoficationService-1: Send Notification
        OrderService-->>-NotoficationService-2: Send Notification

**SequenceDiagram** - using [Mermaid](https://mermaid-js.github.io/mermaid-live-editor)

## Future implementation
1. *gRPC* calls from *ProductService* to *OrderService*  (**2.0 - done, please check releases**)
2. *RabbitMQ* call form *OrderService* to *NotificationService1*(**3.0 - WIP**)
3. *KAFKA* call form *OrderService* to *NotificationService2*



