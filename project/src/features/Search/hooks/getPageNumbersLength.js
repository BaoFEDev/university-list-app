const getPageNumbersLength = (dataList, postsPerPage) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(dataList.length / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return pageNumbers.length;
};
export default getPageNumbersLength;
