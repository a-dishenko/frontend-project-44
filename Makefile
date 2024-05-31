install:
	npm ci

eslint:
	npx eslint

brain-games:
	node bin/brain-games.js

publish:
	npm publish --dry-run
