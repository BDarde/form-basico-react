import styles from './Event.module.css'

function Event({ number }) {
    function send(e) {
        e.preventDefault()
        alert("Cadastrado com sucesso")

    }

    return (
        <div className={styles.container}>
            <h2>Formulário</h2>
            <form onSubmit={send}>
                <div className={styles.lbl}>
                    <label>Nome:   </label>
                    <input type="text" placeholder="Digite seu nome"></input>
                </div>

                <div className={styles.lbl2}>
                    <label>Telefone: </label>
                    <input type="text" placeholder="Digite seu telefone"></input>
                </div>

                <div className={styles.btn}>
                    <input type="submit"></input>
                </div>
            </form>
        </div>
    )
}

export default Event