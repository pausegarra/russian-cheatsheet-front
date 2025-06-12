help: ## Show this help.
	@awk 'BEGIN {FS = ":.*?## "} /[a-zA-Z_-]+:.*?## / {sub("\\\\n",sprintf("\n%22c"," "), $$2);printf " \033[36m%-20s\033[0m  %s\n", $$1, $$2}' $(MAKEFILE_LIST)

dev: ## Run the application in dev mode.
	yarn dev

build: ## Build the application.
	yarn build

install: ## Install the dependencies.
	yarn

build-docker: ## Build the docker image.
	docker build -t russian-cheatsheet-front .

CURRENT_VERSION := $(shell grep '"version"' package.json | sed -E 's/.*"version": "(.*)".*/\1/')

tag: ## Tag the version.
	git tag $(CURRENT_VERSION)
	git push origin $(CURRENT_VERSION)

.PHONY: help dev build