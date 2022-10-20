// 1

function capitalize(str) {
  let string_ = str.split(' ')
  return string_.map(lambda => (lambda[0].toUpperCase()) + lambda.substring(1)).join(' ');
}

console.log(capitalize('hello! my name is gustavo'));

// 2

function clear_string(str) {
  return str.replace(/[^a-zA-Z0-9]+/g, ' ')
}

console.log(clear_string('hello! my name is gustavo'));

// 3 

function palindrome(str) {
  return str === str.split('').reverse().join('')
}

console.log(palindrome('hiih'));

// 4

function unique(str) {
  let string_ = "";
  for (let i = 0; i < str.length; i++) {
    if (string_.includes(str[i]) === false) { 
      string_ += str[i]
    }
  }
  return string_;
}

console.log(unique('hiih'));

// 5

function replaceAll(find, replace, str) {
  res = str.split(find).join(replace)
  return res
}

console.log(replaceAll('11', '22', '11helo11'));