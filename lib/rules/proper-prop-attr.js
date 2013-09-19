/**
 * @fileoverview Rule to detect the improper use of .prop() or .attr() when dealing with jQuery code
 * @author Rodrigue Bassono
 */


//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------
module.exports = function(context) {

    "use strict";

    return {

        "ExpressionStatement": function(node){
            if (node.expression.type === "CallExpression" && 
                node.expression.callee.type === "MemberExpression" &&
                node.expression.callee.property.name === "attr" &&
                node.expression.arguments[0].type === "Literal" &&
                (node.expression.arguments[0].value === "checked" || node.expression.arguments[0].value === "disabled")){

                context.report(node, "Should use attribute 'prop' instead of 'attr'");
            }
        }

    };

};
