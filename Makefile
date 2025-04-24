help: ## Show this help.
	@awk 'BEGIN {FS = ":.*?## "} /[a-zA-Z_-]+:.*?## / {sub("\\\\n",sprintf("\n%22c"," "), $$2);printf " \033[36m%-20s\033[0m  %s\n", $$1, $$2}' $(MAKEFILE_LIST)

dev: ## Run the application in dev mode.
	yarn dev

build: ## Build the application.
	yarn build

install: ## Install the dependencies.
	yarn

.PHONY: help dev build