# **ADMIN DOCUMENTATION**



<u>**CREATE NEW ADMIN**</u>

Required:

```
path: '/admins/auth',
method: 'POST',
headers: {
	admintoken
},
data/body: {
	name, email, password
}
```

Success output example:

```
{
  "message": <message>,
  "status": <status>
}
```

Error output example:

```
{
  "message": "Password cannot be empty, laskarksatria266@gmail.com already taken, please take another one",
  "status": 400
}
```


##### <u>**EMAIL VERIFICATION**</u>

Required:

```
path: '/api/auth/verify/:token',
method: 'PATCH',

```

Success output example:

```
*Note: It will redirect to app
```


##### <u>**LOGIN ADMIN**</u>

Required:

```
path: '/admins/auth/login',
method: 'POST',
data: {
	email, password
}
```

Success output example:

```
{
  "message": "Welcome Laskar, hope you have a nice day",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlNmIyOTkyYmJjYzM0MGJjOGM1OWI0MCIsImlhdCI6MTU4NDA4MTk2NH0.WokKCVG8Njq9G_NQjMeE8jab4Sie49bkKz0xGIOs3qw"
}
```

Error output example:

```
{
  "message": "Invalid username / password",
  "status": 500
}
```


###### **<u>Read All Users</u>**

Required:

```
path: 'admins/function/users',
method: 'GET',
headers: {
	admintoken
}
```

Success output example:

```
{
  "users": [
    {
      "approval_verified": false,
      "_id": "5e670509a958073f9019b165",
      "avatar": "",
      "id_country": "",
      "date": "2020-03-10T03:09:51.082Z",
      "verification": true,
      "name": "Laskar Ksatria S",
      "email": "laskarksatria266@gmail.com",
      "password": "$2a$10$5mhIcIk3Vk.rdNP5JDwQHOSC2DU4eE1/zbUCsI8MId56lzpNQd1ku",
      "__v": 0,
      "account": "5e67073ea958073f9019b166"
    },
  ],
  "status": 200
}
```

Error output example:

```
{
  "message": "You don't have authorize to do that!",
  "status": 500
}
```



###### **<u>Read All Admins

Required:

```
path: 'admins/function/admins',
method: 'GET',
headers: {
	admintoken
}
```

Success output example:

```
{
  "admins": [
    {
      "_id": "5e6b3f230e8c05354c91e876",
      "name": "Laskar",
      "email": "laskarksatria266@gmail.com",
      "password": "$2a$10$0fPinszuXOax2eHNqxKUn.vH6tNHRm9Jnms81LkJi.TR7mEYQeSqK",
      "__v": 0
    }
  ],
  "status": 200
}
```

Error output example:

```
{
  "message": "You don't have authorize to do that!",
  "status": 500
}
```



#### **<u>UPDATE FEE</u>**

Required:

```
path: 'admins/fee',
method: 'PATCH',
headers: {
	admintoken
},
data: {
	newFee
}
```

Success output example:

```
{
  "fee": "0.03",
  "status": 201
}
```

**<u>CREATE CMS</u>**

Required:

```
path: 'admins/cms',
method: 'PATCH',
headers: {
	admintoken
},
data: {
	title, category, description
}
```

Success output example:

```
{
	"cms": <cms>
	"message": "CMS Are created"
}
```
---

**<u>Edit CMS</u>**

Required:

```
path: 'admins/cms/:id',
method: 'PATCH',
headers: {
	admintoken
},
data: {
	title, category, description
}
```

Success output example:

```
{
	"cms": <cms>
	"message": "CMS Are updated"
}
```
---

**<u>Delete CMS</u>**

Required:

```
path: 'admins/cms/:id',
method: 'DELETE',
headers: {
	admintoken
}
```

Success output example:

```
{
	"cms": <cms>
	"message": "CMS Are deleted"
}
```
---

#### **<u>Read All Users Active</u>**

Required:

```
path: 'admins/function/users-active',
method: 'GET',
headers: {
	admintoken
}
```

Success output example:

```
{
	"users": [
    {
      "verification": true,
      "approval_verified": true,
      "_id": "5e71d79218c9e11754e1ec92",
      "date": "2020-03-18T08:04:20.336Z",
      "isLogin": true,
      "full_name": "Laskar Ksatria S",
      "username": "laskarks",
      "password": "$2a$10$yUAlLjhoC43J9AosA1/M7OBZL/txEseCofo259O1QUzst8h422/sa",
      "referral_address": "dapp.codeotoken.com/ref/laskarks",
      "email": "laskar.ksatria12@gmail.com",
      "__v": 0,
      "account": "5e72dba739080d147048822d"
    },
  ]
}
```
---


#### **<u>CRYPTO APPROVED</u>**

Required:

```
path: 'admins/approved/crypto/:userId',
method: 'PATCH',
headers: {
	admintoken
},
params: user id
```

Success output example: 
```
{
  "message": <message>,
  "status": <status>
}
```

Error output example: 
```
{
  "message": <message>,
}
```

#### **<u>BANK ACCOUNT APPROVED</u>**

Required:

```
path: 'admins/approved/bankAccount/:userId',
method: 'PATCH',
headers: {
	admintoken
},
params: user id
```

Success output example: 
```
{
  "message": <message>,
  "status": <status>
}
```

Error output example: 
```
{
  "message": <message>,
}
```


#### **<u>CREDIT CARD APPROVED</u>**

Required:

```
path: 'admins/approved/creditCard/:userId',
method: 'PATCH',
headers: {
	admintoken
},
params: user id
```

Success output example: 
```
{
  "message": <message>,
  "status": <status>
}
```

Error output example: 
```
{
  "message": <message>,
}
```


#### **<u>KYC APPROVED</u>**

Required:

```
path: 'admins/approved/kyc/:userId',
method: 'PATCH',
headers: {
	admintoken
},
params: user id
```

Success output example: 
```
{
  "message": <message>,
  "status": <status>
}
```

Error output example: 
```
{
  "message": <message>,
}
```



#### **<u>Read AllAccounts</u>**

Required:

```
path: '/admins/function/allAccounts',
method: 'GET',
headers: {
	admintoken
},

```

Success output example: 
```
{
  "allAccounts: {
    cryptos: [<cryptos>],
    bankAccounts: [<bankAccounts>],
    creditCards: [<creditCards>],
    kycs: [<kycs>],
  },
  "status": 200
}
```

Error output example: 
```
{
  "message": <message>,
}
```


notVerifiedAccounts


#### **<u>Read AllNotApproved</u>**

Required:

```
path: '/admins/function/allNotVerified',
method: 'GET',
headers: {
	admintoken
},

```

Success output example: 
```
{
  "notVerifiedAccounts: {
    cryptos: [<cryptos>],
    bankAccounts: [<bankAccounts>],
    creditCards: [<creditCards>],
    kycs: [<kycs>],
  },
  "status": 200
}
```

Error output example: 
```
{
  "message": <message>,
}
```









