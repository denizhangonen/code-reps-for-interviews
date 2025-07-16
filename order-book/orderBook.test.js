const { OrderBook } = require('./orderBook');

describe('Order Book', () => {
  let orderBook;

  beforeEach(() => {
    orderBook = new OrderBook();
  });

  test('should store and retrieve buy orders', () => {
    const buyOrder1 = { id: '1', type: 'buy', price: 100, quantity: 5 };
    const buyOrder2 = { id: '2', type: 'buy', price: 200, quantity: 15 };
    const buyOrder3 = { id: '3', type: 'buy', price: 360, quantity: 25 };

    orderBook.addOrder(buyOrder1);
    orderBook.addOrder(buyOrder2);
    orderBook.addOrder(buyOrder3);

    expect(orderBook.getOrders('buy')).toEqual([
      buyOrder1,
      buyOrder2,
      buyOrder3,
    ]);
  });
  test('should store and retrieve sell orders', () => {
    const order1 = { id: '1', type: 'sell', price: 100, quantity: 5 };
    const order2 = { id: '2', type: 'sell', price: 200, quantity: 15 };

    orderBook.addOrder(order1);
    orderBook.addOrder(order2);

    expect(orderBook.getOrders('sell')).toEqual([order1, order2]);
  });
  test('should return empty array if no orders of that type', () => {
    expect(orderBook.getOrders('buy')).toEqual([]);
  });
  test('should return the order with given id', () => {
    const order1 = { id: '1', type: 'sell', price: 100, quantity: 5 };

    orderBook.addOrder(order1);

    expect(orderBook.getOrder('1')).toEqual(order1);
  });
  test('should return null when no order found', () => {
    expect(orderBook.getOrder('1')).toEqual(null);
  });
});

