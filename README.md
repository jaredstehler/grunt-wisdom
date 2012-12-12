## Wisdom

grunt-wisdom is a grunt task that dishes out a wise quote whenever you need it. 

### Installation

`npm install grunt-wisdom -D`

### Setup

```javascript
grunt.initConfig({
  // optionally, specify quotes you want
  wisdom: [
    'You are the greatest!',
    'Please, don\'t ever leave. You give me purpose.'
  ]
});

grunt.loadNpmTasks('grunt-wisdom');
```

