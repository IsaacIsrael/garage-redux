const getGarageName = () => {
  // return prompt("What is your garage?") || `garage${Math.floor(10 + (Math.random() * 90))}`;
  return 'garage21';
};

const initialState = {
  garage: getGarageName()
};
export default initialState;
