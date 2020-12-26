## 4.0.8 (2020-12-26)

### Chores


Update build configuration ([e59dbe3](https://github.com/sealsystems/node-request-service/commit/e59dbe3))

Update build configuration ([da7b3e5](https://github.com/sealsystems/node-request-service/commit/da7b3e5))

## 4.0.7 (2020-12-21)

### Chores


Trigger release ([639b3da](https://github.com/sealsystems/node-request-service/commit/639b3da))

## 4.0.6 (2020-12-21)

### Chores


bump [@sealsystems](https://github.com/sealsystems)/connect-service from 3.0.3 to 3.0.4 ([#70](https://github.com/sealsystems/node-request-service/issues/70)) ([7e1bc8a](https://github.com/sealsystems/node-request-service/commit/7e1bc8a))

bump [@sealsystems](https://github.com/sealsystems)/log from 2.2.2 to 2.2.3 ([#77](https://github.com/sealsystems/node-request-service/issues/77)) ([1fc359d](https://github.com/sealsystems/node-request-service/commit/1fc359d))

## 4.0.5 (2020-09-02)

### Chores


bump [@sealsystems](https://github.com/sealsystems)/log from 2.2.1 to 2.2.2 ([#56](https://github.com/sealsystems/node-request-service/issues/56)) ([f66ee60](https://github.com/sealsystems/node-request-service/commit/f66ee60))

updated deps ([fb84a10](https://github.com/sealsystems/node-request-service/commit/fb84a10))

## 4.0.4 (2020-03-25)

### Bug Fixes


#### encode uri ([2a8776e](https://github.com/sealsystems/node-request-service/commit/2a8776e))

fix for PLS-58
### Chores


#### bump [@sealsystems](https://github.com/sealsystems)/connect-service from 3.0.1 to 3.0.2 ([#43](https://github.com/sealsystems/node-request-service/issues/43)) ([30a285a](https://github.com/sealsystems/node-request-service/commit/30a285a))

#### bump [@sealsystems](https://github.com/sealsystems)/log from 2.2.0 to 2.2.1 ([#44](https://github.com/sealsystems/node-request-service/issues/44)) ([1ad2b9b](https://github.com/sealsystems/node-request-service/commit/1ad2b9b))



---

## 4.0.3 (2020-03-09)

### Chores


#### yoed ([258fba7](https://github.com/sealsystems/node-request-service/commit/258fba7))



---

## 4.0.2 (2019-11-14)

### Chores


#### improve test ([a6e4a49](https://github.com/sealsystems/node-request-service/commit/a6e4a49))



---

## 4.0.1 (2019-11-14)

### Chores


#### improve test ([a9b599b](https://github.com/sealsystems/node-request-service/commit/a9b599b))



---

## 4.0.0 (2019-11-14)

### Features


#### Removed requires of consul, use options parameter ([2888037](https://github.com/sealsystems/node-request-service/commit/2888037))



### BREAKING CHANGES

#### Interface changed: consul is now part of options parameter.

Examples:

```javascript
const consul = require('@sealsystems/consul');

consul.connect(...);

const req = await requestService({ consul, service: 'myService' });
```

---

## 3.4.0 (2019-10-22)

### Features


#### PLS-431, [PLS-431](https://jira.sealsystems.de/jira/browse/PLS-431) ([eabfd9e](https://github.com/sealsystems/node-request-service/commit/eabfd9e))

- Removed roboter
 - Updated GitHub Pull Request template
 - Updated CircleCI config
 - Updated AppVeyor conig
 - Updated dependencies
 - Added `package-lock.json` to git
 - Added `.gitignore` to git
 - Fixed linting
 - Used `seal-node:oss-module-update`


---

## 3.3.7 (2019-10-18)

### Chores


#### bump [@sealsystems](https://github.com/sealsystems)/connect-service from 2.2.3 to 2.3.0 ([2803967](https://github.com/sealsystems/node-request-service/commit/2803967))

Bumps @sealsystems/connect-service from 2.2.3 to 2.3.0.

Signed-off-by: dependabot-preview[bot] <support@dependabot.com>


---

## 3.3.6 (2019-10-15)

### Chores


#### bump [@sealsystems](https://github.com/sealsystems)/connect-service from 2.2.2 to 2.2.3 ([4fcf92a](https://github.com/sealsystems/node-request-service/commit/4fcf92a))

Bumps @sealsystems/connect-service from 2.2.2 to 2.2.3.

Signed-off-by: dependabot-preview[bot] <support@dependabot.com>


---

## 3.3.5 (2019-10-09)

### Chores


#### bump [@sealsystems](https://github.com/sealsystems)/connect-service from 2.2.0 to 2.2.2 ([bc2550e](https://github.com/sealsystems/node-request-service/commit/bc2550e))

Bumps @sealsystems/connect-service from 2.2.0 to 2.2.2.

Signed-off-by: dependabot-preview[bot] <support@dependabot.com>


---

## 3.3.4 (2019-10-08)

### Chores


#### bump [@sealsystems](https://github.com/sealsystems)/log from 2.1.0 to 2.2.0 ([0586e13](https://github.com/sealsystems/node-request-service/commit/0586e13))

Bumps @sealsystems/log from 2.1.0 to 2.2.0.

Signed-off-by: dependabot-preview[bot] <support@dependabot.com>


---

## 3.3.3 (2019-09-27)

### Chores


#### bump [@sealsystems](https://github.com/sealsystems)/connect-service from 2.1.3 to 2.2.0 ([46d8235](https://github.com/sealsystems/node-request-service/commit/46d8235))

Bumps @sealsystems/connect-service from 2.1.3 to 2.2.0.

Signed-off-by: dependabot-preview[bot] <support@dependabot.com>


---

## 3.3.2 (2019-09-27)

### Chores


#### bump [@sealsystems](https://github.com/sealsystems)/consul from 4.0.1 to 4.1.0 ([2946cdb](https://github.com/sealsystems/node-request-service/commit/2946cdb))

Bumps @sealsystems/consul from 4.0.1 to 4.1.0.

Signed-off-by: dependabot-preview[bot] <support@dependabot.com>


---

## 3.3.1 (2019-09-18)

### Chores


#### bump [@sealsystems](https://github.com/sealsystems)/log from 2.0.26 to 2.1.0 ([a6596b2](https://github.com/sealsystems/node-request-service/commit/a6596b2))

Bumps @sealsystems/log from 2.0.26 to 2.1.0.

Signed-off-by: dependabot-preview[bot] <support@dependabot.com>


---

## 3.3.0 (2019-09-15)

### Features


#### PLS-431 ([763d9cf](https://github.com/sealsystems/node-request-service/commit/763d9cf))

- Updated GitHub Pull Request template
 - Added dependabot config
 - Removed roboter
 - Added package-lock.json to git
 - Updated scripts
 - Updated dependencies
 - Fixed linting
 - Updated CircleCI config
 - Updated appveyor config


---

## 3.2.1 (2018-11-20)



---

## 3.2.0 (2018-11-15)

### Features


#### Update dependencies ([b952b9b](https://github.com/sealsystems/node-request-service/commit/b952b9b))



---

## 3.1.1 (2018-09-09)

### Bug Fixes


#### Include all needed files in Node.js module ([c756842](https://github.com/sealsystems/node-request-service/commit/c756842))



---

## 3.1.0 (2018-09-08)

### Features


#### Use semantic-release ([9582e85](https://github.com/sealsystems/node-request-service/commit/9582e85))



---
