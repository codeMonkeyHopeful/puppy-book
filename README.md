# PuppyBook

</div>
This repo leverages the work done by the creators of Django Ract Boilerplate as a starting point which can be found [here](https://github.com/justdjango/django-react-boilerplate)

---

## Backend development workflow

```json
virtualenv env
source env/bin/activate
pip install -r requirements.txt
python manage.py runserver
```

The repo includes an example credential file. To use the DB connections provided please rename `app-config-example.properties` to `app-config.properties` and supply the necessary inputs for DB connection. You can also add your own to be referenced in the repo as you desire.

Once defined you can access them via
`configs.get("YOUR_VARIABLE_NAME_HERE").data`

---

## Frontend development workflow

```json
npm i
npm start
```

## For deploying

```json
npm run build
```

---
