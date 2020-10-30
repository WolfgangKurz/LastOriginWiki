<script lang="tsx">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";

import { ACTOR_CLASS, ROLE_TYPE } from "@/libs/Types/Enums";

const typeName: Record<ACTOR_CLASS, string> = {
	[ACTOR_CLASS.LIGHT]: "경장",
	[ACTOR_CLASS.AIR]: "기동",
	[ACTOR_CLASS.HEAVY]: "중장",
	[ACTOR_CLASS.__MAX__]: "",
};
const roleName: Record<ROLE_TYPE, string> = {
	[ROLE_TYPE.ATTACKER]: "공격기",
	[ROLE_TYPE.DEFENDER]: "보호기",
	[ROLE_TYPE.SUPPORTER]: "지원기",
	[ROLE_TYPE.__MAX__]: "",
};
const typeList = [
	"light",
	"air",
	"heavy",
];

@Component({})
export default class UnitBadge extends Vue {
	@Prop({
		type: Number,
		default: ACTOR_CLASS.__MAX__,
	})
	private type!: ACTOR_CLASS;

	@Prop({
		type: Number,
		default: ROLE_TYPE.__MAX__,
	})
	private role!: ROLE_TYPE;

	@Prop({
		type: String,
		default: "",
	})
	private limit!: string;

	@Prop({
		type: Boolean,
		default: false,
	})
	private transparent!: boolean;

	@Prop({
		type: Boolean,
		default: false,
	})
	private black!: boolean;

	@Prop({
		type: String,
		default: "normal",
	})
	private size!: string;

	private get Limit () {
		return this.limit.toLowerCase();
	}

	private get Type (): ACTOR_CLASS {
		const table: Record<string, ACTOR_CLASS> = {
			light: ACTOR_CLASS.LIGHT,
			air: ACTOR_CLASS.AIR,
			heavy: ACTOR_CLASS.HEAVY,
		};
		if (this.Limit) {
			if (this.Limit.includes("+"))
				return table[this.Limit.split("+")[0]];
			else if (typeList.includes(this.Limit))
				return table[this.Limit];
			else
				return ACTOR_CLASS.__MAX__;
		}
		return this.type;
	}

	private get Role (): ROLE_TYPE {
		const table: Record<string, ROLE_TYPE> = {
			attacker: ROLE_TYPE.ATTACKER,
			defender: ROLE_TYPE.DEFENDER,
			supporter: ROLE_TYPE.SUPPORTER,
		};
		if (this.Limit) {
			if (this.Limit.includes("+"))
				return table[this.Limit.split("+")[0]];
			else if (!typeList.includes(this.Limit))
				return table[this.Limit];
			else
				return ROLE_TYPE.__MAX__;
		}
		return this.role;
	}

	private get TypeName () {
		return typeName[this.Type] || "???";
	}

	private get RoleName () {
		return roleName[this.Role] || "???";
	}

	private render () {
		return <b-badge
			class="unit-badge"
			variant={!this.transparent ? "primary" : "transparent"}
			data-size={this.size}
			data-type={this.Type}
			data-role={this.Role}
			data-black={this.black ? "1" : "0"}
		>
			<i />
			{
				this.Type < ACTOR_CLASS.__MAX__ && this.Role < ROLE_TYPE.__MAX__
					? `${this.TypeName} ${this.RoleName}`
					: this.Type < ACTOR_CLASS.__MAX__
						? `${this.TypeName}형`
						: this.RoleName
			}
		</b-badge>;
	}
}
</script>

<style lang="scss">
@mixin Build($basis: 14px) {
	$size: $basis;
	$w: $size;
	$h: $size;

	> i {
		width: $w;
		height: $h;
		background-size: ($w * 3) ($h * 2);
	}

	&[data-black="1"] {
		color: #000;

		> i {
			background-position-y: -$h;
		}
	}

	&[data-type="0"] > i {
		background-position-x: 0;
	}
	&[data-type="1"] > i {
		background-position-x: -($w * 2);
	}
	&[data-type="2"] > i {
		background-position-x: -$w;
	}

	&[data-type=""] {
		&[data-role="0"] > i {
			background-position-x: -$w;
		}
		&[data-role="1"] > i {
			background-position-x: 0;
		}
		&[data-role="2"] > i {
			background-position-x: -($w * 2);
		}
	}
}

.badge.unit-badge {
	margin-right: 4px;

	&:last-child {
		margin-right: 0;
	}

	> i {
		display: inline-block;
		margin: 0 3px 0 0;
		background-image: url($assetsRoot + "/unit-type.png");
		background-position: 0 0;
		background-repeat: no-repeat;
		vertical-align: bottom;
	}
	&[data-type=""] {
		&:not([data-role=""]) > i {
			background-image: url($assetsRoot + "/unit-role.png");
		}
		&[data-role=""] > i {
			display: none;
		}
	}

	@include Build();

	&[data-size="large"] {
		@include Build(18px);
		font-size: 18px;
	}
}
</style>
