/**
 * DSA Platform - Comprehensive Problem Dataset
 * Contains 20+ real DSA problems with descriptions, LeetCode links, company tags, examples, constraints, and test cases.
 */

window.DSA_PROBLEMS_DATA = [
  {
    id: 1,
    title: "Two Sum",
    difficulty: "Easy",
    tags: ["Array", "Hash Table"],
    companies: ["TCS Ninja", "Amazon", "Google", "Meta"],
    leetcodeUrl: "https://leetcode.com/problems/two-sum/",
    description: `Given an array of integers <code>nums</code> and an integer <code>target</code>, return <em>indices of the two numbers such that they add up to <code>target</code></em>.<br><br>You may assume that each input would have <strong>exactly one solution</strong>, and you may not use the same element twice.<br><br>You can return the answer in any order.`,
    examples: [
      {
        input: "nums = [2,7,11,15], target = 9",
        output: "[0,1]",
        explanation: "Because nums[0] + nums[1] == 9, we return [0, 1]."
      },
      {
        input: "nums = [3,2,4], target = 6",
        output: "[1,2]",
        explanation: "nums[1] + nums[2] == 6, so we return [1, 2]."
      },
      {
        input: "nums = [3,3], target = 6",
        output: "[0,1]",
        explanation: "nums[0] + nums[1] == 6, so we return [0, 1]."
      }
    ],
    constraints: [
      "2 <= nums.length <= 10^4",
      "-10^9 <= nums[i] <= 10^9",
      "-10^9 <= target <= 10^9",
      "Only one valid answer exists."
    ],
    templates: {
      cpp: `class Solution {\npublic:\n    vector<int> twoSum(vector<int>& nums, int target) {\n        // Your code here\n        unordered_map<int, int> mp;\n        for (int i = 0; i < nums.size(); i++) {\n            int diff = target - nums[i];\n            if (mp.count(diff)) return {mp[diff], i};\n            mp[nums[i]] = i;\n        }\n        return {};\n    }\n};`,
      java: `class Solution {\n    public int[] twoSum(int[] nums, int target) {\n        // Your code here\n        Map<Integer, Integer> map = new HashMap<>();\n        for (int i = 0; i < nums.length; i++) {\n            int complement = target - nums[i];\n            if (map.containsKey(complement)) {\n                return new int[] { map.get(complement), i };\n            }\n            map.put(nums[i], i);\n        }\n        return new int[]{};\n    }\n}`,
      python: `class Solution:\n    def twoSum(self, nums: list[int], target: int) -> list[int]:\n        # Your code here\n        seen = {}\n        for i, num in enumerate(nums):\n            diff = target - num\n            if diff in seen:\n                return [seen[diff], i]\n            seen[num] = i\n        return []`
    },
    testCases: [
      { input: "[2,7,11,15], target = 9", expectedOutput: "[0, 1]" },
      { input: "[3,2,4], target = 6", expectedOutput: "[1, 2]" },
      { input: "[3,3], target = 6", expectedOutput: "[0, 1]" }
    ]
  },
  {
    id: 2,
    title: "Valid Parentheses",
    difficulty: "Easy",
    tags: ["String", "Stack"],
    companies: ["TCS Digital", "Microsoft", "Amazon"],
    leetcodeUrl: "https://leetcode.com/problems/valid-parentheses/",
    description: `Given a string <code>s</code> containing just the characters <code>'('</code>, <code>')'</code>, <code>'{'</code>, <code>'}'</code>, <code>'['</code> and <code>']'</code>, determine if the input string is valid.<br><br>An input string is valid if:<br>1. Open brackets must be closed by the same type of brackets.<br>2. Open brackets must be closed in the correct order.<br>3. Every close bracket has a corresponding open bracket of the same type.`,
    examples: [
      { input: 's = "()"', output: "true" },
      { input: 's = "()[]{}"', output: "true" },
      { input: 's = "(]"', output: "false" }
    ],
    constraints: [
      "1 <= s.length <= 10^4",
      "s consists of parentheses only '()[]{}'."
    ],
    templates: {
      cpp: `class Solution {\npublic:\n    bool isValid(string s) {\n        stack<char> st;\n        for(char c : s) {\n            if(c == '(' || c == '{' || c == '[') st.push(c);\n            else {\n                if(st.empty()) return false;\n                if(c == ')' && st.top() != '(') return false;\n                if(c == '}' && st.top() != '{') return false;\n                if(c == ']' && st.top() != '[') return false;\n                st.pop();\n            }\n        }\n        return st.empty();\n    }\n};`,
      java: `class Solution {\n    public boolean isValid(String s) {\n        Stack<Character> stack = new Stack<>();\n        for (char c : s.toCharArray()) {\n            if (c == '(') stack.push(')');\n            else if (c == '{') stack.push('}');\n            else if (c == '[') stack.push(']');\n            else if (stack.isEmpty() || stack.pop() != c) return false;\n        }\n        return stack.isEmpty();\n    }\n}`,
      python: `class Solution:\n    def isValid(self, s: str) -> bool:\n        stack = []\n        mapping = {")": "(", "}": "{", "]": "["}\n        for char in s:\n            if char in mapping:\n                top = stack.pop() if stack else '#'\n                if mapping[char] != top:\n                    return False\n            else:\n                stack.append(char)\n        return not stack`
    },
    testCases: [
      { input: 's = "()"', expectedOutput: "true" },
      { input: 's = "()[]{}"', expectedOutput: "true" },
      { input: 's = "(]"', expectedOutput: "false" }
    ]
  },
  {
    id: 3,
    title: "Merge Two Sorted Lists",
    difficulty: "Easy",
    tags: ["Linked List", "Recursion"],
    companies: ["TCS Ninja", "Amazon", "Apple"],
    leetcodeUrl: "https://leetcode.com/problems/merge-two-sorted-lists/",
    description: `You are given the heads of two sorted linked lists <code>list1</code> and <code>list2</code>.<br><br>Merge the two lists into one <strong>sorted</strong> list. The list should be made by splicing together the nodes of the first two lists.<br><br>Return <em>the head of the merged linked list</em>.`,
    examples: [
      { input: "list1 = [1,2,4], list2 = [1,3,4]", output: "[1,1,2,3,4,4]" },
      { input: "list1 = [], list2 = []", output: "[]" },
      { input: "list1 = [], list2 = [0]", output: "[0]" }
    ],
    constraints: [
      "The number of nodes in both lists is in the range [0, 50].",
      "-100 <= Node.val <= 100",
      "Both list1 and list2 are sorted in non-decreasing order."
    ],
    templates: {
      cpp: `/**\n * Definition for singly-linked list.\n * struct ListNode {\n *     int val;\n *     ListNode *next;\n *     ListNode(int x) : val(x), next(NULL) {}\n * };\n */\nclass Solution {\npublic:\n    ListNode* mergeTwoLists(ListNode* l1, ListNode* l2) {\n        if(!l1) return l2;\n        if(!l2) return l1;\n        if(l1->val < l2->val) {\n            l1->next = mergeTwoLists(l1->next, l2);\n            return l1;\n        } else {\n            l2->next = mergeTwoLists(l1, l2->next);\n            return l2;\n        }\n    }\n};`,
      java: `class Solution {\n    public ListNode mergeTwoLists(ListNode l1, ListNode l2) {\n        if (l1 == null) return l2;\n        if (l2 == null) return l1;\n        if (l1.val < l2.val) {\n            l1.next = mergeTwoLists(l1.next, l2);\n            return l1;\n        } else {\n            l2.next = mergeTwoLists(l1, l2.next);\n            return l2;\n        }\n    }\n}`,
      python: `class Solution:\n    def mergeTwoLists(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:\n        if not l1: return l2\n        if not l2: return l1\n        if l1.val < l2.val:\n            l1.next = self.mergeTwoLists(l1.next, l2)\n            return l1\n        else:\n            l2.next = self.mergeTwoLists(l1, l2.next)\n            return l2`
    },
    testCases: [
      { input: "list1 = [1,2,4], list2 = [1,3,4]", expectedOutput: "[1,1,2,3,4,4]" },
      { input: "list1 = [], list2 = [0]", expectedOutput: "[0]" }
    ]
  },
  {
    id: 4,
    title: "Best Time to Buy and Sell Stock",
    difficulty: "Easy",
    tags: ["Array", "Dynamic Programming"],
    companies: ["TCS Prime", "Goldman Sachs", "Amazon"],
    leetcodeUrl: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
    description: `You are given an array <code>prices</code> where <code>prices[i]</code> is the price of a given stock on the <code>i<sup>th</sup></code> day.<br><br>You want to maximize your profit by choosing a <strong>single day</strong> to buy one stock and choosing a <strong>different day in the future</strong> to sell that stock.<br><br>Return <em>the maximum profit you can achieve from this transaction</em>. If you cannot achieve any profit, return <code>0</code>.`,
    examples: [
      { input: "prices = [7,1,5,3,6,4]", output: "5", explanation: "Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5." },
      { input: "prices = [7,6,4,3,1]", output: "0", explanation: "In this case, no transactions are done and max profit = 0." }
    ],
    constraints: [
      "1 <= prices.length <= 10^5",
      "0 <= prices[i] <= 10^4"
    ],
    templates: {
      cpp: `class Solution {\npublic:\n    int maxProfit(vector<int>& prices) {\n        int minPrice = INT_MAX, maxProfit = 0;\n        for(int p : prices) {\n            minPrice = min(minPrice, p);\n            maxProfit = max(maxProfit, p - minPrice);\n        }\n        return maxProfit;\n    }\n};`,
      java: `class Solution {\n    public int maxProfit(int[] prices) {\n        int minPrice = Integer.MAX_VALUE;\n        int maxProfit = 0;\n        for (int p : prices) {\n            if (p < minPrice) minPrice = p;\n            else if (p - minPrice > maxProfit) maxProfit = p - minPrice;\n        }\n        return maxProfit;\n    }\n}`,
      python: `class Solution:\n    def maxProfit(self, prices: list[int]) -> int:\n        min_p = float('inf')\n        max_p = 0\n        for p in prices:\n            min_p = min(min_p, p)\n            max_p = max(max_p, p - min_p)\n        return max_p`
    },
    testCases: [
      { input: "prices = [7,1,5,3,6,4]", expectedOutput: "5" },
      { input: "prices = [7,6,4,3,1]", expectedOutput: "0" }
    ]
  },
  {
    id: 5,
    title: "Valid Palindrome",
    difficulty: "Easy",
    tags: ["Two Pointers", "String"],
    companies: ["TCS Ninja", "Facebook", "Microsoft"],
    leetcodeUrl: "https://leetcode.com/problems/valid-palindrome/",
    description: `A phrase is a <strong>palindrome</strong> if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward.<br><br>Given a string <code>s</code>, return <code>true</code> <em>if it is a palindrome, or <code>false</code> otherwise</em>.`,
    examples: [
      { input: 's = "A man, a plan, a canal: Panama"', output: "true", explanation: '"amanaplanacanalpanama" is a palindrome.' },
      { input: 's = "race a car"', output: "false", explanation: '"raceacar" is not a palindrome.' }
    ],
    constraints: [
      "1 <= s.length <= 2 * 10^5",
      "s consists only of printable ASCII characters."
    ],
    templates: {
      cpp: `class Solution {\npublic:\n    bool isPalindrome(string s) {\n        int l = 0, r = s.length() - 1;\n        while (l < r) {\n            while (l < r && !isalnum(s[l])) l++;\n            while (l < r && !isalnum(s[r])) r--;\n            if (tolower(s[l]) != tolower(s[r])) return false;\n            l++; r--;\n        }\n        return true;\n    }\n};`,
      java: `class Solution {\n    public boolean isPalindrome(String s) {\n        int l = 0, r = s.length() - 1;\n        while (l < r) {\n            while (l < r && !Character.isLetterOrDigit(s.charAt(l))) l++;\n            while (l < r && !Character.isLetterOrDigit(s.charAt(r))) r--;\n            if (Character.toLowerCase(s.charAt(l)) != Character.toLowerCase(s.charAt(r))) return false;\n            l++; r--;\n        }\n        return true;\n    }\n}`,
      python: `class Solution:\n    def isPalindrome(self, s: str) -> bool:\n        filtered = [c.lower() for c in s if c.isalnum()]\n        return filtered == filtered[::-1]`
    },
    testCases: [
      { input: 's = "A man, a plan, a canal: Panama"', expectedOutput: "true" },
      { input: 's = "race a car"', expectedOutput: "false" }
    ]
  },
  {
    id: 6,
    title: "Invert Binary Tree",
    difficulty: "Easy",
    tags: ["Trees", "Recursion"],
    companies: ["Google", "TCS Digital", "Amazon"],
    leetcodeUrl: "https://leetcode.com/problems/invert-binary-tree/",
    description: `Given the root of a binary tree, invert the tree, and return its root.`,
    examples: [
      { input: "root = [4,2,7,1,3,6,9]", output: "[4,7,2,9,6,3,1]" },
      { input: "root = [2,1,3]", output: "[2,3,1]" }
    ],
    constraints: [
      "The number of nodes in the tree is in the range [0, 100].",
      "-100 <= Node.val <= 100"
    ],
    templates: {
      cpp: `class Solution {\npublic:\n    TreeNode* invertTree(TreeNode* root) {\n        if (!root) return NULL;\n        swap(root->left, root->right);\n        invertTree(root->left);\n        invertTree(root->right);\n        return root;\n    }\n};`,
      java: `class Solution {\n    public TreeNode invertTree(TreeNode root) {\n        if (root == null) return null;\n        TreeNode temp = root.left;\n        root.left = invertTree(root.right);\n        root.right = invertTree(temp);\n        return root;\n    }\n}`,
      python: `class Solution:\n    def invertTree(self, root: Optional[TreeNode]) -> Optional[TreeNode]:\n        if not root: return None\n        root.left, root.right = self.invertTree(root.right), self.invertTree(root.left)\n        return root`
    },
    testCases: [
      { input: "root = [4,2,7,1,3,6,9]", expectedOutput: "[4,7,2,9,6,3,1]" }
    ]
  },
  {
    id: 7,
    title: "Valid Anagram",
    difficulty: "Easy",
    tags: ["Hash Table", "String", "Sorting"],
    companies: ["TCS Ninja", "Uber", "Affirm"],
    leetcodeUrl: "https://leetcode.com/problems/valid-anagram/",
    description: `Given two strings <code>s</code> and <code>t</code>, return <code>true</code> <em>if <code>t</code> is an anagram of <code>s</code>, and <code>false</code> otherwise</em>.`,
    examples: [
      { input: 's = "anagram", t = "nagaram"', output: "true" },
      { input: 's = "rat", t = "car"', output: "false" }
    ],
    constraints: [
      "1 <= s.length, t.length <= 5 * 10^4",
      "s and t consist of lowercase English letters."
    ],
    templates: {
      cpp: `class Solution {\npublic:\n    bool isAnagram(string s, string t) {\n        if(s.size() != t.size()) return false;\n        int count[26] = {0};\n        for(int i = 0; i < s.size(); i++) {\n            count[s[i] - 'a']++;\n            count[t[i] - 'a']--;\n        }\n        for(int c : count) if(c != 0) return false;\n        return true;\n    }\n};`,
      java: `class Solution {\n    public boolean isAnagram(String s, String t) {\n        if (s.length() != t.length()) return false;\n        int[] counts = new int[26];\n        for (int i = 0; i < s.length(); i++) {\n            counts[s.charAt(i) - 'a']++;\n            counts[t.charAt(i) - 'a']--;\n        }\n        for (int c : counts) if (c != 0) return false;\n        return true;\n    }\n}`,
      python: `class Solution:\n    def isAnagram(self, s: str, t: str) -> bool:\n        return Counter(s) == Counter(t)`
    },
    testCases: [
      { input: 's = "anagram", t = "nagaram"', expectedOutput: "true" },
      { input: 's = "rat", t = "car"', expectedOutput: "false" }
    ]
  },
  {
    id: 8,
    title: "Binary Search",
    difficulty: "Easy",
    tags: ["Array", "Binary Search"],
    companies: ["TCS Ninja", "Microsoft", "Apple"],
    leetcodeUrl: "https://leetcode.com/problems/binary-search/",
    description: `Given an array of integers <code>nums</code> which is sorted in ascending order, and an integer <code>target</code>, write a function to search <code>target</code> in <code>nums</code>. If <code>target</code> exists, then return its index. Otherwise, return <code>-1</code>.`,
    examples: [
      { input: "nums = [-1,0,3,5,9,12], target = 9", output: "4", explanation: "9 exists in nums and its index is 4." },
      { input: "nums = [-1,0,3,5,9,12], target = 2", output: "-1", explanation: "2 does not exist in nums so return -1." }
    ],
    constraints: [
      "1 <= nums.length <= 10^4",
      "All integers in nums are unique.",
      "nums is sorted in ascending order."
    ],
    templates: {
      cpp: `class Solution {\npublic:\n    int search(vector<int>& nums, int target) {\n        int l = 0, r = nums.size() - 1;\n        while(l <= r) {\n            int mid = l + (r - l) / 2;\n            if(nums[mid] == target) return mid;\n            if(nums[mid] < target) l = mid + 1;\n            else r = mid - 1;\n        }\n        return -1;\n    }\n};`,
      java: `class Solution {\n    public int search(int[] nums, int target) {\n        int l = 0, r = nums.length - 1;\n        while(l <= r) {\n            int mid = l + (r - l) / 2;\n            if(nums[mid] == target) return mid;\n            if(nums[mid] < target) l = mid + 1;\n            else r = mid - 1;\n        }\n        return -1;\n    }\n}`,
      python: `class Solution:\n    def search(self, nums: list[int], target: int) -> int:\n        l, r = 0, len(nums) - 1\n        while l <= r:\n            mid = (l + r) // 2\n            if nums[mid] == target: return mid\n            elif nums[mid] < target: l = mid + 1\n            else: r = mid - 1\n        return -1`
    },
    testCases: [
      { input: "nums = [-1,0,3,5,9,12], target = 9", expectedOutput: "4" },
      { input: "nums = [-1,0,3,5,9,12], target = 2", expectedOutput: "-1" }
    ]
  },
  {
    id: 9,
    title: "Maximum Depth of Binary Tree",
    difficulty: "Easy",
    tags: ["Trees", "Recursion"],
    companies: ["TCS Ninja", "LinkedIn", "Amazon"],
    leetcodeUrl: "https://leetcode.com/problems/maximum-depth-of-binary-tree/",
    description: `Given the root of a binary tree, return its maximum depth.<br><br>A binary tree's <strong>maximum depth</strong> is the number of nodes along the longest path from the root node down to the farthest leaf node.`,
    examples: [
      { input: "root = [3,9,20,null,null,15,7]", output: "3" },
      { input: "root = [1,null,2]", output: "2" }
    ],
    constraints: [
      "The number of nodes in the tree is in the range [0, 10^4].",
      "-100 <= Node.val <= 100"
    ],
    templates: {
      cpp: `class Solution {\npublic:\n    int maxDepth(TreeNode* root) {\n        if (!root) return 0;\n        return 1 + max(maxDepth(root->left), maxDepth(root->right));\n    }\n};`,
      java: `class Solution {\n    public int maxDepth(TreeNode root) {\n        if (root == null) return 0;\n        return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));\n    }\n}`,
      python: `class Solution:\n    def maxDepth(self, root: Optional[TreeNode]) -> int:\n        if not root: return 0\n        return 1 + max(self.maxDepth(root.left), self.maxDepth(root.right))`
    },
    testCases: [
      { input: "root = [3,9,20,null,null,15,7]", expectedOutput: "3" }
    ]
  },
  {
    id: 10,
    title: "Contains Duplicate",
    difficulty: "Easy",
    tags: ["Array", "Hash Table"],
    companies: ["TCS Ninja", "Adobe", "Microsoft"],
    leetcodeUrl: "https://leetcode.com/problems/contains-duplicate/",
    description: `Given an integer array <code>nums</code>, return <code>true</code> if any value appears <strong>at least twice</strong> in the array, and return <code>false</code> if every element is distinct.`,
    examples: [
      { input: "nums = [1,2,3,1]", output: "true" },
      { input: "nums = [1,2,3,4]", output: "false" }
    ],
    constraints: [
      "1 <= nums.length <= 10^5",
      "-10^9 <= nums[i] <= 10^9"
    ],
    templates: {
      cpp: `class Solution {\npublic:\n    bool containsDuplicate(vector<int>& nums) {\n        unordered_set<int> s(nums.begin(), nums.end());\n        return s.size() < nums.size();\n    }\n};`,
      java: `class Solution {\n    public boolean containsDuplicate(int[] nums) {\n        Set<Integer> set = new HashSet<>();\n        for (int n : nums) {\n            if (!set.add(n)) return true;\n        }\n        return false;\n    }\n}`,
      python: `class Solution:\n    def containsDuplicate(self, nums: list[int]) -> bool:\n        return len(nums) != len(set(nums))`
    },
    testCases: [
      { input: "nums = [1,2,3,1]", expectedOutput: "true" },
      { input: "nums = [1,2,3,4]", expectedOutput: "false" }
    ]
  },
  {
    id: 11,
    title: "Reverse Linked List",
    difficulty: "Easy",
    tags: ["Linked List", "Recursion"],
    companies: ["TCS Digital", "Microsoft", "Amazon"],
    leetcodeUrl: "https://leetcode.com/problems/reverse-linked-list/",
    description: `Given the head of a singly linked list, reverse the list, and return <em>the reversed list</em>.`,
    examples: [
      { input: "head = [1,2,3,4,5]", output: "[5,4,3,2,1]" },
      { input: "head = [1,2]", output: "[2,1]" }
    ],
    constraints: [
      "The number of nodes in the list is the range [0, 5000].",
      "-5000 <= Node.val <= 5000"
    ],
    templates: {
      cpp: `class Solution {\npublic:\n    ListNode* reverseList(ListNode* head) {\n        ListNode *prev = NULL, *curr = head;\n        while (curr) {\n            ListNode* nextTemp = curr->next;\n            curr->next = prev;\n            prev = curr;\n            curr = nextTemp;\n        }\n        return prev;\n    }\n};`,
      java: `class Solution {\n    public ListNode reverseList(ListNode head) {\n        ListNode prev = null;\n        ListNode curr = head;\n        while (curr != null) {\n            ListNode nextTemp = curr.next;\n            curr.next = prev;\n            prev = curr;\n            curr = nextTemp;\n        }\n        return prev;\n    }\n}`,
      python: `class Solution:\n    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:\n        prev = None\n        curr = head\n        while curr:\n            nxt = curr.next\n            curr.next = prev\n            prev = curr\n            curr = nxt\n        return prev`
    },
    testCases: [
      { input: "head = [1,2,3,4,5]", expectedOutput: "[5,4,3,2,1]" }
    ]
  },
  {
    id: 12,
    title: "Majority Element",
    difficulty: "Easy",
    tags: ["Array", "Sorting", "Hash Table"],
    companies: ["TCS Ninja", "Morgan Stanley", "Google"],
    leetcodeUrl: "https://leetcode.com/problems/majority-element/",
    description: `Given an array <code>nums</code> of size <code>n</code>, return <em>the majority element</em>.<br><br>The majority element is the element that appears more than <code>⌊n / 2⌋</code> times. You may assume that the majority element always exists in the array.`,
    examples: [
      { input: "nums = [3,2,3]", output: "3" },
      { input: "nums = [2,2,1,1,1,2,2]", output: "2" }
    ],
    constraints: [
      "n == nums.length",
      "1 <= n <= 5 * 10^4",
      "-10^9 <= nums[i] <= 10^9"
    ],
    templates: {
      cpp: `class Solution {\npublic:\n    int majorityElement(vector<int>& nums) {\n        int candidate = 0, count = 0;\n        for (int n : nums) {\n            if (count == 0) candidate = n;\n            count += (n == candidate) ? 1 : -1;\n        }\n        return candidate;\n    }\n};`,
      java: `class Solution {\n    public int majorityElement(int[] nums) {\n        int count = 0, candidate = 0;\n        for (int num : nums) {\n            if (count == 0) candidate = num;\n            count += (num == candidate) ? 1 : -1;\n        }\n        return candidate;\n    }\n}`,
      python: `class Solution:\n    def majorityElement(self, nums: list[int]) -> int:\n        count = 0\n        candidate = None\n        for num in nums:\n            if count == 0:\n                candidate = num\n            count += 1 if num == candidate else -1\n        return candidate`
    },
    testCases: [
      { input: "nums = [3,2,3]", expectedOutput: "3" },
      { input: "nums = [2,2,1,1,1,2,2]", expectedOutput: "2" }
    ]
  },
  {
    id: 13,
    title: "Move Zeroes",
    difficulty: "Easy",
    tags: ["Array", "Two Pointers"],
    companies: ["TCS Ninja", "Facebook", "Microsoft"],
    leetcodeUrl: "https://leetcode.com/problems/move-zeroes/",
    description: `Given an integer array <code>nums</code>, move all <code>0</code>'s to the end of it while maintaining the relative order of the non-zero elements.<br><br><strong>Note</strong> that you must do this in-place without making a copy of the array.`,
    examples: [
      { input: "nums = [0,1,0,3,12]", output: "[1,3,12,0,0]" },
      { input: "nums = [0]", output: "[0]" }
    ],
    constraints: [
      "1 <= nums.length <= 10^4",
      "-2^31 <= nums[i] <= 2^31 - 1"
    ],
    templates: {
      cpp: `class Solution {\npublic:\n    void moveZeroes(vector<int>& nums) {\n        int pos = 0;\n        for (int n : nums) {\n            if (n != 0) nums[pos++] = n;\n        }\n        while (pos < nums.size()) nums[pos++] = 0;\n    }\n};`,
      java: `class Solution {\n    public void moveZeroes(int[] nums) {\n        int pos = 0;\n        for (int n : nums) {\n            if (n != 0) nums[pos++] = n;\n        }\n        while (pos < nums.length) nums[pos++] = 0;\n    }\n}`,
      python: `class Solution:\n    def moveZeroes(self, nums: list[int]) -> None:\n        pos = 0\n        for i in range(len(nums)):\n            if nums[i] != 0:\n                nums[pos], nums[i] = nums[i], nums[pos]\n                pos += 1`
    },
    testCases: [
      { input: "nums = [0,1,0,3,12]", expectedOutput: "[1,3,12,0,0]" }
    ]
  },
  {
    id: 14,
    title: "Fibonacci Number",
    difficulty: "Easy",
    tags: ["Math", "Dynamic Programming", "Recursion"],
    companies: ["TCS Ninja", "Amazon", "Apple"],
    leetcodeUrl: "https://leetcode.com/problems/fibonacci-number/",
    description: `The <strong>Fibonacci numbers</strong>, commonly denoted <code>F(n)</code> form a sequence, called the <strong>Fibonacci sequence</strong>, such that each number is the sum of the two preceding ones, starting from <code>0</code> and <code>1</code>. That is:<br>F(0) = 0, F(1) = 1<br>F(n) = F(n - 1) + F(n - 2), for n > 1.<br><br>Given <code>n</code>, calculate <code>F(n)</code>.`,
    examples: [
      { input: "n = 2", output: "1", explanation: "F(2) = F(1) + F(0) = 1 + 0 = 1." },
      { input: "n = 3", output: "2", explanation: "F(3) = F(2) + F(1) = 1 + 1 = 2." },
      { input: "n = 4", output: "3", explanation: "F(4) = F(3) + F(2) = 2 + 1 = 3." }
    ],
    constraints: [
      "0 <= n <= 30"
    ],
    templates: {
      cpp: `class Solution {\npublic:\n    int fib(int n) {\n        if (n <= 1) return n;\n        int a = 0, b = 1;\n        for(int i = 2; i <= n; i++) {\n            int c = a + b;\n            a = b;\n            b = c;\n        }\n        return b;\n    }\n};`,
      java: `class Solution {\n    public int fib(int n) {\n        if (n <= 1) return n;\n        int a = 0, b = 1;\n        for (int i = 2; i <= n; i++) {\n            int c = a + b;\n            a = b;\n            b = c;\n        }\n        return b;\n    }\n}`,
      python: `class Solution:\n    def fib(self, n: int) -> int:\n        if n <= 1: return n\n        a, b = 0, 1\n        for _ in range(2, n + 1):\n            a, b = b, a + b\n        return b`
    },
    testCases: [
      { input: "n = 2", expectedOutput: "1" },
      { input: "n = 4", expectedOutput: "3" }
    ]
  },
  {
    id: 15,
    title: "Climbing Stairs",
    difficulty: "Easy",
    tags: ["Dynamic Programming", "Math", "Memoization"],
    companies: ["TCS Digital", "Google", "Amazon"],
    leetcodeUrl: "https://leetcode.com/problems/climbing-stairs/",
    description: `You are climbing a staircase. It takes <code>n</code> steps to reach the top.<br><br>Each time you can either climb <code>1</code> or <code>2</code> steps. In how many distinct ways can you climb to the top?`,
    examples: [
      { input: "n = 2", output: "2", explanation: "1. 1 step + 1 step\n2. 2 steps" },
      { input: "n = 3", output: "3", explanation: "1. 1 step + 1 step + 1 step\n2. 1 step + 2 steps\n3. 2 steps + 1 step" }
    ],
    constraints: [
      "1 <= n <= 45"
    ],
    templates: {
      cpp: `class Solution {\npublic:\n    int climbStairs(int n) {\n        if (n <= 2) return n;\n        int first = 1, second = 2;\n        for (int i = 3; i <= n; i++) {\n            int third = first + second;\n            first = second;\n            second = third;\n        }\n        return second;\n    }\n};`,
      java: `class Solution {\n    public int climbStairs(int n) {\n        if (n <= 2) return n;\n        int first = 1, second = 2;\n        for (int i = 3; i <= n; i++) {\n            int third = first + second;\n            first = second;\n            second = third;\n        }\n        return second;\n    }\n}`,
      python: `class Solution:\n    def climbStairs(self, n: int) -> int:\n        if n <= 2: return n\n        a, b = 1, 2\n        for _ in range(3, n + 1):\n            a, b = b, a + b\n        return b`
    },
    testCases: [
      { input: "n = 2", expectedOutput: "2" },
      { input: "n = 3", expectedOutput: "3" }
    ]
  },
  {
    id: 16,
    title: "Maximum Subarray",
    difficulty: "Medium",
    tags: ["Array", "Divide and Conquer", "Dynamic Programming"],
    companies: ["TCS Prime", "Microsoft", "Amazon"],
    leetcodeUrl: "https://leetcode.com/problems/maximum-subarray/",
    description: `Given an integer array <code>nums</code>, find the subarray with the largest sum, and return <em>its sum</em>.`,
    examples: [
      { input: "nums = [-2,1,-3,4,-1,2,1,-5,4]", output: "6", explanation: "The subarray [4,-1,2,1] has the largest sum 6." },
      { input: "nums = [1]", output: "1" },
      { input: "nums = [5,4,-1,7,8]", output: "23" }
    ],
    constraints: [
      "1 <= nums.length <= 10^5",
      "-10^4 <= nums[i] <= 10^4"
    ],
    templates: {
      cpp: `class Solution {\npublic:\n    int maxSubArray(vector<int>& nums) {\n        int maxSum = nums[0], curSum = 0;\n        for (int n : nums) {\n            curSum = max(n, curSum + n);\n            maxSum = max(maxSum, curSum);\n        }\n        return maxSum;\n    }\n};`,
      java: `class Solution {\n    public int maxSubArray(int[] nums) {\n        int maxSum = nums[0], curSum = 0;\n        for (int n : nums) {\n            curSum = Math.max(n, curSum + n);\n            maxSum = Math.max(maxSum, curSum);\n        }\n        return maxSum;\n    }\n}`,
      python: `class Solution:\n    def maxSubArray(self, nums: list[int]) -> int:\n        max_sum = nums[0]\n        cur_sum = 0\n        for n in nums:\n            cur_sum = max(n, cur_sum + n)\n            max_sum = max(max_sum, cur_sum)\n        return max_sum`
    },
    testCases: [
      { input: "nums = [-2,1,-3,4,-1,2,1,-5,4]", expectedOutput: "6" },
      { input: "nums = [5,4,-1,7,8]", expectedOutput: "23" }
    ]
  },
  {
    id: 17,
    title: "3Sum",
    difficulty: "Medium",
    tags: ["Array", "Two Pointers", "Sorting"],
    companies: ["TCS Prime", "Google", "Facebook"],
    leetcodeUrl: "https://leetcode.com/problems/3sum/",
    description: `Given an integer array nums, return all the triplets <code>[nums[i], nums[j], nums[k]]</code> such that <code>i != j</code>, <code>i != k</code>, and <code>j != k</code>, and <code>nums[i] + nums[j] + nums[k] == 0</code>.<br><br>Notice that the solution set must not contain duplicate triplets.`,
    examples: [
      { input: "nums = [-1,0,1,2,-1,-4]", output: "[[-1,-1,2],[-1,0,1]]" },
      { input: "nums = [0,1,1]", output: "[]" }
    ],
    constraints: [
      "3 <= nums.length <= 3000",
      "-10^5 <= nums[i] <= 10^5"
    ],
    templates: {
      cpp: `class Solution {\npublic:\n    vector<vector<int>> threeSum(vector<int>& nums) {\n        vector<vector<int>> res;\n        sort(nums.begin(), nums.end());\n        for (int i = 0; i < nums.size(); i++) {\n            if (i > 0 && nums[i] == nums[i-1]) continue;\n            int l = i + 1, r = nums.size() - 1;\n            while (l < r) {\n                int sum = nums[i] + nums[l] + nums[r];\n                if (sum == 0) {\n                    res.push_back({nums[i], nums[l], nums[r]});\n                    while (l < r && nums[l] == nums[l+1]) l++;\n                    while (l < r && nums[r] == nums[r-1]) r--;\n                    l++; r--;\n                } else if (sum < 0) l++;\n                else r--;\n            }\n        }\n        return res;\n    }\n};`,
      java: `class Solution {\n    public List<List<Integer>> threeSum(int[] nums) {\n        Arrays.sort(nums);\n        List<List<Integer>> res = new ArrayList<>();\n        for (int i = 0; i < nums.length - 2; i++) {\n            if (i > 0 && nums[i] == nums[i-1]) continue;\n            int l = i + 1, r = nums.length - 1;\n            while (l < r) {\n                int sum = nums[i] + nums[l] + nums[r];\n                if (sum == 0) {\n                    res.add(Arrays.asList(nums[i], nums[l], nums[r]));\n                    while (l < r && nums[l] == nums[l+1]) l++;\n                    while (l < r && nums[r] == nums[r-1]) r--;\n                    l++; r--;\n                } else if (sum < 0) l++;\n                else r--;\n            }\n        }\n        return res;\n    }\n}`,
      python: `class Solution:\n    def threeSum(self, nums: list[int]) -> list[list[int]]:\n        nums.sort()\n        res = []\n        for i in range(len(nums) - 2):\n            if i > 0 and nums[i] == nums[i-1]: continue\n            l, r = i + 1, len(nums) - 1\n            while l < r:\n                s = nums[i] + nums[l] + nums[r]\n                if s == 0:\n                    res.append([nums[i], nums[l], nums[r]])\n                    while l < r and nums[l] == nums[l+1]: l += 1\n                    while l < r and nums[r] == nums[r-1]: r -= 1\n                    l += 1; r -= 1\n                elif s < 0: l += 1\n                else: r -= 1\n        return res`
    },
    testCases: [
      { input: "nums = [-1,0,1,2,-1,-4]", expectedOutput: "[[-1,-1,2],[-1,0,1]]" }
    ]
  },
  {
    id: 18,
    title: "Container With Most Water",
    difficulty: "Medium",
    tags: ["Array", "Two Pointers"],
    companies: ["TCS Prime", "Google", "Amazon"],
    leetcodeUrl: "https://leetcode.com/problems/container-with-most-water/",
    description: `You are given an integer array <code>height</code> of length <code>n</code>. There are <code>n</code> vertical lines drawn such that the two endpoints of the <code>i<sup>th</sup></code> line are <code>(i, 0)</code> and <code>(i, height[i])</code>.<br><br>Find two lines that together with the x-axis form a container, such that the container contains the most water.<br><br>Return <em>the maximum amount of water a container can store</em>.`,
    examples: [
      { input: "height = [1,8,6,2,5,4,8,3,7]", output: "49", explanation: "The max area of water the container can contain is 49." }
    ],
    constraints: [
      "n == height.length",
      "2 <= n <= 10^5",
      "0 <= height[i] <= 10^4"
    ],
    templates: {
      cpp: `class Solution {\npublic:\n    int maxArea(vector<int>& height) {\n        int l = 0, r = height.size() - 1, maxW = 0;\n        while(l < r) {\n            int h = min(height[l], height[r]);\n            maxW = max(maxW, h * (r - l));\n            if(height[l] < height[r]) l++;\n            else r--;\n        }\n        return maxW;\n    }\n};`,
      java: `class Solution {\n    public int maxArea(int[] height) {\n        int l = 0, r = height.length - 1, maxW = 0;\n        while (l < r) {\n            int h = Math.min(height[l], height[r]);\n            maxW = Math.max(maxW, h * (r - l));\n            if (height[l] < height[r]) l++;\n            else r--;\n        }\n        return maxW;\n    }\n}`,
      python: `class Solution:\n    def maxArea(self, height: list[int]) -> int:\n        l, r = 0, len(height) - 1\n        max_w = 0\n        while l < r:\n            h = min(height[l], height[r])\n            max_w = max(max_w, h * (r - l))\n            if height[l] < height[r]: l += 1\n            else: r -= 1\n        return max_w`
    },
    testCases: [
      { input: "height = [1,8,6,2,5,4,8,3,7]", expectedOutput: "49" }
    ]
  },
  {
    id: 19,
    title: "Longest Substring Without Repeating Characters",
    difficulty: "Medium",
    tags: ["Hash Table", "String", "Two Pointers"],
    companies: ["TCS Prime", "Amazon", "Microsoft"],
    leetcodeUrl: "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
    description: `Given a string <code>s</code>, find the length of the <strong>longest substring</strong> without repeating characters.`,
    examples: [
      { input: 's = "abcabcbb"', output: "3", explanation: 'The answer is "abc", with the length of 3.' },
      { input: 's = "bbbbb"', output: "1", explanation: 'The answer is "b", with the length of 1.' }
    ],
    constraints: [
      "0 <= s.length <= 5 * 10^4",
      "s consists of English letters, digits, symbols and spaces."
    ],
    templates: {
      cpp: `class Solution {\npublic:\n    int lengthOfLongestSubstring(string s) {\n        vector<int> dict(256, -1);\n        int maxLen = 0, start = -1;\n        for (int i = 0; i < s.length(); i++) {\n            if (dict[s[i]] > start) start = dict[s[i]];\n            dict[s[i]] = i;\n            maxLen = max(maxLen, i - start);\n        }\n        return maxLen;\n    }\n};`,
      java: `class Solution {\n    public int lengthOfLongestSubstring(String s) {\n        Map<Character, Integer> map = new HashMap<>();\n        int maxLen = 0;\n        for (int i = 0, j = 0; i < s.length(); i++) {\n            if (map.containsKey(s.charAt(i))) {\n                j = Math.max(j, map.get(s.charAt(i)) + 1);\n            }\n            map.put(s.charAt(i), i);\n            maxLen = Math.max(maxLen, i - j + 1);\n        }\n        return maxLen;\n    }\n}`,
      python: `class Solution:\n    def lengthOfLongestSubstring(self, s: str) -> int:\n        seen = {}\n        l = 0\n        max_len = 0\n        for r, char in enumerate(s):\n            if char in seen and seen[char] >= l:\n                l = seen[char] + 1\n            else:\n                max_len = max(max_len, r - l + 1)\n            seen[char] = r\n        return max_len`
    },
    testCases: [
      { input: 's = "abcabcbb"', expectedOutput: "3" },
      { input: 's = "bbbbb"', expectedOutput: "1" }
    ]
  },
  {
    id: 20,
    title: "Fizz Buzz",
    difficulty: "Easy",
    tags: ["Math", "String"],
    companies: ["TCS Ninja", "Amazon", "Capgemini"],
    leetcodeUrl: "https://leetcode.com/problems/fizz-buzz/",
    description: `Given an integer <code>n</code>, return a string array <code>answer</code> (1-indexed) where:<br><br>- <code>answer[i] == "FizzBuzz"</code> if <code>i</code> is divisible by 3 and 5.<br>- <code>answer[i] == "Fizz"</code> if <code>i</code> is divisible by 3.<br>- <code>answer[i] == "Buzz"</code> if <code>i</code> is divisible by 5.<br>- <code>answer[i] == i</code> (as a string) if none of the above conditions are true.`,
    examples: [
      { input: "n = 3", output: '["1","2","Fizz"]' },
      { input: "n = 5", output: '["1","2","Fizz","4","Buzz"]' },
      { input: "n = 15", output: '["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]' }
    ],
    constraints: [
      "1 <= n <= 10^4"
    ],
    templates: {
      cpp: `class Solution {\npublic:\n    vector<string> fizzBuzz(int n) {\n        vector<string> res;\n        for (int i = 1; i <= n; i++) {\n            if (i % 15 == 0) res.push_back("FizzBuzz");\n            else if (i % 3 == 0) res.push_back("Fizz");\n            else if (i % 5 == 0) res.push_back("Buzz");\n            else res.push_back(to_string(i));\n        }\n        return res;\n    }\n};`,
      java: `class Solution {\n    public List<String> fizzBuzz(int n) {\n        List<String> res = new ArrayList<>();\n        for (int i = 1; i <= n; i++) {\n            if (i % 15 == 0) res.add("FizzBuzz");\n            else if (i % 3 == 0) res.add("Fizz");\n            else if (i % 5 == 0) res.add("Buzz");\n            else res.add(String.valueOf(i));\n        }\n        return res;\n    }\n}`,
      python: `class Solution:\n    def fizzBuzz(self, n: int) -> list[str]:\n        res = []\n        for i in range(1, n + 1):\n            if i % 15 == 0: res.append("FizzBuzz")\n            elif i % 3 == 0: res.append("Fizz")\n            elif i % 5 == 0: res.append("Buzz")\n            else: res.append(str(i))\n        return res`
    },
    testCases: [
      { input: "n = 3", expectedOutput: '["1","2","Fizz"]' },
      { input: "n = 5", expectedOutput: '["1","2","Fizz","4","Buzz"]' }
    ]
  }
];
