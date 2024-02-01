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
Last Date: 2024-02-02T01:52:43+07:00
References: 
draft: 
---
## Abstract
---
A collection of code templates to kickstart the journey of solving interesting problems on [Codeforces](https://codeforces.com/)!

>[!tip]
>1. Make sure all inputs are read in in sequence 
>2. Use at least 64[[Computer Data Representation#Bit]] to prevent integer overflow issue, `long` in [[Java]], `long long` in [[CPP]]
>3. [[Dynamic Array (List)]] over [[Array]]


## Java Code Template
---
**Test `Solution.java` with test cases inside `input.txt`**
```bash
java Solution.java < input.txt
```

>[!code]- `Solution.java` when there are multiple inputs in a single test case
>```java title="Solution.java"
>import java.util.*;
>
>public class Solution {
>  static Scanner scanner = new Scanner(System.in);
>  
>  // Write your solution here
>  public static void solve() {
>    System.out.println("Write your solution inside the solve() method");
>  }
>  
>  public static void main(String[] args) {
>    int t = scanner.nextInt();
>    scanner.nextLine();
>    
>    while(t-- > 0) {
>      solve();
>    }
>  }
>}
>```

>[!code]- `Solution.java` when there is only a single input in a given test case
>```java title="Solution.java"
>import java.util.*;
> 
>public class Solution {
>  static Scanner scanner = new Scanner(System.in);
>  
>  // Write your solution here
>  public static void solve() {
>    System.out.println("Write your solution inside the solve() method");
>  }
>  
>  public static void main(String[] args) {
>    solve();
>  }
>}
>```

>[!tip] Basic Data Structure Operation Cheatsheet
>[Java List](https://chat.openai.com/share/81de8ffd-081b-4f69-8503-cc7d08be3b9f)


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