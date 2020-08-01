module.exports = {
    "root": true,
    "env": {
        "es6": true,
        "node": true
    },
    "parser": "@typescript-eslint/parser",
    "extends": [
        "plugin:@typescript-eslint/recommended",
        "eslint:recommended",
        "standard"
    ],
    "rules": {
        /** 4空格 */
        "indent": [
            "error",
            4
        ],
        /** 双引号字符串 */
        "quotes": [
            "error",
            "double"
        ],
        /** 关键字后面加空格 */
        "keyword-spacing": [
            "error",
            {
                "before": true
            }
        ],
        /** 匿名函数声明时括号与函数名间加空格。 */
        "space-before-function-paren": [
            "error",
            {
                "anonymous": "always",
                "named": "never",
                "asyncArrow": "always"
            }
        ],
        "eqeqeq": ["error", "smart"],
        /** 字符串拼接操作符之间留空格 */
        "space-infix-ops": "error",
        /** 逗号后面加空格 */
        "comma-spacing": ["error", { "before": false, "after": true }],
        /** 关键字要与花括号保持在同一行 */
        "brace-style": "error",
        /** 单行if可省括号但是要换行 */
        "curly": ["error", "multi-or-nest"],
        "handle-callback-err": "error",
        /** 变量定义 一条只能一个 */
        "one-var": ["error", "never"],
        /** 单行代码块两边加空格 */
        "block-spacing": "error",
        /** 变量、函数命名 变量下划线 函数小驼峰 */
        "camelcase": ["error", { "properties": "never", ignoreDestructuring: true }],
        /** 行末逗号 */
        "comma-style": ["error", "last"],
        /** 文件末尾留一空行 */
        "eol-last": ["error", "always"],
        /** 函数调用时标识符与括号间不留间隔 */
        "func-call-spacing": ["error", "never"],
        /** 键值对当中冒号与值之间要留空白 */
        "key-spacing": ["error", { "beforeColon": false }],
        /** 构造函数要以大写字母开头 */
        "new-cap": ["error", { "newIsCap": true }],
        /** 无参的构造函数调用时要带上括号 */
        "new-parens": "error",
        /** 没分号 */
        "semi": ["error", "never"]
    }
}
