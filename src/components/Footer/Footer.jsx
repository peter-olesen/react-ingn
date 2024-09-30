import fs from './Footer.module.scss'

export const Footer = () => {
  return (
    <footer className={fs.footer}>
        <div className={fs.innerFooter}>
            <div>
                <h3>Adresse:</h3>
                <p>Intet nyt - Godt nyt ApS <br />
                    <br />
                    Tulipanvej 232 <br />
                    7320 <br />
                    Valby Øster
                </p>
            </div>
            <div>
                <h3>Links</h3>
                <p>vikanweb.dk</p>
                <p>overpådenandenside.dk</p>
                <p>retsinformation.dk</p>
                <p>nogetmednews.dk</p>
            </div>
            <div>
                <h3>Politik</h3>
                <p>Privatlivspolitik</p>
                <p>Cookiepolitik</p>
                <p>Købsinformation</p>
                <p>Delingspolitik</p>
            </div>
            <div>
                <h3>Kontakt</h3>
                <p>ingn@nyhed.dk</p>
                <p>teletfon: 23232323</p>
                <p>fax: 123123-333</p>
            </div>
        </div>
    </footer>
  )
}