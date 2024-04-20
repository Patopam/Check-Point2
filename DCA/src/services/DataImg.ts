export const getImg = async (text:string) => {
	try {
		const dataCatsImg = await fetch(`https://cataas.com/cat/says/${text}`).then((res) => res.json());
		console.log(dataCatsImg);
		return dataCatsImg;
	} catch (error) {
		console.log('error', error);
		return error;
	}
};
