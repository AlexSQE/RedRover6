const onlineStore = {
    name: 'TechWorld',
    location: 'San Francisco',
    products: [
      {
        id: 1,
        name: 'Laptop',
        price: 999.99,
        brand: 'Apple',
        category: 'Electronics'
      },
      {
        id: 2,
        name: 'Smartphone',
        price: 699.99,
        brand: 'Samsung',
        category: 'Electronics'
      },
      {
        id: 3,
        name: 'Headphones',
        price: 149.99,
        brand: 'Sony',
        category: 'Electronics'
      }
    ],
    customers: [
      {
        id: 1,
        name: 'John Doe',
        email: 'john.doe@example.com',
        address: '123 Main St'
      },
      {
        id: 2,
        name: 'Jane Smith',
        email: 'jane.smith@example.com',
        address: '456 Elm St'
      }
    ],
    orders: [
      {
        id: 1,
        customerId: 1,
        products: [1, 3],
        totalPrice: 1149.98,
        status: 'Completed'
      },
      {
        id: 2,
        customerId: 2,
        products: [2],
        totalPrice: 699.99,
        status: 'Pending'
      }
    ]
  };
 // console.log(onlineStore.products[1].name, onlineStore.products[1].price)

  onlineStore.products.forEach(el => {console.log(el.name, el.price)})

  for(let el of onlineStore.products) {
    console.log(el.name, el.price)
  }
    
 