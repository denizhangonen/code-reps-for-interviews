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
  cancelOrder(id) {
    const beforeCancelCount = this.orders.length;
    this.orders = this.orders.filter((o) => o.id !== id);
    return this.orders.length < beforeCancelCount;
  }
  getBestPrice(type) {
    const filtered = this.getOrders(type);
    if (filtered.length === 0) return null;
    return type === 'buy'
      ? Math.max(...filtered.map((o) => o.price))
      : Math.min(...filtered.map((o) => o.price));
  }
}

module.exports = { OrderBook };

