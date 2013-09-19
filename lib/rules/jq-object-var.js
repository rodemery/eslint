/**
 * @fileoverview Rule to ensures that when dealing with jQuery objects they are always 
 * given a variable name starting with $
 * @author Rodrigue Bassono
 */

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {
    
    "use strict";

    return {

        "VariableDeclaration": function(node) {
            var regex = /^\$/;

            node.declarations.forEach(function(declaration){
                var init = declaration.init;

                if (init && init.type === "CallExpression" &&
                    init.callee && init.callee.type === "Identifier" &&
                    (init.callee.name === "$" || init.callee.name === "jQuery") &&
                    !regex.exec(declaration.id.name)) {

                    context.report(node, "jQuery object variable name should start with $");
                }

            });

        }
    };

};