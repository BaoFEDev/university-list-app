const getCurrentPosts = (currentPage, postsPerPage, dataList) => {
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost =
    indexOfLastPost - postsPerPage <= 0 ? 0 : indexOfLastPost - postsPerPage;
  const currentPosts = dataList.slice(indexOfFirstPost, indexOfLastPost);
  return currentPosts;
};

export default getCurrentPosts;
