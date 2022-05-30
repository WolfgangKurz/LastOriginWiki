import { FunctionComponent } from "preact/compat";

export const BY: FunctionalComponent = (props) => <span class="badge bg-warning text-dark">{ props.children }</span>;
export const BR: FunctionalComponent = (props) => <span class="badge bg-danger">{ props.children }</span>;
