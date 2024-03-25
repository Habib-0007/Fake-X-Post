const canvas =
	document.getElementById("canvas");
const downloadBtn =
	document.getElementById(
		"downloadBtn"
	);
const updateBtn =
	document.querySelector(".update");
const inputs =
	document.querySelectorAll(
		".inputs-area input"
	);
const textarea =
	document.querySelector("textarea");
var imageDp = document.querySelector(
	".details img"
);
var dpNameText = document.querySelector(
	".names strong"
);
var userNameText =
	document.querySelector(".names p");
var postContent =
	document.querySelector(".post");
var timeText = document.querySelector(
	".first-start .time"
);
var dateText = document.querySelector(
	".first-start .date"
);
var viewsVal = document.querySelector(
	".first-start .views"
);
var repostsVal = document.querySelector(
	".first-start .reposts"
);
var quotesVal = document.querySelector(
	".first-start .quotes"
);
var likesVal = document.querySelector(
	".first-start .likes"
);

updateBtn.addEventListener(
	"click",
	() => {
		const image = inputs[0].files[0];
		const dpName = inputs[1].value;
		const userName = inputs[2].value;
		const post = textarea.value;
		const time = inputs[3].value;
		const date = inputs[4].value;
		const views = `${inputs[5].value} Views`;
		const reposts = `${inputs[6].value} Reposts`;
		const quotes = `${inputs[7].value} Quotes`;
		const likes = `${inputs[4].value} Likes`;
		
		imageDp.src = image;
		dpName.textContent = dpName;
		userNameText.textContent = userName;
		postContent.textContent = post;
		timeText.textContent = time
		dateText.textContent = date
		viewsVal.textContent = views
		repostsVal.textContent = reposts 
		quotesVal.textContent = quotes
		likesVal.textContent = likes
	}
);

downloadBtn.addEventListener(
	"click",
	function () {
		html2canvas(canvas).then(canv => {
			simulateDownloadImageClick(
				canv.toDataURL(),
				"file-name.png"
			);
		});
	}
);

function simulateDownloadImageClick(
	uri,
	filename
) {
	var link =
		document.createElement("a");
	if (
		typeof link.download !== "string"
	) {
		window.open(uri);
	} else {
		link.href = uri;
		link.download = filename;
		accountForFirefox(clickLink, link);
	}
}

function clickLink(link) {
	link.click();
}

function accountForFirefox(click) {
	let link = arguments[1];
	document.body.appendChild(link);
	click(link);
	document.body.removeChild(link);
}
