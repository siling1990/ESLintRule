const Common = require("../util/Common")
module.exports = {
    meta: {
      docs: {
        description: '属性匿名函数检测',
      },
    },
    create: function (context) {
    return {
      JSXAttribute: (node) => {
        if(node.value.type=="JSXExpressionContainer"&&node.value.expression.type == "ArrowFunctionExpression"){
          context.report({
            loc: Common.getNodePos(node),
            node,
            message: '不可使用匿名函数，需定义函数使用！',
          });
        }
      }
    };
    },
  };