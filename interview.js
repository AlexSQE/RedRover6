const logss = [
    {action: 'A', userId: 1},
    {action: 'B', userId: 1},
    {action: 'A', userId: 2}, // if ABC return userId
    {action: 'A', userId: 3},
    {action: 'C', userId: 1},
    {action: 'B', userId: 1},
    {action: 'B', userId: 1},
    {action: 'B', userId: 2},
    {action: 'B', userId: 3},
    {action: 'A', userId: 3},
    {action: 'C', userId: 3},
    {action: 'C', userId: 2},
    {action: 'C', userId: 1},
    {action: 'B', userId: 1},
    {action: 'C', userId: 1}
  ]

  let abc = {};
  for(let i = 0; i < logss.length; i++) {
    let key = logss[i].userId;
    if(key in abc){
      abc[key] += logss[i].action;
    } else {
      abc[key] = logss[i].action;
    }
  }

  for (let key in abc) {
    if(abc[key].includes('ABC')){
        console.log('User ID is ' + key)
    }
  }
  