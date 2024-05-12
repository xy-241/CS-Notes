---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - cp
  - java
  - cpp
Creation Date: 2023-12-29, 16:16
Last Date: 2024-03-12T12:21:14+08:00
References: 
draft: 
---
## Abstract
---
A collection of code templates to kickstart the journey of solving interesting problems on [Codeforces](https://codeforces.com/)!

>[!tip]
>1. Make sure all inputs are read in in sequence 
>2. Use at least 64[[Computer Data Representation#Bit]] to prevent integer overflow issue, `long` in [[Java]], `long long` in [[CPP]]
>3. [[Array#Dynamic Array]] over [[Array]]


## Java Code Template
---
**Test `Solution.java` with test cases inside `input.txt`**
```bash
java Solution.java < input.txt
```

>[!code]- `Solution.java` when there are multiple inputs in a single test case
> ```java title="Solution.java"
> import java.util.*;
> import java.io.*;
> 
> public class Solution {
>   static BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
> 
>  // Write your solution here
>   public static void solve() throws IOException {
>     System.out.println("Write your solution inside the solve() method");
>     // StringTokenizer st = new StringTokenizer(br.readLine());
>     // Integer.parseInt(st.nextToken());
>   }
> 
>   public static void main(String[] args) throws IOException {
>     int t = Integer.parseInt(br.readLine());
>     
>     while(t-- > 0) {
>       solve();
>     }
>   }
> }
> ```

>[!code]- `Solution.java` when there is only a single input in a given test case
> ```java title="Solution.java"
> import java.util.*;
> import java.io.*;
>  
> public class Solution {
>   static BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
>  
>  // Write your solution here
>   public static void solve() throws IOException {
>     System.out.println("Write your solution inside the solve() method");
>     // StringTokenizer st = new StringTokenizer(br.readLine());
>     // Integer.parseInt(st.nextToken());
>   }
>  
>   public static void main(String[] args) throws IOException  {
>     solve();
>   }
> }
> ```

>[!tip] Basic Data Structure Operation Cheatsheet
>[Java List](https://chat.openai.com/share/81de8ffd-081b-4f69-8503-cc7d08be3b9f)

>[!tip] Avoid Potential TLE
>1. If there are many small segments that need to be printed out one by one, or we need to consolidate many small input string pieces into one string. Consolidate them into one string with `StringBuilder`. Because string in java is [[Immutability]], concatenating 2 strings require us to create a new string. Example: [without StringBuilder Buffer](https://codeforces.com/contest/1918/submission/245011751), [with StringBuilder Buffer](https://codeforces.com/contest/1918/submission/245279617)
>2. Use `BufferedReader`, `InputStreamReader` and `StringTokenizer` to read in the input, instead of using `Scanner`

## CPP Code Template
---
**Test `Solution.cpp` with test cases inside `input.txt`**
```bash
g++ -o Solution Solution.cpp && ./Solution < input.txt
```

>[!code]- `Solution.cpp` when there are multiple inputs in a single test case
>```cpp title="Solution.cpp"
>#include <iostream>
>#include <vector>
>#include <algorithm>
>#include <cmath>
>#include <cstdio>
>#include <cstdlib>
>#include <cstring>
>#include <string>
>#include <map>
>#include <set>
>#include <queue>
>#include <stack>
>#include <numeric>
>#include <functional>
>#include <limits>
>#include <bitset>
>#include <iomanip>
>#include <iterator>
>#include <cassert>
>using namespace std;
>typedef long long ll;
>
>struct test {
>  void solve() {
>    cout << "Write your solution inside the solve() method\n";
>  }
>};
>
>int main() {
>  ios::sync_with_stdio(false);
>  int t;
>  cin >> t;
>  for (int i = 0; i < t; i++) {
>    test().solve();
>  }
>  return 0;
>}
>```



>[!code]- `Solution.cpp` when there is only a single input in a given test case
>```cpp title="Solution.cpp"
>#include <iostream>
>#include <vector>
>#include <algorithm>
>#include <cmath>
>#include <cstdio>
>#include <cstdlib>
>#include <cstring>
>#include <string>
>#include <map>
>#include <set>
>#include <queue>
>#include <stack>
>#include <numeric>
>#include <functional>
>#include <limits>
>#include <bitset>
>#include <iomanip>
>#include <iterator>
>#include <cassert>
>using namespace std;
>typedef long long ll;
>
>struct test {
>  void solve() {
>    cout << "Write your solution inside the solve() method\n";
>  }
>};
>
>int main() {
>    ios::sync_with_stdio(false);
>
>    test().solve();
>
>    return 0;
>}
>```