module.exports = {
  "env": {
    "browser": true,
    "es2021": true,
    "node": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-redux/recommended"
  ],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "sourceType": "module",
    "ecmaVersion": 12,
    "project": "./tsconfig.json",
  },
  "plugins": [
    "react",
    "react-hooks",
    "react-redux"
  ],
  "overrides": [
    {
      "files": ["test/*.spec.ts"],
      "rules": {
        "require-jsdoc": "off"
      }
    }
  ],
  "rules": {
    "no-unused-vars": 0,
    "no-console": 1,
    "react-hooks/rules-of-hooks": 2,
    "react-hooks/exhaustive-deps": 1,
    "react/prop-types": 1,
    "react-redux/connect-prefer-named-arguments": 2
  },
  "settings": {
    "react": {
      "pragma": "React",
      "version": "detect"
    },
    "import/extensions": [
      ".js",
      ".jsx"
    ]
  },
  "ignorePatterns": []
};
