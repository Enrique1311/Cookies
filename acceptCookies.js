const d = document;
const $modalContainer = d.querySelector(".modal-container");
console.log($modalContainer);

const newDateUTC = (days) => {
	let date = new Date();
	date.setTime(date.getDate() + days * 1000 * 60 * 60 * 24);
	return date.toUTCString();
};

const createCookie = (name, days) => {
	expires = newDateUTC(days);
	d.cookie = `${name};expires=${expires}`;
};

const getCookie = (cookieName) => {
	let cookies = d.cookie;
	cookies = cookies.split(";");
	for (let i = 0; i < cookies.length; i++) {
		let cookie = cookies[i].trim();
		if (cookie.startsWith(cookieName)) {
			return cookie.split("=")[1];
		}
	}
	return "There is no cookie named " + cookieName;
};

if (getCookie("acceptedCookies") !== "yes") {
	setTimeout(() => {
		$modalContainer.classList.remove("hidden");

		d.querySelector(".accept").addEventListener("click", () => {
			createCookie("acceptedCookies=yes", 30);
			$modalContainer.classList.add("hidden");
		});

		d.querySelector(".deny").addEventListener("click", () => {
			createCookie("acceptedCookies=no", 30);
			$modalContainer.classList.add("hidden");
		});
	}, 200);
}
