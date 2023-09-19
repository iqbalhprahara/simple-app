#!/usr/bin/make
SHELL = /bin/sh

APP_PUID := $(shell id -u)
APP_PGID := $(shell id -g)

build := (APP_PUID=$(APP_PUID) APP_PGID=$(APP_PGID) docker compose build)
run := (APP_PUID=$(APP_PUID) APP_PGID=$(APP_PGID) docker compose up -d)

build :
	$(build)

run :
	$(run)

stop:
	docker compose stop
