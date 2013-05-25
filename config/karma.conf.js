basePath = '../';

files = [
  JASMINE,
  JASMINE_ADAPTER,
  'src/*.js',
  'test/*.js'
];

autoWatch = true;

browsers = ['PhantomJS'];

junitReporter = {
  outputFile: 'test_out/unit.xml',
  suite: 'unit'
};
