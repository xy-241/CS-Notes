#aws 
## Abstract
- Doesn't have control over Deployment Strategy like the [[ECS EC2]], which makes sense. Because Fargate is serverless, so we don't really have to consider which az's ec2 instance has more cpu power, thus deploy new task to that ec2 in that az
- The Deployment Strategy is Spread