export default {
  fetchProducts: () => {
    return new Promise(
      resolve => {
        setTimeout(
          () => {
            resolve([
                {
                  id: '1', 
                  title: 'Xiaomi 1',
                  type: 'device',
                  price: '800$',
                  quantity: '10',
                },
                {
                  id: '2', 
                  title: 'Xiaomi 2',
                  type: 'device',
                  price: '600$',
                  quantity: '10',
                },
                {
                  id: '3', 
                  title: 'Dress',
                  type: 'clothes',
                  price: '50$',
                  quantity: '5',
                }
            ])
          },
          2000
        )
      }
    )
  }
}
