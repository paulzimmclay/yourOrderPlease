function order(words){
  // put each word into an array by checking each character 
  //to see if it's space, and if so, slicing at that point
  const arrayOfWords = words.split(" ")
  // container array for new array
  const containerArray = []
  // check each word
  arrayOfWords.forEach(word => {
    // check each letter in the word
    for (let i = 0; i < word.length; i++) {
      if (!isNaN(word.charAt(i))) {
        containerArray.push([word, word.charAt(i)])
      }
    }
  })
  // sort array based on number
  const sortedArray = containerArray.sort((a,b) => {return a[1] - b[1]})
  // print each word to array
  const finalArray = []
  sortedArray.forEach((item) => {
    finalArray.push(item[0])
  })
  console.log(finalArray.join(" "))
}

console.log(order("is2 Thi1s T4est 3a"))