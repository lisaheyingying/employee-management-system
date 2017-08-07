# mean-employee-app
 Employee Management System web apps using MongoDB, Express, AngularJS and Node.js

# Backend server using node.js server and data are stored in MongoDB,  you can run the following command to start mongo db  and backend server. This will start node server at port 3000
 mongod 
 npm run start
#Notice: you first need to create db file folder for mongo db, the default folder located at c:/data


# During development you can use debug mode by starting node in debug mode

npm run start:debug

#You can also view data in db through API
 For example you can get all employees from URL http://localhost:3000/api/employee
[
  {
    "_id": "597ee0db93b4b2519cbe370d",
    "name": "张三",
    "position": "挡车工",
    "department": "车间",
    "baseSalary": "1620",
    "endowmentInsurance": "800",
    "insurance": "600",
    "__v": 0
  },
  {
    "_id": "597ef9a91854ad63709b99a3",
    "name": "张五",
    "position": "档车间",
    "baseSalary": "1620",
    "endowmentInsurance": "500",
    "insurance": "800",
    "__v": 0
  }
]