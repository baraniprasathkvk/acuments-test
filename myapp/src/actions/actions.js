export const Credit = () => {
	return {type: "CREDIT"};
};

export const Debit = (count) => {
	if (count!=0) {
		return {type: "DEBIT"};
	}
};

export const Donate = () => {
	return {type: "DONATE"};
}