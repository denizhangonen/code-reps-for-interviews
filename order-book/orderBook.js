class OrderBook {
  constructor() {
    this.orders = [];
  }
  addOrder(orderObj) {
    this.orders.push(orderObj);
  }
  getOrders(type) {
    return this.orders.filter((o) => o.type === type);
  }
  getOrder(id) {
    return this.orders.find((o) => o.id === id) || null;
  }
}

module.exports = { OrderBook };

