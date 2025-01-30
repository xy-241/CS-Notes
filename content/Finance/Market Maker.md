---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - finance
Creation Date: 2025-01-30, 15:19
Last Date: 2025-01-30T15:28:40+08:00
References: 
draft: 
description: Market makers profit by buying at the bid price and selling at the ask price, earning from the bid-ask spread. They manage stock inventories to facilitate trades but face risks from price fluctuations and operational errors, as seen in the Knight Capital loss.
---
## Market Middlemen
---
- Market makers “buy” stocks from sellers at a slightly lower price ([[Market Liquidity#Bid Price|bid price]]) and “sell” them to buyers at a slightly higher price ([[Market Liquidity#Ask Price|ask price]]). This small difference between the two prices is called the [[Market Liquidity#Bid-Ask Spread|spread]], and that’s how they make money

>[!example]
> A market maker can potentially **earn $0.16 per share** if they **buy at the bid price ($215.39)** and **sell at the ask price ($215.55)**. For a transaction involving **300 shares**, the market maker would **earn $48**.

>[!important] Reward comes with risk 
> The higher the spread, the higher profit the market maker can make.

>[!attention] Algorithmic and operational risks
> Market makers rely on sophisticated algorithms to set prices and manage orders across multiple securities. Errors in these systems (e.g., faulty code) can lead to significant losses, as seen in cases like Knight Capital’s **$460 million loss in 2012 due to a software glitch**.

## Stock Inventory
---
- Market makers maintain a stockpile of shares. If a seller wants to sell but no buyer is willing to pay the seller’s price, the market maker buys those shares. Later, when a buyer comes along, the market maker sells the shares to them

>[!attention] Inventory risk
> Market makers maintain inventories of securities to facilitate trades. If they accumulate too much of a security (**long position**) or sell too much (**short position**), they are exposed to price fluctuations. 
> 
> For instance, if they hold a large inventory and the market price drops significantly, they incur losses.