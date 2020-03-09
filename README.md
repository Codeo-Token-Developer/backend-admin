#     *BACKEND*-ADMIN DOCUMENTATION



### **CREATE**

required: 

```
path: '/admins/'
method: 'POST',
data: {
	name: "admin name example",
	email: "admin@example.com",
	password: "123456",
	confirm_password: "123456"
}
header: {
	admintoken: localStorage('admintoken')
}
```

Success Output example: 

```
{
  "message": "Admin panda success registered",
  "status": 202,
  "admin": {
    "_id": "5e55d86b1c3f81226892c4f7",
    "name": "admin12345",
    "email": "admin12345@example.com",
    "password": "$2a$10$sJhFBRKOb/87596ADu9lXuJVPbRIa4bX8vC3RgY35ZWWMKhRDfw6S",
    "__v": 0
  }
}
```

Error Output example: 

```
{
  "message": "Email is required",
  "status": 400
}
```

------



### **LOGIN**

required: 

```
path: '/admins/login'
method: 'POST'
data: {
	email: "admin@example.com",
	password: "123456"
}

```

Success Output example: 

```
{
  "message": "Welcome panda",
  "status": 201,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlNTVkNmIwYTcwZDZlMmIzODc4MDhjNyIsImVtYWlsIjoiYWRtaW4xMjM0QGdtYWlsLmNvbSIsImlhdCI6MTU4MjY4NDM0MX0.Lw6LZ3W_mNMy18HQFZRByM1pol-JBJG7XhMRP1nTRDY"
}
```

Error Output example: 

```
{
  "message": "Invalid Email / Password",
  "status": 500
}
```

------



#### **<u>Read All Users</u>**

Require: 

```
path: '/admins/users',
method: 'GET',
headers: {
	jwttoken
}
```


##### **<u>CREATE NEW USER</u>**

Required: 

```
path: '/admins-users',
method: 'POST',
data: {
	name, email, password
}
```

Success Output example: 

​	