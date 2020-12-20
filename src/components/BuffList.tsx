import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";

import { BuffStat } from "@/libs/Buffs/Buffs";
import BuffStatus from "@/libs/Buffs/BuffStatus";
import { UniqueID } from "@/libs/Functions";

import ElemIcon from "@/components/ElemIcon.vue";

@Component({
	components: {
		ElemIcon,
	},
})
export default class BuffList extends Vue {
	@Prop({
		type: Array,
		default: () => [],
	})
	private list!: BuffStat[];

	@Prop({
		type: Number,
		default: 0,
	})
	private level!: number;

	private uid: string = "";

	public created () {
		this.uid = UniqueID();
	}

	public render () {
		const list = this.list.map(status => BuffStatus(this, status, this.level))
			.filter(x => x && x.length > 0);
		return <div class="buff-list mt-3">
			{ list.map((status, idx) => <b-list-group class="text-left mt-2" key={ `buff-list-${this.uid}-${idx}` }>
				{ status.map((item, iidx) => <b-list-group-item key={ `buff-list-${this.uid}-${idx}-${iidx}` }>{ item }</b-list-group-item>) }
			</b-list-group>) }
		</div>;
	}
}
