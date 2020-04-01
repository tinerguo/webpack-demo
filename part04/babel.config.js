module.exports = (api) => {
  const presets = [
    [
      "@babel/preset-env", {
        "targets": {
          "chrome": "70"//,
          // "ie": "11"
        },
        "modules":"commonjs",
        "useBuiltIns": "usage",
        corejs: 2,
        debug:false
      }
    ]
  ];
  api.cache(false);

  return { presets };
}
