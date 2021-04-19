export const annotate = (input) => {
    const output = []
    for (let currentLineIndex = 0; currentLineIndex < input.length; currentLineIndex++) {
        const newLine = []
        for (let currentColumnIndex = 0; currentColumnIndex < input[currentLineIndex].length; currentColumnIndex++) {
            if (isMine(input, currentLineIndex, currentColumnIndex)) {
                newLine.push('*')
            } else {
                const numberOfMines = countAdjacentMines(input, currentLineIndex, currentColumnIndex)

                if (numberOfMines === 0) {
                    newLine.push(' ')
                } else {
                    newLine.push(numberOfMines)
                }
            }
        }
        output.push(newLine.join(''))
    }
    return output
};
const countAdjacentMines = (input, currentLineIndex, currentColumnIndex) => {
    let numberOfMines = 0

    for (let l = -1; l <= 1; l++) {
        for (let c = -1; c <= 1; c++) {
            let tmpLine = currentLineIndex + l
            let tmpColumn = currentColumnIndex + c

            if (isMine(input, tmpLine, tmpColumn)) {
                numberOfMines += 1
            }
        }
    }
    return numberOfMines
}
const isMine = (input, lineIndex, columnIndex) =>
    input[lineIndex] && input[lineIndex][columnIndex] === '*'

console.log(annotate([' *  * ', '  *   ', '    * ', '   * *', ' *  * ', '      ']))