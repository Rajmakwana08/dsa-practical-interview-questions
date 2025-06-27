import { useState } from 'react'
import './App.css'

interface Question {
  id: number;
  question: string;
  answer: string;
  codeExample?: string;
}

function App() {
  const [activeId, setActiveId] = useState<number | null>(null);

  const questions: Question[] = [
    {
      id: 1,
      question: "1. factorial and fibonacci series using Recursion",
      answer: "",
      codeExample: `
def factorial(n):
    if (n == 0 or n == 1):
        return 1
    else:
        return n * factorial(n-1)

def fibonacci(n):
    if n <= 0:
        return 0
    elif n == 1:
        return 1
    else:
        return fibonacci(n-1) + fibonacci(n-2)


print(factorial(5))  
print(fibonacci(4))


# factorial
    #like 5 = 5 * 4 * 3 * 2 * 1 = 120

# fibonacci
    #   0,    1,    1,    2,    3,    5,    8,   13,   21, ...
    # f(0), f(1), f(2), f(3), f(4), f(5), f(6), f(7), f(8)
    # 1 + 1 = 2
    # 1 + 2 = 3

------------------------------------------------------------------------------------------

What is Recursion?
  Recursion is when a function calls itself to solve a smaller part of the problem.
  
It keeps calling itself until it reaches a condition called the base case, which stops the recursion.`
    },
    {
      id: 2,
      question: "2. reverse a string",
      answer: "",
      codeExample: `
def reverse_string(s):
    return s[::-1]

print(reverse_string("hello"))  # Output: "olleh"


---------------------------------------------------------------------------------------
how this work why this started last charecter this is step not a star or stop:
📦 Python Slice Format Reminder:

s[start : stop : step]

s[::-1]


You're giving:

  start → missing
  stop → missing
  step = -1
  
Now the magic part is:

If you leave out start and give a negative step, Python automatically assumes:
    start = end of the string (last index)
    stop = before the beginning (index -1)
  `
    },
    {
      id: 3,
      question: "3. Add Two Numbers",
      answer: "",
      codeExample: `
a = [1, 2, 3]
b = [4, 5, 6]

# Element-wise sum
result = [x + y for x, y in zip(a, b)]
print(result)  # Output: [5, 7, 9]


🧵 What is zip() in Python?
The built-in zip() function combines (or “zips”) two or more iterables (like lists or tuples) element by element, 
creating pairs (or tuples) of values.


It pairs the elements like:

1 with 4 → (1, 4)
2 with 5 → (2, 5)
3 with 6 → (3, 6)`
    },
    {
      id: 4,
      question: "4. Product of Array Elements Excluding Target",
      answer: "",
      codeExample: `
from functools import reduce
import operator

def product_excluding_target(arr, target):
    filtered = [x for x in arr if x != target]
    return reduce(operator.mul, filtered, 1)   # you can removed the initial value of 1 this will also work

# Test
arr = [1, 2, 3, 4]
target = 3

result = product_excluding_target(arr, target)
print(result)  # Output: 8

----------------------------------------------------------------------------------------

🧠 What is reduce()?
  reduce() takes a list and reduces it to a single value
  by applying a function again and again to the elements.


🔍 Let's Understand Each Part
🔧 reduce(function, iterable, initial)
This means:

function: What to do (like add, multiply, etc.)

iterable: List of values

initial: What to start with (optional)


----------------------------------------------------------------------------------------

⚙️ In Your Case:

reduce(operator.mul, filtered, 1)

is the same as:

product = 1
for x in filtered:
    product = product * x
return product

✨ Example:
filtered = [1, 2, 4]

If you write:

reduce(operator.mul, filtered, 1)
# = 1 * 1 * 2 * 4 = 8 (✅ correct)


But if you write:

reduce(operator.mul, filtered, 2)
# = 2 * 1 * 2 * 4 = 16 ❌ (wrong)

  `
    },
    {
      id: 5,
      question: "5. Second Largest Element in an Array and range inside.",
      answer: "",
      codeExample: `
# Python program to find the second largest element in the array
# using two traversals

# Function to find the second largest element in the array
def getSecondLargest(arr):
    n = len(arr)

    largest = -1
    secondLargest = -1

    # Finding the largest element
    for i in range(n):
        if arr[i] > largest:
            largest = arr[i]

    # Finding the second largest element
    for i in range(n):
        
        # Update second largest if the current element is greater
        # than second largest and not equal to the largest
        if arr[i] > secondLargest and arr[i] != largest:
            secondLargest = arr[i]
    
    return secondLargest

if __name__ == "__main__":
    arr = [12, 35, 1, 10, 34, 1]
    print(getSecondLargest(arr))

-----------------------------------------------------------------------------------------

👋 Yes, in Python, the range() function starts at 0 by default — unless you tell it otherwise.

✅ Basic Syntax:
range(stop)               # starts at 0, goes up to (but not including) stop
range(start, stop)        # starts at start, goes up to (but not including) stop
range(start, stop, step)  # step controls how much it counts by or skips elements

📘 Examples:
print(list(range(5)))        # [0, 1, 2, 3, 4]
print(list(range(2, 6)))     # [2, 3, 4, 5]
print(list(range(1, 10, 2))) # [1, 3, 5, 7, 9]


`
    },
    {
      id: 6,
      question: "6. find not reapeated number",
      answer: "",
      codeExample: `
def uniqueElements(arr):
    result = []
    
    for num in arr:
        if arr.count(num) == 1:
            result.append(num)

    
    return result



print(uniqueElements([2, 1, 5, 5, 5, 5, 6, 6, 6, 6, 6]))   # ➜ [2, 1]
print(uniqueElements([1, 2, 3, 4, 5]))                    # ➜ [1, 2, 3, 4, 5]
print(uniqueElements([1, 2, 1, 4, 2, 1, 1, 2, 2, 4, 1, 5, 6, 7, 8]))  # ➜ [5, 6, 7, 8]

      `
    },
    {
      id: 7,
      question: "7. Move all zeros to end of array",
      answer: "",
      codeExample: `


# Function which pushes all zeros to end
def pushZerosToEnd(arr):
    
    # Count of non-zero elements
    count = 0  

    # If the element is non-zero, replace the element at
    # index 'count' with this element and increment count
    for i in range(len(arr)):
        if arr[i] != 0:
            arr[count] = arr[i]
            count += 1

    # Now all non-zero elements have been shifted to
    # the front. Make all elements 0 from count to end.
    while count < len(arr):
        arr[count] = 0
        count += 1

if __name__ == "__main__":
    arr = [1, 2, 0, 4, 3, 0, 5, 0]
    pushZerosToEnd(arr)
    for num in arr:
        print(num, end=" ")
       
        
# Output: 1 2 4 3 5 0 0 0      

      `
    },
    {
      id: 8,
      question: "8. Reverse an Array",
      answer: "",
      codeExample: `
# function to reverse an array
def reverseArray(arr):                                              |
    n = len(arr)                                                    |
                                                                    |
    # Temporary array to store elements in reversed order           |
    temp = [0] * n                                                  |
                                                                    |
    # Copy elements from original array to temp in reverse order    |    you can write only this to worked:
    for i in range(n):                                              |     return arr.reverse()
        temp[i] = arr[n - i - 1]                                    |
                                                                    |
    # Copy elements back to original array                          |
    for i in range(n):                                              |
        arr[i] = temp[i]                                            |

if __name__ == "__main__":
    arr = [1, 4, 3, 2, 6, 5]

    reverseArray(arr)
  
    for i in range(len(arr)):
        print(arr[i], end=" ")

 # Output: 5 6 2 3 4 1

------------------------------------------------------------------------------------------

🔁 1. reverse() → In-place method
✅ Works only on lists
🔧 Modifies the original list directly (no return)

lst = [1, 2, 3]
lst.reverse()
print(lst)  # ➤ [3, 2, 1]

❌ Doesn't work on strings or other iterables
✅ Changes the original list
⚠️ Returns None



🔁 2. reversed() → Built-in function
✅ Works on any iterable (lists, strings, tuples, etc.)
🔧 Returns an iterator (not a list!)

lst = [1, 2, 3]
print(list(reversed(lst)))  # ➤ [3, 2, 1]

s = "hello"
print("".join(reversed(s)))  # ➤ "olleh"


✅ Doesn't change the original object
✅ Works on strings, tuples, lists
✅ Returns a reversed view, which you can convert using list() or join()

-------------------------------------------------------------------------------------------

What is join() in Python?
      The join() function is used to join elements of a list (or iterable) into a single string, using a separator.

📘 Example:

words = ['hello', 'world']
sentence = " ".join(words)
print(sentence)  # ➤ "hello world"


Why do we use "".join(reversed(s)) instead of just reversed(s)?
      reversed(s) gives you a reversed iterator, not a string.
      To convert it back into a string, we use "".join(...)

reversed(s) → gives: ['o', 'l', 'l', 'e', 'h']

"".join(...) → joins it with no spaces: "olleh"



What is an iterator?
      An iterator is something you can loop through — one item at a time.

Iterator ->	Gives values one at a time
      `
    },
    {
      id: 9,
      question: "9. Word-Length Dictionary",
      answer: "",
      codeExample: `
✅ Here's the code:

fruits = ["apple", "banana", "cherry"]
result = {len(fruit): fruit for fruit in fruits}
print(result)

🧾 Output:
{5: 'apple', 6: 'banana', 6: 'cherry'}

------------------------------------------------------------------------------------------

✅ If you want multiple values per key (like a list), do this:

fruits = ["apple", "banana", "cherry"]
result = {}

for fruit in fruits:
    length = len(fruit)
    if length not in result:
        result[length] = []     # Create an empty list for this key
    result[length].append(fruit)

print(result)


🧾 Output:
{5: ['apple'], 6: ['banana', 'cherry']}

------------------------------------------------------------------------------------------

----> group with first latter of alphabet

fruits = ["apple", "banana", "cherry"]
result = {}

for fruit in fruits:
    first_letter = fruit[0]  # Get first letter
    if first_letter not in result:
        result[first_letter] = []  # Create empty list for that letter
    result[first_letter].append(fruit)  # Add fruit to the list

print(result)


output:

{
    'a': ['apple'],
    'b': ['banana'],
    'c': ['cherry']
}


      `
    },
    {
      id: 10,
      question: "10. remove duplicates from a sorted array in-place",
      answer: "",
      codeExample: `
def remove_duplicates(nums):
    if not nums:
        return 0

    # slow pointer
    i = 0

    for j in range(1, len(nums)):
        if nums[j] != nums[i]:
            i += 1
            nums[i] = nums[j]  # this is not remove and swap this assign the value or copy the value

    return i + 1

# Example usage
if __name__ == "__main__":
    nums = [1, 1, 2, 2, 3,]
    new_length = remove_duplicates(nums)
    print("Length of array after removing duplicates:", new_length)
    print("Array after removing duplicates:", nums[:new_length])

output:
Length of array after removing duplicates: 3
Array after removing duplicates: [1, 2, 3]

------------------------------------------------------------------------------------------

nums = [1, 2, 2, 3, 4, 4]
unique = list(set(nums))
print(unique)

🧾 Output (order not guaranteed):
[1, 2, 3, 4]

`
    },
    {
      id: 11,
      question: "11. Majority Element II - Elements occurring more than ⌊N/3⌋ times",
      answer: "",
      codeExample: `
def majorityElement(arr):
    n = len(arr)
    
    result = []
    for candidate in arr:
        if candidate not in result and arr.count(candidate) > n // 3:  # this means first solve n//3 then check if the candidate is in the array
                                                                       # like n = 5 then 5//3 = 1
            result.append(candidate)
    

    return sorted(result)


print(majorityElement([2, 1, 5, 5, 5, 5, 6, 6, 6, 6, 6]))  # ➜ [5, 6]
print(majorityElement([1, 2, 3, 3, 1]))                   # ➜ [1, 3]
print(majorityElement([1, 2, 1, 4, 2, 1, 1, 2, 8, 8, 8, 2, 4, 1, 5, 6, 7, 8]))      `
    },
    {
      id: 12,
      question: "12. Stock Buy and Sell - Multiple Transaction Allowed",
      answer: "Given an array prices[] of size n denoting the cost of stock on each day, the task is to find the maximum total profit if we can buy and sell the stocks any number of times.",
      codeExample: `
# Python Program to find the max profit when multiple
# transactions are allowed

def maximumProfit(prices):
    res = 0

    # Keep on adding the difference between
    # adjacent when the prices a
    for i in range(1, len(prices)):
        if prices[i] > prices[i - 1]:
            res += prices[i] - prices[i - 1]

    return res

if __name__ == "__main__":
    prices = [100, 180, 260, 310, 40, 535, 695]
    print(maximumProfit(prices))

# Output: 865
      `
    },
    {
      id: 13,
      question: "13. Stock Buy and Sell - Max one Transaction Allowed",
      answer: "Given an array prices[] of length N, representing the prices of the stocks on different days, the task is to find the maximum profit possible by buying and selling the stocks on different days when at most one transaction is allowed. Here one transaction means 1 buy + 1 Sell.",
      codeExample: `
# Python Program to solve stock buy and sell by  
# exploring all possible pairs

def max_profit(prices):
    n = len(prices)
    res = 0

    # Explore all possible ways to buy and sell stock
    for i in range(n - 1):           # this check first of list but skip the last element
        for j in range(i + 1, n):    # this check last of list but skip the first element
            res = max(res, prices[j] - prices[i])
    
    return res

if __name__ == "__main__":
    prices = [7, 10, 1, 3, 6, 9, 2]
    print(max_profit(prices))


Output:
8

------------------------------------------------------------------------------------------

res is like a variable 

🔍 Variables:

  res: stores the maximum profit found so far
  prices[i]: buy price (day i)
  prices[j]: sell price (day j)
  prices[j] - prices[i]: current profit from buying at i and selling at j

📊 Visual Help:
| Day | Price | Buy Here?  | Best Sell After? | Max Profit |
| --- | ----- | ---------  | ---------------- | ---------- |
| 0   | 7     | ✅         | 10 (Day 1)       | 3          |
| 1   | 10    | ❌         | None             | -          |
| 2   | 1     | ✅✅✅    | 9 (Day 5)        | 🔥 8       |
| 3   | 3     | ✅         | 9                | 6          |
| 4   | 6     | ✅         | 9                | 3          |
| 5   | 9     | ✅         | 2                | -7         |
| 6   | 2     | ✅         | None             | -          |


------------------------------------------------------------------------------------------

❌ No, res does not store all the profits like [3, 8, 5, 2, ...].

✅ Instead, res stores only one value:
      The maximum profit found so far during the loop.

🔁 What really happens:
As the loop runs, it keeps checking profits like:

profit = prices[j] - prices[i]
res = max(res, profit)

Every time a new profit is found:

  If it's greater than the current res, we update res.

  If not, we leave res as is.


✅ Answer:
This line checks if prices[j] - prices[i] > res, and updates res only if the new profit is bigger.

So yes — it behaves like this:

profit = prices[j] - prices[i]
if profit > res:
    res = profit


But the max() function does this in one line:

res = max(res, profit)

`
    },
    {
      id: 14,
      question: "14. How to find the length of the last word in a string",
      answer: "",
      codeExample: `
s = "Hello world from Python"
last_word_length = len(s.strip().split()[-1])
print(last_word_length)

Output:
6

🔍 Explanation:
s.strip()
Removes leading/trailing spaces.

.split()
Splits the string into a list of words (by spaces).

Example:
"Hello world from Python".split() → ['Hello', 'world', 'from', 'Python']

[-1]
Gets the last word in the list → 'Python'

len(...)
Returns the length of that last word → 6

------------------------------------------------------------------------------------------

🧼 What is strip()?
      strip() is a string method that removes spaces (and other whitespace like tabs and newlines) from the start and end of a string.

------------------------------------------------------------------------------------------

find the length of the last word in a string without using .strip().split()

s = "  Hello world  "
length = 0
i = len(s) - 1    # Start from the last index of the string like len(s)=15 to i = 14

# Step 1: Skip trailing spaces
while i >= 0 and s[i] == ' ':
    i -= 1

# Step 2: Count the length of the last word
while i >= 0 and s[i] != ' ':
    length += 1
    i -= 1

print(length)

Output:
5

      `
    },
    {
      id: 15,
      question: "15. create sorted array",
      answer: "",
      codeExample: `
arr = [5, 2, 9, 1, 3]

for i in range(len(arr)):
    for j in range(len(arr) - 1):
        if arr[j] > arr[j + 1]:
            arr[j], arr[j + 1] = arr[j + 1], arr[j]

print(arr)  # Output: [1, 2, 3, 5, 9]

------------------------------------------------------------------------------------------

using sorted() function and soert() method

arr = [5, 2, 9, 1, 3]

sorted_arr = sorted(arr)  # Does not change the original list
print("Sorted:", sorted_arr)  # Output: [1, 2, 3, 5, 9]

--------------------------------------------------------------------

arr = [5, 2, 9, 1, 3]

arr.sort()  # Sorts the list in-place
print("Sorted:", arr)  # Output: [1, 2, 3, 5, 9]
`
    },
    {
      id: 16,
      question: "16. positive and negative numbers to move right and left.",
      answer: "",
      codeExample: `
arr = [5, -2, 9, -1, 3, -7, 6]

positive = []
negative = []

for num in arr:
    if num >= 0:
        positive.append(num)
    else:
        negative.append(num)

result = positive + negative
print(result)
`
    },
    {
      id: 17,
      question: "17. What is a Linked List?",
      answer: "",
      codeExample: `
A linked list is a linear data structure where elements (called nodes) are connected one after another.
Unlike arrays, which store elements in contiguous memory, linked lists use pointers to connect nodes.

Each node contains:
  The data
  A reference (pointer) to the next node


🟢 Why Use Linked Lists?
✅ Dynamic size (easy to grow/shrink)
✅ Efficient insertion/deletion (especially in the middle)
❌ Slower access (you must traverse from the head to reach an element)


🟢 Types of Linked Lists
Singly Linked List
Each node points to the next node.

Doubly Linked List
Each node points to both the next and the previous node.

Circular Linked List
The last node points back to the first node.

------------------------------------------------------------------------------------------

🟢 How to Implement a Singly Linked List in Python

1️⃣ Define the Node Class
Each node holds data and a pointer to the next node.

class Node:
    def __init__(self, data):
        self.data = data        # The value stored in the node
        self.next = None        # Pointer to the next node (default is None)

✅ Example:
node1 = Node(10)
node2 = Node(20)
node1.next = node2  # Linking node1 -> node2


2️⃣ Define the LinkedList Class
This class manages the head pointer and operations.

class LinkedList:
    def __init__(self):
        self.head = None  # Initially the list is empty

    # Insert at the end
    def append(self, data):
        new_node = Node(data)
        if self.head is None:
            self.head = new_node
            return
        last = self.head
        while last.next:
            last = last.next
        last.next = new_node

    # Display the list
    def display(self):
        current = self.head
        while current:
            print(current.data, end=" -> ")
            current = current.next
        print("None")

✅ Example Usage:
ll = LinkedList()
ll.append(5)
ll.append(15)
ll.append(25)

ll.display()


Output:
5 -> 15 -> 25 -> None

---------------------------------------------------

Let’s look at your LinkedList class:

    class LinkedList:
        def __init__(self):
            self.head = None  # List starts empty

✅ At the start, the list is empty:

    head ➡️ None
Suppose you do this:

    ll = LinkedList()
    ll.append(10)
    ll.append(20)
    ll.append(30)
    ll.display()
I will show you line by line what happens.

🔹 Step 1: append(10)

    new_node = Node(10)

Creates a Node:

    new_node:
      data = 10
      next = None
  
Then:

    if self.head is None:
        self.head = new_node

Since head is None, the list is empty, so now:

    head ➡️ [10 | next -> None]

✅ The list now has:

    [10]


🔹 Step 2: append(20)
Creates:

    new_node:
      data = 20
      next = None

Since self.head is not None (it points to the node with 10), we do:

    last = self.head

last points to:

    [10 | next -> None]

Then:

  while last.next:
      last = last.next
Since last.next is None, this loop stops.

Next:
    last.next = new_node


This connects the first node to the new one:

    head ➡️ [10 | next -> [20 | next -> None]]

✅ The list now:

    10 -> 20


🔹 Step 3: append(30)

Creates:

    new_node:
      data = 30
      next = None

last = self.head points to:

    [10]


The while loop:

First iteration: last.next is the node with 20, so:
last = last.next

Now last points to:
    [20]

Second iteration: last.next is None, so loop stops.

Finally:

    last.next = new_node

Now node 20 points to node 30:

    head ➡️ [10 | next -> [20 | next -> [30 | next -> None]]]

✅ The list:

    10 -> 20 -> 30


🔹 Step 4: display()

This prints all the data:

current = self.head

✅ Initially:

current ➡️ [10]
While loop:

Print 10 ->
Move current = current.next ➡️ node with 20

Print 20 ->
Move current = current.next ➡️ node with 30

Print 30 ->
Move current = current.next ➡️ None

Print None at the end.

✅ Full Visual Recap
After all appends:


head
  ↓
[10] -> [20] -> [30] -> None
Every append:

Creates a new node.

Traverses the list (last = self.head) to find the last node.

Updates last.next to point to the new node.


`
    },
    {
      id: 4,
      question: "",
      answer: "",
      codeExample: ``
    },
    {
      id: 4,
      question: "",
      answer: "",
      codeExample: ``
    },
    {
      id: 4,
      question: "",
      answer: "",
      codeExample: ``
    },
    {
      id: 1.1,
      question: "1.1. Centered Pyramid Pattern",
      answer: "",
      codeExample: `
rows = 5  # Number of rows in the pyramid

for i in range(rows):
    stars = '*' * (2 * i + 1)                # Number of stars for this row
    spaces = ' ' * (rows - i - 1)            # Leading spaces for alignment
    print(spaces + stars)

Output:

    *
   ***
  *****
 *******
*********

      `
    },
    {
      id: 1.2,
      question: "1.2. Hollow Pyramid Star Pattern",
      answer: "",
      codeExample: `
rows = 5

for i in range(1, rows + 1):
    spaces = ' ' * (rows - i)
    if i == 1:
        print(spaces + '*')
    elif i == rows:
        print('*' * (2 * rows - 1))
    else:
        middle_spaces = ' ' * (2 * i - 3)
        print(spaces + '*' + middle_spaces + '*')

Output:

    *
   * *
  *   *
 *     *
*********

`
    },
    {
      id: 1.3,
      question: "1.3. Palindromic Number Pyramid Pattern",
      answer: "",
      codeExample: `
rows = 5

for i in range(1, rows + 1):
    spaces = ' ' * (rows - i)
    
    # Increasing numbers from 1 to i
    inc_numbers = ''.join(str(j) for j in range(1, i + 1))
    
    # Decreasing numbers from i-1 down to 1
    dec_numbers = ''.join(str(j) for j in range(i - 1, 0, -1))
    
    print(spaces + inc_numbers + dec_numbers)

Output:

    1
   121
  12321
 1234321
123454321

`
    },
    {
      id: 1.4,
      question: "1.4. Right-Angled Triangle with Increasing Numbers and Right-Aligned Last Column",
      answer: "",
      codeExample: `
rows = 5

for i in range(1, rows + 1):
    if i == 1:
        # First row: print 1 to 5
        print(''.join(str(j) for j in range(1, rows + 1)))
    elif i == rows:
        # Last row: print only 5
        print(i)
    else:
        # Middle rows: print i, spaces, then 5
        spaces = ' ' * (rows - i - 1)
        print(f"{i}{spaces}5")

Output:

12345
2  5
3 5
45
5

      `
    },
    {
      id: 1.5,
      question: "1.5. Diamond Number Pattern",
      answer: "",
      codeExample: `
# Upper part including the middle
for i in range(3, 7):  # from 3 to 6 inclusive
    print(str(i) * (i - 2))

# Lower part
for i in range(5, 2, -1):  # from 5 down to 3
    print(str(i) * (i - 2))


output:
3
44
555
6666
555
44
3
    `
    },
    {
      id: 1.6,
      question: "1.6. Centered Palindromic Number Pyramid",
      answer: "",
      codeExample: `
rows = 5  # Height of the top half of the diamond

# Upper half including the middle line
for i in range(1, rows + 1):
    spaces = ' ' * (rows - i)
    numbers = str(i) * i
    print(spaces + numbers)

# Lower half
for i in range(rows - 1, 0, -1):
    spaces = ' ' * (rows - i)
    numbers = str(i) * i
    print(spaces + numbers)

Output:
    1
   22
  333
 4444
55555
 4444
  333
   22
    1
    `
    },
    {
      id: 1.7,
      question: "1.7 Diamond pattern ",
      answer: "",
      codeExample: `
rows = 5  # height of the diamond (center line)

# Upper half (including middle line)
for i in range(rows):
    spaces = ' ' * (rows - i - 1)
    stars = '*' * (2 * i + 1)
    print(spaces + stars)

# Lower half
for i in range(rows - 2, -1, -1):
    spaces = ' ' * (rows - i - 1)
    stars = '*' * (2 * i + 1)
    print(spaces + stars)


Output:

    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *
    
`
    },
    {
      id: 1.8,
      question: "1.8. Diamond pattern but used numbers",
      answer: "",
      codeExample: `
rows = 5  # Height of the top half of the diamond

# Upper half including the middle line
for i in range(1, rows + 1):
    spaces = ' ' * (rows - i)
    numbers = str(i) * (2 * i - 1)
    print(spaces + numbers)

# Lower half
for i in range(rows - 1, 0, -1):
    spaces = ' ' * (rows - i)
    numbers = str(i) * (2 * i -1)
    print(spaces + numbers)

Output:

    1
   222
  33333
 4444444
555555555
 4444444
  33333
   222
    1

`
    },
    {
      id: 1.9,
      question: "1.9 X-shaped pattern",
      answer: "",
      codeExample: `
size = 5

for i in range(size):
    for j in range(size):
        if j == i or j == size - i - 1:
            print("*", end="")
        else:
            print(" ", end="")
    print()

Output:

*   *   ← i = 0, j = 0 and 4
 * *    ← i = 1, j = 1 and 3
  *     ← i = 2, j = 2
 * *    ← i = 3, j = 1 and 3
*   *   ← i = 4, j = 0 and 4


what is used of OR.
      If either condition is true, then do something.

Syntax:
if condition1 or condition2:
    # run this code if at least one condition is true

`
    },
    {
      id: 1.10,
      question: "1.10. Alphabet triangle pattern",
      answer: "",
      codeExample: `
      
rows = 5

for i in range(1, rows + 1):
    for j in range(65, 65 + i):  # ASCII value of 'A' is 65
        print(chr(j), end='')
    print()



✅ Output:

A
AB
ABC
ABCD
ABCDE

-----------------------------------------------------------------------------------------

🔤 ASCII = American Standard Code for Information Interchange
      It’s a system that assigns a number to every character — like letters, digits, and symbols — so computers can work with text.

💡 Examples:

| Character     | ASCII Code |
| ------------- | ---------- |
| 'A'           | 65         |
| 'B'           | 66         |
| 'C'           | 67         |
| 'a'           | 97         |
| 'b'           | 98         |
| '0'           | 48         |
| ' ' (space)   | 32         |

`
    },
    {
      id: 4,
      question: "",
      answer: "",
      codeExample: ``
    },
    {
      id: 4,
      question: "",
      answer: "",
      codeExample: ``
    },
    {
      id: 4,
      question: "",
      answer: "",
      codeExample: ``
    },
  ];

  const toggleQuestion = (id: number) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div className="app-container">
      <h1>DSA Practical Interview Questions</h1>
      <div className="questions-container">
        {questions.map((q) => (
          <div key={q.id} className="question-item">
          
            <button 
              className={`question-button ${activeId === q.id ? 'active' : ''}`}
              onClick={() => toggleQuestion(q.id)}
            >
              {q.question}
            </button>
            {activeId === q.id && (
              <div className="answer-container">
                <div className="answer">
                  <h3>Answer:</h3>
                  <p>{q.answer}</p>
                </div>
                {q.codeExample && (
                  <div className="code-example">
                    <h3>Code Example:</h3>
                    <pre>
                      <code>{q.codeExample}</code>
                    </pre>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
