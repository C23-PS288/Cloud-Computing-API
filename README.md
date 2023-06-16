### Basic Endpoint

| Endpoint | Method |           Body  (JSON)          |                 Desc                |
|:--------:|:------:|:-----------------------------------:|:------------------------------------------:|
|     /    |   GET  |                 None               |            Connection Success           |


### User Endpoint

| Endpoint | Method |           Body  (JSON)          |                 Desc                |
|:--------:|:------:|:-----------------------------------:|:------------------------------------------:|
|     /users/register    |   POST  |                 {"name":"john doe", "email": "john@gmailxxxx", "phone": "085xxxxx", "password": "johnpass", "confirmPassword": "johnpass"}               |            Registration           |
|     /users/login    |  POST  | {"email": "john doe", "password": "johnpass"} | Login |
|     /users/:id    |  POST  | {"name":"john doe", "email": "john@gmailxxxx", "phone": "085xxxxx"} | Update |
|     /users/    |  GET  | None | Users List |
|     /users/:id    |  GET  | None | Users Profile |
|     /users/logout    |  POST  | None | Logout |

### Food Endpoint

| Endpoint | Method |           Body  (JSON)          |                 Desc                |
|:--------:|:------:|:-----------------------------------:|:------------------------------------------:|
|     /foods/    |  GET  | None | Foods List |
|     /foods/:id    |  GET  | None | Foods Detail |

### Recommendation Endpoint
| Endpoint | Method |           Body  (JSON)          |                 Desc                |
|:--------:|:------:|:-----------------------------------:|:------------------------------------------:|
|     /recommendation/location    |  POST  | {"kategori": "rendang"} | Foods Category |
