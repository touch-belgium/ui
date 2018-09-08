.PHONY: clean_db load_fixtures

all: clean_db load_fixtures

clean_db:
	python manage.py flush

load_fixtures:
	python manage.py loaddata users.json
	python manage.py loaddata teams.json
	python manage.py loaddata posts.json
	python manage.py loaddata venues.json
