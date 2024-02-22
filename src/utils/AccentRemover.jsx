

export function AccentRemover(word) {
    return word.normalize("NFD").replace(/[^a-zA-Z\s]/g, "").replace(/\s+/g, '').toLowerCase();
}
