export default function numberOfComments(commentList) {
  if (commentList) {
    let number = 0;
    for (let i = 0; i < commentList.length; i++) {
      number += commentList[i].reply.length;
    }
    return commentList.length + number;
  }
  return 0;
}
