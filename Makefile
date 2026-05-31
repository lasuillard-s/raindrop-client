#!/usr/bin/env -S make -f

MAKEFLAGS += --warn-undefined-variable
MAKEFLAGS += --no-builtin-rules
MAKEFLAGS += --silent

SHELL := bash
.ONESHELL:
.SHELLFLAGS := -eu -o pipefail -c
.DELETE_ON_ERROR:
.DEFAULT_GOAL := help

help: Makefile  ## Show help
	for makefile in $(MAKEFILE_LIST)
	do
		@echo "$${makefile}"
		@grep -E '(^[a-zA-Z_-]+:.*?##.*$$)|(^##)' "$${makefile}" | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[32m%-30s\033[0m %s\n", $$1, $$2}' | sed -e 's/\[32m##/[33m/'
	done


# =============================================================================
# Common
# =============================================================================
install:  ## Install deps and tools
	npm install
.PHONY: install

init:  ## Initialize the project
	pre-commit install --install-hooks
.PHONY: init

update:  ## Update deps and tools
	npm update
	pre-commit autoupdate
.PHONY: update


# =============================================================================
# CI
# =============================================================================
ci: generate lint test  ## Run CI tasks
.PHONY: ci

generate:  ## Generate codes from schemas
	mkdir --parents ./src/generated
	pipx run 'devobs~=0.2.1' assert-diff \
		--target ./src/generated \
		-- \
		npm run generate
.PHONY: generate

fmt:  ## Run autoformatters
	npm run fmt
.PHONY: fmt

fix:  ## Apply autofixes
	npm run lint:fix
.PHONY: fix

lint: generate  ## Run all linters
	npm run lint
	npm run typecheck
.PHONY: lint

test: generate  ## Run tests
	npm run test
.PHONY: test

test-refresh: generate  ## Invalidate recordings and run tests to update them
	rm -rf ./tests/__recordings__/*
	npm run test:unit --update
	npm run test:type
.PHONY: test-refresh

docs:  ## Generate dev documents
	npm run make-docs
.PHONY: docs


# =============================================================================
# Handy Scripts
# =============================================================================
clean:  ## Remove temporary files
	rm -rf coverage/ junit.xml dist/ tests/__typechecks__
	find . -path '*/__snapshots__*' -delete
	find . -path "*.log*" -delete
.PHONY: clean
