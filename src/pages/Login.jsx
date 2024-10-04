import '../App.scss'

export const Login = () => {
  return (
    <main className="loginMain">
        <section>
            <h2>Log ind</h2>
            <form>
                <label htmlFor="userName">Brugernavn:</label>
                <input id="userName" type="text" /><br />
                <label htmlFor="password">Password:</label>
                <input id="password" type="password" />
                <br />
                <button>Log ind</button>
            </form>
        </section>
    </main>
  )
}