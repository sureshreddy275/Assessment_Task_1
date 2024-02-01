function getMediaType(contentType) {
  if (contentType.startsWith("image")) {
    return " ";
  } else if (contentType.startsWith("video")) {
    return " ";
  } else if (
    contentType.startsWith("application/pdf") ||
    contentType.startsWith("text")
  ) {
    return " ";
  } else {
    return " ";
  }
}
module.exports = { getMediaType };
