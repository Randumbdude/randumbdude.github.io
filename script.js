const updates = [
{
    date: "June 18, 2026",
    text: "Started redesigning the website."
},
{
    date: "June 15, 2026",
    text: "Worked on AI experiments."
},
{
    date: "June 10, 2026",
    text: "Added CUDA support to a project."
}
];

const container = document.getElementById("updates");

updates.forEach(update =>
{
    const div = document.createElement("div");

    div.className = "update";

    div.innerHTML =
    `
        <strong>${update.date}</strong><br>
        ${update.text}
    `;

    container.appendChild(div);
});