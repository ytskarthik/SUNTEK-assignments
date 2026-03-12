REST API
    -representation state transfer API

TO create REST API 
    -we should know the endpoints(an endpoint is a url wheere your api can be accessed to perform a specific operations on resources)
    -endpoint example:
        -https://apiexample.com/users/123
        ----------------------  ----  ---
                |                 |    |
            base url     resource id  ID  

    -Rest api's are resource based protocols

REST end point rules:
    -rule 1:
        --use nouns, not verbs(GET /users/123)
    -rule 2:
        --use plural nouns(GET /users)
    -rule 3:
        --
    -rule 4:


/* create products API in the same file
    Description of products obj:
        {
            productId,
            name,
            price,
            brand
        }

Product API:
    GET     http://localhost:3000/products
    POST    http://localhost:3000/products
    PUT     http://localhost:3000/products/<id>
    DELETE  https://localhost:3000/products/<id>*/