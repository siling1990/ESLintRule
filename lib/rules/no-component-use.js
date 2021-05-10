const Common = require("../util/Common")
module.exports = {
    meta: {
      docs: {
        description: 'PureComponent替换Component提示',
      },
    },
    create: function (context) {
    /**
     * component使用检测
     * 
    */
   function check(node){
      if(node.superClass&&node.superClass.name=="Component"){
        context.report({
          loc:Common.getNodePos(node.superClass),
          node,
          message: 'Component 建议替换为PureComponent！',
        });
      }
      if(node.superClass&&node.superClass.type == "MemberExpression"&&node.superClass.property&&node.superClass.property.name == "Component"){
        context.report({
          loc:Common.getNodePos(node.superClass.property),
          node,
          message: 'Component 建议替换为PureComponent！',
        });
    }
   }

    return {
      ClassDeclaration:(node)=>{
        check(node);
      }
    };
    },
  };