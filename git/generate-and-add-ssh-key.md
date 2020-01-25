# Generate and Add SSH Key

* generate key pair

```
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"

Enter file in which to save the key (~/john/.ssh/id_rsa): gh_home
...
```

* copy the public key

```
clip < ~/john/.ssh/gh_home.pub
```

* paste and save the SSH key in your account settings (e.g., on GitHub)
