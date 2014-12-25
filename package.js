 Package.describe({
  git: 'https://github.com/gliesesoftware/cfs-tempstore.git',
  name: 'gliese:cfs-tempstore',
  version: '0.1.4',
  summary: 'Gliese flavour of CollectionFS, temporary storage (INTERNAL USE ONLY)'
});

Npm.depends({
  'combined-stream': '0.0.4'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  api.use(['gliese:cfs-base@0.0.28', 'gliese:cfs-file@0.1.16']);

  api.use('cfs:filesystem@0.1.3', { weak: true });
  api.use('gliese:cfs-gridfs@0.0.28', { weak: true });

  api.addFiles([
    'tempStore.js'
  ], 'server');
});

// Package.on_test(function (api) {
//   api.use('collectionfs');
//   api.use('test-helpers', 'server');
//   api.use(['tinytest', 'underscore', 'ejson', 'ordered-dict',
//            'random', 'deps']);

//   api.addFiles('tests/server-tests.js', 'server');
// });
