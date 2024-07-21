---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - java
  - OOP
Creation Date: 2024-04-22, 12:07
Last Date: 2024-05-26T22:03:50+08:00
References: 
draft: 
description: 
---
## Abstract
---
- There are two interfaces provided by Java to implement object comparison logic - [`java.lang.Comparable<T>`](https://docs.oracle.com/javase/8/docs/api/java/lang/Comparable.html) and [`java.util.Comparator<T>`](https://docs.oracle.com/javase%2F7%2Fdocs%2Fapi%2F%2F/java/util/Comparator.html)

|                   | `java.lang.Comparable<T>`                                                                                                                                                                   | `java.util.Comparator<T>`                                                                                                                                                                                                                                                                                                                                         |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Purpose           | Insert the comparison logic into object.                                                                                                                                                    | Insert comparison logic into objects that don't implement `java.lang.Comparable<T>`.<br><br>**Overwrite** objects that do implement `java.lang.Comparable<T>` with custom comparison logic.<br><br>A [[OOP#Functional Interface]], so we can use [[AWS Lambda]] to insert the comparison logic as [[Function#First-class Citizen Function\|first-class citizen]]. |
| Comparison Method | [`int compareTo(T o1, T o2)`](https://docs.oracle.com/javase/8/docs/api/java/lang/Comparable.html#compareTo-T-)<br><br>Negative -> $o1 < o2$<br>Zero -> $o1 == o2$<br>Positive -> $o1 > o2$ | [`int compare(T o1, T o2)`](https://docs.oracle.com/javase%2F7%2Fdocs%2Fapi%2F%2F/java/util/Comparator.html#compare(T,%20T))<br><br>Negative -> $o1 < o2$<br>Zero -> $o1 == o2$<br>Positive -> $o1 > o2$                                                                                                                                                          |

>[!important]
> Use `Integer.compare()` to compare integers to avoid overflow.

## Code Example
---
- First, we created a class `Student` that implements `Comparable<T>` that compares the `Student` objects based on their `id`
- Second, we created a class `AgeComparator` that implements `Comparator<T>` that compares `Student` objects based on their `age`
- Lastly, we show how `Collections.Sort()` uses the default comparison implemented with `Comparable<T>`, and how we can override it with comparison logic implemented with `Comparator<T>`

<div class="onecompilerCode-wrapper">
<iframe
 class="onecompilerCode"
 frameBorder="0" 
 src="https://onecompiler.com/embed/java/42aznfuph?codeChangeEvent=true&theme=dark&hideLanguageSelection=true&hideNew=true&hideNewFileOption=true&availableLanguages=true&hideTitle=true&hideStdin=true" 
 ></iframe>
 </div>
 
 >[!important]
 > 
 > Since `Comparator<T>` is a [[OOP#Functional Interface]], we can make use of [[Java Lambda]] to create a custom comparator in one line, as shown in the code editor above!