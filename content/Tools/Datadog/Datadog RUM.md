---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - Datadog
Creation Date: 2023-12-04T23:09:00
Last Date: 2023-12-10T19:27:38+08:00
References: 
---
## Abstract
- [[Real User Monitoring]]
- Enable us to get the metadata about the client such as the user-agent, [[IP Address]] & record down the user actions on the page in a video format 

## Setup
- The example below is based on [next.js](https://nextjs.org/)
- We first go to [[#Datadog Dashboard]] to obtain the codes, then append the codes into the [[#Frontend Source Codes]]
- Bonus: [[#Integration with Datadog APM]]
### Datadog Dashboard
1. Go to the appropriate [Datadog Site](https://docs.datadoghq.com/getting_started/site/#access-the-datadog-site). In this case, our site is `https://app.datadoghq.eu`, the endpoint is `https://app.datadoghq.eu/rum/list`
2. Create a **New Application**,  **Application Type** is `JS`, **Instrumentation Type** is `NPM`, and we will get the following codes
	```typescript
	import { datadogRum } from '@datadog/browser-rum';
	
	datadogRum.init({
	  applicationId: '<AUTO_POPULATED>',
	  clientToken: '<AUTO_POPULATED>',
	  site: 'datadoghq.eu',
	  service: 'aegis-dev-frontend',
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
2. Append the codes we obtained from [[#Datadog Dashboard]] inside the root `.tsc` file, usually it is named as `App.tsx`, so the Datadog can monitor every page of the frontend

### Integration with [[Datadog APM]]
- This is for application that has both frontend and backend, and we need to have [[Datadog APM]] enabled for the backend before we can integrate it with Datadog RUM
- 


## Terminologies
