const PaginationHelper = require('./pagination.js');

describe('pagination tests', () => {

  let paginator;
  beforeAll(() => {
    paginator = new PaginationHelper(['a', 'b', 'c', 'd', 'e', 'f'], 4);
  });

  it('should be able to make a new paginationHelper', () => {
    expect(paginator).toBeDefined();
    expect(paginator.itemCount).toBeDefined();
    expect(paginator.pageCount).toBeDefined();
    expect(paginator.pageItemCount).toBeDefined();
    expect(paginator.pageIndex).toBeDefined();
    expect(paginator.collection).toEqual(['a', 'b', 'c', 'd', 'e', 'f']);
    expect(paginator.itemsPerPage).toEqual(4);
  });



  it('can count the number of items in the collection', () => {
    expect(paginator.itemCount()).toEqual(6);
  });

  it('can determine the number of pages necessary to display all it', () => {
    expect(paginator.pageCount()).toEqual(2);
  });

  it('can determine how many pages per item there should be on any given page', () => {
    expect(paginator.pageItemCount(0)).toEqual(4);
    expect(paginator.pageItemCount(1)).toEqual(2);
    expect(paginator.pageItemCount(2)).toEqual(-1);
  });

  it('can determine which page an item is on via its index', () => {
    expect(paginator.pageIndex(5)).toEqual(1);
    expect(paginator.pageIndex(4)).toEqual(1);
    expect(paginator.pageIndex(0)).toEqual(0);
    expect(paginator.pageIndex(2)).toEqual(0);
    expect(paginator.pageIndex(20)).toEqual(-1);
    expect(paginator.pageIndex(-10)).toEqual(-1);
  });
});
