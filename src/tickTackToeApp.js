import { useEffect, useState } from "react"
import './styles.css'

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
        fontFamily: 'sans-serif'
    }
}





const TickTackToeApp = () => {
    const player1 = 'X'
    const player0 = 'O'

    //Sets the initial state of the board
    const [boardVal, setBoardVal] = useState([
        [{ value: '', position: [1, 1] }, { value: '', position: [1, 2] }, { value: '', position: [1, 3] }],
        [{ value: '', position: [2, 1] }, { value: '', position: [2, 2] }, { value: '', position: [2, 3] }],
        [{ value: '', position: [3, 1] }, { value: '', position: [3, 2] }, { value: '', position: [3, 3] }]
    ])

    const [lastPlayed, setLastPlayed] = useState(player0)
    const [playedPositions, setPlayedPositions] = useState([])


    const checkWon = () => {
        for (let i =0; i < boardVal.length; i++) {
            console.log(i)
            if(boardVal[i][0].value === boardVal[i][1].value && boardVal[i][1].value === boardVal[i][2].value && playedPositions.length > 4) {
                alert('Won');
                console.log('Won')
            }
            console.log('working')
        }
    }

    const onPlay = (position) => {
        if (!playedPositions.includes(position)) {
            if (lastPlayed === player0) {
                changeValue(position, player1);
                setLastPlayed(player1)
            }
            if (lastPlayed === player1) {
                changeValue(position, player0)
                setLastPlayed(player0)
            }
        }
    }

    useEffect(()=>{
        // setTimeout(() => {
        //     checkWon()
        // }, 1000);
    })

    const changeValue = (position, newVal) => {
        setBoardVal(prevBoardVal => (
            prevBoardVal.map(row => (
                row.map(val => {
                    if (val.position !== position) return val

                    if (val.canChange == undefined) {
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
            <table style={styles}>
                <tbody>
                    {
                        boardVal.map(row => (
                            <tr style={styles.tr}>
                                {row.map(val => (
                                    <td style={styles.td} id={val.position.join('').toString()} onClick={() => onPlay(val.position)}>{val.value}</td>
                                ))}
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default TickTackToeApp
