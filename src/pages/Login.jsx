import '../App.scss'

export const Login = () => {
  return (
    <main className="loginMain">
        <section>
            <div>
                <h2>Log ind</h2>
                <form>
                    <label htmlFor="userName">Brugernavn:</label>
                    <input id="userName" type="text" /><br />
                    <label htmlFor="password">Password:</label>
                    <input id="password" type="password" />
                    <br />
                    <input type="button" value="Log ind" />
                </form>
            </div>
        </section>
    </main>
  )
}