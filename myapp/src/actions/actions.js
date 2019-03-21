export const CreditAsync = () => {
	return {type: "CREDIT"};
};

export const Credit = val => {
	return dispatch => {
		setTimeout(() => {
			dispatch(CreditAsync());
		},200)
	}
}

export const DebitAsync = (count) => {
	if (count!==0) {
		return {type: "DEBIT"};
	}
};

export const Debit = val => {
	return dispatch => {
		setTimeout(() => {
			dispatch(DebitAsync());
		},200)
	}
}
export const Donate = () => {
	return {type: "DONATE"};
}