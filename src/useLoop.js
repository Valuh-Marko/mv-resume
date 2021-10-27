const useLoop = (index, end, element) => {
  let elementsArr = [];
  for (let start = index; start < end + 1; start++) {
    elementsArr.push(element);
  }

  return elementsArr;
};

export default useLoop;
