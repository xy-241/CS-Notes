---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - networking
  - programming
  - over
Creation Date: 2025-07-20, 17:38
Last Date: 2025-10-02T22:12:38+08:00
References:
draft:
description: Learn gRPC, the high-performance RPC framework that enables seamless network communication between applications using protobuf serialization, including step-by-step Python code examples for building type-safe distributed systems.
---
## Abstract
---
- An **RPC framework** that allows applications to communicate across [[Computer Network|networks]] as if they were **calling local functions**, hiding the complexity of network communication
- Built on top of. [[HTTP 2.0]], using [protobuf](https://protobuf.dev/) for efficient data transfer in binary format

>[!important] Network protocol VS Framework
> **Network protocol** is the low-level rules for how data moves across networks (like HTTP/2, [[TCP]]).
> 
> **Framework** is the **higher-level tools** and conventions for building applications (like gRPC).

## Passing gRPC Connector Instance to Stub
---
```python
import grpc 
from your_service_pb2_grpc import DataServiceStub

# Step 1: Pass grpc connector instance to the stub 
channel = grpc.insecure_channel('localhost:50051') 
stub = DataServiceStub(channel)
```
- **Purpose**: Establishes the network connection and creates a `stub` instance
- The connector handles the underlying HTTP/2 connection, authentication, and network details
- The `stub` acts as a local object that represents the remote service

## Craft Request Instance with Parameters
---
```python
from your_service_pb2 import DataRequest
from google.protobuf.field_mask_pb2 import FieldMask
from google.protobuf import timestamp_pb2
import filter_pb2 

# Step 2: Craft a request instance with parameters
filter_obj = filter_pb2.Filter()
filter_obj.column = "sensor_id"
filter_obj.op = filter_pb2.EQUALS
filter_obj.str = "123"

start_time = timestamp_pb2.Timestamp()
start_time.FromDatetime(datetime(2025, 1, 1))

request = DataRequest(
    start_datetime=start_time,
    end_datetime=timestamp_pb2.Timestamp(),
    field_mask=FieldMask(paths=["temperature", "humidity"]),
    filters=[filter_obj]
)
```
- **Purpose**: Creates a [[Type Safety|strongly-typed]] message object containing your query parameters
- Structures your data (start_datetime, end_datetime, filters) according to the service's protobuf schema
- Ensures type safety and proper serialization before sending over the network

>[!code] Filter building
> `filter_pb2.Filter()` is constructor for filter criteria.
> 
> - `.column` specifies which field to filter on
> - `.op` specifies operation enum (EQUALS, GREATER_THAN, etc.)
> - `.str` specifies a single string value
> - `.str_list_list` specifies complex list-of-lists for `IN` `.op` clauses
>   
> I like to have a function for each filter type, like 
> - `create_not_null_filter(column: str) -> filter_pb2.Filter`
> - `create_equals_filter(column: str, value: str) -> filter_pb2.Filter`
> - `create_in_list_filter(column: str, values: list[int]) -> filter_pb2.Filter`
>   
> Then for a particular data, I can just put a combination of the these functions in a list `[]` and assign it to the `filters` of the `DataRequest`.

>[!code] Common Types
> `FieldMask` specifies which response fields to return.
> `timestamp_pb2.Timestamp()` is standard timestamp handling.

## Pass Request Instance to Lib Function for Response
---
```python
# Step 3: Pass request to lib function for response 
response = stub.GetData(request)
```
- **Purpose**: Executes the actual remote procedure call
- The library serializes your request, sends it over the network, waits for the response, and deserializes the result back into a typed object
- Handles the low-level gRPC communication protocol transparently