export class Crypto {
    private string: any;
    constructor(string) {
        this.string = string;
    }
    normalizePlaintext() {
        return this.string.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
    }
    size() {
        const length = this.normalizePlaintext().length;
        return Math.ceil(Math.sqrt(length));
    }
    plaintextSegments() {
        let segments = [];
        const str = this.normalizePlaintext();
        const size = this.size();
        for (let i = 0; i < str.length; i = i + size) {
            segments.push(str.substr(i, size));
        }
        return segments;
    }
    ciphertext() {
        let cipher = "";
        let segments = this.plaintextSegments().map((segment) => segment.split(""));
        for (let i = 0; i < segments[0].length; i++) {
            let row = "";
            segments.forEach((segment) => {
                row = row + (segment[i] ? segment[i] : "");
            });
            cipher = cipher + row;
        }
        return cipher;
    }
}
let c1 = new Crypto("this is fun");
console.log(c1.ciphertext());
