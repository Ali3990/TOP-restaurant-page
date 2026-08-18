export function createRsvpTab() {
    const rsvpForm = document.createElement("form");
    rsvpForm.classList.add("rsvp-form")
    document.querySelector("#content").append(rsvpForm);

    const header = document.createElement("h2");
    header.innerHTML = "Reserve a table";
    rsvpForm.append(header)

    // .htmlFor and .id are linked.
    const nameLabel = document.createElement("label");
    nameLabel.textContent = "Enter Name: ";
    nameLabel.htmlFor = "rsvp-name";
    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.id = "rsvp-name";
    nameInput.name = "Name";
    rsvpForm.append(nameLabel);
    rsvpForm.append(nameInput);

    const partyLabel = document.createElement("label");
    partyLabel.textContent = "Size of party: ";
    partyLabel.htmlFor = "rsvp-party";
    const partyInput = document.createElement("input");
    partyInput.type = "number";
    partyInput.id = "rsvp-party";
    partyInput.min = "1";
    rsvpForm.append(partyLabel);
    rsvpForm.append(partyInput);

    const dateLabel = document.createElement("label");
    dateLabel.textContent = "Pick a date: ";
    dateLabel.htmlFor = "rsvp-date";
    const dateInput = document.createElement("input");
    dateInput.type = "date";
    dateInput.id = "rsvp-date";
    rsvpForm.append(dateLabel);
    rsvpForm.append(dateInput);

    const timeLabel = document.createElement("label");
    timeLabel.textContent = "Time: ";
    timeLabel.htmlFor = "rsvp-time";
    const timeInput = document.createElement("input");
    timeInput.type = "time";
    timeInput.id = "rsvp-time";
    rsvpForm.append(timeLabel);
    rsvpForm.append(timeInput);

    const emailLabel = document.createElement("label");
    emailLabel.textContent = "Email: ";
    emailLabel.htmlFor = "rsvp-email";
    const emailInput = document.createElement("input");
    emailInput.type = "email";
    emailInput.id = "rsvp-email";
    rsvpForm.append(emailLabel);
    rsvpForm.append(emailInput);

    const phoneLabel = document.createElement("label");
    phoneLabel.textContent = "Phone number: ";
    phoneLabel.htmlFor = "rsvp-phone";
    const phoneInput = document.createElement("input");
    phoneInput.type = "tel";
    phoneInput.id = "rsvp-tphone";
    rsvpForm.append(phoneLabel);
    rsvpForm.append(phoneInput);
};