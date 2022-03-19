## Starwars Client
Run ``` npm install ``` to install packages

Run ``` npm start ``` to start server

Run ``` npm test ``` to run tests

The server is deployed to heroku
```
https://serverswapi.herokuapp.com/ 
```

### Queries
```
query getAllPeople {
    allPeople {
        count
        previous
        results{
            name
            gender
            mass
            height
            homeworld 
        }
    }
  }
```
```
query Person($page: Int) {
  people(page: $page) {
    count
    next
    previous
    results {
      name
      height
      mass
      gender
      homeworld
    }
  }
}
```

```
query Person($name: String) {
  person(name: $name) {
    count
    next
    previous
    results {
      name
      height
      mass
      gender
      homeworld
    }
  }
}
```