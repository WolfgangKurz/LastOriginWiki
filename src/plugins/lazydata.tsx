import { _e } from "@/libs/VNode";
import Vue from "vue";
import Component from "vue-class-component";
import { Prop, Watch } from "vue-property-decorator";

@Component({})
class LazyDataBase extends Vue {
	@Prop({
		default: null,
	})
	private data!: any;

	@Watch("data", { immediate: true })
	private DataWatch (newValue: any) {
		if (newValue === false)
			this.$emit("error");
	}

	public render () {
		return <div { ...this.$attrs }>
			{
				this.data === null
					? this.$slots.loading || <div class="lazy-data">JSON 데이터를 불러오고 있습니다...</div>
					: this.data === false
						? this.$slots.error || <div class="lazy-data">
							JSON 데이터를 불러오지 못했습니다.<br />
							올바른 주소인지 확인해보세요.
						</div>
						: this.$slots.default || _e()
			}
		</div>;
	}
}

Vue.component("lazy-data-base", LazyDataBase);
