function editElement(ref, match, replacer) {
    let content = ref.textContent;
    ref.textContent = content.replace(new RegExp(match, 'g'), replacer);

    // while (content.includes(match)) {
    //     content = content.replace(match, replacer);
// }
    // ref.textContent = content;
}