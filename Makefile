.PHONY: clean_db load_fixtures

all: clean_db load_fixtures

clean_db:
	python manage.py flush

load_fixtures:
	python manage.py loaddata touchbelgium-users.json
	python manage.py loaddata touchbelgium-teams.json
	python manage.py loaddata touchbelgium-posts.json
	python manage.py loaddata touchbelgium-venues.json
