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
  test('returns best price for buy and sell orders', () => {
    ob.addOrder({ id: 'b1', type: 'buy', price: 100, quantity: 5 });
    ob.addOrder({ id: 'b2', type: 'buy', price: 110, quantity: 2 });
    ob.addOrder({ id: 's1', type: 'sell', price: 120, quantity: 1 });
    ob.addOrder({ id: 's2', type: 'sell', price: 115, quantity: 3 });

    expect(ob.getBestPrice('buy')).toBe(110);
    expect(ob.getBestPrice('sell')).toBe(115);
  });
  test('returns total quantity at a given price level', () => {
    ob.addOrder({ id: 'b1', type: 'buy', price: 100, quantity: 5 });
    ob.addOrder({ id: 'b2', type: 'buy', price: 100, quantity: 3 });
    ob.addOrder({ id: 's1', type: 'sell', price: 120, quantity: 2 });

    expect(ob.getQuantityAtPrice('buy', 100)).toBe(8); // 5 + 3
    expect(ob.getQuantityAtPrice('sell', 120)).toBe(2);
    expect(ob.getQuantityAtPrice('sell', 999)).toBe(0); // no such price
  });
  test('updates order quantity by id; setting 0 removes the order', () => {
    ob.addOrder({ id: 'b1', type: 'buy', price: 100, quantity: 5 });

    // update existing
    expect(ob.updateOrderQuantity('b1', 10)).toBe(true);
    expect(ob.getOrder('b1').quantity).toBe(10);

    // set to zero -> remove
    expect(ob.updateOrderQuantity('b1', 0)).toBe(true);
    expect(ob.getOrder('b1')).toBeNull();

    // non-existent id
    expect(ob.updateOrderQuantity('nope', 7)).toBe(false);
  });
});

