import {test} from './idea'
const testElement = document.getElementById('test');

// 外部ファイルの値を使用できる
testElement.innerHTML = `こんにちは${test}さん`;