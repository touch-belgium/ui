# Usage

```
$ pipenv install
$ npm i
$ npm start &
$ pipenv shell
$ python manage.py migrate website
$ python manage.py runserver
```

Environment variables required in `settings.py` have to be set
somehow, in the `activate` script, .env file, etc.

The folder `MEDIA_ROOT` (also an env variable) has to be
created. FileBrowser will not create it.

## On Heroku/Dokku

The `heroku-buildpack-nodejs` should be used first in order to install
all dependencies specified in `package.json`.

The assets are generated after the buildpack has finished building the
Node.js part of the application as specified in the `heroku-postbuild`
script in `package.json`. There is no need for something like
`heroku-buildpack-run` to execute some arbitrary code in between
buildpacks.

Once these assets are available, Django can collect and serve them.

If the order of the buildpacks is switched, `heroku-buildpack-python`
is not able to collect the static assets.
