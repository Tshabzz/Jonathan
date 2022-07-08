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

    const [boardVal, setBoardVal] = useState([
        [{ value: '1', position: [1, 1] }, { value: '2', position: [1, 2] }, { value: '3', position: [1, 3] }],
        [{ value: '4', position: [2, 1] }, { value: '5', position: [2, 2] }, { value: '6', position: [2, 3] }],
        [{ value: '7', position: [3, 1] }, { value: '8', position: [3, 2] }, { value: '9', position: [3, 3] }]
    ])

    const [lastPlayed, setLastPlayed] = useState(player0)


    const onPlay = (position) => {
        if (lastPlayed === player0) {
            changeValue(position, player1);
            setLastPlayed(prevState => (player1))
        }
        if (lastPlayed === player1) {
            changeValue(position, player0)
            setLastPlayed(prevState => (player0))
        }
    }

    const changeValue = (position, newVal) => {
        setBoardVal(prevBoardVal => (
            prevBoardVal.map(row => (
                row.map(val => {
                    if (val.position !== position) return val

                    console.log(val.onChange)
                    if (val.canChange == undefined) return {
                        value: newVal,
                        position: position,
                        canChange: false
                    }
                    document.getElementById('11')

                    if (val.canChange === false) return val
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