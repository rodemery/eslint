/**
 * @fileoverview Tests for jq-object-var rule.
 * @author Rodrigue Bassono
 */

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var vows = require("vows"),
    assert = require("assert"),
    eslint = require("../../../lib/eslint");

//------------------------------------------------------------------------------
// Constants
//------------------------------------------------------------------------------

var RULE_ID = "jq-object-var";

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

vows.describe(RULE_ID).addBatch({

    "when evaluating 'var el = $(\".selector\");'": {

        topic: "var el = $(\".selector\");",

        "should report a violation": function(topic) {
            var config = { rules: {} };
            config.rules[RULE_ID] = 1;

            var messages = eslint.verify(topic, config);

            assert.equal(messages.length, 1);
            assert.equal(messages[0].ruleId, RULE_ID);
            assert.equal(messages[0].message, "jQuery object variable name should start with $");
            assert.include(messages[0].node.type, "VariableDeclaration");
        }
    },

    "when evaluating 'var el = jQuery(\".selector\");'": {

        topic: "var el = jQuery(\".selector\");",

        "should report a violation": function(topic) {
            var config = { rules: {} };
            config.rules[RULE_ID] = 1;

            var messages = eslint.verify(topic, config);

            assert.equal(messages.length, 1);
            assert.equal(messages[0].ruleId, RULE_ID);
            assert.equal(messages[0].message, "jQuery object variable name should start with $");
            assert.include(messages[0].node.type, "VariableDeclaration");
        }
    },

    "when evaluating 'var $el = $(\".selector\");'": {

        topic: "var $el = $(\".selector\");",

        "should not report a violation": function(topic) {
            var config = { rules: {} };
            config.rules[RULE_ID] = 1;

            var messages = eslint.verify(topic, config);

            assert.equal(messages.length, 0);
        }
    },

    "when evaluating 'var $el = jQuery(\".selector\");'": {

        topic: "var $el = jQuery(\".selector\");",

        "should not report a violation": function(topic) {
            var config = { rules: {} };
            config.rules[RULE_ID] = 1;

            var messages = eslint.verify(topic, config);

            assert.equal(messages.length, 0);
        }
    },

    "when evaluating 'var width = $(\".thing\").width();'": {

        topic: "var width = $(\".thing\").width();",

        "should not report a violation": function(topic) {
            var config = { rules: {} };
            config.rules[RULE_ID] = 1;

            var messages = eslint.verify(topic, config);

            assert.equal(messages.length, 0);
        }
    }



}).export(module);
