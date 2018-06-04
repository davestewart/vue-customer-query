# Customer Query Application

### Overview

Example Vue application with form validation and Vuex.

### Setup

```bash
git clone https://github.com/davestewart/vue-customer-query.git
cd vue-customer-query
npm install
npm run serve
```

### Notes

- UI elements are all componentized
- Vuex uses modules, making it easy to refactor
- Validation handled by VeeValidate
- `app` folder contains application functionality
- `core` folder contains more general / framework files
- `services` folder separates logic from components
- Mocked call has 25% chance of failure (for demo purposes)
- Simple Bulma styling


### Next steps

- Extract form / validation logic into extensible class
- Add load data functionality to store
- Add edit / completed functionality
- Add Notification service
- Add router
