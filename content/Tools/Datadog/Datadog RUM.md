---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - Datadog
Creation Date: 2023-12-04T23:09:00
Last Date: 
References:
---
## Abstract
- With [[#RUM]], we are able to get the metadata about the client such as the user-agent, [[IP Address]] & record down the user actions on the page in a video format

## Setup
- The example below is based on [next.js](https://nextjs.org/)
- We first go to [[#Datadog Dashboard]] to obtain the [[#RUM]] codes, then append the into the [[#Frontend Source Codes]]
### Datadog Dashboard
1. Go to the approriate [Datadog Site](https://docs.datadoghq.com/getting_started/site/#access-the-datadog-site). In this case, our site is `https://app.datadoghq.eu`, the [[#RUM]] endpoint is `https://app.datadoghq.eu/rum/list`
2. Create a **New Application**,  **Application Type** is `JS`, **Instrumentation Type** is `NPM`, and we will get the following codes
	```typescript
	import { datadogRum } from '@datadog/browser-rum';
	
	datadogRum.init({
	  applicationId: '<AUTO_POPULATED>',
	  clientToken: '<AUTO_POPULATED>',
	  site: 'datadoghq.eu',
	  service: 'aegis-dev',
	  env: 'aegis-dev',
	  // Specify a version number to identify the deployed version of your application in Datadog
	  // version: '1.0.0',
	  sessionSampleRate: 100,
	  sessionReplaySampleRate: 100,
	  trackUserInteractions: true,
	  trackResources: true,
	  trackLongTasks: true,
	  defaultPrivacyLevel: 'mask-user-input',
	});
	```

### Frontend Source Codes
1. Install the [[npm]] package - `npm i @datadog/browser-rum`
2. Append the codes we obtained from [[#Datadog Dashboard]] inside the root `.tsc` file, usually it is named as `App.tsx`, so the [[#RUM]] can monitor every page of the frontend




## Terminologies
### RUM
- Stands for *Real User Monitoring*
- Used to monitor the **frontend** of an application