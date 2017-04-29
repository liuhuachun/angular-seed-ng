// Karma configuration file, see link for more information
// https://karma-runner.github.io/0.13/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',

    // 目前支持的框架： https://www.npmjs.com/browse/keyword/karma-plugin
    frameworks: ['jasmine', '@angular/cli'],

    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-html-detailed-reporter'),
      require('karma-coverage'),
      require('@angular/cli/plugins/karma')
    ],
    client:{
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },

    // 将会在浏览器里面执行的代码
    files: [
      { pattern: './src/test.ts', watched: false }
    ],

    // 需要从 files 中排除掉的文件
    exclude: [],

    // 需要做预处理的文件，以及这些文件对应的预处理器。
    preprocessors: {
      './src/test.ts': ['@angular/cli'],
      // source files, that you wanna generate coverage for
      // do not include tests or libraries
      // (these files will be instrumented by Istanbul)
      'src/app/**/*.js': ['coverage']
    },
    mime: {
      'text/x-typescript': ['ts','tsx']
    },

    // 覆盖率报告器配置
    coverageReporter: {
      dir: '_reports/coverage'
      // Would output the results into: './coverage/firefox/'
    },
	  htmlDetailed: {
        splitResults: true
    },

    // 实际使用的报告期
    // 可用的报告器： https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'htmlDetailed', 'coverage'],

    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false
  });
};
