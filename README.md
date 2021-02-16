# Microservices 101

Hi! this is microservice getting started template using NodeJS, which can be used to as a base app for any web-app

# Tech Stack

1. *NodeJS+ExpressJS*
2. *ReactJS+Bootstrap*

## How to run

1. Clone repo
2. Start nodejs services using : `npm run server`
3. Start reactJS app : `npm start`
4. Click on the buy button on any of the product on page

## Sequence diagram

using [Mermaid](https://mermaidjs.github.io/)
[![](https://mermaid.ink/img/eyJjb2RlIjoic2VxdWVuY2VEaWFncmFtXG5SZWFjdC1BcHAtPj4rUHJvZHVjdFNlcnZpY2U6IFJlcXVlc3QgUHJvZHVjdHNcblByb2R1Y3RTZXJ2aWNlLS0-Pi1SZWFjdC1BcHA6IFByb2R1Y3RzIEpTT05cblJlYWN0LUFwcC0-PlByb2R1Y3RTZXJ2aWNlOiBCdXkgUHJvZHVjdFxuUHJvZHVjdFNlcnZpY2UtLT4-K09yZGVyLVNlcnZpY2U6IFByb2R1Y3RzIEpTT05cbk9yZGVyLVNlcnZpY2UtLT4-Tm90aWZpY2F0aW9uLVNlcnZpY2UtMTogU2VuZHMgTm90aWZpY2F0aW9uXG5PcmRlci1TZXJ2aWNlLS0-Pi1Ob3RpZmljYXRpb24tU2VydmljZS0yOiBTZW5kcyBOb3RpZmljYXRpb24iLCJtZXJtYWlkIjp7InRoZW1lIjoiZGVmYXVsdCJ9LCJ1cGRhdGVFZGl0b3IiOmZhbHNlfQ)](https://mermaid-js.github.io/mermaid-live-editor/#/edit/eyJjb2RlIjoic2VxdWVuY2VEaWFncmFtXG5SZWFjdC1BcHAtPj4rUHJvZHVjdFNlcnZpY2U6IFJlcXVlc3QgUHJvZHVjdHNcblByb2R1Y3RTZXJ2aWNlLS0-Pi1SZWFjdC1BcHA6IFByb2R1Y3RzIEpTT05cblJlYWN0LUFwcC0-PlByb2R1Y3RTZXJ2aWNlOiBCdXkgUHJvZHVjdFxuUHJvZHVjdFNlcnZpY2UtLT4-K09yZGVyLVNlcnZpY2U6IFByb2R1Y3RzIEpTT05cbk9yZGVyLVNlcnZpY2UtLT4-Tm90aWZpY2F0aW9uLVNlcnZpY2UtMTogU2VuZHMgTm90aWZpY2F0aW9uXG5PcmRlci1TZXJ2aWNlLS0-Pi1Ob3RpZmljYXRpb24tU2VydmljZS0yOiBTZW5kcyBOb3RpZmljYXRpb24iLCJtZXJtYWlkIjp7InRoZW1lIjoiZGVmYXVsdCJ9LCJ1cGRhdGVFZGl0b3IiOmZhbHNlfQ)


## Future implementation
1. *gRPC* calls from *ProductService* to *OrderService* 
2. *KAFKA* and *RabbitMQ* calls form *OrderService* to *NotificationService1* and *NotificationService2*
