/**
 * @fileoverview Tests for proper-prop-attr rule.
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

var RULE_ID = "proper-prop-attr";

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

vows.describe(RULE_ID).addBatch({

    "when evaluating '$(\".selector\").attr(\"checked\", \"\");'": {

        topic: "$(\".selector\").attr(\"checked\", \"\");",

        "should report a violation": function(topic) {
            var config = { rules: {} };
            config.rules[RULE_ID] = 1;

            var messages = eslint.verify(topic, config);

            assert.equal(messages.length, 1);
            assert.equal(messages[0].ruleId, RULE_ID);
            assert.equal(messages[0].message, "Should use attribute 'prop' instead of 'attr'");
            assert.include(messages[0].node.type, "ExpressionStatement");
        }
    },

    "when evaluating '$(\".selector\").attr(\"checked\", \"checked\");'": {

        topic: "$(\".selector\").attr(\"checked\", \"checked\");",

        "should report a violation": function(topic) {
            var config = { rules: {} };
            config.rules[RULE_ID] = 1;

            var messages = eslint.verify(topic, config);

            assert.equal(messages.length, 1);
            assert.equal(messages[0].ruleId, RULE_ID);
            assert.equal(messages[0].message, "Should use attribute 'prop' instead of 'attr'");
            assert.include(messages[0].node.type, "ExpressionStatement");
        }
    },

    "when evaluating '$(\".selector\").attr(\"disabled\", true);'": {

        topic: "$(\".selector\").attr(\"disabled\", true);",

        "should report a violation": function(topic) {
            var config = { rules: {} };
            config.rules[RULE_ID] = 1;

            var messages = eslint.verify(topic, config);

            assert.equal(messages.length, 1);
            assert.equal(messages[0].ruleId, RULE_ID);
            assert.equal(messages[0].message, "Should use attribute 'prop' instead of 'attr'");
            assert.include(messages[0].node.type, "ExpressionStatement");
        }
    },

    "when evaluating '$(\".selector\").attr(\"disabled\", false);'": {

        topic: "$(\".selector\").attr(\"disabled\", false);",

        "should report a violation": function(topic) {
            var config = { rules: {} };
            config.rules[RULE_ID] = 1;

            var messages = eslint.verify(topic, config);

            assert.equal(messages.length, 1);
            assert.equal(messages[0].ruleId, RULE_ID);
            assert.equal(messages[0].message, "Should use attribute 'prop' instead of 'attr'");
            assert.include(messages[0].node.type, "ExpressionStatement");
        }
    },

    "when evaluating '$(\".selector\").prop(\"checked\", false);'": {

        topic: "$(\".selector\").prop(\"checked\", false);",

        "should not report a violation": function(topic) {
            var config = { rules: {} };
            config.rules[RULE_ID] = 1;

            var messages = eslint.verify(topic, config);

            assert.equal(messages.length, 0);
        }
    },

    "when evaluating '$(\".selector\").prop(\"checked\", true);'": {

        topic: "$(\".selector\").prop(\"checked\", true);",

        "should not report a violation": function(topic) {
            var config = { rules: {} };
            config.rules[RULE_ID] = 1;

            var messages = eslint.verify(topic, config);

            assert.equal(messages.length, 0);
        }
    },

    "when evaluating '$(\".selector\").prop(\"disabled\", true);'": {

        topic: "$(\".selector\").prop(\"disabled\", true);",

        "should not report a violation": function(topic) {
            var config = { rules: {} };
            config.rules[RULE_ID] = 1;

            var messages = eslint.verify(topic, config);

            assert.equal(messages.length, 0);
        }
    },

    "when evaluating '$(\".selector\").prop(\"disabled\", false);'": {

        topic: "$(\".selector\").prop(\"disabled\", false);",

        "should not report a violation": function(topic) {
            var config = { rules: {} };
            config.rules[RULE_ID] = 1;

            var messages = eslint.verify(topic, config);

            assert.equal(messages.length, 0);
        }
    }



}).export(module);
