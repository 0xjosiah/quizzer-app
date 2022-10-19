const shuffle = (array) => {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

const fetchCategories = async () => {
  const res = await fetch('https://opentdb.com/api_category.php')
  const data = await res.json()
  return data.trivia_categories
}

export { shuffle, fetchCategories }