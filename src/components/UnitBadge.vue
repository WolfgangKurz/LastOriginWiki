<script lang="tsx">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";
import { UnitRole, UnitType } from "@/Types";

const typeName = {
	light: "경장",
	air: "기동",
	heavy: "중장",
};
const roleName = {
	attacker: "공격기",
	defender: "보호기",
	supporter: "지원기",
};
const typeList = ["light", "air", "heavy"];

@Component({})
export default class UnitBadge extends Vue {
	@Prop({
		type: String,
		default: "",
	})
	private type!: UnitType;

	@Prop({
		type: String,
		default: "",
	})
	private role!: UnitRole;

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

	private get Type () {
		if (this.limit) {
			if (this.limit.includes("+"))
				return this.limit.substr(0, this.limit.indexOf("+"));
			else if (typeList.includes(this.limit))
				return this.limit;
			else
				return "";
		}
		return this.type;
	}

	private get Role () {
		if (this.limit) {
			if (this.limit.includes("+"))
				return this.limit.substr(this.limit.indexOf("+") + 1);
			else if (!typeList.includes(this.limit))
				return this.limit;
			else
				return "";
		}
		return this.role;
	}

	private get TypeName () {
		const type = this.Type as UnitType;
		return typeName[type] || "???";
	}

	private get RoleName () {
		const role = this.Role as UnitRole;
		return roleName[role] || "???";
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
				this.Type && this.Role
					? `${this.TypeName} ${this.RoleName}`
					: this.Type
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

	&[data-type="light"] > i {
		background-position-x: 0;
	}
	&[data-type="air"] > i {
		background-position-x: -$w;
	}
	&[data-type="heavy"] > i {
		background-position-x: -($w * 2);
	}

	&[data-type=""] {
		&[data-role="attacker"] > i {
			background-position-x: 0;
		}
		&[data-role="defender"] > i {
			background-position-x: -$w;
		}
		&[data-role="supporter"] > i {
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
		background-image: url($assetsRoot+"/unit-type.png");
		background-position: 0 0;
		background-repeat: no-repeat;
		vertical-align: bottom;
	}
	&[data-type=""] {
		&:not([data-role=""]) > i {
			background-image: url($assetsRoot+"/unit-role.png");
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
