---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - networking
Creation Date: 2023-12-12T11:49:00+08:00
Last Date: 2023-12-15T21:25:27+08:00
References: 
---
## Abstract
---
- Tell [[Host#Server]] the type of work the [[Host#Client]] wants it to do

## Get
- Only retrieves data
- Can call GET multiple times with no *Side-Effect*
- Doesn't have a [[Request Body]]
- Parameters in [[Request Header]] & [[URL]]

## Delete
- Delete data
- Each call has a *Side-Effect*(delete data)
- Doesn't have a [[Request Body]]
- Parameters in [[Request Header]] & [[URL]]

>[!example] Use cases
>- Delete resources created on [[Host#Server]]
## Post
- Creates new data
- Each call has a *Side-Effect* (new data be created)
- Has a [[Request Body]]
- Parameters in [[Request Body]], [[Request Header]] & [[URL]]

>[!example] Use cases
>- Create resources on [[Host#Server]] like api keys etc


## Patch
- Updates existing data
- Each call has a *Side-Effect* (data updated)
- Has a [[Request Body]]
- Parameters in [[Request Body]], [[Request Header]] & [[URL]]

>[!example] Use cases
>- Update resources created on [[Host#Server]]