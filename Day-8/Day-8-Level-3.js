// ### Exercises: Level 3

// 1. Create an object literal called _personAccount_. It has _firstName, lastName, incomes, expenses_ properties and it has _totalIncome, totalExpense, accountInfo,addIncome, addExpense_ and _accountBalance_ methods. Incomes is a set of incomes and its description and expenses is a set of incomes and its description.
// 2. **** Questions:2, 3 and 4 are based on the following two arrays:users and products ()

    const users = [
      {
          _id: 'ab12ex',
          username: 'Alex',
          email: 'alex@alex.com',
          password: '123123',
          createdAt:'08/01/2020 9:00 AM',
          isLoggedIn: false
      },
      {
          _id: 'fg12cy',
          username: 'Asab',
          email: 'asab@asab.com',
          password: '123456',
          createdAt:'08/01/2020 9:30 AM',
          isLoggedIn: true
      },
      {
          _id: 'zwf8md',
          username: 'Brook',
          email: 'brook@brook.com',
          password: '123111',
          createdAt:'08/01/2020 9:45 AM',
          isLoggedIn: true
      },
      {
          _id: 'eefamr',
          username: 'Martha',
          email: 'martha@martha.com',
          password: '123222',
          createdAt:'08/01/2020 9:50 AM',
          isLoggedIn: false
      },
      {
          _id: 'ghderc',
          username: 'Thomas',
          email: 'thomas@thomas.com',
          password: '123333',
          createdAt:'08/01/2020 10:00 AM',
          isLoggedIn: false
      }
      ];

      const products = [
    {
      _id: 'eedfcf',
      name: 'mobile phone',
      description: 'Huawei Honor',
      price: 200,
      ratings: [
        { userId: 'fg12cy', rate: 5 },
        { userId: 'zwf8md', rate: 4.5 }
      ],
      likes: []
    },
    {
      _id: 'aegfal',
      name: 'Laptop',
      description: 'MacPro: System Darwin',
      price: 2500,
      ratings: [],
      likes: ['fg12cy']
    },
    {
      _id: 'hedfcg',
      name: 'TV',
      description: 'Smart TV:Procaster',
      price: 400,
      ratings: [{ userId: 'fg12cy', rate: 5 }],
      likes: ['fg12cy']
    }
    ]


//   Imagine you are getting the above users collection from a MongoDB database.
//     a. Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.  
//     b. Create a function called signIn which allows user to sign in to the application  

const signUp = (username, email, password) => {
    users.forEach(user => {
        if (user.username === username && user.password === password) {
            console.log("you already have an account")
        } else {
            let date = new Date()
            let chars = "abcdefghiklmnopqrstuvwxyz";
            let id = [];
            for (let i = 0; i < 6; i++) {
                id.push(chars[Math.floor(Math.random() * chars.length)])
            }
            id = id.join("");
            users.push({
                _id: id,
                username: username,
                email: email,
                password: password,
                createdAt: `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`,
                isLoggedIn: "false"
            })
        }
    })
    console.log(users[users.length - 1]);
}

const signIn = (username, password) => {
    for (let i = 0; i < users.length; i++) {
        if (users[i].username.toLowerCase() === username.toLowerCase() && users[0].password === password) {
            return users[i];
        } else {
            return "wrong username or password";
        }
    }
    // console.log(foundUser)
}

// 3. The products array has three elements and each of them has six properties.
//     a. Create a function called rateProduct which rates the product
//     b. Create a function called averageRating which calculate the average rating of a product  

const rateProduct = (name, rate) => {
products.forEach(product => {
    if (product.name.toLowerCase().includes(name)) {
        let chars = "0123456789abcdefghiklmnopqrstuvwxyz";
        let id = [];
        for (let i = 0; i < 6; i++) {
            id.push(chars[Math.floor(Math.random() * chars.length)])
        }
        id = id.join("");
        product.ratings.push({
            userId: id,
            rate: rate
        })
        console.log("filter");
    } else {
        console.log("no product to rate")
    }
})
};

const avgRating = (name) => {
let avg = 0;
let count = 0;
for (let i = 0; i < products.length; i++) {
    if (name.toLowerCase() === products[i].name.toLowerCase()) {
        products[i].ratings.rate.forEach(rating => {
            count++
            avg += rating
        })
    }
}
avg = avg / count
}


// 4. Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove like if it was liked.

const likeProduct = (name) => {
    for (let i = 0; i < products.length; i++) {
        if (name.toLowerCase() === products[i].name.toLowerCase()) {
    
            if (!products[i].likes) {
                console.log(like);
                let chars = "0123456789abcdefghiklmnopqrstuvwxyz";
                let id = [];
                for (let i = 0; i < 6; i++) {
                    id.push(chars[Math.floor(Math.random() * chars.length)])
                }
                id = id.join("");
                products[i].likes.push(id)
            } else {
                console.log("product has been liked")
            }
        } else {
            console.log("no product available")
        }
    }
    }