---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - Datadog
Creation Date: 2023-12-04T23:09:00
Last Date: 2024-05-02T16:51:18+08:00
References: 
---
## Abstract
---
- Datadog RUM provides [[Real User Monitoring]]


## Setup
---
The example below is based on [next.js](https://nextjs.org/). The setup process is very similar for other Javascript framework.

**Checklist:**
- [ ] [[#Datadog Dashboard]]
- [ ] [[#Changes for Frontend Source Codes]]
- [ ] [[#Integration with Datadog APM]]


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

>[!tip] Tracking at an user level
> If the users of your website need to log in. You can pass the information of the users who login to your website to Datadog. This allows you to filter tracking data on a user level. For more details view [identifying user session with Datadog RUM](https://docs.datadoghq.com/real_user_monitoring/browser/advanced_configuration/?tab=npm#identify-user-session).
### Changes for Frontend Source Codes
1. Install the datadog package with [[Package Manager#NPM]] - `npm i @datadog/browser-rum`
2. Append the codes we obtained from [[#Datadog Dashboard]] inside the root `.tsc` file, usually it is named as `App.tsx`, so the Datadog RUM scripts are **inserted** into **all the frontend pages**

### Integration with Datadog APM

>[!attention]
>We need to have [[Datadog APM]] enabled for the backend before we can integrate it with Datadog RUM!


- We simply add in `allowedTracingUrls` with your backend base url
```typescript {9-11}
import { datadogRum } from '@datadog/browser-rum';

datadogRum.init({
  applicationId: '<AUTO_POPULATED>',
  clientToken: '<AUTO_POPULATED>',
  site: 'datadoghq.eu',
  service: 'aegis-dev-frontend',
  env: 'aegis-dev',
  allowedTracingUrls: [
    (url) => url.startsWith(<YOUR_BACKEND_API_BASE_URL> ?? ''),
  ],
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


