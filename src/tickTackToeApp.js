
import { useEffect, useState, useReducer } from "react"


//syles for table
const styles = {
    margin: '0 auto',
    marginTop: '30px',
    border: '1px black solid',
    borderCollapse: 'collapse',
    tr: {
        border: '1px black solid'
    },
    td: {
        textAlign: 'center',
        width: '40px',
        height: '40px',
        border: '1px black solid',
        cursor: 'pointer',
        fontFamily: 'Roboto'
    }
}

const Td = (prop) => {

    useEffect(() => {
        console.log('checking')
        let won = () => prop.won()
        if (won) {
            prop.resetButton('block');
            prop.setCanPlay(false)
        } else {
            prop.resetButton('none');
        }
    }, [])

    return (
        <td style={styles.td} onClick={prop.canPlay ? () => prop.play(prop.cell.position) : null}>{prop.cell.value}</td>
    )

}

const TicTacToeApp = () => {
    //Set the value of Players (X, O) to display on board
    const player1 = 'X'
    const player0 = 'O'

    //""Sets the initial state of the board, Position shows the position of the value on the board
    //and can be used to index the value""
    const [boardVal, setBoardVal] = useState([
        [{ value: '', position: [1, 1] }, { value: '', position: [1, 2] }, { value: '', position: [1, 3] }],
        [{ value: '', position: [2, 1] }, { value: '', position: [2, 2] }, { value: '', position: [2, 3] }],
        [{ value: '', position: [3, 1] }, { value: '', position: [3, 2] }, { value: '', position: [3, 3] }]
    ])

    //Stores the lastPlayer on the state
    const [lastPlayed, setLastPlayed] = useState(player0)
    //Stores the playedPositions in the state so positions can't be repeated
    const [playedPositions, setPlayedPositions] = useState([])
    //Stores the Display property of the reset button, To be udpated when a player has won
    const [reset, setReset] = useState('none');
    //'''Stores a value of true or false in the state will be updated and use so player
    //wont play after a win. Defaults to true, and set to true when reset button is clicked'''
    const [canPlay, setCanPlay] = useState(true)

    //Checks if there is a win position with the posible wins, If there is it returns 'True'
    const checkWon = () => {
        if (playedPositions.length >= 5) {
            for (let i = 0; i < boardVal.length; i++) {
                console.log(i)
                if (boardVal[i][0].value === boardVal[i][1].value && boardVal[i][1].value === boardVal[i][2].value && playedPositions.length > 5) {
                    setTimeout(alert('Won'))
                    return true
                }
                if (boardVal[0][i].value === boardVal[1][i].value && boardVal[1][i].value === boardVal[2][i].value && playedPositions.length > 5) {
                    setTimeout(alert('Won'))
                    return true
                }

                if (boardVal[0][0].value === boardVal[1][1].value && boardVal[1][1].value === boardVal[2][2].value && playedPositions.length > 5) {
                    setTimeout(alert('Won'))
                    return true
                }
                if (boardVal[0][2].value === boardVal[1][1].value && boardVal[1][1].value === boardVal[2][0].value && playedPositions.length > 5) {
                    setTimeout(alert('Won'))
                    return true
                }
            }
        }
    }

    //Runs when the player clicks to play
    const onPlay = (position) => {
        //Checks if that position has been played by checking the state array of played positions
        if (!playedPositions.includes(position)) {
            //Checks for the last player, so to know the player who is expected to play
            if (lastPlayed === player0) {
                //Chenges the value of the board to that of the player
                changeValue(position, player1);
                //Updates last played
                setLastPlayed(player1)
            }
            if (lastPlayed === player1) {
                changeValue(position, player0)
                setLastPlayed(player0)
            }
        }
    }

    //Resets the values of the board to ''(Empty)
    const resetBoard = () => {
        //Map through the board (Runs a function on each value in the board)
        //and sets new value for the board
        setBoardVal(prevBoardVal => (
            prevBoardVal.map(row => (
                row.map(val => {
                    //returns the new value to be put in the state of the board
                    return {
                        value: '',
                        position: val.position,
                    }
                })
            ))
        ));
        //Empties the setPlayedPositions (Deletes all the past played
        // in the previous game from state)
        setPlayedPositions([]);
        //Resets the value of Canplay to true
        setCanPlay(true);
    }

    //Runs when
    // useEffect(() => {


    // }, [boardVal])

    const changeValue = (position, newVal) => {
        setBoardVal(prevBoardVal => (
            prevBoardVal.map(row => (
                row.map(val => {
                    console.log('Checking Positions')
                    if (val.position !== position) return val;

                    if (val.canChange === undefined) {
                        setPlayedPositions(prevPlayedPositions => ([...prevPlayedPositions, position]))
                        return {
                            value: newVal,
                            position: position,
                            canChange: false
                        }
                    }

                    if (!val.canChange) return val
                })
            ))
        ))
    }

    return (
        <div>
            <button style={{ display: reset }} onClick={() => resetBoard()}>Reset</button>
            <table style={styles}>
                <tbody>
                    {
                        boardVal.map((row, index) => (
                            <tr key={index} style={styles.tr}>
                                {row.map(val => (
                                    <Td won={checkWon} resetButton={setReset} setCanPlay={setCanPlay} key={val.position.join('').toString()} canPlay={canPlay} play={onPlay} cell={val} />
                                ))}
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}



export default TicTacToeApp
