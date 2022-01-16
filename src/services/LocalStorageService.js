export default class LocalStorageService {
    static read() {
        localStorage.getItem('notesapp-notes');
    }
    static write(data) {
        localStorage.setItem('notesapp-notes', JSON.stringify(data));
    }
}
