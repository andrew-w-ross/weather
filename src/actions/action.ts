export interface IAction<TPayload>{
	type:string;
	payload:TPayload;
}

export interface IActionCreator<TArgument, TPayload>{
	(argument:TArgument) : IAction<TPayload>;
}