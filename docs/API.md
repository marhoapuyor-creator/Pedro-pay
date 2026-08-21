# Pedro Pay API Documentation

## Base URL
```
http://localhost:5000/api
```

## Authentication
All protected endpoints require a JWT token in the Authorization header:
```
Authorization: Bearer <token>
```

## Endpoints

### Auth Routes

#### Register
```
POST /auth/register

Body:
{
  "email": "user@example.com",
  "username": "username",
  "password": "password123"
}

Response:
{
  "message": "User registered successfully",
  "token": "jwt_token_here"
}
```

#### Login
```
POST /auth/login

Body:
{
  "email": "user@example.com",
  "password": "password123"
}

Response:
{
  "message": "Login successful",
  "token": "jwt_token_here",
  "user": { ... }
}
```

### Ads Routes

#### Get All Ads
```
GET /ads

Response:
{
  "ads": [ ... ]
}
```

#### Record Ad View
```
POST /ads/:id/view

Body:
{
  "userId": "user_id"
}

Response:
{
  "message": "Ad view recorded",
  "earnedAmount": 0.5
}
```

### Earnings Routes

#### Get User Earnings
```
GET /earnings/:userId

Response:
{
  "totalEarnings": 25.50,
  "todayEarnings": 2.50,
  "withdrawnAmount": 15.00,
  "balance": 10.50
}
```

#### Request Withdrawal
```
POST /earnings/:userId/withdraw

Body:
{
  "amount": 10.00,
  "method": "paypal"
}

Response:
{
  "message": "Withdrawal request submitted",
  "withdrawalId": "withdraw_12345",
  "status": "pending"
}
```
