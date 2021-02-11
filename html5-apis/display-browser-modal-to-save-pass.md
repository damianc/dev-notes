# Display Browser Modal to Save Credentials

```
const cred = new PasswordCredential({
  id: 'john',
  password: 'QWErty123!'
});

navigator.credentials.store(cred);
```

Additionally, `name` and `iconURL` properties can be passed.