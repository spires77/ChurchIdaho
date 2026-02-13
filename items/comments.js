let comments = [
    {
        name: "Test",
        text: "TEst"
    }
];

function comment1() {
    const nameValue = document.getElementById('mail').value;
    const textValue = document.getElementById('comment').value;

    comments.push({
        name: nameValue,
        text: textValue
    });

}
