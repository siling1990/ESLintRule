const Common = require("../util/Common")
module.exports = {
    meta: {
      docs: {
        description: '禁止直接使用console',
      },
    },
    create: function (context) {
    /**
     * console检测
     * 
    */

    return {
      Identifier:(node)=>{
        if(node.name=="console"){
          context.report({
            loc:Common.getNodePos(node),
            node,
            message: '不可使用console函数使用！',
          });
        }
      }
    };
    },
  };