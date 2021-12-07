.PHONY:	start status stop

start:
	docker-compose up -d --build

status:
	docker ps

stop:
	docker-compose down

restart:
	docker-compose down && docker-compose up -d --build && docker logs -f social
