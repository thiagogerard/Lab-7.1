
function addContact() {

    let userChoice;

    do {
        userChoice = prompt("Choose an option: first, last, new, or quit");
        if (userChoice === "first") {
            console.log("First contact: " + contacts[0]['name'] + " / " + contacts[0]['phone'] + " / " + contacts[0]['email']);
        } else if (userChoice === "last") {
            console.log("Last contact: " + contacts[contacts.length - 1].name + " / " + contacts[contacts.length - 1].phone + " / " + contacts[contacts.length - 1].email);
        } else if (userChoice === "new") {
            let newName = prompt("Enter name:");
            let newPhone = prompt("Enter phone number:");
            let newEmail = prompt("Enter email address:");

            // Validate input
            if (!newName || isNaN(newPhone) || !newEmail.includes("@")) {
                alert("Invalid input. Please try again.");
                continue;
            }

            // Add new contact
            contacts.unshift({
                name: newName,
                phone: newPhone,
                email: newEmail
            });
            display();

        } else if (userChoice === "quit") {
            break;
        }
    } while (true);
}


let contacts = [];

contacts.push({ name: "Maxwell Wright", phone: 1917196495, email: "agent1.@cctb.ca" });
contacts.push({ name: "Tom MacDonalds", phone: 1917776495, email: "agent2.@cctb.ca" });
contacts.push({ name: "Helen Richards", phone: 19108001111, email: "agent3.@cctb.ca" });

display();

function display() {
    let contact_list = document.getElementById("contact_list");
    contact_list.innerHTML = "";
    for (let i = 0; i < contacts.length; i++) {
        contact_list.innerHTML += "<li class='list-group-item'>"
            + contacts[i]['name'] + " / "
            + contacts[i]['phone'] + " / "
            + contacts[i]['email'] + "</li>";
        console.log("New contact added: " + contacts[i]['name']);
    }
}