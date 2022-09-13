import { FunctionComponent } from "preact/compat";

export const BY: FunctionalComponent = (props) => <span class="badge bg-warning text-dark">{ props.children }</span>;
export const BR: FunctionalComponent = (props) => <span class="badge bg-danger">{ props.children }</span>;
export const BO: FunctionalComponent = (props) => <span class="badge bg-orange">{ props.children }</span>;
export const BB: FunctionalComponent = (props) => <span class="badge bg-dark">{ props.children }</span>;
