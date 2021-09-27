# for ci/cd pipeline
ci-clean:
	@rm -rf build
	@rm -rf package.tgz

ci-reallyclean: clean
	@rm -rf node_modules

ci-mods:
	@npm i

ci-test:
	@ng test

ci-lint:
	@ng lint

ci-prodbuild:
	@ng build --prod

# husky git-hooks commands
pre-push-hook:
	@yarn lint
	@yarn build
