// book.test.js
const { OrderBook } = require('./orderBook');

describe('OrderBook basics', () => {
  let ob;

  beforeEach(() => {
    ob = new OrderBook();
  });

  test('adds and retrieves a buy order', () => {
    const buy = { id: 'b1', type: 'buy', price: 100, quantity: 5 };
    ob.addOrder(buy);
    expect(ob.getOrders('buy')).toEqual([buy]);
  });

  test('returns null if order not found by id', () => {
    expect(ob.getOrder('does-not-exist')).toBeNull();
  });

  test('cancels an order by id', () => {
    const sell = { id: 's1', type: 'sell', price: 120, quantity: 2 };
    ob.addOrder(sell);
    expect(ob.cancelOrder('s1')).toBe(true);
    expect(ob.getOrder('s1')).toBeNull();
  });
  test('cancel order returns false if not found', () => {
    const sell = { id: 's1', type: 'sell', price: 120, quantity: 2 };
    ob.addOrder(sell);
    expect(ob.cancelOrder('s88')).toBe(false);
    expect(ob.getOrder('s1')).toEqual(sell);
  });
});

