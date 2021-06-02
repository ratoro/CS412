function* sentence(words) {
  let array_of_sentence = words.split(" ");
  for (index = 0; index < array_of_sentence.length; index++) {
    yield array_of_sentence[index];
  }
}

mysentence = sentence("hello world");
while (true) {
  let word = mysentence.next().value;
  if (word) {
    console.log(word);
  } else break;
}
