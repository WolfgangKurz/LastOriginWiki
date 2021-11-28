module.exports = {
	JSXFragment: function (node, state) {
		this[node.openingFragment.type](node.openingFragment, state);

		for (var i = 0; i < node.children.length; i++) {
			var child = node.children[i];
			this[child.type](child, state);
		}

		this[node.closingFragment.type](node.closingFragment, state);
	},
	JSXOpeningFragment: function (node, state) {
		state.write("<>");
	},
	JSXClosingFragment: function (node, state) {
		state.write("</>");
	},
	JSXText: function (node, state) {
		state.write(node.value.replace(/\n\t/g, "\n"));
	},

	JSXElement: function (node, state) {
		state.write("<");
		this[node.openingElement.type](node.openingElement, state);
		if (node.closingElement) {
			state.write(">");
			for (var i = 0; i < node.children.length; i++) {
				var child = node.children[i];
				this[child.type](child, state);
			}
			state.write("</");
			this[node.closingElement.type](node.closingElement, state);
			state.write(">");
		} else {
			state.write(" />");
		}
	},
	// <div>
	JSXOpeningElement: function (node, state) {
		this[node.name.type](node.name, state);
		for (var i = 0; i < node.attributes.length; i++) {
			var attr = node.attributes[i];
			this[attr.type](attr, state);
		}
	},
	// </div>
	JSXClosingElement: function (node, state) {
		this[node.name.type](node.name, state);
	},
	// div
	JSXIdentifier: function (node, state) {
		state.write(node.name);
	},
	// Member.Expression
	JSXMemberExpression: function (node, state) {
		this[node.object.type](node.object, state);
		state.write(".");
		this[node.property.type](node.property, state);
	},
	// attr="something"
	JSXAttribute: function (node, state) {
		state.write(" ");
		this[node.name.type](node.name, state);
		state.write("=");
		this[node.value.type](node.value, state);
	},
	// namespaced:attr="something"
	JSXNamespacedName: function (node, state) {
		this[node.namespace.type](node.namespace, state);
		state.write(":");
		this[node.name.type](node.name, state);
	},
	// {expression}
	JSXExpressionContainer: function (node, state) {
		state.write("{");
		this[node.expression.type](node.expression, state);
		state.write("}");
	},
};
