# RNFetchHeaderError

This project is created for repro [React Native headers parse error](https://github.com/facebook/react-native/issues/11128).

You can try to run this react native project in simulator, either iOS or Android, It will report the number of headers it get.

We tested it with https://github.com , the page's heaers will contain nearly 20 key/value pairs, but the app reports it has only 2 key/value pairs.

This issue not repro with the latest react native.

## Environment
~~~
react-native-cli: 1.0.0
react-native: 0.34.1

"react": "15.3.1",
 "react-native": "^0.34.1",
node v6.2.2
~~~
