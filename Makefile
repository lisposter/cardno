NODE ?=

TESTS = test/*

test:
  @$(NODE) ./node_modules/.bin/mocha \
    --require should \
    --reporter spec \
    --slow 5s \
    --timeout 30000 \
    --bail

test-cov:
  @NODE_ENV=test node  \
    node_modules/.bin/istanbul cover \
    ./node_modules/.bin/_mocha \
    -- -u exports \
    --require should \
    --timeout 30000 \
    $(TESTS) \
    --bail

test-travis:
  @NODE_ENV=test node  \
    node_modules/.bin/istanbul cover \
    ./node_modules/.bin/_mocha \
    --report lcovonly \
    -- -u exports \
    --require should \
    --slow 5s \
    --timeout 50000 \
    $(TESTS) \
    --bail

build:
  @$(NODE) ./node_modules/.bin/uglifyjs \
    lib/cardno.js -o dist/cardno.min.js --reserved "module,exports,cardno,is,normalize,validate" \
    --source-map dist/cardno.min.map -c -m sort

.PHONY: test
