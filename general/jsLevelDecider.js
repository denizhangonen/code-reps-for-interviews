class JsLevelDecision {
  // Already implemented
  reverseString(str) {
    let reversed = '';
    for (let i = 0; i < str.length; i++) {
      reversed += str[str.length - i - 1];
    }
    return reversed;
  }

  // New Task 1: Check if a string is a palindrome
  isPalindrome(str) {
    // implement me
    return str === this.reverseString(str);
  }

  // New Task 2: Find the maximum number in an array
  maxInArray(arr) {
    // implement me
    return Math.max(...arr);
  }
  countVowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let counter = 0;
    for (let i = 0; i < str.length; i++) {
      if (vowels.indexOf(str[i]) !== -1) {
        counter++;
      }
    }
    return counter;
  }
  removeDuplicates(arr) {
    return [...new Set(arr)];
  }
}

// UNIT TESTS
const jsLD = new JsLevelDecision();

console.assert(
  jsLD.reverseString('hello') === 'olleh',
  'reverseString Test failed'
);

// Palindrome tests
console.assert(
  jsLD.isPalindrome('racecar') === true,
  'Palindrome Test 1 failed'
);
console.assert(
  jsLD.isPalindrome('hello') === false,
  'Palindrome Test 2 failed'
);

// Max array tests
console.assert(
  jsLD.maxInArray([1, 5, 3, 9, 2]) === 9,
  'MaxInArray Test 1 failed'
);
console.assert(
  jsLD.maxInArray([-10, -3, -20]) === -3,
  'MaxInArray Test 2 failed'
);

// CountVowels tests
console.assert(jsLD.countVowels('hello') === 2, 'CountVowels Test 1 failed');
console.assert(jsLD.countVowels('Denizhan') === 3, 'CountVowels Test 2 failed');
console.assert(jsLD.countVowels('xyz') === 0, 'CountVowels Test 3 failed');

// RemoveDuplicates tests
console.assert(
  JSON.stringify(jsLD.removeDuplicates([1, 2, 2, 3, 3, 4])) ===
    JSON.stringify([1, 2, 3, 4]),
  'RemoveDuplicates Test 1 failed'
);
console.assert(
  JSON.stringify(jsLD.removeDuplicates(['a', 'b', 'a', 'c'])) ===
    JSON.stringify(['a', 'b', 'c']),
  'RemoveDuplicates Test 2 failed'
);
console.assert(
  JSON.stringify(jsLD.removeDuplicates([])) === JSON.stringify([]),
  'RemoveDuplicates Test 3 failed'
);

console.log('All tests ran.');

