<template>
	<div class="custom-control custom-switch custom-control-lg">
		<input
			type="checkbox"
			class="custom-control-input"
			:id="uid"
			v-model="innerChecked"
			v-bind="$attrs"
		/>
		<label class="custom-control-label" :for="uid">
			<slot>{{text}}</slot>
		</label>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Model, Prop } from "vue-property-decorator";

@Component({
	inheritAttrs: false,
})
export default class Checkbox extends Vue {
	@Model("change", { type: Boolean })
	private readonly checked!: boolean;

	private get innerChecked (): boolean {
		return this.checked;
	}

	private set innerChecked (value: boolean) {
		this.$emit("change", value);
	}

	@Prop({
		type: String,
		default: "Checkbox",
	})
	private text!: string;

	private get uid () {
		const key = Math.random().toString()
			.replace(/\./g, "");
		return "checkbox-" + key;
	}
}
</script>
