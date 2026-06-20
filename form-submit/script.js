let form = document.querySelector("form");

let username = document.querySelector("#name");
let role = document.querySelector("#role");
let bio = document.querySelector("#bio");
let photo = document.querySelector("#photo");

const userManager = {
    users: [],

    init: function () {
        form.addEventListener(
            "submit",
            this.submitForm.bind(this)
        );
    },

    submitForm: function (e) {
        e.preventDefault();

        this.addUser();
        this.renderUI();
    },

    addUser: function () {
        this.users.push({
            username: username.value,
            role: role.value,
            bio: bio.value,
            photo: photo.value,
        });

        form.reset();
    },

    renderUI: function () {
        let container = document.querySelector(".users");

        container.innerHTML = "";

        this.users.forEach((user, index) => {

            let card = document.createElement("div");
            card.className =
                "w-80 bg-zinc-900 border border-zinc-700 rounded-2xl p-8 text-center relative";

            let img = document.createElement("img");
            img.src = user.photo;
            img.alt = "user photo"
            img.className =
                "w-28 h-28 rounded-full mx-auto object-cover border-4 border-zinc-700";

            let name = document.createElement("h2");
            name.textContent = user.username;
            name.className =
                "text-white text-3xl font-bold mt-6";

            let userRole = document.createElement("p");
            userRole.textContent = user.role;
            userRole.className =
                "text-gray-300 text-lg mt-2";

            let userBio = document.createElement("p");
            userBio.textContent = user.bio;
            userBio.className =
                "text-gray-400 mt-6 leading-relaxed";

            let deleteBtn = document.createElement("button");
            deleteBtn.textContent = "Delete";
            deleteBtn.className =
                "mt-4 px-4 py-2 bg-red-600 text-white rounded";

            deleteBtn.addEventListener("click", () => {
                this.removeUser(index);
            });

            card.appendChild(img);
            card.appendChild(name);
            card.appendChild(userRole);
            card.appendChild(userBio);
            card.appendChild(deleteBtn);

            container.appendChild(card);
        });
    },

    removeUser: function (index) {
        this.users.splice(index, 1);
        this.renderUI();
    },
};

userManager.init();
