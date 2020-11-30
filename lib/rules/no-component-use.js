const Common = require("../util/Common")
module.exports = {
    meta: {
      docs: {
        description: '禁止直接使用console',
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
          message: 'Component 替换为PureComponent使用！',
        });
      }
      if(node.superClass&&node.superClass.type == "MemberExpression"&&node.superClass.property&&node.superClass.property.name == "Component"){
        context.report({
          loc:Common.getNodePos(node.superClass.property),
          node,
          message: 'Component 替换为PureComponent使用！',
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