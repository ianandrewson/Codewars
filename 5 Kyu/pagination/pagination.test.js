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
  });
});
