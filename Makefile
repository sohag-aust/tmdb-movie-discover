# for ci/cd pipeline
ci-clean:
	@rm -rf build
	@rm -rf package.tgz

ci-reallyclean: clean
	@rm -rf node_modules

ci-mods:
	@npm i

ci-test:
	@npm run test

ci-lint:
	@npm run lint

ci-prodbuild:
	@npm run build --prod

# husky git-hooks commands
pre-push-hook:
	@yarn lint
	@yarn build
