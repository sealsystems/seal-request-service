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

# Changelog

## <a name="2-1-3"></a>2.1.3

2016-09-05

### Bugfixes

- foobar

---

## <a name="2-1-2"></a>2.1.2

2016-09-03

### Bugfixes

- bar

---

## <a name="2-1-1"></a>2.1.1

2016-09-01

### Bugfixes

- foo

---

## <a name="2-1-0"></a>2.1.0

2016-08-30

### New Features

- Now in STEREO!

---

## <a name="2-0-0"></a>2.0.0

2016-06-08

### Breaking Changes

- foo
- bar

### New Features

- baz

### Bugfixes

- foobar

---

## <a name="1-1-1"></a>1.1.1

2016-02-15

### Bugfixes

- Minor bug fixed

---

## <a name="1-1-0"></a>1.1.0

2016-02-14

### New Features

- Some cool new feature

---

## <a name="1-0-0"></a>1.0.0

2016-01-01

---

```
{
  major: ['major', 'break', 'breaking']
  minor: ['minor', 'feature', 'new']
  patch: ['patch', 'bug', 'fix']
}

{
  major: {
    title: 'Breaking Changes'
    labels: ['major', 'break', 'breaking']
  },
  minor: {
    title: 'New Features'
    labels: ['minor', 'feature', 'new']
  },
  patch: {
    title: 'Bugfixes'
    labels: ['patch', 'bug', 'fix']
  }
}

git log <last version tag>..HEAD --oneline --grep "^(major|break|breaking):\s*" -E -i --pretty=format:%s
```
