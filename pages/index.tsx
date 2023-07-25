import Layout from '../components/Layout'
import Button from '../components/Button'
import ExtButton from '../components/ExtButton'

export default function Home() {
    return (
        <>
            <Layout
                title='Home'
                description='This is my personal website!'
            >
                <p>Welcome to my website! Here is where I am on the Internet:</p>
                <ExtButton href='https://sgertuuiop.tumblr.com' title='Tumblr' />
                <ExtButton href='https://mstdn.social/@sgertuuiop' title='mstdn.social' />
                <br />
                <p>And here are some other miscellaneous pages:</p>
                <ExtButton href='https://en.pronouns.page/@sgertuuiop' title='Pronouns.page' />
                <ExtButton href='https://abortionfunds.org/funds' title='Donate to an abortion fund' />
                <Button href='/copyright' title='Copyright information' />
            </Layout>
        </>
    )
}
