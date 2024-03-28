---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - dsa
Creation Date: 2024-01-03, 14:26
Last Date: 2024-03-28T15:40:31+08:00
References: 
draft: 
description: Trying to sort my life out.
---
## Abstract
---
- Basically re-arranging a collection of items or data elements in an ascending or descending order

>[!attention]- Not all the $O(n^2)$ sorting algorithms are the same
> Different algorithms have different inputs that they are good or bad on.
> 
> For example, [[#Bubble Sort]], [[#Selection Sort]] and [[#Insertion Sort]] have the $O(n^2)$ time complexity. But on sorted or almost sorted array, bubble sort and insertion sort have the $O(n)$ time complexity while selection sort has $O(n^2)$ time complexity.
> 

### In-Place
- Perform [[Sorting]] with constant [[Main Memory]] usage regardless the input size
- [[Algorithm Complexity Analysis#Worst Space Complexity]] - `O(1)`

### Stability of Sorting
- **Stable** if the items with the same value stay in the same order after sorting
- **Unstable** if the items with the same value doesn't stay in the same after sorting

>[!example]- Sorting algorithms that are stable
> **[[#Bubble Sort]]**
> - Only swap elements that are different
>
> **[[#Insertion Sort]]**
> - Be careful with the implementation! Only insert to a point where the element to be inserted is **strictly smaller** than the element at the insertion point
> 
> [[#Merge Sort]]
> - Stable if 'merge' is carefully implemented. When merging 2 subarrays, the first half always comes first, the second half always comes second


>[!example]- Sorting algorithms that are unstable
> **Bogo Sort**
> - Random [[Permutation]] may swap elements with the same value 
> 
> **[[#Selection Sort]]**
> - Imagine in iteration $j$, the element at position $j$ is $8$ and element at position $j+1$ is $8$ too. Then the smallest element in the range $[j, k]$ is $7$. We swap $7$ with the $8$ at position $j$. As you can see, the order of the 2 same value is changed. Thus, unstable

### Divide-and-Conquer Sorting
- **Divide**: split array into two halves
- **[[Recursion]] up**: hit the base case, kickstart sorting the two halves
- **Combine**: merge the sorted halves

## Bubble Sort
---
- The idea here is that at each iteration $j$, we are are going to **'bubble up'** the biggest element in the range $[1, n+1-j]$ to the $n+1-j$ position. If no **'bubbling'** happens in that particular iteration, it means the array is fully sorted and it is safe to terminate the sorting early
- Bubble sort implementation in Java
<div class="onecompilerCode-wrapper">
<iframe
 class="onecompilerCode"
 frameBorder="0" 
 src="https://onecompiler.com/embed/java/4277qh6js?codeChangeEvent=true&theme=dark&hideLanguageSelection=true&hideNew=true&hideNewFileOption=true&availableLanguages=true&hideTitle=true&hideStdin=true" 
 ></iframe>
 </div>

>[!help]- Is the code editor above not showing the correct source code?
> Here is a backup, please report the issue [here](https://github.com/xy-241/CS-Notes/issues) or comment down below, so I can look into the issue. Thanks :)
> ```java
> import java.util.*;
> 
> public class BubbleSort {
>   public static void main(String[] args) {
>     int[] arr = genetateRandomArr(10);
>     
>     System.out.print("Original Array: ");
>     System.out.println(Arrays.toString(arr));
>     System.out.println();
>     
>     bubbleSort(arr.clone(), false); // Inefficient bubble osrt
>     bubbleSort(arr.clone(), true); // Efficient bubble sort
>   }
>   
>   public static void bubbleSort(int[] arr, boolean terminateEarly) {
>     long startTime = System.currentTimeMillis();
>     
>     int n = arr.length;
>     boolean swap = false;
>     int counter = 0;
>     
>     for (int i=0; i<n-1; i++) {
>       swap = false;
>       
>       for (int j=0; j<n-1-i; j++) {
>         counter++;
>         try { Thread.sleep(1); } catch (InterruptedException e) {}
>         if (arr[j]>arr[j+1]) {
>           int temp = arr[j];
>           arr[j] = arr[j+1];
>           arr[j+1] = temp;
>           
>           swap = true;
>         }
>       }
>       
>       if (!swap && terminateEarly) {
>         break;
>       }  
>     }
>     
>     long endTime = System.currentTimeMillis();
>     long elapsedTime = endTime - startTime;
>     
>     System.out.print("Array after bubble sort:");
>     System.out.println(Arrays.toString(arr));
>     System.out.println("Elements processed " + counter);
>     System.out.println("Time taken: " + elapsedTime + " ms");
>     System.out.println();
>   }
>   
>   public static int[] genetateRandomArr(int size) {
>     Random random = new Random();
>     int[] arr = new int[size];
>     
>     for (int i=0; i<arr.length; i++) {
>       arr[i] = random.nextInt(size);
>     }
>     
>     return arr;
>   }
> }
> ```


>[!important]- Loop Invariant
> At the end of iteration $j$, the **biggest** $j$ items are correctly sorted in the final $j$ positions of the array.
> 
> So for example, at the end of iteration 2, the biggest 2 items are correctly sorted in the final 2 positions of the array. 
> 
> So if we have $n$ items, we need to perform $n$ iterations to have the biggest $n$ items to be sorted correctly in the final $n$ positions of the array. Each iteration takes $O(n)$, and there are $n$ items we need to bubble to the right hand side. Thus, the [[Algorithm Complexity Analysis#Worst Time Complexity]] is $O(n^2)$ .

>[!note]- Time Complexity
> **Best-case**
> - $O(n)$, already sorted, only one iteration is needed 
>   
> **Average-case**
> - $O(n^2)$, assume inputs are chosen at random
> 
> **Worst-case**
> - $O(n^2)$, when we have $n$ elements in the given array and all of them aren't correctly sorted in their final positions of the array

## Selection Sort
---
- The idea here is that at each iteration $j$, we are are going to **select** the smallest element in the range $[j, n]$ of the [[Array]]. Then swap it with element at the $j$ position
- Selection sort implementation in java
<div class="onecompilerCode-wrapper">
<iframe
 class="onecompilerCode"
 frameBorder="0" 
 src="https://onecompiler.com/embed/java/427bvxd2r?codeChangeEvent=true&theme=dark&hideLanguageSelection=true&hideNew=true&hideNewFileOption=true&availableLanguages=true&hideTitle=true&hideStdin=true" 
 ></iframe>
 </div>

>[!help]- Is the code editor above not showing the correct source code?
> Here is a backup, please report the issue [here](https://github.com/xy-241/CS-Notes/issues) or comment down below, so I can look into the issue. Thanks :)
import java.util.*;
> ```java
> public class BubbleSort {
>   public static void main(String[] args) {
>     int[] arr = genetateRandomArr(10);
>     
>     System.out.println("Original Array");
>     System.out.println(Arrays.toString(arr));
>     System.out.println();
>     
>     selectionSort(arr);
>   }
>   
>   public static void selectionSort(int[] arr) {
>     long startTime = System.currentTimeMillis();
>     
>     int n = arr.length;
>     int counter = 0;
>     
>     for (int i=0; i<n-1; i++) {
>       int minSelected = i;
>       
>       for (int j=i+1; j<n; j++) {
>         counter++;
>         try { Thread.sleep(1); } catch (InterruptedException e) {}
>         
>         if (arr[j] < arr[minSelected]) minSelected = j;
>       }
>       
>       if (minSelected != i) {
>         int temp = arr[i];
>         arr[i] = arr[minSelected];
>         arr[minSelected] = temp;
>       }
>     }
>     
>     long endTime = System.currentTimeMillis();
>     long elapsedTime = endTime - startTime;
>     
>     System.out.println(Arrays.toString(arr));
>     System.out.println("Elements processed: " + counter);
>     System.out.println("Time taken: " + elapsedTime + " ms");
>     System.out.println();
>   }
>   
>   public static int[] genetateRandomArr(int size) {
>     Random random = new Random();
>     int[] arr = new int[size];
>     
>     for (int i=0; i<arr.length; i++) {
>       arr[i] = random.nextInt(size);
>     }
>     
>     return arr;
>   }
> }
> ```



>[!important]- Loop Invariant
> At the end of iteration $j$, the **smallest** $j$ items are correctly sorted in the first $j$ positions of the array.

>[!note]- Time Complexity
> **Best-case**
> - $O(n^2)$, because at each iteration, we can only find the current smallest element. Even if we are given a fully sorted array, we need to perform $n$ iterations, in order to have the confidence to say that the array is sorted 
>   
> **Average-case**
> - $O(n^2)$, assume inputs are chosen at random
> 
> **Worst-case**
> - $O(n^2)$, when we have $n$ elements in the given array and all of them aren't correctly sorted in their final positions of the array

## Insertion Sort
---
- The idea here is that at each iteration $j$, we are are going to **insert** the element at the $j$ position to the prefix [[Array]] that is $j-1$ long, such that the new prefix array which is $j$ long remains sorted

<div class="onecompilerCode-wrapper">
<iframe
 class="onecompilerCode"
 frameBorder="0" 
 src="https://onecompiler.com/embed/java/427bx8c58?codeChangeEvent=true&theme=dark&hideLanguageSelection=true&hideNew=true&hideNewFileOption=true&availableLanguages=true&hideTitle=true&hideStdin=true" 
 ></iframe>
 </div>

>[!help]- Is the code editor above not showing the correct source code?
> Here is a backup, please report the issue [here](https://github.com/xy-241/CS-Notes/issues) or comment down below, so I can look into the issue. Thanks :)
> ```bash
> import java.util.*;
> 
> public class InsertionSort {
>   public static void main(String[] args) {
>     int[] arr = genetateRandomArr(10);
>     
>     System.out.println("Original Array");
>     System.out.println(Arrays.toString(arr));
>     System.out.println();
>     
>     insertionSort(arr);
>   }
>   
>   public static void insertionSort(int[] arr) {
>     long startTime = System.currentTimeMillis();
>     
>     int n = arr.length;
>     int counter = 0;
>     
>     for (int i=1; i<n; i++) {
>       int insertionPt = i;
>       while (insertionPt > 0 && arr[insertionPt] < arr[insertionPt-1]) {
>         counter++;
>         try { Thread.sleep(1); } catch (InterruptedException e) {}
>         
>         int temp = arr[insertionPt];
>         arr[insertionPt] = arr[insertionPt-1];
>         arr[insertionPt-1] = temp;
>         insertionPt--;
>       }
>     }
>     
>     long endTime = System.currentTimeMillis();
>     long elapsedTime = endTime - startTime;
>     
>     System.out.println(Arrays.toString(arr));
>     System.out.println("Elements processed: " + counter);
>     System.out.println("Time taken: " + elapsedTime + " ms");
>     System.out.println();
>   }
>   
>   public static int[] genetateRandomArr(int size) {
>     Random random = new Random();
>     int[] arr = new int[size];
>     
>     for (int i=0; i<arr.length; i++) {
>       arr[i] = random.nextInt(size);
>     }
>     
>     return arr;
>   }
> }
> ```


>[!important]- Loop Invariant
> At the end of iteration $j$, the first $j$ items in the array are in **sorted order**.

>[!note]- Time Complexity
> **Best-case**
> - $O(n)$, already sorted, no insertion is needed, just one iteration is needed 
>   
> **Average-case**
> - $O(n^2)$, assume inputs are chosen at random
> 
> **Worst-case**
> - $O(n^2)$, when we have $n$ elements in the given array and all of them aren't correctly sorted in their final positions of the array


## Merge Sort
----
![[merge_sort.png|500]]
- A [[#Divide-and-Conquer Sorting]] that **NOT [[#In-Place]]**

<div class="onecompilerCode-wrapper">
<iframe
 class="onecompilerCode"
 frameBorder="0" 
 src="https://onecompiler.com/embed/java/427c29ucp?codeChangeEvent=true&theme=dark&hideLanguageSelection=true&hideNew=true&hideNewFileOption=true&availableLanguages=true&hideTitle=true&hideStdin=true" 
 ></iframe>
 </div>

>[!help]- Is the code editor above not showing the correct source code?
> Here is a backup, please report the issue [here](https://github.com/xy-241/CS-Notes/issues) or comment down below, so I can look into the issue. Thanks :)
> ```java
> import java.util.*;
> 
> public class MergeSort {
>   static int counter = 0;
>   public static void main(String[] args) {
>     int[] arr = genetateRandomArr(32);
>     
>     System.out.println("Original Array");
>     System.out.println(Arrays.toString(arr));
>     System.out.println();
>     
>     long startTime = System.currentTimeMillis();
>     int[] res = mergeSort(arr, 0, arr.length-1);
>     long endTime = System.currentTimeMillis();
>     long elapsedTime = endTime - startTime;
>     
>     System.out.println(Arrays.toString(res));
>     System.out.println("Elements processed: " + counter);
>     System.out.println("Time taken: " + elapsedTime + " ms");
>     System.out.println();
>   }
>   
>   public static int[] mergeSort(int[] arr, int start, int end) {
>     if (start == end) return new int[]{arr[start]};
>     
>     int mid = (int)((end-start) * 0.5) + start;
>     int[] leftSubSorted = mergeSort(arr, start, mid);
>     int[] rightSubSorted = mergeSort(arr, mid+1, end);
>     
>     return merge(leftSubSorted, rightSubSorted);
>   }
>   
>   public static int[] merge(int[] leftArr, int[] rightArr) {
>     int[] merged = new int[leftArr.length + rightArr.length];
> 
>     int leftArrPt = 0;
>     int rightArrPt = 0;
>     int mergedPt = 0;
>     
>     // System.out.print("Before merge: ");
>     // System.out.println(Arrays.toString(merged));
>     while (leftArrPt < leftArr.length && rightArrPt < rightArr.length) {
>       try { Thread.sleep(1); } catch (InterruptedException e) {}
>       counter++;
>       int leftElement = leftArr[leftArrPt];
>       int rightElement = rightArr[rightArrPt];
>       
>       if (leftElement == rightElement) {
>         merged[mergedPt++] = leftElement;
>         leftArrPt++;
>       } else if (leftElement < rightElement) {
>         merged[mergedPt++] = leftElement;
>         leftArrPt++;
>       }else {
>         merged[mergedPt++] = rightElement;
>         rightArrPt++;
>       }
>     }
>     
>     for (int i=leftArrPt; i<leftArr.length; i++) {
>       try { Thread.sleep(1); } catch (InterruptedException e) {}
>       counter++;
>       merged[mergedPt++] = leftArr[i];
>     } 
>     for (int i=rightArrPt; i<rightArr.length; i++) {
>       try { Thread.sleep(1); } catch (InterruptedException e) {}
>       counter++;
>       merged[mergedPt++] = rightArr[i];
>     }
>     
>     // System.out.print("After merge: ");
>     // System.out.println(Arrays.toString(merged));
>     return merged;
>   }
>   
>   public static int[] genetateRandomArr(int size) {
>     Random random = new Random();
>     int[] arr = new int[size];
>     
>     for (int i=0; i<arr.length; i++) {
>       arr[i] = random.nextInt(size);
>     }
>     
>     return arr;
>   }
> }
> ```



>[!note]- Time Complexity
> **Best-case**
> - $O(nlogn)$, already sorted, a full divide-and-conquer process is needed to have the confidence to claim the array is sorted
>   
> **Average-case**
> - $O(nlogn)$, assume inputs are chosen at random
> 
> **Worst-case**
> - $O(nlogn)$, when we have $n$ elements in the given array and all of them aren't correctly sorted in their final positions of the array

>[!big]- Time Complexity Proof
> **Recursion Tree Approach**
> ![[mergeSort_time_complexity_with_recursion_tree.png|500]]
> 
> Merge at each level takes $O(n)$ and there will be $logn$ levels at the conquer stage where we perform the merging since we divide the array by half at each level. So the overall time complexity is $O(nlogn)$. $c$ in the diagram above indicate a constant value.
> 
> **Induction Approach**
> ![[mergeSort_time_complexity_with_induction.png|500]]
> 
> Guess the time complexity and verify it with the reoccurrence we obtained. 

>[!success] Handle large dataset well
> The performance gains on large dataset with $O(nlogn)$ time complexity is huge.
> 
> And we can perform sorting on subset of the dataset at a time. For example, if our dataset is 10GB, and we need to load the data into the RAM to perform the sorting, but there is only 2GB RAM. With merge sort, we are able to load in 2GB at a time to perform sorting, and eventually sort the dataset.

>[!caution]- Slow on small arrays!
> The allocation of different arrays are scattered in the [[Main Memory]]. Merge sort has a **space complexity of $O(n)$** with different temporary arrays at each merge layer. Working on multiple arrays means we sacrifice the performance gain from [[CPU Cache#Cache Locality]]. 
> 
> The [[Recursion]] nature of the algorithm comes with extra overhead too. Recursion is also less predicable, thus impact the [[Branch Prediction]] negatively.
> 
> When the array is small, such hardware level negative impact outweighs the performance gains from the better time complexity.

>[!caution]- Slow on almost sorted array!
> Merge sort's performance is still $O(nlogn)$ when the array is almost sorted, because it needs to perform the full divide-and-conquer process regardless how chaotic the given array is. While [[#Bubble Sort]] and [[#Insertion Sort]] have a time complexity of $O(n)$.



## References
---
- [Sorting Algorithms Animations | Toptal®](https://www.toptal.com/developers/sorting-algorithms)