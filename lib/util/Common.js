const Common = {
    getNodePos:(node)=>{
        let result = {
            start:0,
            end:0,
        };
        if(node&&node.loc){
            result={
                start:node.loc.start,
                end:node.loc.end,
            };
        }
        return result;
    }
}
module.exports = Common 