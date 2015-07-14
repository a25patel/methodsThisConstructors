function BookReader(book) {
  this.book = book;
  this.currentPage = 0;
}

BookReader.prototype.nextPage = function() {
  var i = this.currentPage += 1;
  if(i < this.book.length){
    return this.book[i];
  } else {
    return this.book[this.book.length - 1];
  }
};

BookReader.prototype.previousPage = function() {
  var i = this.currentPage -= 1;
  if(i < 0){
    return this.book[0];
  }else{
    return this.book[i];
  }

};

BookReader.prototype.pagesLeft = function() {
  return ((this.book.length - 1) - this.currentPage);
};

BookReader.prototype.encouragement = function() {
  var i = this.currentPage += 1;
  if(i < this.book.length){
    return("Keep going, only 2 pages left after this one!");
  } else if (i === (this.book.length - 1)) {
    return ("Keep going, this book is good 'til the last drop!");
  }
};

// DO NOT MODIFY BELOW THIS COMMENT:
module.exports = BookReader;
