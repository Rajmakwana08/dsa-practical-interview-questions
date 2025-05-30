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
      question: "1. factorial and fibonacci series",
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
    # 1 + 2 = 3`
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
      question: "1.1 Centered Pyramid Pattern",
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
      question: "1.2 Right-Angled Triangle with Increasing Numbers and Right-Aligned Last Column",
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
      id: 1.3,
      question: "1.3 Diamond Number Pattern",
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
      id: 1.4,
      question: "1.4 Centered Palindromic Number Pyramid",
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
      id: 1.5,
      question: "1.5 Diamond pattern ",
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
      id: 1.6,
      question: "1.6 Diamond pattern but used numbers",
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
      id: 1.7,
      question: "1.7 X-shaped pattern",
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
      id: 1.8,
      question: "1.8 Alphabet triangle pattern",
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
          <pre>
            <button 
              className={`question-button ${activeId === q.id ? 'active' : ''}`}
              onClick={() => toggleQuestion(q.id)}
            >
              {q.question}
            </button>
          </pre>
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
