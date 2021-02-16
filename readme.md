# Monsters API

A simple Express-PostgreSQL API that interacts with stores "monsters", "habitats" and "lives" data

## Setting up the DB

  ```
  createdb -U postgres monstersdb
  psql -U postgres monstersdb
  CREATE USER node_user WITH SUPERUSER PASSWORD 'node_password';
  ```

  1. Create the file - configuredb.sh

  then: `npm run configure`
  This sets the permissions - `chmod 777` or `chmod +x configuredb.sh`

  2. Set password for the pg_hba.conf file]
    - inside the file change if methods are in "md5"
    - restart running server and type: > npm run configure


## Install node-postgres package

  Check website: (https://node-postgres.com/)
  Installation: `npm install pg`
  Run pool: `node db`

## Credits

 - [David E Lares](https://twitter.com/davidlares3)

## License

 - [MIT](https://opensource.org/licenses/MIT)
