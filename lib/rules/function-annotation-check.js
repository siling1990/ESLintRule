const Common = require("../util/Common")
module.exports = {
    meta: {
      docs: {
        description: '方法之前需要包含注释',
      },
    },
    create: function (context) {
    /**
     * 二分查找
     * 
    */
   function check(arrays,index){
      
   }

    return {
      Program: function (ast) {
        let comments = ast.comments;
        let body = ast.body;
        let classArray = [];
        if(body&&body.length>0){
          body.map((declrea,index)=>{
            if(declrea.type=='ClassDeclaration'){
              classArray.push(declrea)
            }
          })
        }
        if(classArray&&classArray.length>0){
          classArray.map((classItem,index)=>{
              let classsBody = classItem.body.body;
              if(classsBody&&classsBody.length>0){
                classsBody.map((classMember,index)=>{
                    if(classMember&&(classMember.type == 'MethodDefinition'||classMember.value.type == 'ArrowFunctionExpression')){
                     
                        let start = classMember.loc.start;
                        let getComent = false;
                        if(comments&&comments.length>0){
                          comments.map((coment,index)=>{
                            let end = coment.loc.end;
                              if(start.line == end.line+1){
                                getComent = true;
                              }
                          })
                        }
                        if(!getComent){
                          context.report({
                            loc:classMember.loc,
                            node: classMember,
                            message: '方法之前需要包含注释!'});
                        }
                    }
                })
              }
          })
        }
        
      }
    };
    },
  };